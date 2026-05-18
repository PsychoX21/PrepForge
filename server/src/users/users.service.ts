import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseAdminService } from '../auth/firebase-admin.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly firebaseAdmin: FirebaseAdminService,
  ) {}

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
      },
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

    if (!user) {
      throw new NotFoundException('User not found');
    }

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

  async deleteAccount(userId: string) {
    // 1. Fetch user to get their firebaseUid before deleting the record
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { firebaseUid: true },
    });

    // 2. Perform DB deletion in transaction
    await this.prisma.$transaction(async (tx) => {
      // Find all groups owned by this user
      const ownedGroups = await tx.group.findMany({
        where: { createdById: userId },
        select: { id: true },
      });

      // Delete all owned groups (this will cascade delete tracks, members, etc.)
      if (ownedGroups.length > 0) {
        const groupIds = ownedGroups.map((g) => g.id);
        await tx.group.deleteMany({
          where: { id: { in: groupIds } },
        });
      }

      // Delete user (which cascades to memberships, progress, playlists, logs, notes)
      await tx.user.delete({
        where: { id: userId },
      });
    });

    // 3. Purge user from Firebase Auth using Admin SDK privilege (zero reauth restrictions!)
    if (user?.firebaseUid) {
      try {
        await this.firebaseAdmin.deleteUser(user.firebaseUid);
      } catch (err) {
        console.error(`Failed to delete Firebase Auth user server-side: ${(err as Error).message}`);
      }
    }

    return { success: true };
  }
}
