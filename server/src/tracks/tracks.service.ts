import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TracksService {
  constructor(private readonly prisma: PrismaService) {}

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
    const track = await this.prisma.track.findUnique({
      where: { id: trackId },
    });
    if (!track) throw new NotFoundException('Track not found');

    const isMember = await this.prisma.groupMember.findUnique({
      where: {
        userId_groupId: { userId, groupId: track.groupId },
      },
    });
    if (!isMember) throw new ForbiddenException('Access denied');

    const fullTrack = await this.prisma.track.findUnique({
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
                          include: {
                            progress: {
                              where: { userId },
                              take: 1,
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
        },
      },
    });

    if (!fullTrack) throw new NotFoundException('Track not found');

    // Flatten item.progress array to single object
    const mappedCategories = (fullTrack.categories ?? []).map((cat) => ({
      ...cat,
      resources: (cat.resources ?? []).map((res) => ({
        ...res,
        units: (res.units ?? []).map((unit) => ({
          ...unit,
          subUnits: (unit.subUnits ?? []).map((sub) => ({
            ...sub,
            items: (sub.items ?? []).map((item) => ({
              ...item,
              progress: item.progress?.[0] ?? null,
            })),
          })),
        })),
      })),
    }));

    return {
      ...fullTrack,
      categories: mappedCategories,
    };
  }

  async getTrackSummary(trackId: string, userId: string) {
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

    const isMember = await this.prisma.groupMember.findUnique({
      where: {
        userId_groupId: { userId, groupId: track.groupId },
      },
    });
    if (!isMember) throw new ForbiddenException('Access denied');

    return {
      ...track,
      totalItems,
      completedItems: doneItems,
      starredItems,
      completionRate: totalItems > 0
        ? Math.round((doneItems / totalItems) * 100)
        : 0,
    };
  }
}
