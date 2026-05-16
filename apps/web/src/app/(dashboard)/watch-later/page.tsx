"use client";

/**
 * Watch Later page — items queued for later review.
 */
import { motion } from "framer-motion";
import { Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common";

const MOCK_WATCH_LATER = [
  { id: "1", name: "Secretary Problem", resource: "Brainstellar", track: "Quant", addedAt: "2 days ago" },
  { id: "2", name: "Download Speed (Network Flow)", resource: "CSES", track: "SWE", addedAt: "3 days ago" },
  { id: "3", name: "C++ Concurrency Basics", resource: "LearnCpp", track: "SWE", addedAt: "1 week ago" },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

export default function WatchLaterPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-accent-blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Watch Later</h1>
          <p className="text-sm text-text-secondary">{MOCK_WATCH_LATER.length} items queued</p>
        </div>
      </div>

      {MOCK_WATCH_LATER.length === 0 ? (
        <EmptyState title="Nothing in watch later" description="Queue items you want to revisit" />
      ) : (
        <div className="space-y-2">
          {MOCK_WATCH_LATER.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Card variant="interactive" className="py-0">
                <CardContent className="py-3 flex items-center gap-4">
                  <Clock className="w-4 h-4 text-accent-blue flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary">{item.name}</p>
                    <p className="text-xs text-text-muted">{item.resource} · Added {item.addedAt}</p>
                  </div>
                  <Badge variant={item.track === "Quant" ? "purple" : "blue"} className="text-[10px]">
                    {item.track}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
