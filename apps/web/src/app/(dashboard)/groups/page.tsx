"use client";

/**
 * Groups page — fetches user's groups and provides create/join actions.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Plus, Copy, UserPlus, Settings, ExternalLink, AlertCircle, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGroups, useCreateGroup, useJoinGroup } from "@/hooks/useGroups";
import Link from "next/link";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function GroupsPage() {
  const { data: groups, isLoading, error, refetch } = useGroups();
  const { create, isLoading: creating } = useCreateGroup();
  const { join, isLoading: joining } = useJoinGroup();

  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [createName, setCreateName] = useState("");
  const [createDesc, setCreateDesc] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!createName.trim()) return;
    const result = await create({ name: createName, description: createDesc });
    if (result) { refetch(); setShowCreate(false); setCreateName(""); setCreateDesc(""); }
  };

  const handleJoin = async () => {
    if (!inviteCode.trim()) return;
    const result = await join(inviteCode.trim());
    if (result) { refetch(); setShowJoin(false); setInviteCode(""); }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Your Groups</h1>
          <p className="text-sm text-text-secondary mt-1">
            Create or join study groups for collaborative preparation
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => { setShowJoin(!showJoin); setShowCreate(false); }}>
            <UserPlus className="w-4 h-4" /> Join Group
          </Button>
          <Button variant="primary" size="sm" onClick={() => { setShowCreate(!showCreate); setShowJoin(false); }}>
            <Plus className="w-4 h-4" /> Create Group
          </Button>
        </div>
      </div>

      {/* Create form */}
      {showCreate && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Card variant="glass">
            <CardContent className="py-4 space-y-3">
              <p className="text-sm font-medium text-text-primary">Create a New Group</p>
              <input
                className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue"
                placeholder="Group name *" value={createName} onChange={(e) => setCreateName(e.target.value)} />
              <input
                className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue"
                placeholder="Description (optional)" value={createDesc} onChange={(e) => setCreateDesc(e.target.value)} />
              <div className="flex gap-2">
                <Button variant="primary" size="sm" onClick={handleCreate} isLoading={creating}>Create</Button>
                <Button variant="ghost" size="sm" onClick={() => setShowCreate(false)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Join form */}
      {showJoin && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Card variant="glass">
            <CardContent className="py-4 space-y-3">
              <p className="text-sm font-medium text-text-primary">Join via Invite Code</p>
              <input
                className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue font-mono"
                placeholder="Enter invite code" value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} />
              <div className="flex gap-2">
                <Button variant="primary" size="sm" onClick={handleJoin} isLoading={joining}>Join</Button>
                <Button variant="ghost" size="sm" onClick={() => setShowJoin(false)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
          ? Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} className="h-[220px]" />)
          : (groups ?? []).map((group) => {
              const myMembership = (group.members ?? []).find(() => true); // first membership
              const role = myMembership?.role ?? "MEMBER";
              return (
                <motion.div key={group.id} variants={fadeUp}>
                  <Card variant="interactive" className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle>{group.name}</CardTitle>
                            <CardDescription>{group.description}</CardDescription>
                          </div>
                        </div>
                        <Badge variant={role === "OWNER" ? "purple" : "default"}>{role}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" /> {group.memberCount ?? (group.members ?? []).length} members
                        </span>
                        <span>·</span>
                        <span>{(group.tracks ?? []).length} tracks</span>
                      </div>

                {/* Invite code */}
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-bg-elevated border border-border-default">
                        <span className="text-xs text-text-muted">Invite:</span>
                        <code className="text-xs font-mono text-accent-blue flex-1">{group.inviteCode}</code>
                        <button
                          className="p-1 hover:bg-bg-tertiary rounded transition-colors"
                          onClick={() => copyCode(group.inviteCode)}
                          aria-label="Copy invite code"
                        >
                          {copiedCode === group.inviteCode
                            ? <Check className="w-3.5 h-3.5 text-accent-green" />
                            : <Copy className="w-3.5 h-3.5 text-text-muted" />}
                        </button>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="secondary" size="sm" className="flex-1" asChild>
                          <Link href={`/groups/${group.id}`}>
                            <ExternalLink className="w-3.5 h-3.5" /> Open
                          </Link>
                        </Button>
                        {role === "OWNER" && (
                          <Button variant="ghost" size="icon-sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
        {!isLoading && (groups ?? []).length === 0 && !error && (
          <div className="col-span-2 text-center py-16 text-text-muted">
            <Users className="w-10 h-10 mx-auto mb-4 opacity-40" />
            <p className="text-sm">You haven&apos;t joined any groups yet.</p>
            <p className="text-xs mt-1">Create one or use an invite code to get started.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
