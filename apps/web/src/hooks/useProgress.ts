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
  lastActiveDate: string;
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

  const serializedDeps = JSON.stringify(deps);

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
  }, [endpoint, firebaseUser, tick, serializedDeps]);

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

// ─── useUserActivities ──────────────────────────────────────────────────────────

export interface UserActivityLog {
  id: string;
  action: string;
  xpAwarded: number;
  createdAt: string;
}

export interface UserActivitiesData {
  logs: UserActivityLog[];
  totals: {
    day: number;
    week: number;
    month: number;
    year: number;
  };
}

/** Fetch the user's detailed activity logs and period XP sum totals. */
export function useUserActivities() {
  return useFetch<UserActivitiesData>("/users/me/activities");
}

// ─── Playlists custom list types ───────────────────────────────────────────

export interface PlaylistItemData {
  id: string;
  playlistId: string;
  itemId: string;
  item: Item;
  createdAt: string;
}

export interface PlaylistData {
  id: string;
  name: string;
  description?: string;
  items: PlaylistItemData[];
  createdAt: string;
}

// ─── usePlaylists ──────────────────────────────────────────────────────────

/** Fetch all the user's custom playlists. */
export function usePlaylists() {
  return useFetch<PlaylistData[]>("/progress/playlists");
}

// ─── useCreatePlaylist ──────────────────────────────────────────────────────

export function useCreatePlaylist() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(async (name: string, description?: string): Promise<PlaylistData | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.post<ApiResponse<PlaylistData>>("/progress/playlists", { name, description });
      return res.data ?? (res as unknown as PlaylistData);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to create playlist");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { create, isLoading, error };
}

// ─── useDeletePlaylist ──────────────────────────────────────────────────────

export function useDeletePlaylist() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(async (playlistId: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await api.delete(`/progress/playlists/${playlistId}`);
      return true;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to delete playlist");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { remove, isLoading, error };
}

// ─── useAddToPlaylist ────────────────────────────────────────────────────────

export function useAddToPlaylist() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const add = useCallback(async (playlistId: string, itemId: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await api.post(`/progress/playlists/${playlistId}/items`, { itemId });
      return true;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to add item to playlist");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { add, isLoading, error };
}

// ─── useRemoveFromPlaylist ───────────────────────────────────────────────────

export function useRemoveFromPlaylist() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(async (playlistId: string, itemId: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await api.delete(`/progress/playlists/${playlistId}/items/${itemId}`);
      return true;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to remove item from playlist");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { remove, isLoading, error };
}
