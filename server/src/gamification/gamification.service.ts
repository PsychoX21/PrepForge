/**
 * Gamification engine.
 * Manages XP awards, level calculations, and streak tracking.
 */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// ─── XP Configuration ───────────────────────────────────────────────────────

const XP_TABLE: Record<string, number> = {
  MARK_ITEM_DONE: 10,
  MARK_SUBUNIT_DONE: 25,
  MARK_UNIT_DONE: 50,
  MARK_RESOURCE_DONE: 100,
  ADD_COMMENT: 5,
  ADD_NOTE: 5,
  SHARE_PUBLIC_NOTE: 15,
  DAILY_LOGIN: 10,
  STREAK_BONUS_7: 50,
  STREAK_BONUS_30: 200,
  STREAK_BONUS_100: 500,
};

const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 11000, 15000, 20000,
  27000, 35000, 45000, 60000, 80000, 100000, 130000, 170000,
];

@Injectable()
export class GamificationService {
  private readonly logger = new Logger(GamificationService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Award XP for an action and check for level-ups.
   * Also logs the activity for heatmap tracking.
   */
  async awardXP(userId: string, action: string) {
    const xpAmount = XP_TABLE[action] || 0;
    if (xpAmount === 0) return;

    // Update user XP
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { xp: { increment: xpAmount } },
    });

    // Check for level-up
    const newLevel = this.calculateLevel(user.xp);
    if (newLevel > user.level) {
      await this.prisma.user.update({
        where: { id: userId },
        data: { level: newLevel },
      });
      this.logger.log(`🎉 User ${userId} leveled up to ${newLevel}!`);
    }

    // Log activity
    await this.prisma.activityLog.create({
      data: {
        userId,
        action,
        xpAwarded: xpAmount,
      },
    });

    return { xpAwarded: xpAmount, totalXp: user.xp, level: newLevel };
  }

  /**
   * Process daily login — update streak and award login XP.
   */
  async processLogin(userId: string) {
    const today = new Date().toISOString().split('T')[0];

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { lastActiveDate: true, streak: true, longestStreak: true },
    });

    if (!user) return;

    let newStreak = user.streak;

    if (user.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (user.lastActiveDate === yesterdayStr) {
        // Continuing streak
        newStreak = user.streak + 1;
      } else if (user.lastActiveDate !== today) {
        // Streak broken
        newStreak = 1;
      }

      const longestStreak = Math.max(newStreak, user.longestStreak);

      await this.prisma.user.update({
        where: { id: userId },
        data: {
          streak: newStreak,
          longestStreak,
          lastActiveDate: today,
        },
      });

      // Award daily login XP
      await this.awardXP(userId, 'DAILY_LOGIN');

      // Check streak milestones
      if (newStreak === 7) await this.awardXP(userId, 'STREAK_BONUS_7');
      if (newStreak === 30) await this.awardXP(userId, 'STREAK_BONUS_30');
      if (newStreak === 100) await this.awardXP(userId, 'STREAK_BONUS_100');
    }

    return { streak: newStreak };
  }

  /**
   * Calculate level from total XP.
   */
  private calculateLevel(xp: number): number {
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
      if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
    }
    return 1;
  }

  /**
   * Get XP needed for next level.
   */
  getNextLevelXP(currentLevel: number): number {
    if (currentLevel >= LEVEL_THRESHOLDS.length) {
      return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] * 2;
    }
    return LEVEL_THRESHOLDS[currentLevel]; // next threshold
  }
}
