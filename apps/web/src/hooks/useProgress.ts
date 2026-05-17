"use client";

/**
 * useProgress.ts — Progress, stats, heatmap, starred, and watch-later hooks.
 * Central source of truth for all user engagement data.
 */
import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import type { Item, ApiResponse } from "@/lib/types";

// ─── Shared Types ─────────────────────────────────────────────────────────────

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  completedToday: number;
  totalCompleted: number;
  totalItems: number;
  lastActive: string;
}

export interface HeatmapEntry {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ProgressSummary {
  total: number;
  done: number;
  inProgress: number;
  starred: number;
}

// ─── Helper: build a typed effect hook to avoid repetition ────────────────────

function useFetch<T>(endpoint: string | null, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { firebaseUser } = useAuthStore();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!endpoint || !firebaseUser) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    api
      .get<ApiResponse<T>>(endpoint)
      .then((res) => {
        if (!cancelled)
          setData((res as ApiResponse<T>).data ?? (res as unknown as T));
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Request failed");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // deps are spread intentionally; endpoint & firebaseUser cover the main cases
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, firebaseUser, tick, ...deps]);

  const refetch = useCallback(() => setTick((t) => t + 1), []);
  return { data, isLoading, error, refetch };
}

// ─── useUserStats ─────────────────────────────────────────────────────────────

export function useUserStats() {
  return useFetch<UserStats>("/users/me/stats");
}

// ─── useHeatmap ───────────────────────────────────────────────────────────────

/**
 * Fetch the user's activity heatmap for the past year.
 * Each entry has a date, count, and intensity level (0-4).
 */
export function useHeatmap() {
  return useFetch<HeatmapEntry[]>("/users/me/heatmap");
}

// ─── useProgressSummary ───────────────────────────────────────────────────────

/**
 * Fetch total/done/inProgress/starred counts, optionally scoped to a group.
 * Used by Dashboard overall progress bar.
 */
export function useProgressSummary(groupId?: string) {
  const endpoint = groupId
    ? `/progress/summary?groupId=${groupId}`
    : "/progress/summary";
  return useFetch<ProgressSummary>(endpoint, [groupId]);
}

// ─── useStarredItems ──────────────────────────────────────────────────────────

/** Fetch all items the user has starred. */
export function useStarredItems() {
  return useFetch<Item[]>("/progress/starred");
}

// ─── useWatchLater ────────────────────────────────────────────────────────────

/** Fetch all items in the user's watch-later queue. */
export function useWatchLater() {
  return useFetch<Item[]>("/progress/watch-later");
}

// ─── useUpdateProgress ────────────────────────────────────────────────────────

/** Mutation: update status/starred/watch-later for a single item. */
export function useUpdateProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (
      itemId: string,
      data: {
        status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
        isStarred?: boolean;
        isWatchLater?: boolean;
        completion?: number;
      }
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/progress/${itemId}`, data);
      } catch (err: any) {
        const msg = err instanceof Error ? err.message : "Failed to update progress";
        setError(msg);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}
