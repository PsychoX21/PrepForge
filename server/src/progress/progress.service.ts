import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GamificationService } from '../gamification/gamification.service';
import { ProgressStatus } from '@prisma/client';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class ProgressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gamification: GamificationService,
    private readonly redis: RedisService,
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
    // Check existing progress status to prevent XP double-award
    const existing = await this.prisma.userItemProgress.findUnique({
      where: {
        userId_itemId: { userId, itemId },
      },
      select: { status: true },
    });
    const wasAlreadyDone = existing?.status === 'DONE';

    const progress = await this.prisma.userItemProgress.upsert({
      where: {
        userId_itemId: { userId, itemId },
      },
      update: {
        ...data,
        completedAt:
          data.status === 'DONE'
            ? new Date()
            : data.status !== undefined
            ? null
            : undefined,
      },
      create: {
        userId,
        itemId,
        status: data.status || 'NOT_STARTED',
        isStarred: data.isStarred || false,
        isWatchLater: data.isWatchLater || false,
        completion: data.completion || 0,
        completedAt:
          data.status === 'DONE' ? new Date() : null,
      },
    });

    // Award XP if item is transitionally marked done
    if (data.status === 'DONE' && !wasAlreadyDone) {
      await this.gamification.awardXP(userId, ['MARK_ITEM_DONE']);
    }

    // Invalidate cached track trees and summary stats
    await this.redis.invalidateUserPatterns(userId);

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
    const progressList = await this.prisma.userItemProgress.findMany({
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
    return progressList.map((p) => ({
      ...p.item,
      isStarred: p.isStarred,
      isWatchLater: p.isWatchLater,
      status: p.status,
    }));
  }

  async getWatchLater(userId: string) {
    const progressList = await this.prisma.userItemProgress.findMany({
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
    return progressList.map((p) => ({
      ...p.item,
      isStarred: p.isStarred,
      isWatchLater: p.isWatchLater,
      status: p.status,
    }));
  }

  async getPlaylists(userId: string) {
    return this.prisma.playlist.findMany({
      where: { userId },
      include: {
        items: {
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
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createPlaylist(userId: string, name: string, description?: string) {
    return this.prisma.playlist.create({
      data: {
        userId,
        name,
        description,
      },
    });
  }

  async deletePlaylist(userId: string, playlistId: string) {
    const playlist = await this.prisma.playlist.findFirst({
      where: { id: playlistId, userId },
    });
    if (!playlist) throw new Error("Playlist not found or access denied");

    return this.prisma.playlist.delete({
      where: { id: playlistId },
    });
  }

  async addToPlaylist(userId: string, playlistId: string, itemId: string) {
    const playlist = await this.prisma.playlist.findFirst({
      where: { id: playlistId, userId },
    });
    if (!playlist) throw new Error("Playlist not found or access denied");

    return this.prisma.playlistItem.upsert({
      where: {
        playlistId_itemId: { playlistId, itemId },
      },
      update: {},
      create: {
        playlistId,
        itemId,
      },
    });
  }

  async removeFromPlaylist(userId: string, playlistId: string, itemId: string) {
    const playlist = await this.prisma.playlist.findFirst({
      where: { id: playlistId, userId },
    });
    if (!playlist) throw new Error("Playlist not found or access denied");

    return this.prisma.playlistItem.delete({
      where: {
        playlistId_itemId: { playlistId, itemId },
      },
    });
  }
}
