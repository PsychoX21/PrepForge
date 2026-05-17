"use client";

/**
 * Dashboard layout — wraps all authenticated /dashboard/* routes.
 * Reads real user profile from the auth store.
 */
import { AppShell } from "@/components/layout";
import { useAuth } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();

  return (
    <AuthGuard>
      <AppShell
        title="Dashboard"
        subtitle={user ? `Welcome back, ${user.displayName.split(" ")[0]}` : "Welcome back"}
        userName={user?.displayName ?? "User"}
        userPhoto={user?.photoUrl ?? null}
        userLevel={user?.level ?? 1}
        onLogout={logout}
      >
        {children}
      </AppShell>
    </AuthGuard>
  );
}
