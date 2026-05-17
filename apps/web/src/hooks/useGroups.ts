"use client";

/**
 * useGroups.ts — Groups data-fetching hooks.
 * Handles listing groups, fetching leaderboards, creating and joining groups.
 */
import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import type { Group, LeaderboardEntry, ApiResponse } from "@/lib/types";

// ─── useGroups ────────────────────────────────────────────────────────────────

/** Fetch all groups the authenticated user belongs to. */
export function useGroups() {
  const [data, setData] = useState<Group[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { firebaseUser } = useAuthStore();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!firebaseUser) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    api
      .get<ApiResponse<Group[]>>("/groups")
      .then((res) => {
        if (!cancelled)
          setData((res as ApiResponse<Group[]>).data ?? (res as unknown as Group[]));
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load groups");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [firebaseUser, tick]);

  const refetch = useCallback(() => setTick((t) => t + 1), []);
  return { data, isLoading, error, refetch };
}

// ─── useLeaderboard ───────────────────────────────────────────────────────────

/** Fetch the ranked leaderboard for a specific group. */
export function useLeaderboard(groupId: string | null) {
  const [data, setData] = useState<LeaderboardEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { firebaseUser } = useAuthStore();

  useEffect(() => {
    if (!groupId || !firebaseUser) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    api
      .get<ApiResponse<LeaderboardEntry[]>>(`/groups/${groupId}/leaderboard`)
      .then((res) => {
        if (!cancelled)
          setData(
            (res as ApiResponse<LeaderboardEntry[]>).data ??
              (res as unknown as LeaderboardEntry[])
          );
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load leaderboard");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [groupId, firebaseUser]);

  return { data, isLoading, error };
}

// ─── useCreateGroup ───────────────────────────────────────────────────────────

/** Mutation: create a new group. */
export function useCreateGroup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (dto: { name: string; description?: string }): Promise<Group | null> => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await api.post<ApiResponse<Group>>("/groups", dto);
        return (res as ApiResponse<Group>).data ?? (res as unknown as Group);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create group");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useJoinGroup ─────────────────────────────────────────────────────────────

/** Mutation: join a group by invite code. */
export function useJoinGroup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const join = useCallback(async (inviteCode: string): Promise<Group | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.post<ApiResponse<Group>>(`/groups/${inviteCode}/join`, {});
      return (res as ApiResponse<Group>).data ?? (res as unknown as Group);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid invite code");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { join, isLoading, error };
}
