"use client";

/**
 * Features section — showcases core platform capabilities.
 * Animated cards with hover effects and icon accents.
 */
import { motion } from "framer-motion";
import {
  GitBranch,
  BarChart3,
  Flame,
  MessageSquare,
  Radio,
  Star,
  CheckCircle2,
  BookMarked,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ─── Feature Data ───────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: GitBranch,
    title: "Deep Resource Hierarchy",
    description:
      "Track → Category → Resource → Chapter → Section → Individual Question. Every concept mapped with surgical precision.",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/20",
  },
  {
    icon: CheckCircle2,
    title: "Granular Progress",
    description:
      "Mark done, star, add to watch-later, or rate any item at any level. Your progress is never lost.",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/20",
  },
  {
    icon: Flame,
    title: "XP, Levels & Streaks",
    description:
      "Every action earns XP. Maintain daily streaks. Rise through 20 ranks from Novice to Godlike.",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    borderColor: "border-accent-orange/20",
  },
  {
    icon: BarChart3,
    title: "Accountability Heatmaps",
    description:
      "GitHub-style contribution grids for every peer. See exactly who's grinding and when.",
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    borderColor: "border-accent-purple/20",
  },
  {
    icon: Radio,
    title: "The War Room",
    description:
      "Live focus broadcasting. See that your teammate is solving CSES Sorting problems right now.",
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan/20",
  },
  {
    icon: MessageSquare,
    title: "Contextual Chat",
    description:
      "Discussion threads attached to specific problems. Share insights exactly where they matter.",
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    borderColor: "border-accent-pink/20",
  },
  {
    icon: Star,
    title: "Smart Prioritization",
    description:
      "Must-do badges on essential resources. Star what matters. Build custom preparation lists.",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    borderColor: "border-accent-orange/20",
  },
  {
    icon: BookMarked,
    title: "Personal & Public Notes",
    description:
      "Log your insights privately or share clever solutions with your group at the exact item level.",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/20",
  },
  {
    icon: Zap,
    title: "500+ Curated Resources",
    description:
      "Default tracks with carefully structured content: Green Book, CSES, Brainstellar, LearnCPP, and more.",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/20",
  },
];

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32" id="features">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

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
            Everything You Need to{" "}
            <span className="text-gradient">Dominate</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Not just another study tracker. A complete preparation ecosystem
            designed for serious contenders.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card variant="interactive" className="h-full group">
                <CardContent className="flex flex-col gap-4">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center transition-transform group-hover:scale-110`}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
