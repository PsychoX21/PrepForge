"use client";

/**
 * Category drill-down detail page.
 * Shows all resources, units, sub-units, and items within a category.
 * Integrates with useTrackTree and useUpdateProgress to update items live.
 */
import * as React from "react";
import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  Star,
  Clock,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  PlayCircle,
  ExternalLink,
  Flame,
  Award,
  AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTrackTree } from "@/hooks/useTracks";
import { useUpdateProgress } from "@/hooks/useProgress";
import type { Item, ProgressStatus } from "@/lib/types";

interface PageProps {
  params: Promise<{ trackId: string; catId: string }>;
}

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function CategoryDetailPage({ params }: PageProps) {
  const { trackId, catId } = use(params);
  const { data: track, isLoading, error } = useTrackTree(trackId);
  const { update } = useUpdateProgress();

  const [updatingItemId, setUpdatingItemId] = React.useState<string | null>(null);
  const [localCategory, setLocalCategory] = React.useState<any>(null);

  // Sync with track load
  React.useEffect(() => {
    if (track) {
      const cat = track.categories?.find((c) => c.id === catId) ?? null;
      setLocalCategory(cat);
    }
  }, [track, catId]);

  const handleUpdateItem = async (
    itemId: string,
    updates: {
      status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
      isStarred?: boolean;
      isWatchLater?: boolean;
    }
  ) => {
    // 1. Optimistic Update local state immediately
    setLocalCategory((prev: any) => {
      if (!prev) return null;
      return {
        ...prev,
        resources: prev.resources?.map((res: any) => ({
          ...res,
          units: res.units?.map((unit: any) => ({
            ...unit,
            subUnits: unit.subUnits?.map((sub: any) => ({
              ...sub,
              items: sub.items?.map((item: any) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    progress: {
                      ...(item.progress ?? {}),
                      ...updates,
                    },
                  };
                }
                return item;
              }),
            })),
          })),
        })),
      };
    });

    setUpdatingItemId(itemId);
    try {
      // 2. Persist changes to server in background
      await update(itemId, updates);
    } catch (err) {
      console.error("Failed to update item, rolling back state:", err);
      // Rollback to original server values
      if (track) {
        const cat = track.categories?.find((c) => c.id === catId) ?? null;
        setLocalCategory(cat);
      }
    } finally {
      setUpdatingItemId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium">Failed to load category details</p>
          <p className="text-xs text-red-400/70 mt-0.5">{error}</p>
        </div>
      </div>
    );
  }

  if (!localCategory) {
    return (
      <div className="text-center py-16 text-text-muted space-y-4">
        <BookOpen className="w-10 h-10 mx-auto mb-4 opacity-40" />
        <p className="text-sm">Category not found.</p>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/tracks">Back to Tracks</Link>
        </Button>
      </div>
    );
  }

  // Calculate items stats
  let totalItems = 0;
  let doneItems = 0;
  localCategory.resources?.forEach((res: any) => {
    res.units?.forEach((unit: any) => {
      unit.subUnits?.forEach((sub: any) => {
        sub.items?.forEach((item: any) => {
          totalItems++;
          const status = item.progress?.status;
          if (status === "DONE") {
            doneItems++;
          }
        });
      });
    });
  });

  const completionPct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      {/* Back button */}
      <div>
        <Link href="/tracks" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors group">
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Tracks
        </Link>
      </div>

      {/* Category header */}
      <motion.div variants={fadeUp} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-elevated/80 to-bg-primary border border-border-default/40 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{localCategory.icon || "📚"}</span>
              <h1 className="text-2xl font-bold font-[var(--font-outfit)]">{localCategory.name}</h1>
            </div>
            <p className="text-sm text-text-secondary max-w-xl">{localCategory.description || "Master these resources to boost your interview and test preparation."}</p>
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <span className="text-2xl font-bold font-[var(--font-outfit)] bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              {completionPct}% Complete
            </span>
            <p className="text-xs text-text-muted mt-1">{doneItems} of {totalItems} items completed</p>
            <div className="w-36 mt-2 h-1.5 bg-bg-primary rounded-full overflow-hidden border border-border-default/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPct}%` }}
                className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
 
      {/* Resources & Items list */}
      <div className="space-y-8">
        {localCategory.resources?.map((res: any) => (
          <motion.div key={res.id} variants={fadeUp} className="space-y-4">
            <div className="flex items-start justify-between border-b border-border-default/20 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold font-[var(--font-outfit)]">{res.name}</h2>
                  <Badge variant={res.isMustDo ? "mustdo" : "default"} className="text-[10px]">
                    {res.isMustDo ? "Core Study" : "Optional"}
                  </Badge>
                </div>
                <p className="text-xs text-text-muted mt-1">{res.description}</p>
              </div>
              {res.url && (
                <Button variant="ghost" size="sm" asChild className="text-accent-blue">
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" /> Resource Link
                  </a>
                </Button>
              )}
            </div>

            {/* Units tree */}
            <div className="space-y-6">
              {res.units?.map((unit: any) => (
                <Card key={unit.id} variant="default" className="overflow-hidden border border-border-default/30 bg-bg-elevated/10">
                  <div className="px-5 py-3 border-b border-border-default/20 bg-bg-elevated/40">
                    <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">{unit.name}</h3>
                    {unit.description && <p className="text-xs text-text-muted mt-0.5">{unit.description}</p>}
                  </div>

                  <CardContent className="p-0 divide-y divide-border-default/10">
                    {unit.subUnits?.map((sub: any) => (
                      <div key={sub.id} className="p-4 sm:p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-text-secondary">{sub.name}</h4>
                          {sub.description && <span className="text-xs text-text-muted">{sub.description}</span>}
                        </div>

                        {/* Items listed */}
                        <div className="space-y-2">
                          {sub.items?.map((item: any) => {
                            const isStarred = item.progress?.isStarred ?? false;
                            const isWatchLater = item.progress?.isWatchLater ?? false;
                            const status = item.progress?.status ?? "NOT_STARTED";
                            
                            let typeIcon = <HelpCircle className="w-4 h-4 text-text-muted" />;
                            if (item.type === "VIDEO") typeIcon = <PlayCircle className="w-4 h-4 text-accent-blue" />;
                            if (item.type === "CONCEPT") typeIcon = <BookOpen className="w-4 h-4 text-accent-purple" />;
                            if (item.type === "QUESTION" || item.type === "PROBLEM") typeIcon = <Flame className="w-4 h-4 text-accent-orange" />;

                            let diffColor = "text-text-muted";
                            if (item.difficulty === "EASY") diffColor = "text-accent-green bg-accent-green/10 border-accent-green/20";
                            if (item.difficulty === "MEDIUM") diffColor = "text-accent-blue bg-accent-blue/10 border-accent-blue/20";
                            if (item.difficulty === "HARD") diffColor = "text-accent-purple bg-accent-purple/10 border-accent-purple/20";
                            if (item.difficulty === "DEADLY") diffColor = "text-red-400 bg-red-500/10 border-red-500/20";

                            return (
                              <div
                                key={item.id}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border transition-all ${
                                  status === "DONE"
                                    ? "bg-bg-elevated/10 border-accent-green/10"
                                    : "bg-bg-elevated/30 border-border-default/20 hover:border-border-default/40"
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="flex-shrink-0">{typeIcon}</div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="text-sm font-medium text-text-primary truncate">{item.name}</span>
                                      {item.difficulty && (
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${diffColor}`}>
                                          {item.difficulty}
                                        </span>
                                      )}
                                    </div>
                                    {item.description && <p className="text-xs text-text-muted mt-0.5 line-clamp-1">{item.description}</p>}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                                  {/* Star button */}
                                  <button
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isStarred
                                        ? "bg-yellow-400/10 border-yellow-400/20 text-yellow-400"
                                        : "bg-transparent border-border-default/20 text-text-muted hover:text-text-secondary"
                                    }`}
                                    onClick={() => handleUpdateItem(item.id, { isStarred: !isStarred })}
                                    disabled={updatingItemId === item.id}
                                    aria-label="Star item"
                                  >
                                    <Star className={`w-3.5 h-3.5 ${isStarred ? "fill-yellow-400" : ""}`} />
                                  </button>

                                  {/* Watch later button */}
                                  <button
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isWatchLater
                                        ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
                                        : "bg-transparent border-border-default/20 text-text-muted hover:text-text-secondary"
                                    }`}
                                    onClick={() => handleUpdateItem(item.id, { isWatchLater: !isWatchLater })}
                                    disabled={updatingItemId === item.id}
                                    aria-label="Queue item"
                                  >
                                    <Clock className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Mark done button */}
                                  {status === "DONE" ? (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-accent-green hover:text-red-400 transition-colors"
                                      onClick={() => handleUpdateItem(item.id, { status: "NOT_STARTED" })}
                                      isLoading={updatingItemId === item.id}
                                    >
                                      <CheckCircle2 className="w-4 h-4 mr-1 text-accent-green" /> Complete
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      onClick={() => handleUpdateItem(item.id, { status: "DONE" })}
                                      isLoading={updatingItemId === item.id}
                                    >
                                      Mark Complete
                                    </Button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
