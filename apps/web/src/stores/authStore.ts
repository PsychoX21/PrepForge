/**
 * Authentication store using Zustand.
 * Manages Firebase auth state across the application.
 */
import { create } from "zustand";
import type { User } from "@/lib/types";
import type { FirebaseUser } from "@/lib/firebase";

// ─── Store Interface ────────────────────────────────────────────────────────

interface AuthState {
  /** Firebase user object (null when not authenticated) */
  firebaseUser: FirebaseUser | null;
  /** PrepForge user profile from backend */
  user: User | null;
  /** Whether the auth state has been initialized */
  isInitialized: boolean;
  /** Whether we're currently loading auth state */
  isLoading: boolean;

  // Actions
  setFirebaseUser: (user: FirebaseUser | null) => void;
  setUser: (user: User | null) => void;
  setInitialized: (initialized: boolean) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

// ─── Initial State ──────────────────────────────────────────────────────────

const initialState = {
  firebaseUser: null,
  user: null,
  isInitialized: false,
  isLoading: true,
};

// ─── Store ──────────────────────────────────────────────────────────────────

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,

  setFirebaseUser: (firebaseUser) => set({ firebaseUser }),
  setUser: (user) => set({ user }),
  setInitialized: (isInitialized) => set({ isInitialized }),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set(initialState),
}));
