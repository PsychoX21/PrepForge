"use client";

/**
 * AppShell — main authenticated layout wrapper.
 * Provides sidebar + topbar + main content area.
 */
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface AppShellProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  userName?: string;
  userPhoto?: string | null;
  userLevel?: number;
  onLogout?: () => void;
}

export function AppShell({
  children,
  title,
  subtitle,
  userName,
  userPhoto,
  userLevel,
  onLogout,
}: AppShellProps) {
  const { isSidebarCollapsed } = useUIStore();

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Sidebar */}
      <Sidebar
        onLogout={onLogout}
        userName={userName}
        userPhoto={userPhoto}
        userLevel={userLevel}
      />

      {/* Main area — shifts based on sidebar width */}
      <div
        className={cn(
          "transition-all duration-300 ease-out",
          "lg:ml-[260px]",
          isSidebarCollapsed && "lg:ml-[72px]"
        )}
      >
        <Topbar title={title} subtitle={subtitle} />

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
