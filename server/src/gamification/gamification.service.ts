/**
 * Gamification engine.
 * Manages XP awards, level calculations, and streak tracking.
 */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { XP_ACTIONS, LEVEL_THRESHOLDS } from '../shared/xp';

// ─── XP Configuration ───────────────────────────────────────────────────────

const XP_TABLE: Record<string, number> = XP_ACTIONS;

@Injectable()
export class GamificationService {
  private readonly logger = new Logger(GamificationService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Award XP for multiple actions and check for level-ups.
   * Batches DB writes to prevent connection exhaustion.
   */
  async awardXP(userId: string, actions: string[], metadata?: string) {
    const totalXp = actions.reduce((sum, a) => sum + (XP_TABLE[a] || 0), 0);
    if (totalXp === 0) return;

    return await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: { id: userId },
        data: { xp: { increment: totalXp } },
      });

      const newLevel = this.calculateLevel(user.xp);
      if (newLevel > user.level) {
        await tx.user.update({
          where: { id: userId },
          data: { level: newLevel },
        });
        this.logger.log(`🎉 User ${userId} leveled up to ${newLevel}!`);
      }

      const validActions = actions.filter((a) => XP_TABLE[a]);
      if (validActions.length > 0) {
        await tx.activityLog.createMany({
          data: validActions.map((a) => ({
            userId,
            action: a,
            xpAwarded: XP_TABLE[a],
            metadata: metadata || null,
          })),
        });
      }

      return { xpAwarded: totalXp, totalXp: user.xp, level: newLevel };
    });
  }

  /**
   * Process daily login — update streak and award login XP.
   * Supports an optional localDate (YYYY-MM-DD) to account for client-side timezone day boundaries.
   */
  async processLogin(userId: string, localDate?: string) {
    const today = this.parseLocalDate(localDate);

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { lastActiveDate: true, streak: true, longestStreak: true },
    });

    if (!user) return;

    if (user.lastActiveDate === today) {
      return { streak: user.streak };
    }

    let newStreak: number;
    const yesterdayDate = new Date(today + 'T00:00:00Z');
    yesterdayDate.setUTCDate(yesterdayDate.getUTCDate() - 1);
    const yesterdayStr = yesterdayDate.toISOString().split('T')[0];

    if (user.lastActiveDate === yesterdayStr) {
      // Continuing streak
      newStreak = user.streak + 1;
    } else {
      // Streak broken (or first active day)
      newStreak = 1;
    }

    const longestStreak = Math.max(newStreak, user.longestStreak);

    // Use updateMany with check on lastActiveDate to make the update idempotent (thread-safe login)
    const updated = await this.prisma.user.updateMany({
      where: {
        id: userId,
        OR: [
          { lastActiveDate: null },
          { lastActiveDate: { not: today } },
        ],
      },
      data: {
        streak: newStreak,
        longestStreak,
        lastActiveDate: today,
      },
    });

    if (updated.count > 0) {
      const actionsToAward = ['DAILY_LOGIN'];

      // Check streak milestones
      if (newStreak === 7) actionsToAward.push('STREAK_BONUS_7');
      if (newStreak === 30) actionsToAward.push('STREAK_BONUS_30');
      if (newStreak === 100) actionsToAward.push('STREAK_BONUS_100');

      // Award all XP in one batch
      await this.awardXP(userId, actionsToAward);
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

  /**
   * Parse client date string safely to prevent backend RangeErrors from timezone formats.
   */
  private parseLocalDate(dateStr?: string): string {
    if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }
    if (dateStr) {
      const parsed = Date.parse(dateStr);
      if (!isNaN(parsed)) {
        const d = new Date(parsed);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    }
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
