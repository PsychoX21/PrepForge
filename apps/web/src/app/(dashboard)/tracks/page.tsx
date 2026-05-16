"use client";

/**
 * Tracks listing page — shows all tracks with their categories.
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star, BookOpen, FolderTree } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock data — replaced by API in production
const TRACKS = [
  {
    id: "quant",
    name: "Quantitative Trader/Researcher",
    icon: "📊",
    color: "#a78bfa",
    description: "Probability, puzzles, AI/ML, finance fundamentals, and speed math.",
    completed: 45,
    total: 180,
    categories: [
      { name: "Probability Theory & Statistics", resources: 3, completed: 8, total: 15 },
      { name: "Puzzle Solving & Practice", resources: 10, completed: 22, total: 80, mustDo: true },
      { name: "AI, ML & Deep Learning", resources: 4, completed: 10, total: 30 },
      { name: "Finance & Trading Basics", resources: 3, completed: 5, total: 8 },
      { name: "Speed & Mental Math", resources: 1, completed: 0, total: 100 },
    ],
  },
  {
    id: "swe",
    name: "Software Engineer",
    icon: "💻",
    color: "#58a6ff",
    description: "Competitive programming, systems knowledge, C++ mastery, and DSA.",
    completed: 78,
    total: 250,
    categories: [
      { name: "Competitive Programming", resources: 9, completed: 45, total: 180, mustDo: true },
      { name: "Systems Courses", resources: 13, completed: 20, total: 45 },
      { name: "C++ Mastery (HFTs)", resources: 6, completed: 10, total: 30, mustDo: true },
      { name: "Interview Systems Knowledge", resources: 2, completed: 3, total: 10 },
    ],
  },
  {
    id: "resume",
    name: "Resume & General Prep",
    icon: "📝",
    color: "#34d399",
    description: "Resume building, communication skills, mock interviews, and networking.",
    completed: 19,
    total: 70,
    categories: [
      { name: "Resume Building", resources: 4, completed: 10, total: 20 },
      { name: "Communication & Soft Skills", resources: 3, completed: 5, total: 15 },
      { name: "Mock Interviews & Company Prep", resources: 3, completed: 4, total: 10 },
    ],
  },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function TracksPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Your Tracks</h1>
        <p className="text-sm text-text-secondary mt-1">
          Explore the complete resource hierarchy. Click any category to drill down.
        </p>
      </div>

      {TRACKS.map((track) => {
        const pct = Math.round((track.completed / track.total) * 100);
        return (
          <motion.div key={track.id} variants={fadeUp}>
            <Card variant="default" className="overflow-hidden">
              {/* Track header */}
              <div
                className="px-6 py-4 border-b border-border-default/50"
                style={{ borderLeftWidth: 4, borderLeftColor: track.color }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{track.icon}</span>
                    <div>
                      <h2 className="text-lg font-semibold text-text-primary font-[var(--font-outfit)]">
                        {track.name}
                      </h2>
                      <p className="text-xs text-text-muted">{track.description}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-xl font-bold" style={{ color: track.color }}>
                      {pct}%
                    </p>
                    <p className="text-xs text-text-muted">
                      {track.completed}/{track.total} items
                    </p>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                </div>
              </div>

              {/* Categories */}
              <CardContent className="py-2">
                {track.categories.map((cat, i) => {
                  const catPct = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
                  return (
                    <Link
                      key={cat.name}
                      href={`/tracks/${track.id}/${encodeURIComponent(cat.name)}`}
                      className="flex items-center gap-4 px-2 py-3 rounded-xl hover:bg-bg-elevated transition-colors group"
                    >
                      <FolderTree className="w-4 h-4 text-text-muted group-hover:text-text-secondary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary truncate">
                            {cat.name}
                          </span>
                          {cat.mustDo && (
                            <Badge variant="mustdo" className="text-[10px] px-1.5 py-0">
                              <Star className="w-2.5 h-2.5" /> Core
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-text-muted">
                          {cat.resources} resources · {cat.completed}/{cat.total} items
                        </span>
                      </div>
                      <div className="w-20 hidden sm:block">
                        <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${catPct}%`, backgroundColor: track.color }}
                          />
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
