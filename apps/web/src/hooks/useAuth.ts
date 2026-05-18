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
import { api, clearTokenCache } from "@/lib/api";
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
    const isDemo = typeof window !== "undefined" && sessionStorage.getItem("prepforge_demo_mode") === "true";
    if (isDemo) {
      const demoUser: User = {
        id: "demo-user-id",
        firebaseUid: "demo-uid",
        email: "demo@prepforge.com",
        displayName: "Demo Candidate",
        photoUrl: null,
        xp: 140,
        level: 3,
        streak: 5,
        lastActiveDate: new Date().toISOString().split("T")[0],
        createdAt: new Date().toISOString(),
      };
      
      const mockFbUser = {
        uid: "demo-uid",
        email: "demo@prepforge.com",
        displayName: "Demo Candidate",
        getIdToken: async () => "demo-token",
      } as any;

      setFirebaseUser(mockFbUser);
      setUser(demoUser);
      setInitialized(true);
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthChange(async (fbUser) => {
      const isDemoNow = typeof window !== "undefined" && sessionStorage.getItem("prepforge_demo_mode") === "true";
      if (isDemoNow || fbUser?.uid === "demo-uid") {
        setInitialized(true);
        setLoading(false);
        return;
      }

      setFirebaseUser(fbUser);

      if (fbUser) {
        try {
          const token = await fbUser.getIdToken();
          if (token === "demo-token") return;
          const userData = await api.post<{ data: User }>("/auth/verify", {
            idToken: token,
            localDate: new Date().toLocaleDateString('en-CA'),
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

  const loginDemo = async () => {
    setLoading(true);
    try {
      const demoUser: User = {
        id: "demo-user-id",
        firebaseUid: "demo-uid",
        email: "demo@prepforge.com",
        displayName: "Demo Candidate",
        photoUrl: null,
        xp: 140,
        level: 3,
        streak: 5,
        lastActiveDate: new Date().toISOString().split("T")[0],
        createdAt: new Date().toISOString(),
      };
      
      if (typeof window !== "undefined") {
        sessionStorage.setItem("prepforge_demo_mode", "true");
      }

      const mockFbUser = {
        uid: "demo-uid",
        email: "demo@prepforge.com",
        displayName: "Demo Candidate",
        getIdToken: async () => "demo-token",
      } as any;

      setFirebaseUser(mockFbUser);
      setUser(demoUser);
      setInitialized(true);
    } catch (err) {
      console.error("Demo login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("prepforge_demo_mode");
      }
      clearTokenCache();
      await signOut();
      reset();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUserAccount = async () => {
    setLoading(true);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("prepforge_demo_mode");
      }
      
      // Delete database record (handles Prisma cascades and Firebase Admin SDK deletion)
      await api.delete("/users/me");
      
      clearTokenCache();
      await signOut();
      reset();
    } catch (err) {
      console.error("Delete account failed:", err);
      throw err;
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
    loginDemo,
    logout,
    deleteUserAccount,
    getIdToken,
  };
}
