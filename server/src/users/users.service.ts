import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        displayName: true,
        photoUrl: true,
        xp: true,
        level: true,
        streak: true,
        longestStreak: true,
        lastActiveDate: true,
        createdAt: true,
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [user, totalItems, completedItems, completedToday] = await this.prisma.$transaction([
      this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          xp: true,
          level: true,
          streak: true,
          longestStreak: true,
        },
      }),
      this.prisma.userItemProgress.count({
        where: { userId },
      }),
      this.prisma.userItemProgress.count({
        where: { userId, status: 'DONE' },
      }),
      this.prisma.userItemProgress.count({
        where: {
          userId,
          status: 'DONE',
          completedAt: { gte: today },
        },
      }),
    ]);

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

    const rows = await this.prisma.$queryRaw<{ date: string; count: bigint }[]>`
      SELECT DATE("created_at" AT TIME ZONE 'UTC')::text as date, COUNT(*)::bigint as count
      FROM "activity_logs"
      WHERE "user_id" = ${userId}
        AND "created_at" >= ${since}
      GROUP BY DATE("created_at" AT TIME ZONE 'UTC')
      ORDER BY date
    `;

    return rows.map((r) => {
      const count = Number(r.count);
      return {
        date: r.date,
        count,
        level: count >= 10 ? 4 : count >= 6 ? 3 : count >= 3 ? 2 : count >= 1 ? 1 : 0,
      };
    });
  }

  async getActivities(userId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const threeSixtyFiveDaysAgo = new Date();
    threeSixtyFiveDaysAgo.setDate(threeSixtyFiveDaysAgo.getDate() - 365);

    const [logs, todayXp, weekXp, monthXp, yearXp] = await this.prisma.$transaction([
      this.prisma.activityLog.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
      this.prisma.activityLog.aggregate({
        where: { userId, createdAt: { gte: today } },
        _sum: { xpAwarded: true },
      }),
      this.prisma.activityLog.aggregate({
        where: { userId, createdAt: { gte: sevenDaysAgo } },
        _sum: { xpAwarded: true },
      }),
      this.prisma.activityLog.aggregate({
        where: { userId, createdAt: { gte: thirtyDaysAgo } },
        _sum: { xpAwarded: true },
      }),
      this.prisma.activityLog.aggregate({
        where: { userId, createdAt: { gte: threeSixtyFiveDaysAgo } },
        _sum: { xpAwarded: true },
      }),
    ]);

    return {
      logs,
      totals: {
        day: todayXp._sum.xpAwarded ?? 0,
        week: weekXp._sum.xpAwarded ?? 0,
        month: monthXp._sum.xpAwarded ?? 0,
        year: yearXp._sum.xpAwarded ?? 0,
      },
    };
  }
}
