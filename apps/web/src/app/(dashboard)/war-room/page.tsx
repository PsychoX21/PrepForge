"use client";

/**
 * War Room page — live presence and focus broadcasting.
 */
import { motion } from "framer-motion";
import { Radio, Circle, BookOpen, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ONLINE_USERS = [
  { name: "Arjun K.", focus: "CSES — Dynamic Programming → Dice Combinations", time: "42m", level: 9 },
  { name: "Priya S.", focus: "Brainstellar — Medium → Strategy & Logic", time: "1h 15m", level: 8 },
  { name: "Rahul M.", focus: "LearnCpp — Ch 15 → Move Semantics", time: "28m", level: 7 },
  { name: "Sneha P.", focus: "Green Book — Chapter 4 → Problem 31", time: "55m", level: 7 },
];

const OFFLINE_USERS = [
  { name: "Vikram D.", lastSeen: "2h ago", level: 6 },
  { name: "Ananya R.", lastSeen: "5h ago", level: 5 },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

export default function WarRoomPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
          <Radio className="w-5 h-5 text-accent-green" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">War Room</h1>
          <p className="text-sm text-text-secondary">
            See who&apos;s grinding right now. Real-time focus broadcasting.
          </p>
        </div>
        <Badge variant="green" className="ml-auto">
          <Circle className="w-2 h-2 fill-accent-green" /> {ONLINE_USERS.length} Online
        </Badge>
      </div>

      {/* Online Users */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
          <Circle className="w-2 h-2 fill-accent-green" /> Currently Active
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ONLINE_USERS.map((user) => (
            <motion.div key={user.name} variants={fadeUp}>
              <Card variant="glow" className="border-accent-green/10">
                <CardContent className="py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold text-white">
                        {user.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-accent-green rounded-full border-2 border-bg-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-text-primary">{user.name}</p>
                        <span className="text-xs text-text-muted">Lv.{user.level}</span>
                      </div>
                      <div className="mt-1 flex items-start gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {user.focus}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs text-text-muted">
                        <Clock className="w-3 h-3" /> Focused for {user.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Offline Users */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-text-muted flex items-center gap-2">
          <Circle className="w-2 h-2 fill-text-muted" /> Offline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {OFFLINE_USERS.map((user) => (
            <Card key={user.name} variant="default" className="opacity-60">
              <CardContent className="py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-sm text-text-muted">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text-secondary">{user.name}</p>
                  <p className="text-xs text-text-muted">Last seen {user.lastSeen}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
