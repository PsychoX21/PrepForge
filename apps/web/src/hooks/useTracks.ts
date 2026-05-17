"use client";

/**
 * useTracks.ts — Tracks data-fetching hooks.
 * Handles fetching track lists and full resource trees.
 */
import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import type { Track, ApiResponse } from "@/lib/types";

// ─── useTracks ───────────────────────────────────────────────────────────────

/**
 * Fetch all tracks for a given group.
 * Returns tracks with computed totalItems + completedItems.
 */
export function useTracks(groupId: string | null) {
  const [data, setData] = useState<Track[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { firebaseUser } = useAuthStore();
  // Use a counter to allow manual refetch
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!groupId || !firebaseUser) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    api
      .get<ApiResponse<Track[]>>(`/tracks/group/${groupId}`)
      .then((res) => {
        if (!cancelled)
          setData((res as ApiResponse<Track[]>).data ?? (res as unknown as Track[]));
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load tracks");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [groupId, firebaseUser, tick]);

  const refetch = useCallback(() => setTick((t) => t + 1), []);
  return { data, isLoading, error, refetch };
}

// ─── useTrackTree ────────────────────────────────────────────────────────────

/**
 * Fetch the full tree for a single track:
 * Track → Categories → Resources → Units → SubUnits → Items (with user progress).
 */
export function useTrackTree(trackId: string | null) {
  const [data, setData] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { firebaseUser } = useAuthStore();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!trackId || !firebaseUser) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    api
      .get<ApiResponse<Track>>(`/tracks/${trackId}/tree`)
      .then((res) => {
        if (!cancelled)
          setData((res as ApiResponse<Track>).data ?? (res as unknown as Track));
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load track tree");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [trackId, firebaseUser, tick]);

  const refetch = useCallback(() => setTick((t) => t + 1), []);
  return { data, isLoading, error, refetch };
}
