"use client";

/**
 * Starred items page — fetches items the user has starred.
 */
import { motion } from "framer-motion";
import { Star, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common";
import Link from "next/link";
import { useStarredItems } from "@/hooks/useProgress";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

// Derive track name from item's sub-unit path (best-effort until we have enriched API)
function getDifficultyVariant(difficulty: string | null): "green" | "default" | "destructive" {
  if (difficulty === "EASY") return "green";
  if (difficulty === "HARD" || difficulty === "DEADLY") return "destructive";
  return "default";
}

export default function StarredPage() {
  const { data: items, isLoading, error } = useStarredItems();

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Starred Items</h1>
          <p className="text-sm text-text-secondary">
            {isLoading ? "Loading..." : `${(items ?? []).length} items starred`}
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
          {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16" />)}
        </div>
      )}

      {!isLoading && !error && (items ?? []).length === 0 && (
        <EmptyState title="No starred items" description="Star important items to find them quickly" />
      )}

      {!isLoading && !error && (items ?? []).length > 0 && (
        <div className="space-y-2">
          {(items ?? []).map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Card variant="interactive" className="py-0">
                <CardContent className="py-3 flex items-center gap-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    {item.subUnit?.unit?.resource?.category?.trackId && item.subUnit?.unit?.resource?.category?.id ? (
                      <Link
                        href={`/tracks/${item.subUnit.unit.resource.category.trackId}/${item.subUnit.unit.resource.category.id}`}
                        className="text-sm font-medium text-text-primary hover:text-accent-blue hover:underline transition-colors truncate block"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-text-primary">{item.name}</p>
                    )}
                    <p className="text-xs text-text-muted capitalize">{item.type?.toLowerCase()}</p>
                  </div>
                  {item.difficulty && (
                    <Badge variant={getDifficultyVariant(item.difficulty)} className="text-[10px]">
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
