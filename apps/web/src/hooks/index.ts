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
let consumerCount = 0;  // reference count

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const { firebaseUser } = useAuthStore();

  useEffect(() => {
    if (!firebaseUser) return;

    let isMounted = true;  // cancellation flag for the async race
    consumerCount++;

    // Sync state with current instance status immediately
    if (socketInstance) {
      setIsConnected(socketInstance.connected);
    }

    const handleConnect = () => {
      if (isMounted) setIsConnected(true);
    };

    const handleDisconnect = () => {
      if (isMounted) setIsConnected(false);
    };

    const setupListeners = (socket: Socket) => {
      socket.on("connect", handleConnect);
      socket.on("disconnect", handleDisconnect);
    };

    const teardownListeners = (socket: Socket) => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    };

    if (socketInstance) {
      setupListeners(socketInstance);
    }

    const connect = async () => {
      if (socketInstance) return;

      const token = await firebaseUser.getIdToken();
      if (!isMounted) return;

      const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:4001";
      socketInstance = io(wsUrl, {
        auth: { token },
        transports: ["polling", "websocket"],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 10,
      });

      setupListeners(socketInstance);
    };

    connect();

    return () => {
      isMounted = false;
      consumerCount--;

      if (socketInstance) {
        teardownListeners(socketInstance);
      }

      if (consumerCount === 0) {
        socketInstance?.disconnect();
        socketInstance = null;
      }
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
      const capturedSocket = socketInstance;
      capturedSocket?.on(event, callback);
      return () => {
        capturedSocket?.off(event, callback);
      };
    },
    [isConnected]
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
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch {
      // Keep initialValue on error
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch {}
        return valueToStore;
      });
    },
    [key]
  );

  return [storedValue, setValue] as const;
}
