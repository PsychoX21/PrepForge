"use client";

/**
 * Group details detail page.
 * Displays details of a single group, including member listings, roles, stats, and invite info.
 */
import * as React from "react";
import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  Users,
  Copy,
  Check,
  Calendar,
  ShieldAlert,
  Flame,
  Award,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGroupDetails } from "@/hooks/useGroups";
import { useAuthStore } from "@/stores/authStore";

interface PageProps {
  params: Promise<{ id: string }>;
}

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function GroupDetailPage({ params }: PageProps) {
  const { id: groupId } = use(params);
  const { user: currentUser } = useAuthStore();
  const { data: group, isLoading, error } = useGroupDetails(groupId);
  const [copiedCode, setCopiedCode] = React.useState(false);

  const handleCopyCode = () => {
    if (!group?.inviteCode) return;
    navigator.clipboard.writeText(group.inviteCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-32 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-48 md:col-span-2" />
          <Skeleton className="h-48" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium">Failed to load group details</p>
          <p className="text-xs text-red-400/70 mt-0.5">{error}</p>
        </div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="text-center py-16 text-text-muted space-y-4">
        <Users className="w-10 h-10 mx-auto mb-4 opacity-40" />
        <p className="text-sm">Group not found.</p>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/groups">Back to Groups</Link>
        </Button>
      </div>
    );
  }

  const creationDate = new Date(group.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      {/* Back button */}
      <div>
        <Link href="/groups" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors group">
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Groups
        </Link>
      </div>

      {/* Group Header Card */}
      <motion.div variants={fadeUp}>
        <Card variant="glass" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-blue/10 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none" />
          <CardHeader className="relative pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg shadow-accent-blue/10">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-[var(--font-outfit)]">{group.name}</h1>
                  <p className="text-sm text-text-secondary mt-0.5">{group.description || "Study together, solve problems, and prepare effectively."}</p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2 bg-bg-elevated/40 px-3.5 py-2 rounded-xl border border-border-default/20 w-fit">
                <span className="text-xs text-text-muted">Invite:</span>
                <code className="text-xs font-mono font-bold text-accent-blue">{group.inviteCode}</code>
                <button
                  onClick={handleCopyCode}
                  className="p-1 hover:bg-bg-tertiary rounded transition-colors text-text-muted hover:text-text-secondary"
                  aria-label="Copy code"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="border-t border-border-default/20 pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Created {creationDate}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> {group.members?.length ?? 0} members active
            </span>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Members List */}
        <motion.div variants={fadeUp} className="md:col-span-2 space-y-4">
          <Card variant="default">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold font-[var(--font-outfit)]">Group Members</CardTitle>
              <CardDescription>Collaborative peers preparing alongside you</CardDescription>
            </CardHeader>
            <CardContent className="divide-y divide-border-default/10 p-0">
              {group.members?.map((m) => {
                const isMe = m.userId === currentUser?.id;
                const memberUser = m.user;
                return (
                  <div key={m.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-bg-elevated/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center font-bold text-white text-base overflow-hidden">
                        {memberUser?.photoUrl ? (
                          <img src={memberUser.photoUrl} alt={memberUser.displayName} className="w-full h-full object-cover" />
                        ) : (
                          memberUser?.displayName?.charAt(0) || "U"
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary">
                            {memberUser?.displayName ?? "User"}{isMe && " (You)"}
                          </span>
                          <Badge variant={m.role === "OWNER" ? "purple" : m.role === "ADMIN" ? "blue" : "default"} className="text-[9px] px-1 py-0">
                            {m.role}
                          </Badge>
                        </div>
                        <p className="text-xs text-text-muted mt-0.5">Joined on {new Date(m.joinedAt).toLocaleDateString("en-US")}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 flex-shrink-0 text-right">
                      {memberUser?.streak !== undefined && memberUser.streak > 0 && (
                        <div className="flex items-center gap-1 text-xs text-accent-orange font-medium">
                          <Flame className="w-3.5 h-3.5 fill-accent-orange" /> {memberUser.streak}d streak
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-bold text-accent-blue font-[var(--font-outfit)]">
                          {(memberUser?.xp ?? 0).toLocaleString()} XP
                        </span>
                        <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Level {memberUser?.level ?? 1}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Info & Settings Column */}
        <motion.div variants={fadeUp} className="space-y-4">
          <Card variant="default">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wider text-text-muted font-bold">Group Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">XP Leaderboard active</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Top members are listed live on the main leaderboard.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue flex-shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">Streak Boost Enabled</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Track daily studies together to keep streaks alive.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
