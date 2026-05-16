"use client";

/**
 * Starred items page — items the user has starred.
 */
import { motion } from "framer-motion";
import { Star, ExternalLink, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common";

const MOCK_STARRED = [
  { id: "1", name: "Monty Hall Problem", resource: "Brainstellar", track: "Quant", difficulty: "EASY" },
  { id: "2", name: "Dice Combinations", resource: "CSES", track: "SWE", difficulty: "MEDIUM" },
  { id: "3", name: "Move Semantics", resource: "LearnCpp", track: "SWE", difficulty: null },
  { id: "4", name: "Problem 24", resource: "Green Book", track: "Quant", difficulty: "HARD" },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

export default function StarredPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Starred Items</h1>
          <p className="text-sm text-text-secondary">{MOCK_STARRED.length} items starred</p>
        </div>
      </div>

      {MOCK_STARRED.length === 0 ? (
        <EmptyState title="No starred items" description="Star important items to find them quickly" />
      ) : (
        <div className="space-y-2">
          {MOCK_STARRED.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Card variant="interactive" className="py-0">
                <CardContent className="py-3 flex items-center gap-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary">{item.name}</p>
                    <p className="text-xs text-text-muted">{item.resource}</p>
                  </div>
                  <Badge variant={item.track === "Quant" ? "purple" : "blue"} className="text-[10px]">
                    {item.track}
                  </Badge>
                  {item.difficulty && (
                    <Badge variant={item.difficulty === "EASY" ? "green" : item.difficulty === "MEDIUM" ? "default" : "destructive"} className="text-[10px]">
                      {item.difficulty}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
