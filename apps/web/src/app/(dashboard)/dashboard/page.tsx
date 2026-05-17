"use client";

/**
 * Dashboard page — main overview showing tracks, stats, and activity.
 * All data fetched from backend via domain hooks.
 */
import { useMemo } from "react";
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
import { useUserStats, useHeatmap, useProgressSummary } from "@/hooks/useProgress";
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
    return Array.from({ length: 52 }, (_, week) =>
      Array.from({ length: 7 }, (_, day) => {
        const intensity = Math.abs(Math.sin(week * 13 + day * 7)) * 0.9 + 0.1;
        const level: 0 | 1 | 2 | 3 | 4 =
          intensity > 0.8 ? 4 : intensity > 0.5 ? 3 : intensity > 0.3 ? 2 : intensity > 0.1 ? 1 : 0;
        return { date: "", count: Math.floor(intensity * 15), level };
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
                  const total = track.totalItems ?? 0;
                  const done = track.completedItems ?? 0;
                  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                  return (
                    <motion.div key={track.id} variants={fadeUp}>
                      <Card variant="interactive" className="h-full group">
                        <CardContent className="flex flex-col gap-3">
                      {/* Icon + Name */}
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{meta.icon}</span>
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
                                style={{ color: meta.color }}
                              >
                                {pct}%
                              </span>
                            </div>
                            <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${pct}%`,
                                  backgroundColor: meta.color,
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
      <motion.div variants={fadeUp}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Activity Heatmap</CardTitle>
            <CardDescription>
              Your contribution history over the past year
            </CardDescription>
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
                          className={`w-[14px] h-[14px] rounded-[3px] ${heatmapColors[cell.level]} transition-colors hover:ring-1 hover:ring-white/30`}
                          title={cell.date ? `${cell.date}: ${cell.count} activities` : `${cell.count} activities`}
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
      </motion.div>
    </motion.div>
  );
}
