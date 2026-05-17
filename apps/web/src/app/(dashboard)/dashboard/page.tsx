"use client";

/**
 * Dashboard page — main overview showing tracks, stats, and activity.
 * All data fetched from backend via domain hooks.
 */
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Target,
  TrendingUp,
  Zap,
  Clock,
  CheckCircle2,
  BookOpen,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useUserStats, useHeatmap, useProgressSummary, useUserActivities } from "@/hooks/useProgress";
import { useTracks } from "@/hooks/useTracks";
import { useAuthStore } from "@/stores/authStore";


// ─── Track icon/color lookup (matches seed data) ─────────────────────────────
const TRACK_META: Record<string, { icon: string; color: string }> = {
  "Quantitative Trader/Researcher": { icon: "📊", color: "#a78bfa" },
  "Software Engineer":              { icon: "💻", color: "#58a6ff" },
  "Resume & General Prep":          { icon: "📝", color: "#34d399" },
};

// ─── Animation ──────────────────────────────────────────────────────────────
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ─── Skeleton ────────────────────────────────────────────────────────────────
function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-bg-elevated rounded-lg ${className}`} />
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const { user } = useAuthStore();

  // Default group is the first group the user is a member of.
  // We use the seeded default group id until multi-group selection is built.
  const defaultGroupId = user?.memberships?.[0]?.groupId ?? null;

  const { data: stats, isLoading: statsLoading } = useUserStats();
  const { data: heatmapData, isLoading: heatmapLoading } = useHeatmap();
  const { data: summary, isLoading: summaryLoading } = useProgressSummary();
  const { data: tracks, isLoading: tracksLoading } = useTracks(defaultGroupId);
  const { data: activityData } = useUserActivities();
  const [activeCell, setActiveCell] = useState<{ date: string; count: number } | null>(null);

  const completionPct = useMemo(() => {
    if (!summary || summary.total === 0) return 0;
    return Math.round((summary.done / summary.total) * 100);
  }, [summary]);

  // Heatmap: build a 52×7 grid from API data (or deterministic placeholder)
  const HEATMAP_GRID = useMemo(() => {
    if (heatmapData && heatmapData.length > 0) {
      // Build date → entry map from API data
      const byDate = new Map(heatmapData.map((e) => [e.date, e]));
      const today = new Date();
      return Array.from({ length: 52 }, (_, week) =>
        Array.from({ length: 7 }, (_, day) => {
          const d = new Date(today);
          d.setDate(d.getDate() - ((51 - week) * 7 + (6 - day)));
          const key = d.toISOString().split("T")[0];
          return byDate.get(key) ?? { date: key, count: 0, level: 0 as const };
        })
      );
    }
    // Deterministic placeholder (no Math.random → no hydration mismatch)
    const today = new Date();
    return Array.from({ length: 52 }, (_, week) =>
      Array.from({ length: 7 }, (_, day) => {
        const d = new Date(today);
        d.setDate(d.getDate() - ((51 - week) * 7 + (6 - day)));
        const key = d.toISOString().split("T")[0];
        const intensity = Math.abs(Math.sin(week * 13 + day * 7)) * 0.9 + 0.1;
        const level: 0 | 1 | 2 | 3 | 4 =
          intensity > 0.8 ? 4 : intensity > 0.5 ? 3 : intensity > 0.3 ? 2 : intensity > 0.1 ? 1 : 0;
        return { date: key, count: Math.floor(intensity * 15), level };
      })
    );
  }, [heatmapData]);

  const heatmapColors = [
    "bg-bg-elevated",
    "bg-accent-blue/20",
    "bg-accent-blue/40",
    "bg-accent-blue/60",
    "bg-accent-blue/80",
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* ─── Stats Row ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Skeleton className="h-[88px]" />
              </motion.div>
            ))
          : [
              {
                label: "Total XP",
                value: (stats?.xp ?? 0).toLocaleString(),
                icon: Zap,
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
              {
                label: "Level",
                value: stats?.level ?? 1,
                icon: TrendingUp,
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                label: "Day Streak",
                value: `${stats?.streak ?? 0} 🔥`,
                icon: Flame,
                color: "text-accent-orange",
                bg: "bg-accent-orange/10",
              },
              {
                label: "Completed Today",
                value: stats?.completedToday ?? 0,
                icon: Target,
                color: "text-accent-green",
                bg: "bg-accent-green/10",
              },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Card variant="glass" className="h-full">
                  <CardContent className="flex items-center gap-4 py-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-text-primary font-[var(--font-outfit)]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-muted">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
      </div>

      {/* ─── Overall Progress Bar ────────────────────────────────── */}
      <motion.div variants={fadeUp}>
        <Card variant="glow">
          <CardContent className="py-5">
            {summaryLoading ? (
              <Skeleton className="h-12" />
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Overall Progress
                    </p>
                    <p className="text-xs text-text-muted">
                      {summary?.done ?? 0} of {summary?.total ?? 0} items completed
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-accent-blue font-[var(--font-outfit)]">
                    {completionPct}%
                  </span>
                </div>
                <div className="h-3 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPct}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full animate-glow-pulse"
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* ─── Tracks + Recent Activity ────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Track Cards */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-semibold text-text-primary font-[var(--font-outfit)]">
            Your Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracksLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-[160px]" />
                ))
              : (tracks ?? []).map((track) => {
                  const meta = TRACK_META[track.name] ?? { icon: "📚", color: "#58a6ff" };
                  const trackIcon = track.icon || meta.icon;
                  const trackColor = track.color || meta.color;
                  const total = track.totalItems ?? 0;
                  const done = track.completedItems ?? 0;
                  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                  return (
                    <motion.div key={track.id} variants={fadeUp}>
                      <Card variant="interactive" className="h-full group">
                        <CardContent className="flex flex-col gap-3">
                      {/* Icon + Name */}
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{trackIcon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-text-primary truncate">
                                {track.name}
                              </p>
                              <p className="text-xs text-text-muted">
                                {track.categories?.length ?? 0} categories
                              </p>
                            </div>
                          </div>

                      {/* Progress */}
                          <div>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-text-muted">
                                {done}/{total}
                              </span>
                              <span
                                className="font-medium"
                                style={{ color: trackColor }}
                              >
                                {pct}%
                              </span>
                            </div>
                            <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${pct}%`,
                                  backgroundColor: trackColor,
                                }}
                              />
                            </div>
                          </div>

                      {/* Action */}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full mt-1 text-xs"
                            asChild
                          >
                            <Link href={`/tracks/${track.id}`}>
                              <BookOpen className="w-3.5 h-3.5" />
                              Continue
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
          </div>
        </div>

        {/* Quick Links (recent activity will be live once progress history API is ready) */}
        <div className="space-y-4">
          <h2 className="text-base font-semibold text-text-primary font-[var(--font-outfit)]">
            Quick Stats
          </h2>
          <Card variant="glass" className="h-fit">
            <CardContent className="py-4 space-y-3">
              {summaryLoading ? (
                <Skeleton className="h-24" />
              ) : (
                <>
                  {[
                    { label: "Items Done", value: summary?.done ?? 0, icon: CheckCircle2, color: "text-accent-green" },
                    { label: "In Progress", value: summary?.inProgress ?? 0, icon: Clock, color: "text-accent-orange" },
                    { label: "Starred", value: summary?.starred ?? 0, icon: Zap, color: "text-yellow-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 py-1.5 border-b border-border-default/30 last:border-0">
                      <row.icon className={`w-4 h-4 ${row.color} flex-shrink-0`} />
                      <span className="text-sm text-text-primary flex-1">{row.label}</span>
                      <span className="text-sm font-bold text-text-primary">{row.value}</span>
                    </div>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
          <Button variant="secondary" size="sm" className="w-full" asChild>
            <Link href="/tracks">View All Tracks</Link>
          </Button>
          <Button variant="ghost" size="sm" className="w-full" asChild>
            <Link href="/starred">⭐ Starred Items</Link>
          </Button>
        </div>
      </div>

      {/* ─── Heatmap ──────────────────────────────────────────────── */}
      <motion.div variants={fadeUp} className="space-y-6">
        <Card variant="default">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Activity Heatmap</CardTitle>
                <CardDescription>
                  Your contribution history over the past year
                </CardDescription>
              </div>
              {/* Dynamic Interactive Cell Display */}
              <div className="text-xs font-medium text-text-muted bg-bg-elevated px-3 py-1.5 rounded-xl border border-border-default/40">
                {activeCell ? (
                  <span>
                    📅 <span className="text-text-primary font-semibold">{activeCell.date}</span> —{" "}
                    <span className="text-accent-blue font-bold">{activeCell.count} activities</span> completed
                  </span>
                ) : (
                  <span>Hover or click a square to inspect details</span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {heatmapLoading ? (
              <div className="flex items-center justify-center h-20 gap-2 text-text-muted text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading activity...
              </div>
            ) : (
              <>
                <div className="grid grid-flow-col auto-cols-[14px] gap-[3px] overflow-x-auto pb-2 no-scrollbar">
                  {HEATMAP_GRID.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[3px]">
                      {week.map((cell, dayIdx) => (
                        <div
                          key={dayIdx}
                          onMouseEnter={() => setActiveCell(cell)}
                          onClick={() => setActiveCell(cell)}
                          className={`w-[14px] h-[14px] rounded-[3px] ${heatmapColors[cell.level]} transition-colors hover:ring-1 hover:ring-white/30 cursor-pointer`}
                          title={`${cell.date}: ${cell.count} activities`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-1.5 mt-3 text-xs text-text-muted">
                  <span>Less</span>
                  {heatmapColors.map((c, i) => (
                    <div key={i} className={`w-[14px] h-[14px] rounded-[3px] ${c}`} />
                  ))}
                  <span>More</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* ─── XP Breakdown & Activity Log ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* XP Breakdown by Period */}
          <Card variant="glass" className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-bold font-[var(--font-outfit)]">XP Breakdown</CardTitle>
              <CardDescription>Aggregate preparation XP by period</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Today", value: activityData?.totals?.day ?? 0, color: "text-accent-blue" },
                { label: "This Week", value: activityData?.totals?.week ?? 0, color: "text-accent-purple" },
                { label: "This Month", value: activityData?.totals?.month ?? 0, color: "text-accent-green" },
                { label: "This Year", value: activityData?.totals?.year ?? 0, color: "text-yellow-400" },
              ].map((period, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-bg-elevated/40 border border-border-default/20 rounded-xl">
                  <span className="text-xs text-text-secondary font-medium">{period.label}</span>
                  <span className={`text-sm font-bold ${period.color}`}>+{period.value} XP</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activity Log Feed */}
          <Card variant="glass" className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base font-bold font-[var(--font-outfit)]">Latest Activities</CardTitle>
              <CardDescription>Recent actions that awarded XP</CardDescription>
            </CardHeader>
            <CardContent>
              {activityData?.logs && activityData.logs.length > 0 ? (
                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1 no-scrollbar">
                  {activityData.logs.map((log) => {
                    const label =
                      {
                        MARK_ITEM_DONE: "Completed a Study Item",
                        MARK_SUBUNIT_DONE: "Finished a Topic Subunit",
                        MARK_UNIT_DONE: "Mastered a Chapter Unit",
                        MARK_RESOURCE_DONE: "Completed a Whole Resource",
                        ADD_COMMENT: "Contributed to Discussion",
                        ADD_NOTE: "Saved a Personal Study Note",
                        SHARE_PUBLIC_NOTE: "Shared a Resource Note",
                        DAILY_LOGIN: "Daily Check-in Streak Active",
                        STREAK_BONUS_7: "7-Day Consistent Prep Bonus",
                        STREAK_BONUS_30: "30-Day Hardcore Prep Bonus",
                        STREAK_BONUS_100: "100-Day Centurion Prep Bonus",
                      }[log.action] || "Activity Completed";

                    return (
                      <div key={log.id} className="flex items-center justify-between p-2.5 bg-bg-elevated/20 hover:bg-bg-elevated/40 border border-border-default/10 rounded-xl transition-all">
                        <div className="space-y-0.5">
                          <p className="text-xs font-semibold text-text-primary">{label}</p>
                          <p className="text-[10px] text-text-muted">
                            {new Date(log.createdAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-lg">
                          +{log.xpAwarded} XP
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-text-muted text-xs text-center space-y-2">
                  <span>No recent activity found.</span>
                  <span className="text-[10px]">Complete study items or check in daily to start earning XP!</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
