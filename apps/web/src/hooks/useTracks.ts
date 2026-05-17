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

// ─── useCreateTrack ──────────────────────────────────────────────────────────

export function useCreateTrack() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (dto: { groupId: string; name: string; description?: string; icon?: string; color?: string }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post("/tracks", dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create track");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateTrack ──────────────────────────────────────────────────────────

export function useUpdateTrack() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (trackId: string, dto: { name?: string; description?: string; icon?: string; color?: string }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/${trackId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update track");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteTrack ──────────────────────────────────────────────────────────

export function useDeleteTrack() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (trackId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/${trackId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete track");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
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

// ─── useCreateCategory ──────────────────────────────────────────────────────

export function useCreateCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (trackId: string, dto: { name: string; description?: string; icon?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post(`/tracks/${trackId}/categories`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create category");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateCategory ──────────────────────────────────────────────────────

export function useUpdateCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (catId: string, dto: { name?: string; description?: string; icon?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/categories/${catId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update category");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteCategory ──────────────────────────────────────────────────────

export function useDeleteCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (catId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/categories/${catId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete category");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
}

// ─── useCreateResource ──────────────────────────────────────────────────────

export function useCreateResource() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (catId: string, dto: { name: string; description?: string; type: string; url?: string; isMustDo?: boolean; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post(`/tracks/categories/${catId}/resources`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create resource");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateResource ──────────────────────────────────────────────────────

export function useUpdateResource() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (resId: string, dto: { name?: string; description?: string; type?: string; url?: string; isMustDo?: boolean; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/resources/${resId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update resource");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteResource ──────────────────────────────────────────────────────

export function useDeleteResource() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (resId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/resources/${resId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete resource");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
}

// ─── useCreateUnit ──────────────────────────────────────────────────────────

export function useCreateUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (resId: string, dto: { name: string; description?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post(`/tracks/resources/${resId}/units`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create unit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateUnit ──────────────────────────────────────────────────────────

export function useUpdateUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (unitId: string, dto: { name?: string; description?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/units/${unitId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update unit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteUnit ──────────────────────────────────────────────────────────

export function useDeleteUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (unitId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/units/${unitId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete unit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
}

// ─── useCreateSubUnit ───────────────────────────────────────────────────────

export function useCreateSubUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (unitId: string, dto: { name: string; description?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post(`/tracks/units/${unitId}/subunits`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create subunit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateSubUnit ───────────────────────────────────────────────────────

export function useUpdateSubUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (subId: string, dto: { name?: string; description?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/subunits/${subId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update subunit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteSubUnit ───────────────────────────────────────────────────────

export function useDeleteSubUnit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (subId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/subunits/${subId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete subunit");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
}

// ─── useCreateItem ──────────────────────────────────────────────────────────

export function useCreateItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(
    async (subId: string, dto: { name: string; description?: string; type: string; url?: string; difficulty?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.post(`/tracks/subunits/${subId}/items`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create item");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { create, isLoading, error };
}

// ─── useUpdateItem ──────────────────────────────────────────────────────────

export function useUpdateItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(
    async (itemId: string, dto: { name?: string; description?: string; type?: string; url?: string; difficulty?: string; order?: number }) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.patch(`/tracks/items/${itemId}`, dto);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to update item");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { update, isLoading, error };
}

// ─── useDeleteItem ──────────────────────────────────────────────────────────

export function useDeleteItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(
    async (itemId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await api.delete(`/tracks/items/${itemId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete item");
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { remove, isLoading, error };
}
