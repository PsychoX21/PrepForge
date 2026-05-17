import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        memberships: {
          include: { group: { select: { id: true, name: true } } },
        },
      },
    });
  }

  async updateProfile(
    userId: string,
    data: { displayName?: string; photoUrl?: string },
  ) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getStats(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        xp: true,
        level: true,
        streak: true,
        longestStreak: true,
      },
    });

    const totalItems = await this.prisma.userItemProgress.count({
      where: { userId },
    });

    const completedItems = await this.prisma.userItemProgress.count({
      where: { userId, status: 'DONE' },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const completedToday = await this.prisma.userItemProgress.count({
      where: {
        userId,
        status: 'DONE',
        completedAt: { gte: today },
      },
    });

    return {
      ...user,
      totalItems,
      completedItems,
      completedToday,
      completionRate: totalItems > 0
        ? Math.round((completedItems / totalItems) * 100)
        : 0,
    };
  }

  async getHeatmap(userId: string, days = 365) {
    const since = new Date();
    since.setDate(since.getDate() - days);

      const activities = await this.prisma.activityLog.findMany({
      where: {
        userId,
        createdAt: { gte: since },
      },
      select: {
        createdAt: true,
      },
    });

    // Build day-level aggregation
    const heatmap: Record<string, number> = {};
    activities.forEach((a) => {
      const date = a.createdAt.toISOString().split('T')[0];
      heatmap[date] = (heatmap[date] || 0) + 1;
    });

    return Object.entries(heatmap).map(([date, count]) => ({
      date,
      count,
      level: count >= 10 ? 4 : count >= 6 ? 3 : count >= 3 ? 2 : count >= 1 ? 1 : 0,
    }));
  }
}
