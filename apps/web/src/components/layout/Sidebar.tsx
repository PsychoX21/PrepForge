"use client";

/**
 * Sidebar navigation component.
 * Collapsible on desktop, drawer on mobile.
 */
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Radio,
  Trophy,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Flame,
  LogOut,
  Star,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";
import { Button } from "@/components/ui/button";

// ─── Navigation Items ───────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Tracks", href: "/tracks", icon: BookOpen },
  { label: "War Room", href: "/war-room", icon: Radio },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { label: "Groups", href: "/groups", icon: Users },
];

const BOTTOM_ITEMS = [
  { label: "Starred", href: "/starred", icon: Star },
  { label: "Watch Later", href: "/watch-later", icon: Clock },
  { label: "Settings", href: "/settings", icon: Settings },
];

// ─── Component ──────────────────────────────────────────────────────────────

interface SidebarProps {
  onLogout?: () => void;
  userName?: string;
  userPhoto?: string | null;
  userLevel?: number;
}

export function Sidebar({ onLogout, userName, userPhoto, userLevel }: SidebarProps) {
  const pathname = usePathname();
  const { isSidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 flex flex-col",
        "bg-bg-secondary border-r border-border-default",
        "transition-all duration-300 ease-out",
        "hidden lg:flex",
        isSidebarCollapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-4 border-b border-border-default/50 flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
          <Flame className="w-4 h-4 text-white animate-flame" />
        </div>
        <AnimatePresence>
          {!isSidebarCollapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-lg font-bold font-[var(--font-outfit)] tracking-tight overflow-hidden whitespace-nowrap"
            >
              <span className="text-text-primary">Prep</span>
              <span className="text-gradient">Forge</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                "text-sm font-medium",
                isActive
                  ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              )}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-accent-blue")} />
              <AnimatePresence>
                {!isSidebarCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}

        {/* Divider */}
        <div className="my-3 border-t border-border-default/50" />

        {BOTTOM_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                "text-sm font-medium",
                isActive
                  ? "bg-bg-elevated text-text-primary"
                  : "text-text-muted hover:text-text-secondary hover:bg-bg-elevated"
              )}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <item.icon className="w-4.5 h-4.5 flex-shrink-0" />
              <AnimatePresence>
                {!isSidebarCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-border-default/50 flex-shrink-0">
        {!isSidebarCollapsed && userName && (
          <div className="flex items-center gap-3 px-2 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              {userPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={userPhoto} alt="" className="w-full h-full rounded-full object-cover" />
              ) : (
                userName.charAt(0).toUpperCase()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">{userName}</p>
              <p className="text-xs text-text-muted">Level {userLevel || 1}</p>
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-1.5 text-text-muted hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                aria-label="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Collapse toggle */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleSidebar}
          className="w-full justify-center"
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>
    </aside>
  );
}
