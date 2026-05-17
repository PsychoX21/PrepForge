"use client";

/**
 * War Room page — live presence and focus broadcasting.
 * Connects to NestJS gateway and displays group members dynamically.
 */
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Radio, Circle, BookOpen, Clock, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSocket } from "@/hooks";
import { useSocketStore } from "@/stores/socketStore";
import { useLeaderboard } from "@/hooks/useGroups";
import { useAuthStore } from "@/stores/authStore";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

export default function WarRoomPage() {
  const { user } = useAuthStore();
  const defaultGroupId = user?.memberships?.[0]?.groupId ?? null;

  const { isConnected, emit, on } = useSocket();
  const { onlineUsers, setOnlineUsers, removeOnlineUser, updateUserFocus } = useSocketStore();
  const { data: leaderboard, isLoading: isLeaderboardLoading } = useLeaderboard(defaultGroupId);

  const [focusInput, setFocusInput] = useState("");
  const [broadcastedFocus, setBroadcastedFocus] = useState<string | null>(null);

  // Join group channel and subscribe to realtime events
  useEffect(() => {
    if (!defaultGroupId || !isConnected) return;

    // Join the group room
    emit("join:group", { groupId: defaultGroupId });

    // Sync active presence list
    const unsubscribeList = on("presence:list", (list: any) => {
      setOnlineUsers(list);
    });

    // Update specific user focus
    const unsubscribeUpdate = on("presence:update", (update: any) => {
      updateUserFocus(update.userId, update.currentFocus);
    });

    // User went offline
    const unsubscribeOffline = on("user:offline", (data: any) => {
      removeOnlineUser(data.userId);
    });

    return () => {
      unsubscribeList();
      unsubscribeUpdate();
      unsubscribeOffline();
    };
  }, [defaultGroupId, isConnected, emit, on, setOnlineUsers, updateUserFocus, removeOnlineUser]);

  // Set current user's locally broadcasted focus if present in onlineUsers list
  useEffect(() => {
    if (user?.id) {
      const self = onlineUsers.find((u) => u.userId === user.id);
      if (self?.currentFocus) {
        setBroadcastedFocus(self.currentFocus);
      }
    }
  }, [onlineUsers, user]);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!focusInput.trim()) return;
    emit("presence:focus", { currentFocus: focusInput.trim() });
    updateUserFocus(user?.id ?? "", focusInput.trim());
    setBroadcastedFocus(focusInput.trim());
    setFocusInput("");
  };

  // Merge socket presence list with leaderboard profiles
  const activeMembers = useMemo(() => {
    if (!leaderboard) return [];
    return onlineUsers.map((online) => {
      const match = leaderboard.find((entry) => entry.user.id === online.userId);
      return {
        id: online.userId,
        name: match?.user.displayName ?? (online.userId === user?.id ? user.displayName : "Grinder"),
        focus: online.currentFocus ?? "Just joined the War Room",
        level: match?.user.level ?? (online.userId === user?.id ? user.level : 1),
        photoUrl: match?.user.photoUrl ?? null,
      };
    });
  }, [onlineUsers, leaderboard, user]);

  // Determine offline group members
  const offlineMembers = useMemo(() => {
    if (!leaderboard) return [];
    const onlineIds = new Set(onlineUsers.map((u) => u.userId));
    return leaderboard
      .filter((entry) => !onlineIds.has(entry.user.id))
      .map((entry) => ({
        id: entry.user.id,
        name: entry.user.displayName,
        level: entry.user.level,
        photoUrl: entry.user.photoUrl,
        lastActive: entry.user.lastActive,
      }));
  }, [onlineUsers, leaderboard]);

  if (isLeaderboardLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3 text-text-secondary text-sm">
        <Loader2 className="w-6 h-6 animate-spin text-accent-blue" />
        Synchronizing War Room...
      </div>
    );
  }

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
            <Radio className={`w-5 h-5 ${isConnected ? "text-accent-green animate-pulse" : "text-text-muted"}`} />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-[var(--font-outfit)]">War Room</h1>
            <p className="text-sm text-text-secondary">
              See who&apos;s grinding right now. Real-time focus broadcasting.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <Badge variant="default" className="text-xs border border-border-default/40">
            {isConnected ? "🟢 Live" : "🔴 Reconnecting"}
          </Badge>
          <Badge variant="green">
            <Circle className="w-2 h-2 fill-accent-green" /> {activeMembers.length} Online
          </Badge>
        </div>
      </div>

      {/* Broadcast Focus Input */}
      {isConnected && (
        <Card variant="glass" className="border-accent-blue/15">
          <CardContent className="py-4">
            <form onSubmit={handleBroadcast} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={focusInput}
                onChange={(e) => setFocusInput(e.target.value)}
                placeholder="What topic/problem are you working on right now?"
                className="flex-1 bg-bg-elevated text-text-primary placeholder:text-text-muted text-sm px-4 py-2.5 rounded-xl border border-border-default/30 focus:outline-none focus:border-accent-blue/50"
              />
              <Button type="submit" variant="primary" size="md" className="sm:w-auto w-full">
                Broadcast Focus ⚡
              </Button>
            </form>
            {broadcastedFocus && (
              <p className="text-xs text-accent-blue mt-2.5 flex items-center gap-1.5 px-1">
                <BookOpen className="w-3.5 h-3.5" /> Currently broadcasting: &ldquo;{broadcastedFocus}&rdquo;
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Online Users */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
          <Circle className="w-2 h-2 fill-accent-green" /> Currently Active
        </h2>
        {activeMembers.length === 0 ? (
          <p className="text-sm text-text-muted italic py-2">No other group members are currently active.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeMembers.map((member) => (
              <motion.div key={member.id} variants={fadeUp}>
                <Card variant="glow" className="border-accent-green/10">
                  <CardContent className="py-4">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        {member.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={member.photoUrl}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover border border-border-default"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold text-white">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent-green rounded-full border border-bg-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-text-primary truncate">{member.name}</p>
                          <span className="text-xs text-text-muted flex-shrink-0">Lv.{member.level}</span>
                        </div>
                        <div className="mt-1.5 flex items-start gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-text-secondary leading-relaxed break-words">
                            {member.focus}
                          </p>
                        </div>
                        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-text-muted">
                          <Clock className="w-3 h-3" /> Active Now
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Offline Users */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-text-muted flex items-center gap-2">
          <Circle className="w-2 h-2 fill-text-muted" /> Offline
        </h2>
        {offlineMembers.length === 0 ? (
          <p className="text-sm text-text-muted italic py-1">All group members are active!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {offlineMembers.map((member) => (
              <Card key={member.id} variant="default" className="opacity-55 hover:opacity-75 transition-opacity">
                <CardContent className="py-3 flex items-center gap-3">
                  {member.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover border border-border-default"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-sm font-medium text-text-muted">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-secondary truncate">{member.name}</p>
                    <p className="text-xs text-text-muted">Lv.{member.level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
