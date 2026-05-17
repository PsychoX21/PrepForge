"use client";

/**
 * Tracks listing page — fetches all tracks for the user's active group.
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star, FolderTree, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTracks } from "@/hooks/useTracks";
import { useAuthStore } from "@/stores/authStore";


const TRACK_META: Record<string, { icon: string; color: string; description: string }> = {
  "Quantitative Trader/Researcher": { icon: "📊", color: "#a78bfa", description: "Probability, puzzles, AI/ML, finance fundamentals, and speed math." },
  "Software Engineer": { icon: "💻", color: "#58a6ff", description: "Competitive programming, systems knowledge, C++ mastery, and DSA." },
  "Resume & General Prep": { icon: "📝", color: "#34d399", description: "Resume building, communication skills, mock interviews, and networking." },
};

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function TracksPage() {
  const { user } = useAuthStore();
  const groupId = user?.memberships?.[0]?.groupId ?? null;
  const { data: tracks, isLoading, error } = useTracks(groupId);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Your Tracks</h1>
        <p className="text-sm text-text-secondary mt-1">
          Explore the complete resource hierarchy. Click any category to drill down.
        </p>
      </div>

      {isLoading && (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-[200px]" />)}
        </div>
      )}

      {error && !isLoading && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Failed to load tracks</p>
            <p className="text-xs text-red-400/70 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {!isLoading && !error && !groupId && (
        <div className="text-center py-16 text-text-muted">
          <FolderTree className="w-10 h-10 mx-auto mb-4 opacity-40" />
          <p className="text-sm">You are not in any group yet.</p>
        </div>
      )}

      {!isLoading && !error && (tracks ?? []).map((track) => {
        const meta = TRACK_META[track.name] ?? { icon: "📚", color: "#58a6ff", description: "" };
        const total = track.totalItems ?? 0;
        const done = track.completedItems ?? 0;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;

        return (
          <motion.div key={track.id} variants={fadeUp}>
            <Card variant="default" className="overflow-hidden">
              {/* Track header */}
              <div
                className="px-6 py-4 border-b border-border-default/50"
                style={{ borderLeftWidth: 4, borderLeftColor: meta.color }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{meta.icon}</span>
                    <div>
                      <h2 className="text-lg font-semibold text-text-primary font-[var(--font-outfit)]">{track.name}</h2>
                      <p className="text-xs text-text-muted">{meta.description || track.description}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-xl font-bold" style={{ color: meta.color }}>{pct}%</p>
                    <p className="text-xs text-text-muted">{done}/{total} items</p>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full" style={{ backgroundColor: meta.color }} />
                </div>
              </div>

              {/* Categories */}
              <CardContent className="py-2">
                {(track.categories ?? []).map((cat) => {
                  const catTotal = cat.totalItems ?? 0;
                  const catDone = cat.completedItems ?? 0;
                  const catPct = catTotal > 0 ? Math.round((catDone / catTotal) * 100) : 0;
                  const isMustDo = (cat.resources ?? []).some((r) => r.isMustDo);
                  return (
                    <Link key={cat.id} href={`/tracks/${track.id}/${cat.id}`}
                      className="flex items-center gap-4 px-2 py-3 rounded-xl hover:bg-bg-elevated transition-colors group">
                      <FolderTree className="w-4 h-4 text-text-muted group-hover:text-text-secondary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary truncate">{cat.name}</span>
                          {isMustDo && (
                            <Badge variant="mustdo" className="text-[10px] px-1.5 py-0">
                              <Star className="w-2.5 h-2.5" /> Core
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-text-muted">
                          {(cat.resources ?? []).length} resources · {catDone}/{catTotal} items
                        </span>
                      </div>
                      <div className="w-20 hidden sm:block">
                        <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${catPct}%`, backgroundColor: meta.color }} />
                        </div>
                      </div>
                      <span className="text-xs text-text-muted w-10 text-right">{catPct}%</span>
                      <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
