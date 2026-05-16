"use client";

/**
 * Top navigation bar for authenticated pages.
 * Shows search, notifications, and user actions.
 */
import { Search, Bell, Menu, Command } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  title?: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  const { setMobileMenuOpen, setSearchOpen } = useUIStore();

  return (
    <header className="sticky top-0 z-30 h-16 bg-bg-primary/80 backdrop-blur-xl border-b border-border-default/50">
      <div className="h-full flex items-center justify-between px-4 lg:px-8">
        {/* Left: Mobile menu + Page title */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-elevated"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            {title && (
              <h1 className="text-lg font-semibold text-text-primary font-[var(--font-outfit)]">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xs text-text-muted">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-2">
          {/* Search bar (desktop) */}
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg-elevated border border-border-default text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all w-64"
          >
            <Search className="w-4 h-4" />
            <span className="flex-1 text-left">Search resources...</span>
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-default text-[10px] font-mono">
              <Command className="w-2.5 h-2.5" />K
            </kbd>
          </button>

          {/* Search icon (mobile) */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setSearchOpen(true)}
            className="sm:hidden"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon-sm" aria-label="Notifications">
            <div className="relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent-blue rounded-full" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
