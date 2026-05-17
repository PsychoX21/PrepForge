"use client";

import { useState } from "react";
import { Search, Bell, Menu, Command } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  title?: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  const { setMobileMenuOpen, setSearchOpen } = useUIStore();
  const [showNotifications, setShowNotifications] = useState(false);

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
          <div className="relative flex items-center">
            <Button 
              variant="ghost" 
              size="icon-sm" 
              aria-label="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <div className="relative">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent-blue rounded-full" />
              </div>
            </Button>

            {showNotifications && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                <div className="absolute right-0 top-10 w-80 bg-bg-primary border border-border-default/80 rounded-2xl p-4 shadow-2xl space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-border-default/20 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-primary">Notifications</span>
                    <button onClick={() => setShowNotifications(false)} className="text-[10px] text-text-muted hover:text-text-primary">Dismiss all</button>
                  </div>
                  <div className="space-y-2.5 max-h-[250px] overflow-y-auto no-scrollbar">
                    <div className="flex gap-2.5 items-start p-2 hover:bg-bg-elevated/40 rounded-xl transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-accent-blue/10 flex items-center justify-center text-xs flex-shrink-0 text-accent-blue">📚</div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="text-[11px] font-semibold text-text-primary">New SWE Resources</p>
                        <p className="text-[10px] text-text-muted">A mentor added "Optimal DSA Guide" to your track.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start p-2 hover:bg-bg-elevated/40 rounded-xl transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-yellow-400/10 flex items-center justify-center text-xs flex-shrink-0 text-yellow-400">🔥</div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="text-[11px] font-semibold text-text-primary">Keep It Going!</p>
                        <p className="text-[10px] text-text-muted">Your study streak is active at 5 days. Keep crushing it!</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start p-2 hover:bg-bg-elevated/40 rounded-xl transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-accent-green/10 flex items-center justify-center text-xs flex-shrink-0 text-accent-green">💬</div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="text-[11px] font-semibold text-text-primary">Discussion Active</p>
                        <p className="text-[10px] text-text-muted">Someone responded to your comment on "Probability."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
