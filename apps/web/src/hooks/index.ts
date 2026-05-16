"use client";

/**
 * Reusable hooks barrel export.
 */
import { useState, useEffect, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthStore } from "@/stores/authStore";

// ─── useDebounce ────────────────────────────────────────────────────────────

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// ─── useSocket ──────────────────────────────────────────────────────────────

let socketInstance: Socket | null = null;

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const { firebaseUser } = useAuthStore();

  useEffect(() => {
    if (!firebaseUser) return;

    const connect = async () => {
      const token = await firebaseUser.getIdToken();
      const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:4001";

      socketInstance = io(wsUrl, {
        auth: { token },
        transports: ["websocket"],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 10,
      });

      socketInstance.on("connect", () => setIsConnected(true));
      socketInstance.on("disconnect", () => setIsConnected(false));
    };

    connect();

    return () => {
      socketInstance?.disconnect();
      socketInstance = null;
    };
  }, [firebaseUser]);

  const emit = useCallback(
    (event: string, data?: unknown) => {
      socketInstance?.emit(event, data);
    },
    []
  );

  const on = useCallback(
    (event: string, callback: (...args: unknown[]) => void) => {
      socketInstance?.on(event, callback);
      return () => {
        socketInstance?.off(event, callback);
      };
    },
    []
  );

  return { socket: socketInstance, isConnected, emit, on };
}

// ─── useProgress ────────────────────────────────────────────────────────────

export function useProgress() {
  const [summary, setSummary] = useState({
    total: 0,
    done: 0,
    inProgress: 0,
    starred: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchSummary = useCallback(async (groupId?: string) => {
    setIsLoading(true);
    try {
      const { api } = await import("@/lib/api");
      const url = groupId
        ? `/progress/summary?groupId=${groupId}`
        : "/progress/summary";
      const data = await api.get(url);
      setSummary(data as typeof summary);
    } catch (err) {
      console.error("Failed to fetch progress summary:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateItemProgress = useCallback(
    async (
      itemId: string,
      data: {
        status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
        isStarred?: boolean;
        isWatchLater?: boolean;
      }
    ) => {
      try {
        const { api } = await import("@/lib/api");
        return await api.patch(`/progress/${itemId}`, data);
      } catch (err) {
        console.error("Failed to update progress:", err);
        throw err;
      }
    },
    []
  );

  return { summary, isLoading, fetchSummary, updateItemProgress };
}

// ─── useLocalStorage ────────────────────────────────────────────────────────

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue] as const;
}
