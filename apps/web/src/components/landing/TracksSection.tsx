"use client";

/**
 * Tracks showcase — displays the three preparation tracks
 * with their categories and resource counts.
 */
import { motion } from "framer-motion";
import {
  TrendingUp,
  Code2,
  FileText,
  ChevronRight,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Track Data ─────────────────────────────────────────────────────────────

const TRACKS = [
  {
    icon: TrendingUp,
    name: "Quantitative Trader / Researcher",
    emoji: "📊",
    color: "accent-purple",
    gradient: "from-accent-purple/20 to-accent-pink/10",
    borderColor: "border-accent-purple/20",
    categories: [
      {
        name: "Probability Theory & Statistics",
        resources: ["KF Book (PGM)", "CS215 Slides", "Distributions Book"],
        count: 3,
      },
      {
        name: "Puzzle Solving & Practice",
        resources: ["Green Book ⭐", "Brainstellar ⭐", "QuantGuide ⭐", "Jane Street Puzzles"],
        count: 10,
        mustDo: true,
      },
      {
        name: "AI, ML & Deep Learning",
        resources: ["CS217 Scribes", "PGM Ch 3-4", "MIT DL Course"],
        count: 4,
      },
      {
        name: "Finance & Trading Basics",
        resources: ["Company Docs", "Trading Terminology", "Senior Notes"],
        count: 3,
      },
      {
        name: "Speed & Mental Math",
        resources: ["80-in-8 Speed Tests"],
        count: 1,
      },
    ],
  },
  {
    icon: Code2,
    name: "Software Engineer",
    emoji: "💻",
    color: "accent-blue",
    gradient: "from-accent-blue/20 to-accent-cyan/10",
    borderColor: "border-accent-blue/20",
    categories: [
      {
        name: "Competitive Programming",
        resources: ["CSES (300+ problems) ⭐", "SOC Resources ⭐", "Codeforces ⭐", "LeetCode"],
        count: 9,
        mustDo: true,
      },
      {
        name: "Systems Courses",
        resources: ["Computer Networks ⭐", "Computer Architecture", "Operating Systems ⭐", "DBMS"],
        count: 13,
      },
      {
        name: "C++ Mastery (HFTs)",
        resources: ["LearnCpp.com ⭐", "Effective C++", "Effective Modern C++", "C++ Concurrency"],
        count: 6,
      },
      {
        name: "Interview Systems Knowledge",
        resources: ["Knowledgebase Notes", "Trading Systems Guide"],
        count: 2,
      },
    ],
  },
  {
    icon: FileText,
    name: "Resume & General Prep",
    emoji: "📝",
    color: "accent-green",
    gradient: "from-accent-green/20 to-accent-cyan/10",
    borderColor: "border-accent-green/20",
    categories: [
      {
        name: "Resume Building",
        resources: ["Resume Formats", "Section Guide", "Resume Repository ⭐"],
        count: 4,
      },
      {
        name: "Communication & Soft Skills",
        resources: ["How to Talk with Anyone", "Dale Carnegie", "Atomic Habits"],
        count: 3,
      },
      {
        name: "Mock Interviews & Company Prep",
        resources: ["Company Career Pages", "Quant Internship List ⭐"],
        count: 3,
      },
    ],
  },
];

// ─── Component ──────────────────────────────────────────────────────────────

export function TracksSection() {
  return (
    <section className="relative py-24 sm:py-32" id="tracks">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] tracking-tight">
            Three Tracks,{" "}
            <span className="text-gradient">Complete Coverage</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Every resource broken down into chapters, sections, and individual
            problems. Nothing left to chance.
          </p>
        </motion.div>

        {/* Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRACKS.map((track, trackIndex) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: trackIndex * 0.15 }}
            >
              <Card
                variant="glow"
                className={`h-full ${track.borderColor} hover:border-${track.color}/40`}
              >
                <CardHeader>
                  {/* Track header */}
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center text-xl`}
                    >
                      {track.emoji}
                    </div>
                    <CardTitle className="text-base">{track.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-4">
                    {track.categories.map((cat) => (
                      <div key={cat.name} className="group/cat">
                        {/* Category name */}
                        <div className="flex items-center gap-2 mb-2">
                          <ChevronRight
                            className={`w-3.5 h-3.5 text-${track.color} transition-transform group-hover/cat:translate-x-0.5`}
                          />
                          <span className="text-sm font-medium text-text-primary">
                            {cat.name}
                          </span>
                          {cat.mustDo && (
                            <Badge variant="mustdo" className="text-[10px] px-1.5 py-0">
                              <Star className="w-2.5 h-2.5" />
                              Core
                            </Badge>
                          )}
                        </div>
                        {/* Resources */}
                        <div className="ml-5 flex flex-wrap gap-1.5">
                          {cat.resources.map((resource) => (
                            <span
                              key={resource}
                              className="text-xs text-text-muted bg-bg-elevated/80 px-2 py-0.5 rounded-md border border-border-default/50"
                            >
                              {resource}
                            </span>
                          ))}
                          {cat.count > cat.resources.length && (
                            <span className="text-xs text-text-muted">
                              +{cat.count - cat.resources.length} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Track total */}
                  <div className="mt-5 pt-4 border-t border-border-default/50 flex items-center justify-between">
                    <span className="text-xs text-text-muted">
                      {track.categories.length} categories ·{" "}
                      {track.categories.reduce((sum, c) => sum + c.count, 0)}{" "}
                      resources
                    </span>
                    <span className={`text-xs text-${track.color} font-medium`}>
                      Explore →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
