"use client";

/**
 * Dashboard layout — wraps all authenticated /dashboard/* routes.
 */
import { AppShell } from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In production, useAuth() would provide these values
  return (
    <AppShell
      title="Dashboard"
      subtitle="Welcome back, let's keep grinding"
      userName="User"
      userLevel={1}
    >
      {children}
    </AppShell>
  );
}
