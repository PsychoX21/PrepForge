"use client";

import { useEffect, useState } from "react";
import { Search, X, BookOpen, Trophy, Settings, Users, ArrowRight } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { useTracks } from "@/hooks/useTracks";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function SearchModal() {
  const { isSearchOpen, setSearchOpen } = useUIStore();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { user } = useAuthStore();
  const groupId = user?.memberships?.[0]?.groupId ?? null;
  const { data: tracks } = useTracks(groupId);

  const navigationItems = [
    { name: "Dashboard & Home", category: "Navigation", path: "/dashboard", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Global Leaderboard", category: "Navigation", path: "/leaderboard", icon: <Trophy className="w-4 h-4 text-yellow-400" /> },
    { name: "Study Tracks & Resources", category: "Navigation", path: "/tracks", icon: <BookOpen className="w-4 h-4 text-accent-blue" /> },
    { name: "Groups & Study Rooms", category: "Navigation", path: "/groups", icon: <Users className="w-4 h-4 text-accent-purple" /> },
    { name: "Settings & Profile", category: "Navigation", path: "/settings", icon: <Settings className="w-4 h-4" /> },
  ];

  const trackItems = (tracks ?? []).map((t) => ({
    name: t.name,
    category: "Study Track",
    path: "/tracks",
    icon: <span className="text-sm">{t.icon || "📚"}</span>
  }));

  const categoryItems = (tracks ?? []).flatMap((t) =>
    (t.categories ?? []).map((c) => ({
      name: c.name,
      category: `Category in ${t.name}`,
      path: `/tracks/${t.id}/${c.id}`,
      icon: <span className="text-sm">{c.icon || "📚"}</span>
    }))
  );

  const items = [...navigationItems, ...trackItems, ...categoryItems];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key?.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(!isSearchOpen);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  const filteredItems = query.trim() === ""
    ? items
    : items.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (path: string) => {
    setSearchOpen(false);
    setQuery("");
    router.push(path);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-lg bg-bg-primary border border-border-default/80 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border-default/50 bg-bg-elevated/20">
              <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
              <input
                autoFocus
                type="text"
                className="w-full bg-transparent text-sm text-text-primary focus:outline-none placeholder-text-muted"
                placeholder="Search tracks, categories, navigation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 hover:bg-bg-elevated rounded-lg transition-colors text-text-muted hover:text-text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <p className="text-xs text-text-muted p-4 text-center">No results found for &ldquo;{query}&rdquo;</p>
              ) : (
                filteredItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item.path)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-bg-elevated transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 bg-bg-elevated rounded-lg group-hover:bg-bg-primary transition-colors">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{item.name}</p>
                        <p className="text-[10px] text-text-muted">{item.category}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2 bg-bg-elevated/40 border-t border-border-default/50 text-[10px] text-text-muted flex items-center justify-between">
              <span>Press <kbd className="font-mono">ESC</kbd> to close</span>
              <span>Use mouse or press <kbd className="font-mono">↵</kbd> to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
