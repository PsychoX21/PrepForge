"use client";

/**
 * Progress components — ProgressBar, ProgressCheckbox, ActivityHeatmap
 */
import { motion } from "framer-motion";
import { Check, Star, Clock, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── ProgressCheckbox ───────────────────────────────────────────────────────

type ItemStatus = "NOT_STARTED" | "IN_PROGRESS" | "DONE";

interface ProgressCheckboxProps {
  status: ItemStatus;
  onStatusChange: (status: ItemStatus) => void;
  size?: "sm" | "md";
  className?: string;
}

export function ProgressCheckbox({
  status,
  onStatusChange,
  size = "md",
  className,
}: ProgressCheckboxProps) {
  const nextStatus: Record<ItemStatus, ItemStatus> = {
    NOT_STARTED: "IN_PROGRESS",
    IN_PROGRESS: "DONE",
    DONE: "NOT_STARTED",
  };

  const sizes = { sm: "w-5 h-5", md: "w-6 h-6" };
  const iconSizes = { sm: "w-3 h-3", md: "w-3.5 h-3.5" };

  return (
    <button
      onClick={() => onStatusChange(nextStatus[status])}
      className={cn(
        sizes[size],
        "rounded-md border-2 flex items-center justify-center transition-all duration-200",
        status === "DONE" &&
          "bg-accent-green border-accent-green text-white",
        status === "IN_PROGRESS" &&
          "bg-accent-orange/20 border-accent-orange text-accent-orange",
        status === "NOT_STARTED" &&
          "bg-transparent border-border-default hover:border-border-hover",
        className
      )}
      aria-label={`Mark as ${nextStatus[status].toLowerCase().replace("_", " ")}`}
    >
      {status === "DONE" && <Check className={iconSizes[size]} />}
      {status === "IN_PROGRESS" && (
        <Circle className={cn(iconSizes[size], "fill-current")} />
      )}
    </button>
  );
}

// ─── StarButton ─────────────────────────────────────────────────────────────

interface StarButtonProps {
  isStarred: boolean;
  onToggle: () => void;
  className?: string;
}

export function StarButton({ isStarred, onToggle, className }: StarButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "p-1 rounded-md transition-colors",
        isStarred
          ? "text-yellow-400 hover:text-yellow-300"
          : "text-text-muted hover:text-yellow-400",
        className
      )}
      aria-label={isStarred ? "Unstar" : "Star"}
    >
      <Star
        className={cn("w-4 h-4", isStarred && "fill-current")}
      />
    </button>
  );
}

// ─── WatchLaterButton ───────────────────────────────────────────────────────

interface WatchLaterButtonProps {
  isQueued: boolean;
  onToggle: () => void;
  className?: string;
}

export function WatchLaterButton({
  isQueued,
  onToggle,
  className,
}: WatchLaterButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "p-1 rounded-md transition-colors",
        isQueued
          ? "text-accent-blue hover:text-accent-blue/80"
          : "text-text-muted hover:text-accent-blue",
        className
      )}
      aria-label={isQueued ? "Remove from watch later" : "Add to watch later"}
    >
      <Clock className={cn("w-4 h-4", isQueued && "fill-accent-blue/20")} />
    </button>
  );
}

// ─── ProgressBar ────────────────────────────────────────────────────────────

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  height?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
  label?: string;
}

export function ProgressBar({
  value,
  max = 100,
  color = "bg-accent-blue",
  height = "md",
  animated = true,
  className,
  label,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <div className="flex justify-between text-xs">
          <span className="text-text-muted">{label}</span>
          <span className="text-text-secondary font-medium">
            {Math.round(pct)}%
          </span>
        </div>
      )}
      <div
        className={cn(
          heights[height],
          "bg-bg-elevated rounded-full overflow-hidden"
        )}
      >
        {animated ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className={cn("h-full rounded-full", color)}
          />
        ) : (
          <div
            className={cn("h-full rounded-full transition-all", color)}
            style={{ width: `${pct}%` }}
          />
        )}
      </div>
    </div>
  );
}
