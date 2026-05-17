/**
 * XP system constants shared between client and server.
 */
export const XP_ACTIONS = {
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
} as const;

export const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 11000,
  15000, 20000, 27000, 35000, 45000, 60000, 80000, 100000, 130000, 170000,
] as const;

export const LEVEL_TITLES = [
  'Novice', 'Apprentice', 'Scholar', 'Practitioner', 'Journeyman',
  'Specialist', 'Expert', 'Master', 'Grandmaster', 'Sage',
  'Oracle', 'Legend', 'Mythic', 'Transcendent', 'Ascendant',
  'Immortal', 'Celestial', 'Omniscient', 'Ethereal', 'Godlike',
] as const;

export function calculateLevel(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

export function xpForNextLevel(currentLevel: number): number {
  if (currentLevel >= LEVEL_THRESHOLDS.length) return Infinity;
  return LEVEL_THRESHOLDS[currentLevel];
}

export function xpProgress(xp: number, level: number): number {
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] || currentThreshold * 2;
  const progress = (xp - currentThreshold) / (nextThreshold - currentThreshold);
  return Math.min(1, Math.max(0, progress));
}
