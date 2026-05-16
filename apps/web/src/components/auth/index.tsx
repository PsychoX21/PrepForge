"use client";

/**
 * Auth components — LoginButton, AuthGuard, AuthProvider
 */
import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/ui/icons";
import { Flame } from "lucide-react";

// ─── LoginButton ────────────────────────────────────────────────────────────

interface LoginButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LoginButton({ className, size = "lg" }: LoginButtonProps) {
  const { login, isLoading } = useAuth();

  return (
    <Button
      variant="primary"
      size={size}
      onClick={login}
      isLoading={isLoading}
      className={className}
    >
      <GoogleIcon className="w-5 h-5" />
      Sign in with Google
    </Button>
  );
}

// ─── AuthGuard ──────────────────────────────────────────────────────────────

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Wraps authenticated-only content. Shows loading state while initializing,
 * redirects to login if not authenticated.
 */
export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isAuthenticated, isInitialized, isLoading } = useAuth();

  if (!isInitialized || isLoading) {
    return (
      fallback || (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center animate-pulse">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <p className="text-text-muted text-sm animate-pulse">
              Loading PrepForge...
            </p>
          </div>
        </div>
      )
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text-primary font-[var(--font-outfit)]">
              Sign in to continue
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              PrepForge requires authentication
            </p>
          </div>
          <LoginButton />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
