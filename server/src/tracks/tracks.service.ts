import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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

    // Attach progress counts per track
    return Promise.all(
      tracks.map(async (track) => {
        const allItems = await this.prisma.item.count({
          where: {
            subUnit: {
              unit: {
                resource: {
                  category: { trackId: track.id },
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
                    category: { trackId: track.id },
                  },
                },
              },
            },
          },
        });

        return {
          ...track,
          totalItems: allItems,
          completedItems: doneItems,
        };
      }),
    );
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
