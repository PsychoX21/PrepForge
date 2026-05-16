"use client";

/**
 * Leaderboard page — group rankings by XP.
 */
import { motion } from "framer-motion";
import { Trophy, Flame, Medal, Crown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MOCK_LEADERBOARD = [
  { rank: 1, name: "Arjun K.", xp: 12500, level: 9, streak: 45, photo: null },
  { rank: 2, name: "Priya S.", xp: 11200, level: 8, streak: 32, photo: null },
  { rank: 3, name: "Rahul M.", xp: 9800, level: 7, streak: 28, photo: null },
  { rank: 4, name: "Sneha P.", xp: 8400, level: 7, streak: 15, photo: null },
  { rank: 5, name: "Vikram D.", xp: 6200, level: 6, streak: 10, photo: null },
  { rank: 6, name: "Ananya R.", xp: 5100, level: 5, streak: 8, photo: null },
  { rank: 7, name: "Dev K.", xp: 3900, level: 4, streak: 5, photo: null },
  { rank: 8, name: "You", xp: 2450, level: 5, streak: 12, photo: null },
];

const RANK_ICONS = [Crown, Medal, Medal];
const RANK_COLORS = ["text-yellow-400", "text-gray-300", "text-amber-600"];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

export default function LeaderboardPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Leaderboard</h1>
        <p className="text-sm text-text-secondary mt-1">See where you stand among your peers</p>
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4">
        {MOCK_LEADERBOARD.slice(0, 3).map((user, i) => {
          const RankIcon = RANK_ICONS[i];
          return (
            <motion.div key={user.rank} variants={fadeUp}>
              <Card variant="glow" className={`text-center ${i === 0 ? "ring-1 ring-yellow-400/20" : ""}`}>
                <CardContent className="py-6 flex flex-col items-center gap-3">
                  <RankIcon className={`w-6 h-6 ${RANK_COLORS[i]}`} />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xl font-bold text-white">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{user.name}</p>
                    <p className="text-xs text-text-muted">Level {user.level}</p>
                  </div>
                  <p className="text-lg font-bold text-accent-blue font-[var(--font-outfit)]">
                    {user.xp.toLocaleString()} XP
                  </p>
                  <div className="flex items-center gap-1 text-xs text-accent-orange">
                    <Flame className="w-3 h-3" /> {user.streak} day streak
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
          <div className="space-y-1">
            {MOCK_LEADERBOARD.map((user) => (
              <motion.div
                key={user.rank}
                variants={fadeUp}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                  user.name === "You"
                    ? "bg-accent-blue/5 border border-accent-blue/20"
                    : "hover:bg-bg-elevated"
                }`}
              >
                <span className={`w-8 text-center font-bold font-mono text-sm ${
                  user.rank <= 3 ? RANK_COLORS[user.rank - 1] : "text-text-muted"
                }`}>
                  #{user.rank}
                </span>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary">{user.name}</p>
                  <p className="text-xs text-text-muted">Level {user.level}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-accent-orange">
                  <Flame className="w-3 h-3" /> {user.streak}
                </div>
                <Badge variant="blue" className="text-xs">
                  <TrendingUp className="w-3 h-3" /> {user.xp.toLocaleString()} XP
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
