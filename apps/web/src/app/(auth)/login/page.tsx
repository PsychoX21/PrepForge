"use client";

/**
 * Login page — redirects to Google OAuth.
 */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Flame, BookOpen } from "lucide-react";
import { LoginButton } from "@/components/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { isAuthenticated, isInitialized, loginDemo } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isInitialized, router]);

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[128px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm"
      >
        <div className="glass rounded-2xl p-8 border border-border-default/30 text-center space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-[var(--font-outfit)] tracking-tight">
                <span className="text-text-primary">Prep</span>
                <span className="text-gradient">Forge</span>
              </h1>
              <p className="text-sm text-text-muted mt-1">
                Your preparation command center
              </p>
            </div>
          </div>

          <div className="border-t border-border-default/50" />

          {/* Login */}
          <div className="space-y-3">
            <p className="text-sm text-text-secondary">
              Sign in to track your progress, join groups, and compete with
              peers.
            </p>
            <LoginButton className="w-full" />
            <div className="flex items-center justify-center gap-2 text-xs text-text-muted my-2">
              <span className="w-8 h-px bg-border-default/30" />
              <span>or</span>
              <span className="w-8 h-px bg-border-default/30" />
            </div>
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2"
              onClick={async () => {
                await loginDemo();
                router.push("/dashboard");
              }}
            >
              <BookOpen className="w-4 h-4" />
              Explore Demo Mode
            </Button>
          </div>

          <p className="text-[11px] text-text-muted">
            By signing in, you agree to our Terms of Service.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
