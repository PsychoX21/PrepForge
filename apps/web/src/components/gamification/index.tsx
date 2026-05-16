"use client";

/**
 * Gamification UI components — XPBar, StreakBadge, LevelBadge
 */
import { motion } from "framer-motion";
import { Flame, Zap, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── XPBar ──────────────────────────────────────────────────────────────────

interface XPBarProps {
  currentXP: number;
  levelXP: number;
  nextLevelXP: number;
  level: number;
  className?: string;
}

export function XPBar({
  currentXP,
  levelXP,
  nextLevelXP,
  level,
  className,
}: XPBarProps) {
  const progress = Math.min(
    1,
    (currentXP - levelXP) / (nextLevelXP - levelXP)
  );

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-accent-blue font-medium">
          <Zap className="w-3 h-3" /> Level {level}
        </span>
        <span className="text-text-muted">
          {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP
        </span>
      </div>
      <div className="h-2.5 bg-bg-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full animate-glow-pulse"
        />
      </div>
    </div>
  );
}

// ─── StreakBadge ─────────────────────────────────────────────────────────────

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export function StreakBadge({ streak, className }: StreakBadgeProps) {
  const intensity =
    streak >= 30
      ? "from-red-500 to-orange-500"
      : streak >= 7
        ? "from-orange-500 to-yellow-500"
        : "from-yellow-500 to-amber-500";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl",
        "bg-gradient-to-r",
        intensity,
        "text-white text-sm font-bold shadow-lg",
        className
      )}
    >
      <Flame className="w-4 h-4" />
      <span>{streak}</span>
      <span className="text-white/70 text-xs font-normal">
        day{streak !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

// ─── LevelBadge ─────────────────────────────────────────────────────────────

const LEVEL_TITLES = [
  "Novice",
  "Apprentice",
  "Scholar",
  "Practitioner",
  "Journeyman",
  "Specialist",
  "Expert",
  "Master",
  "Grandmaster",
  "Sage",
  "Oracle",
  "Legend",
  "Mythic",
  "Transcendent",
  "Ascendant",
  "Immortal",
  "Celestial",
  "Omniscient",
  "Ethereal",
  "Godlike",
];

interface LevelBadgeProps {
  level: number;
  showTitle?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LevelBadge({
  level,
  showTitle = true,
  size = "md",
  className,
}: LevelBadgeProps) {
  const title = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  const sizes = {
    sm: "w-6 h-6 text-[10px]",
    md: "w-8 h-8 text-xs",
    lg: "w-12 h-12 text-sm",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          sizes[size],
          "rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple",
          "flex items-center justify-center font-bold text-white"
        )}
      >
        {level}
      </div>
      {showTitle && (
        <div>
          <p className="text-xs font-medium text-text-primary">{title}</p>
          <p className="text-[10px] text-text-muted">Level {level}</p>
        </div>
      )}
    </div>
  );
}

// ─── CompletionRing ─────────────────────────────────────────────────────────

interface CompletionRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CompletionRing({
  percentage,
  size = 48,
  strokeWidth = 4,
  color = "var(--accent-blue)",
  className,
  children,
}: CompletionRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--bg-elevated)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          strokeDasharray={circumference}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
