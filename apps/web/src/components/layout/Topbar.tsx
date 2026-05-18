"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Menu, Command } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { Button } from "@/components/ui/button";
import { useUserActivities } from "@/hooks/useProgress";

interface TopbarProps {
  title?: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  const { setMobileMenuOpen, setSearchOpen } = useUIStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const { data: activityData } = useUserActivities();
  const [lastDismissedId, setLastDismissedId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLastDismissedId(localStorage.getItem("prepforge_last_dismissed_activity_id"));
    }
  }, []);

  const visibleLogs = activityData?.logs?.filter((log) => {
    if (!lastDismissedId) return true;
    const dismissedIndex = activityData.logs.findIndex((l) => l.id === lastDismissedId);
    if (dismissedIndex === -1) return true;
    const currentIndex = activityData.logs.findIndex((l) => l.id === log.id);
    return currentIndex < dismissedIndex;
  }) || [];

  const handleDismissAll = () => {
    if (activityData?.logs && activityData.logs.length > 0) {
      const newestId = activityData.logs[0].id;
      localStorage.setItem("prepforge_last_dismissed_activity_id", newestId);
      setLastDismissedId(newestId);
    }
    setShowNotifications(false);
  };

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
                {visibleLogs.length > 0 && (
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent-blue rounded-full" />
                )}
              </div>
            </Button>

            {showNotifications && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                <div className="absolute right-0 top-10 w-80 bg-bg-primary border border-border-default/80 rounded-2xl p-4 shadow-2xl space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-border-default/20 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-primary">Notifications</span>
                    <button onClick={handleDismissAll} className="text-[10px] text-text-muted hover:text-text-primary">Dismiss all</button>
                  </div>
                  <div className="space-y-2.5 max-h-[250px] overflow-y-auto no-scrollbar">
                    {visibleLogs.length > 0 ? (
                      visibleLogs.slice(0, 5).map((log) => {
                        const { label, emoji, bgColor, textColor } = {
                          MARK_ITEM_DONE: { label: "Completed a Study Item", emoji: "📚", bgColor: "bg-accent-blue/10", textColor: "text-accent-blue" },
                          MARK_SUBUNIT_DONE: { label: "Finished a Topic Subunit", emoji: "🎯", bgColor: "bg-accent-purple/10", textColor: "text-accent-purple" },
                          MARK_UNIT_DONE: { label: "Mastered a Chapter Unit", emoji: "🏆", bgColor: "bg-yellow-400/10", textColor: "text-yellow-400" },
                          MARK_RESOURCE_DONE: { label: "Completed a Whole Resource", emoji: "🚀", bgColor: "bg-accent-green/10", textColor: "text-accent-green" },
                          ADD_COMMENT: { label: "Contributed to Discussion", emoji: "💬", bgColor: "bg-accent-green/10", textColor: "text-accent-green" },
                          ADD_NOTE: { label: "Saved a Personal Study Note", emoji: "📝", bgColor: "bg-accent-purple/10", textColor: "text-accent-purple" },
                          SHARE_PUBLIC_NOTE: { label: "Shared a Resource Note", emoji: "📝", bgColor: "bg-accent-purple/10", textColor: "text-accent-purple" },
                          DAILY_LOGIN: { label: "Daily Check-in Streak Active", emoji: "🔥", bgColor: "bg-red-500/10", textColor: "text-red-400" },
                          STREAK_BONUS_7: { label: "7-Day Consistent Prep Bonus", emoji: "👑", bgColor: "bg-yellow-400/10", textColor: "text-yellow-400" },
                          STREAK_BONUS_30: { label: "30-Day Hardcore Prep Bonus", emoji: "👑", bgColor: "bg-yellow-400/10", textColor: "text-yellow-400" },
                          STREAK_BONUS_100: { label: "100-Day Centurion Prep Bonus", emoji: "👑", bgColor: "bg-yellow-400/10", textColor: "text-yellow-400" },
                        }[log.action] || { label: "Activity Completed", emoji: "✅", bgColor: "bg-accent-blue/10", textColor: "text-accent-blue" };

                        return (
                          <div key={log.id} className="flex gap-2.5 items-start p-2 hover:bg-bg-elevated/40 rounded-xl transition-colors">
                            <div className={`w-6 h-6 rounded-lg ${bgColor} flex items-center justify-center text-xs flex-shrink-0 ${textColor}`}>
                              {emoji}
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <p className="text-[11px] font-semibold text-text-primary">{label}</p>
                              <p className="text-[9px] text-text-muted">
                                Awarded +{log.xpAwarded} XP • {new Date(log.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 text-center space-y-1.5">
                        <div className="w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted text-xs">🔔</div>
                        <p className="text-[11px] font-medium text-text-secondary">All caught up!</p>
                        <p className="text-[9px] text-text-muted max-w-[200px]">No recent activity logs or notification updates to display.</p>
                      </div>
                    )}
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
