import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GamificationService } from '../gamification/gamification.service';
import { ProgressStatus } from '@prisma/client';

@Injectable()
export class ProgressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gamification: GamificationService,
  ) {}

  async updateProgress(
    userId: string,
    itemId: string,
    data: {
      status?: ProgressStatus;
      isStarred?: boolean;
      isWatchLater?: boolean;
      completion?: number;
    },
  ) {
    const progress = await this.prisma.userItemProgress.upsert({
      where: {
        userId_itemId: { userId, itemId },
      },
      update: {
        ...data,
        completedAt:
          data.status === 'DONE' ? new Date() : undefined,
      },
      create: {
        userId,
        itemId,
        status: data.status || 'NOT_STARTED',
        isStarred: data.isStarred || false,
        isWatchLater: data.isWatchLater || false,
        completion: data.completion || 0,
        completedAt:
          data.status === 'DONE' ? new Date() : undefined,
      },
    });

    // Award XP if item was just marked done
    if (data.status === 'DONE') {
      await this.gamification.awardXP(userId, ['MARK_ITEM_DONE']);
    }

    return progress;
  }

  async getSummary(userId: string, groupId?: string) {
    const whereClause = groupId
      ? {
          userId,
          item: {
            subUnit: {
              unit: {
                resource: {
                  category: {
                    track: { groupId },
                  },
                },
              },
            },
          },
        }
      : { userId };

    const total = await this.prisma.userItemProgress.count({
      where: whereClause,
    });

    const done = await this.prisma.userItemProgress.count({
      where: { ...whereClause, status: 'DONE' },
    });

    const inProgress = await this.prisma.userItemProgress.count({
      where: { ...whereClause, status: 'IN_PROGRESS' },
    });

    const starred = await this.prisma.userItemProgress.count({
      where: { ...whereClause, isStarred: true },
    });

    return { total, done, inProgress, starred };
  }

  async getStarred(userId: string) {
    return this.prisma.userItemProgress.findMany({
      where: { userId, isStarred: true },
      include: {
        item: {
          include: {
            subUnit: {
              include: {
                unit: {
                  include: {
                    resource: {
                      include: {
                        category: {
                          include: { track: { select: { name: true, color: true } } },
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
      orderBy: { updatedAt: 'desc' },
    });
  }

  async getWatchLater(userId: string) {
    return this.prisma.userItemProgress.findMany({
      where: { userId, isWatchLater: true },
      include: {
        item: {
          include: {
            subUnit: {
              include: {
                unit: {
                  include: {
                    resource: { select: { name: true, type: true } },
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });
  }
}
