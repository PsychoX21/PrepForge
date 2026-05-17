import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class TracksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async findByGroup(groupId: string, userId: string) {
    const tracks = await this.prisma.track.findMany({
      where: { groupId },
      include: {
        categories: {
          include: {
            _count: { select: { resources: true } },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    });

    if (tracks.length === 0) return [];

    const trackIds = tracks.map((t) => t.id);

    // Query for category item counts
    const catItemCountsRaw = await this.prisma.$queryRaw<
      { categoryId: string; count: bigint }[]
    >`
      SELECT c.id as "categoryId", COUNT(i.id) as count
      FROM "items" i
      JOIN "sub_units" s ON i."sub_unit_id" = s.id
      JOIN "units" u ON s."unit_id" = u.id
      JOIN "resources" r ON u."resource_id" = r.id
      JOIN "categories" c ON r."category_id" = c.id
      WHERE c."track_id" IN (${Prisma.join(trackIds)})
      GROUP BY c.id
    `;

    // Query for category completed item counts
    const catDoneCountsRaw = await this.prisma.$queryRaw<
      { categoryId: string; count: bigint }[]
    >`
      SELECT c.id as "categoryId", COUNT(p.id) as count
      FROM "user_item_progress" p
      JOIN "items" i ON p."item_id" = i.id
      JOIN "sub_units" s ON i."sub_unit_id" = s.id
      JOIN "units" u ON s."unit_id" = u.id
      JOIN "resources" r ON u."resource_id" = r.id
      JOIN "categories" c ON r."category_id" = c.id
      WHERE c."track_id" IN (${Prisma.join(trackIds)})
      AND p."user_id" = ${userId}
      AND p.status = 'DONE'
      GROUP BY c.id
    `;

    const catItemCountsMap = new Map(
      catItemCountsRaw.map((r) => [r.categoryId, Number(r.count)]),
    );
    const catDoneCountsMap = new Map(
      catDoneCountsRaw.map((r) => [r.categoryId, Number(r.count)]),
    );

    return tracks.map((track) => {
      const categoriesWithProgress = (track.categories ?? []).map((cat) => {
        const totalItems = catItemCountsMap.get(cat.id) || 0;
        const completedItems = catDoneCountsMap.get(cat.id) || 0;
        return {
          ...cat,
          totalItems,
          completedItems,
        };
      });

      const totalItems = categoriesWithProgress.reduce((sum, c) => sum + c.totalItems, 0);
      const completedItems = categoriesWithProgress.reduce((sum, c) => sum + c.completedItems, 0);

      return {
        ...track,
        categories: categoriesWithProgress,
        totalItems,
        completedItems,
      };
    });
  }

  async getFullTree(trackId: string, userId: string) {
    const trackHeader = await this.prisma.track.findUnique({
      where: { id: trackId },
      select: { id: true, groupId: true },
    });

    if (!trackHeader) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: {
        userId_groupId: { userId, groupId: trackHeader.groupId },
      },
    });
    if (!isMember) throw new ForbiddenException('Access denied');

    // 1. Get or cache the static track tree (shared across all users in group)
    const staticCacheKey = `track:${trackId}:static`;
    let staticTree = await this.redis.get<any>(staticCacheKey);

    if (!staticTree) {
      staticTree = await this.prisma.track.findUnique({
        where: { id: trackId },
        include: {
          categories: {
            orderBy: { order: 'asc' },
            include: {
              resources: {
                orderBy: { order: 'asc' },
                include: {
                  units: {
                    orderBy: { order: 'asc' },
                    include: {
                      subUnits: {
                        orderBy: { order: 'asc' },
                        include: {
                          items: {
                            orderBy: { order: 'asc' },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!staticTree) throw new NotFoundException('Track not found');
      await this.redis.set(staticCacheKey, staticTree, 86400); // 24-hour cache for static content
    }

    // 2. Get or cache the user-specific progress overlay
    const progressCacheKey = `track:${trackId}:user:${userId}:progress`;
    let userProgressList = await this.redis.get<any[]>(progressCacheKey);

    if (!userProgressList) {
      userProgressList = await this.prisma.userItemProgress.findMany({
        where: {
          userId,
          item: {
            subUnit: {
              unit: {
                resource: {
                  category: {
                    trackId,
                  },
                },
              },
            },
          },
        },
        select: {
          itemId: true,
          status: true,
          completion: true,
          isStarred: true,
          isWatchLater: true,
          completedAt: true,
        },
      });
      await this.redis.set(progressCacheKey, userProgressList, 300); // 5-minute cache for user progress
    }

    const progressMap = new Map<string, any>();
    for (const p of userProgressList) {
      progressMap.set(p.itemId, p);
    }

    // 3. Overlay the user's progress onto the static tree
    const mappedCategories = (staticTree.categories ?? []).map((cat: any) => ({
      ...cat,
      resources: (cat.resources ?? []).map((res: any) => ({
        ...res,
        units: (res.units ?? []).map((unit: any) => ({
          ...unit,
          subUnits: (unit.subUnits ?? []).map((sub: any) => ({
            ...sub,
            items: (sub.items ?? []).map((item: any) => ({
              ...item,
              progress: progressMap.get(item.id) || null,
            })),
          })),
        })),
      })),
    }));

    return {
      ...staticTree,
      categories: mappedCategories,
    };
  }

  async getTrackSummary(trackId: string, userId: string) {
    const cacheKey = `track:${trackId}:user:${userId}:summary`;
    const cached = await this.redis.get<any>(cacheKey);
    if (cached) return cached;

    const trackHeader = await this.prisma.track.findUnique({
      where: { id: trackId },
      select: { id: true, groupId: true },
    });
    if (!trackHeader) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: {
        userId_groupId: { userId, groupId: trackHeader.groupId },
      },
    });
    if (!isMember) throw new ForbiddenException('Access denied');

    const [track, totalItems, doneItems, starredItems] = await this.prisma.$transaction([
      this.prisma.track.findUnique({
        where: { id: trackId },
        include: {
          categories: {
            include: {
              resources: {
                include: {
                  _count: {
                    select: { units: true },
                  },
                },
              },
            },
          },
        },
      }),
      this.prisma.item.count({
        where: {
          subUnit: {
            unit: {
              resource: {
                category: { trackId },
              },
            },
          },
        },
      }),
      this.prisma.userItemProgress.count({
        where: {
          userId,
          status: 'DONE',
          item: {
            subUnit: {
              unit: {
                resource: {
                  category: { trackId },
                },
              },
            },
          },
        },
      }),
      this.prisma.userItemProgress.count({
        where: {
          userId,
          isStarred: true,
          item: {
            subUnit: {
              unit: {
                resource: {
                  category: { trackId },
                },
              },
            },
          },
        },
      }),
    ]);

    if (!track) throw new NotFoundException('Track not found');

    const result = {
      ...track,
      totalItems,
      completedItems: doneItems,
      starredItems,
      completionRate: totalItems > 0
        ? Math.round((doneItems / totalItems) * 100)
        : 0,
    };

    await this.redis.set(cacheKey, result, 3600);
    return result;
  }

  // ─── Custom CRUD: Tracks ──────────────────────────────────────────────────

  async createTrack(userId: string, data: { groupId: string; name: string; description?: string; icon?: string; color?: string; order?: number }) {
    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: data.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const track = await this.prisma.track.create({
      data: {
        name: data.name,
        description: data.description || null,
        icon: data.icon || '📚',
        color: data.color || '#3b82f6',
        order: data.order || 0,
        groupId: data.groupId,
      },
    });

    await this.redis.invalidateTrackPatterns(track.id);
    return track;
  }

  async updateTrack(userId: string, trackId: string, data: { name?: string; description?: string; icon?: string; color?: string; order?: number }) {
    const track = await this.prisma.track.findUnique({ where: { id: trackId } });
    if (!track) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.track.update({
      where: { id: trackId },
      data,
    });

    await this.redis.invalidateTrackPatterns(trackId);
    return updated;
  }

  async deleteTrack(userId: string, trackId: string) {
    const track = await this.prisma.track.findUnique({ where: { id: trackId } });
    if (!track) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.track.delete({ where: { id: trackId } });

    await this.redis.invalidateTrackPatterns(trackId);
    return deleted;
  }

  // ─── Custom CRUD: Categories ──────────────────────────────────────────────

  async createCategory(userId: string, trackId: string, data: { name: string; description?: string; icon?: string; order?: number }) {
    const track = await this.prisma.track.findUnique({ where: { id: trackId } });
    if (!track) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const cat = await this.prisma.category.create({
      data: {
        name: data.name,
        description: data.description || null,
        icon: data.icon || '📚',
        order: data.order || 0,
        trackId,
      },
    });

    await this.redis.invalidateTrackPatterns(trackId);
    return cat;
  }

  async updateCategory(userId: string, catId: string, data: { name?: string; description?: string; icon?: string; order?: number }) {
    const cat = await this.prisma.category.findUnique({
      where: { id: catId },
      select: {
        trackId: true,
        track: { select: { groupId: true } },
      },
    });
    if (!cat) throw new NotFoundException('Category not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: cat.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.category.update({
      where: { id: catId },
      data,
    });

    await this.redis.invalidateTrackPatterns(cat.trackId);
    return updated;
  }

  async deleteCategory(userId: string, catId: string) {
    const cat = await this.prisma.category.findUnique({
      where: { id: catId },
      select: {
        trackId: true,
        track: { select: { groupId: true } },
      },
    });
    if (!cat) throw new NotFoundException('Category not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: cat.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.category.delete({ where: { id: catId } });

    await this.redis.invalidateTrackPatterns(cat.trackId);
    return deleted;
  }

  // ─── Custom CRUD: Resources ───────────────────────────────────────────────

  async createResource(userId: string, catId: string, data: { name: string; description?: string; type: string; url?: string; isMustDo?: boolean; order?: number }) {
    const cat = await this.prisma.category.findUnique({
      where: { id: catId },
      select: {
        trackId: true,
        track: { select: { groupId: true } },
      },
    });
    if (!cat) throw new NotFoundException('Category not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: cat.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const res = await this.prisma.resource.create({
      data: {
        name: data.name,
        description: data.description || null,
        type: data.type as any,
        url: data.url || null,
        isMustDo: data.isMustDo || false,
        order: data.order || 0,
        categoryId: catId,
      },
    });

    await this.redis.invalidateTrackPatterns(cat.trackId);
    return res;
  }

  async updateResource(userId: string, resId: string, data: { name?: string; description?: string; type?: string; url?: string; isMustDo?: boolean; order?: number }) {
    const res = await this.prisma.resource.findUnique({
      where: { id: resId },
      select: {
        category: {
          select: {
            trackId: true,
            track: { select: { groupId: true } },
          },
        },
      },
    });
    if (!res) throw new NotFoundException('Resource not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: res.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.resource.update({
      where: { id: resId },
      data: data as any,
    });

    await this.redis.invalidateTrackPatterns(res.category.trackId);
    return updated;
  }

  async deleteResource(userId: string, resId: string) {
    const res = await this.prisma.resource.findUnique({
      where: { id: resId },
      select: {
        category: {
          select: {
            trackId: true,
            track: { select: { groupId: true } },
          },
        },
      },
    });
    if (!res) throw new NotFoundException('Resource not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: res.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.resource.delete({ where: { id: resId } });

    await this.redis.invalidateTrackPatterns(res.category.trackId);
    return deleted;
  }

  // ─── Custom CRUD: Units ───────────────────────────────────────────────────

  async createUnit(userId: string, resId: string, data: { name: string; description?: string; order?: number }) {
    const res = await this.prisma.resource.findUnique({
      where: { id: resId },
      select: {
        category: {
          select: {
            trackId: true,
            track: { select: { groupId: true } },
          },
        },
      },
    });
    if (!res) throw new NotFoundException('Resource not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: res.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const unit = await this.prisma.unit.create({
      data: {
        name: data.name,
        description: data.description || null,
        order: data.order || 0,
        resourceId: resId,
      },
    });

    await this.redis.invalidateTrackPatterns(res.category.trackId);
    return unit;
  }

  async updateUnit(userId: string, unitId: string, data: { name?: string; description?: string; order?: number }) {
    const unit = await this.prisma.unit.findUnique({
      where: { id: unitId },
      select: {
        resource: {
          select: {
            category: {
              select: {
                trackId: true,
                track: { select: { groupId: true } },
              },
            },
          },
        },
      },
    });
    if (!unit) throw new NotFoundException('Unit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.unit.update({
      where: { id: unitId },
      data,
    });

    await this.redis.invalidateTrackPatterns(unit.resource.category.trackId);
    return updated;
  }

  async deleteUnit(userId: string, unitId: string) {
    const unit = await this.prisma.unit.findUnique({
      where: { id: unitId },
      select: {
        resource: {
          select: {
            category: {
              select: {
                trackId: true,
                track: { select: { groupId: true } },
              },
            },
          },
        },
      },
    });
    if (!unit) throw new NotFoundException('Unit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.unit.delete({ where: { id: unitId } });

    await this.redis.invalidateTrackPatterns(unit.resource.category.trackId);
    return deleted;
  }

  // ─── Custom CRUD: SubUnits ────────────────────────────────────────────────

  async createSubUnit(userId: string, unitId: string, data: { name: string; description?: string; order?: number }) {
    const unit = await this.prisma.unit.findUnique({
      where: { id: unitId },
      select: {
        resource: {
          select: {
            category: {
              select: {
                trackId: true,
                track: { select: { groupId: true } },
              },
            },
          },
        },
      },
    });
    if (!unit) throw new NotFoundException('Unit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const sub = await this.prisma.subUnit.create({
      data: {
        name: data.name,
        description: data.description || null,
        order: data.order || 0,
        unitId,
      },
    });

    await this.redis.invalidateTrackPatterns(unit.resource.category.trackId);
    return sub;
  }

  async updateSubUnit(userId: string, subId: string, data: { name?: string; description?: string; order?: number }) {
    const sub = await this.prisma.subUnit.findUnique({
      where: { id: subId },
      select: {
        unit: {
          select: {
            resource: {
              select: {
                category: {
                  select: {
                    trackId: true,
                    track: { select: { groupId: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!sub) throw new NotFoundException('SubUnit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: sub.unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.subUnit.update({
      where: { id: subId },
      data,
    });

    await this.redis.invalidateTrackPatterns(sub.unit.resource.category.trackId);
    return updated;
  }

  async deleteSubUnit(userId: string, subId: string) {
    const sub = await this.prisma.subUnit.findUnique({
      where: { id: subId },
      select: {
        unit: {
          select: {
            resource: {
              select: {
                category: {
                  select: {
                    trackId: true,
                    track: { select: { groupId: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!sub) throw new NotFoundException('SubUnit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: sub.unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.subUnit.delete({ where: { id: subId } });

    await this.redis.invalidateTrackPatterns(sub.unit.resource.category.trackId);
    return deleted;
  }

  // ─── Custom CRUD: Items ───────────────────────────────────────────────────

  async createItem(userId: string, subId: string, data: { name: string; description?: string; type: string; url?: string; difficulty?: string; order?: number }) {
    const sub = await this.prisma.subUnit.findUnique({
      where: { id: subId },
      select: {
        unit: {
          select: {
            resource: {
              select: {
                category: {
                  select: {
                    trackId: true,
                    track: { select: { groupId: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!sub) throw new NotFoundException('SubUnit not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: sub.unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const item = await this.prisma.item.create({
      data: {
        name: data.name,
        description: data.description || null,
        type: data.type as any,
        url: data.url || null,
        difficulty: (data.difficulty as any) || null,
        order: data.order || 0,
        subUnitId: subId,
      },
    });

    await this.redis.invalidateTrackPatterns(sub.unit.resource.category.trackId);
    return item;
  }

  async updateItem(userId: string, itemId: string, data: { name?: string; description?: string; type?: string; url?: string; difficulty?: string; order?: number }) {
    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
      select: {
        subUnit: {
          select: {
            unit: {
              select: {
                resource: {
                  select: {
                    category: {
                      select: {
                        trackId: true,
                        track: { select: { groupId: true } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!item) throw new NotFoundException('Item not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: item.subUnit.unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const updated = await this.prisma.item.update({
      where: { id: itemId },
      data: data as any,
    });

    await this.redis.invalidateTrackPatterns(item.subUnit.unit.resource.category.trackId);
    return updated;
  }

  async deleteItem(userId: string, itemId: string) {
    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
      select: {
        subUnit: {
          select: {
            unit: {
              select: {
                resource: {
                  select: {
                    category: {
                      select: {
                        trackId: true,
                        track: { select: { groupId: true } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!item) throw new NotFoundException('Item not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: { userId_groupId: { userId, groupId: item.subUnit.unit.resource.category.track.groupId } },
    });
    if (!isMember || !['OWNER', 'ADMIN'].includes(isMember.role)) {
      throw new ForbiddenException('Only admins can modify content');
    }

    const deleted = await this.prisma.item.delete({ where: { id: itemId } });

    await this.redis.invalidateTrackPatterns(item.subUnit.unit.resource.category.trackId);
    return deleted;
  }
}
