"use client";

/**
 * "How It Works" section — step-by-step visual walkthrough.
 */
import { motion } from "framer-motion";
import { UserPlus, FolderTree, CheckSquare, Trophy } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign in & Create a Group",
    description:
      "One-click Google login. Create or join a study group with an invite link. Choose default content or start fresh.",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/20",
  },
  {
    icon: FolderTree,
    step: "02",
    title: "Explore Your Tracks",
    description:
      "Browse the deeply structured resource tree. Every book, course, and problem set is broken into granular pieces.",
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    borderColor: "border-accent-purple/20",
  },
  {
    icon: CheckSquare,
    step: "03",
    title: "Track Every Detail",
    description:
      "Mark items done, star priorities, add notes, discuss with peers. Your progress cascades up the tree automatically.",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/20",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Compete & Level Up",
    description:
      "Earn XP for every action. Climb leaderboards. Keep your streak alive. See exactly who's grinding in the War Room.",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    borderColor: "border-accent-orange/20",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 sm:py-32" id="how-it-works">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] tracking-tight">
            How <span className="text-gradient">PrepForge</span> Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            From signup to domination in four simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-accent-blue/30 via-accent-purple/30 to-accent-green/30 hidden md:block" />

          <div className="space-y-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 items-start"
              >
                {/* Step number & icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}
                  >
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${step.color} opacity-60`}
                    >
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-[var(--font-outfit)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
