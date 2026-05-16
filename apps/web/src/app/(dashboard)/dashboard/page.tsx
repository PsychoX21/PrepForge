"use client";

/**
 * Dashboard page — main overview showing tracks, stats, and activity.
 */
import { motion } from "framer-motion";
import {
  Flame,
  Target,
  TrendingUp,
  Zap,
  Star,
  Clock,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ─── Mock Data (will be replaced by API calls) ─────────────────────────────

const MOCK_STATS = {
  xp: 2450,
  level: 5,
  streak: 12,
  completedToday: 8,
  totalCompleted: 142,
  totalItems: 500,
};

const MOCK_TRACKS = [
  {
    id: "1",
    name: "Quantitative Trader/Researcher",
    icon: "📊",
    color: "#a78bfa",
    completed: 45,
    total: 180,
    categories: 5,
  },
  {
    id: "2",
    name: "Software Engineer",
    icon: "💻",
    color: "#58a6ff",
    completed: 78,
    total: 250,
    categories: 4,
  },
  {
    id: "3",
    name: "Resume & General Prep",
    icon: "📝",
    color: "#34d399",
    completed: 19,
    total: 70,
    categories: 3,
  },
];

const MOCK_RECENT = [
  { name: "CSES — Dice Combinations", track: "SWE", time: "2m ago", status: "done" },
  { name: "Brainstellar — Monty Hall", track: "Quant", time: "15m ago", status: "done" },
  { name: "LearnCpp — Move Semantics", track: "SWE", time: "1h ago", status: "in_progress" },
  { name: "Green Book — Problem 24", track: "Quant", time: "2h ago", status: "done" },
  { name: "Resume Section Guide", track: "General", time: "3h ago", status: "done" },
];

// ─── Animation ──────────────────────────────────────────────────────────────

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ─── Page ───────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const completionPct = Math.round(
    (MOCK_STATS.totalCompleted / MOCK_STATS.totalItems) * 100
  );

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* ─── Stats Row ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total XP",
            value: MOCK_STATS.xp.toLocaleString(),
            icon: Zap,
            color: "text-accent-blue",
            bg: "bg-accent-blue/10",
          },
          {
            label: "Level",
            value: MOCK_STATS.level,
            icon: TrendingUp,
            color: "text-accent-purple",
            bg: "bg-accent-purple/10",
          },
          {
            label: "Day Streak",
            value: `${MOCK_STATS.streak} 🔥`,
            icon: Flame,
            color: "text-accent-orange",
            bg: "bg-accent-orange/10",
          },
          {
            label: "Completed Today",
            value: MOCK_STATS.completedToday,
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
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Overall Progress
                </p>
                <p className="text-xs text-text-muted">
                  {MOCK_STATS.totalCompleted} of {MOCK_STATS.totalItems} items
                  completed
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
            {MOCK_TRACKS.map((track) => {
              const pct = Math.round((track.completed / track.total) * 100);
              return (
                <motion.div key={track.id} variants={fadeUp}>
                  <Card variant="interactive" className="h-full group">
                    <CardContent className="flex flex-col gap-3">
                      {/* Icon + Name */}
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{track.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary truncate">
                            {track.name}
                          </p>
                          <p className="text-xs text-text-muted">
                            {track.categories} categories
                          </p>
                        </div>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-text-muted">
                            {track.completed}/{track.total}
                          </span>
                          <span
                            className="font-medium"
                            style={{ color: track.color }}
                          >
                            {pct}%
                          </span>
                        </div>
                        <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: track.color,
                            }}
                          />
                        </div>
                      </div>

                      {/* Action */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full mt-1 text-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Continue
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-base font-semibold text-text-primary font-[var(--font-outfit)]">
            Recent Activity
          </h2>
          <Card variant="glass" className="h-fit">
            <CardContent className="py-2">
              <div className="space-y-1">
                {MOCK_RECENT.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2.5 border-b border-border-default/30 last:border-0"
                  >
                    <div className="flex-shrink-0">
                      {item.status === "done" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent-green" />
                      ) : (
                        <Clock className="w-4 h-4 text-accent-orange" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-text-primary truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-text-muted">{item.time}</p>
                    </div>
                    <Badge
                      variant={
                        item.track === "Quant"
                          ? "purple"
                          : item.track === "SWE"
                            ? "blue"
                            : "green"
                      }
                      className="text-[10px] flex-shrink-0"
                    >
                      {item.track}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ─── Heatmap Placeholder ─────────────────────────────────── */}
      <motion.div variants={fadeUp}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Activity Heatmap</CardTitle>
            <CardDescription>
              Your contribution history over the past year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-flow-col auto-cols-[14px] gap-[3px] overflow-x-auto pb-2 no-scrollbar">
              {Array.from({ length: 52 }, (_, week) => (
                <div key={week} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }, (_, day) => {
                    const intensity = Math.random();
                    const level =
                      intensity > 0.8
                        ? 4
                        : intensity > 0.5
                          ? 3
                          : intensity > 0.3
                            ? 2
                            : intensity > 0.1
                              ? 1
                              : 0;
                    const colors = [
                      "bg-bg-elevated",
                      "bg-accent-blue/20",
                      "bg-accent-blue/40",
                      "bg-accent-blue/60",
                      "bg-accent-blue/80",
                    ];
                    return (
                      <div
                        key={day}
                        className={`w-[14px] h-[14px] rounded-[3px] ${colors[level]} transition-colors hover:ring-1 hover:ring-accent-blue/50`}
                        title={`${level} activities`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-1.5 mt-3 text-xs text-text-muted">
              <span>Less</span>
              {["bg-bg-elevated", "bg-accent-blue/20", "bg-accent-blue/40", "bg-accent-blue/60", "bg-accent-blue/80"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`w-[14px] h-[14px] rounded-[3px] ${c}`}
                  />
                )
              )}
              <span>More</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
