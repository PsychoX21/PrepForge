import { Injectable, NotFoundException } from '@nestjs/common';
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

    // One query for all item counts across all tracks
    const itemCountsRaw = await this.prisma.$queryRaw<
      { trackId: string; count: bigint }[]
    >`
      SELECT c."trackId", COUNT(i.id) as count
      FROM "Item" i
      JOIN "SubUnit" s ON i."subUnitId" = s.id
      JOIN "Unit" u ON s."unitId" = u.id
      JOIN "Resource" r ON u."resourceId" = r.id
      JOIN "Category" c ON r."categoryId" = c.id
      WHERE c."trackId" IN (${Prisma.join(trackIds)})
      GROUP BY c."trackId"
    `;

    // One query for all done-item counts
    const doneCountsRaw = await this.prisma.$queryRaw<
      { trackId: string; count: bigint }[]
    >`
      SELECT c."trackId", COUNT(p.id) as count
      FROM "UserItemProgress" p
      JOIN "Item" i ON p."itemId" = i.id
      JOIN "SubUnit" s ON i."subUnitId" = s.id
      JOIN "Unit" u ON s."unitId" = u.id
      JOIN "Resource" r ON u."resourceId" = r.id
      JOIN "Category" c ON r."categoryId" = c.id
      WHERE c."trackId" IN (${Prisma.join(trackIds)})
      AND p."userId" = ${userId}
      AND p.status = 'DONE'
      GROUP BY c."trackId"
    `;

    const itemCountsMap = new Map(
      itemCountsRaw.map((r) => [r.trackId, Number(r.count)]),
    );
    const doneCountsMap = new Map(
      doneCountsRaw.map((r) => [r.trackId, Number(r.count)]),
    );

    return tracks.map((track) => ({
      ...track,
      totalItems: itemCountsMap.get(track.id) || 0,
      completedItems: doneCountsMap.get(track.id) || 0,
    }));
  }

  async getFullTree(trackId: string, userId: string) {
    const track = await this.prisma.track.findUnique({
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

    if (!track) throw new NotFoundException('Track not found');
    return track;
  }

  async getTrackSummary(trackId: string, userId: string) {
    const track = await this.prisma.track.findUnique({
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
    });

    if (!track) throw new NotFoundException('Track not found');

    const totalItems = await this.prisma.item.count({
      where: {
        subUnit: {
          unit: {
            resource: {
              category: { trackId },
            },
          },
        },
      },
    });

    const doneItems = await this.prisma.userItemProgress.count({
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
    });

    const starredItems = await this.prisma.userItemProgress.count({
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
    });

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
