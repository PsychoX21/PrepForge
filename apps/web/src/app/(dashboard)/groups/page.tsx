"use client";

/**
 * Groups page — fetches user's groups and provides create/join actions.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Plus, Copy, UserPlus, Settings, ExternalLink, AlertCircle, Check, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGroups, useCreateGroup, useJoinGroup, useDeleteGroup, useUpdateGroup } from "@/hooks/useGroups";
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
  const { remove: deleteGroup, isLoading: deleting } = useDeleteGroup();
  const { update: updateGroup, isLoading: updating } = useUpdateGroup();

  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [createName, setCreateName] = useState("");
  const [createDesc, setCreateDesc] = useState("");
  const [useDefault, setUseDefault] = useState(true);
  const [inviteCode, setInviteCode] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Settings Modal State
  const [showSettings, setShowSettings] = useState(false);
  const [settingsGroup, setSettingsGroup] = useState<any>(null);
  const [settingsName, setSettingsName] = useState("");
  const [settingsDesc, setSettingsDesc] = useState("");

  const openSettings = (group: any) => {
    setSettingsGroup(group);
    setSettingsName(group.name);
    setSettingsDesc(group.description || "");
    setShowSettings(true);
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settingsGroup || !settingsName.trim()) return;
    const ok = await updateGroup(settingsGroup.id, {
      name: settingsName.trim(),
      description: settingsDesc.trim() || undefined,
    });
    if (ok) {
      refetch();
      setShowSettings(false);
      setSettingsGroup(null);
    }
  };

  const handleDeleteGroup = async (groupId: string, groupName: string) => {
    if (!confirm(`WARNING: Are you sure you want to permanently delete the group "${groupName}"?\n\nThis will instantly delete all custom tracks, categories, items, and study progress logs for all members of this group! This action is absolute and CANNOT be undone.`)) {
      return;
    }
    const ok = await deleteGroup(groupId);
    if (ok) {
      refetch();
    }
  };

  const handleCreate = async () => {
    if (!createName.trim()) return;
    const result = await create({
      name: createName,
      description: createDesc,
      useDefaultContent: useDefault,
    });
    if (result) {
      refetch();
      setShowCreate(false);
      setCreateName("");
      setCreateDesc("");
      setUseDefault(true);
    }
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
              <label className="flex items-center gap-2 text-xs text-text-secondary cursor-pointer select-none py-1">
                <input
                  type="checkbox"
                  checked={useDefault}
                  onChange={(e) => setUseDefault(e.target.checked)}
                  className="rounded border-border-default bg-bg-elevated text-accent-blue focus:ring-accent-blue w-4 h-4"
                />
                Populate Group with default study tracks (LeetCode, SWE Core Systems)
              </label>
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
              const role = group.members?.[0]?.role ?? "MEMBER";
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
                          <Users className="w-3.5 h-3.5" /> {group._count?.members ?? (group.members ?? []).length} members
                        </span>
                        <span>·</span>
                        <span>{group._count?.tracks ?? 0} tracks</span>
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
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => openSettings(group)}
                            className="hover:text-accent-blue text-text-muted transition-colors"
                            title="Group Settings"
                          >
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

      {/* Group Settings Modal */}
      {showSettings && settingsGroup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-bg-primary border border-border-default/80 rounded-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-border-default/20 pb-3">
              <h3 className="text-lg font-bold font-[var(--font-outfit)]">Group Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-text-muted hover:text-text-primary text-sm font-semibold"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="text-xs text-text-muted font-bold block mb-1">GROUP NAME</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                  value={settingsName}
                  onChange={(e) => setSettingsName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-xs text-text-muted font-bold block mb-1">DESCRIPTION</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue resize-none"
                  value={settingsDesc}
                  onChange={(e) => setSettingsDesc(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border-default/20">
                <Button variant="secondary" size="sm" type="button" onClick={() => setShowSettings(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit" disabled={updating}>
                  Save Changes
                </Button>
              </div>
            </form>

            {/* Danger Zone */}
            <div className="pt-4 border-t border-red-500/20 space-y-2">
              <p className="text-xs text-red-400 font-bold uppercase tracking-wider">Danger Zone</p>
              <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-text-primary">Delete this group</p>
                  <p className="text-[10px] text-text-muted">Permanently erase this group, custom tracks, and progress.</p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setShowSettings(false);
                    handleDeleteGroup(settingsGroup.id, settingsGroup.name);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white border-none py-1.5 px-3 text-xs"
                >
                  Delete Group
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
