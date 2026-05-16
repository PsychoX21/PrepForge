"use client";

/**
 * Auth hook — manages Firebase auth state and syncs with backend.
 */
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import {
  onAuthChange,
  signInWithGoogle,
  signOut,
  getIdToken,
} from "@/lib/firebase";
import { api } from "@/lib/api";
import type { User } from "@/lib/types";

export function useAuth() {
  const {
    firebaseUser,
    user,
    isInitialized,
    isLoading,
    setFirebaseUser,
    setUser,
    setInitialized,
    setLoading,
    reset,
  } = useAuthStore();

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange(async (fbUser) => {
      setFirebaseUser(fbUser);

      if (fbUser) {
        try {
          const token = await fbUser.getIdToken();
          const userData = await api.post<{ data: User }>("/auth/verify", {
            idToken: token,
          });
          setUser((userData as { data?: User }).data || (userData as unknown as User));
        } catch (err) {
          console.error("Failed to sync user:", err);
        }
      } else {
        setUser(null);
      }

      setInitialized(true);
      setLoading(false);
    });

    return unsubscribe;
  }, [setFirebaseUser, setUser, setInitialized, setLoading]);

  const login = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error("Login failed:", err);
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut();
      reset();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    firebaseUser,
    user,
    isAuthenticated: !!firebaseUser,
    isInitialized,
    isLoading,
    login,
    logout,
    getIdToken,
  };
}
