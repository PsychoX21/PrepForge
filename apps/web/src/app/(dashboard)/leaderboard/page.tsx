"use client";

/**
 * Leaderboard page — fetches group rankings by XP from backend.
 */
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Flame, Medal, Crown, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLeaderboard } from "@/hooks/useGroups";
import { useAuthStore } from "@/stores/authStore";


const RANK_ICONS = [Crown, Medal, Medal];
const RANK_COLORS = ["text-yellow-400", "text-gray-300", "text-amber-600"];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function LeaderboardPage() {
  const { user } = useAuthStore();
  const groupId = user?.memberships?.[0]?.groupId ?? null;
  const { data: entries, isLoading, error } = useLeaderboard(groupId);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Leaderboard</h1>
        <p className="text-sm text-text-secondary mt-1">See where you stand among your peers</p>
      </div>

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-[200px]" />)
          : (entries ?? []).slice(0, 3).map((entry, i) => {
              const RankIcon = RANK_ICONS[i];
              return (
                <motion.div key={entry.rank} variants={fadeUp}>
                  <Card variant="glow" className={`text-center ${i === 0 ? "ring-1 ring-yellow-400/20" : ""}`}>
                    <CardContent className="py-6 flex flex-col items-center gap-3">
                      <RankIcon className={`w-6 h-6 ${RANK_COLORS[i]}`} />
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xl font-bold text-white overflow-hidden">
                        {entry.user.photoUrl
                          ? <Image src={entry.user.photoUrl} alt={entry.user.displayName} width={56} height={56} className="w-full h-full object-cover" />
                          : entry.user.displayName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{entry.user.displayName}</p>
                        <p className="text-xs text-text-muted">Level {entry.user.level}</p>
                      </div>
                      <p className="text-lg font-bold text-accent-blue font-[var(--font-outfit)]">
                        {entry.xp.toLocaleString()} XP
                      </p>
                      <div className="flex items-center gap-1 text-xs text-accent-orange">
                        <Flame className="w-3 h-3" /> {entry.streak} day streak
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
      </div>

      {/* Full table */}
      <Card variant="default">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent-blue" /> Full Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-14" />)}
            </div>
          ) : (
            <div className="space-y-1">
              {(entries ?? []).map((entry) => {
                const isMe = entry.user.id === user?.id;
                return (
                  <motion.div
                    key={entry.rank}
                    variants={fadeUp}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                      isMe ? "bg-accent-blue/5 border border-accent-blue/20" : "hover:bg-bg-elevated"
                    }`}
                  >
                    <span className={`w-8 text-center font-bold font-mono text-sm ${
                      entry.rank <= 3 ? RANK_COLORS[entry.rank - 1] : "text-text-muted"
                    }`}>
                      #{entry.rank}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold text-white flex-shrink-0 overflow-hidden">
                        {entry.user.photoUrl
                          ? <Image src={entry.user.photoUrl} alt={entry.user.displayName} width={56} height={56} className="w-full h-full object-cover" />
                          : entry.user.displayName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        {entry.user.displayName}{isMe && " (You)"}
                      </p>
                      <p className="text-xs text-text-muted">Level {entry.user.level}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-accent-orange">
                      <Flame className="w-3 h-3" /> {entry.streak}
                    </div>
                    <Badge variant="blue" className="text-xs">
                      <TrendingUp className="w-3 h-3" /> {entry.xp.toLocaleString()} XP
                    </Badge>
                  </motion.div>
                );
              })}
              {!isLoading && (entries ?? []).length === 0 && (
                <p className="text-center text-sm text-text-muted py-8">No rankings yet. Start completing items!</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
