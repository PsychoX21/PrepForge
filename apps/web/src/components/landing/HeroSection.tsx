"use client";

/**
 * Hero section — the first thing users see.
 * Animated headline, subtext, and CTA with floating decorative elements.
 */
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Trophy,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/ui/icons";

// ─── Stats Bar ──────────────────────────────────────────────────────────────

const STATS = [
  { label: "Resources Curated", value: "500+", icon: BookOpen },
  { label: "Tracks Available", value: "3", icon: Sparkles },
  { label: "Practice Problems", value: "1000+", icon: Trophy },
  { label: "Built for Teams", value: "∞", icon: Users },
];

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16"
      id="hero"
    >
      {/* Hero glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-purple/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Announcement badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open source collaborative prep platform</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-outfit)] tracking-tight leading-[1.1]"
        >
          <span className="text-text-primary">Forge Your Path to</span>
          <br />
          <span className="text-gradient animate-gradient-shift">
            Top Tech & Quant Roles
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Track every chapter, problem, and concept with{" "}
          <span className="text-text-primary font-medium">granular precision</span>.
          Compete on leaderboards. Collaborate in real-time. Level up together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="xl" className="group w-full sm:w-auto" id="hero-cta-primary">
            <GoogleIcon className="w-5 h-5" />
            Sign in with Google
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary" size="xl" className="w-full sm:w-auto" id="hero-cta-demo">
            <BookOpen className="w-5 h-5" />
            Explore Demo
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-bg-secondary/50 border border-border-default/50"
            >
              <stat.icon className="w-5 h-5 text-accent-blue" />
              <span className="text-2xl font-bold text-text-primary font-[var(--font-outfit)]">
                {stat.value}
              </span>
              <span className="text-xs text-text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-border-default flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-text-muted rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
