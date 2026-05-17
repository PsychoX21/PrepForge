"use client";

/**
 * Watch Later page — fetches items queued for later review.
 */
import { motion } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common";
import { useWatchLater } from "@/hooks/useProgress";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function WatchLaterPage() {
  const { data: items, isLoading, error } = useWatchLater();

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-accent-blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Watch Later</h1>
          <p className="text-sm text-text-secondary">
            {isLoading ? "Loading..." : `${(items ?? []).length} items queued`}
          </p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {isLoading && (
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-16" />)}
        </div>
      )}

      {!isLoading && !error && (items ?? []).length === 0 && (
        <EmptyState title="Nothing in watch later" description="Queue items you want to revisit" />
      )}

      {!isLoading && !error && (items ?? []).length > 0 && (
        <div className="space-y-2">
          {(items ?? []).map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Card variant="interactive" className="py-0">
                <CardContent className="py-3 flex items-center gap-4">
                  <Clock className="w-4 h-4 text-accent-blue flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary">{item.name}</p>
                    <p className="text-xs text-text-muted capitalize">{item.type?.toLowerCase()}</p>
                  </div>
                  {item.difficulty && (
                    <Badge variant="default" className="text-[10px]">{item.difficulty}</Badge>
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
