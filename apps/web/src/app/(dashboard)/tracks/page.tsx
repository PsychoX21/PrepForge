"use client";

/**
 * Tracks listing page — fetches all tracks for the user's active group.
 * Allows members to create, edit, or delete custom tracks.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star, FolderTree, AlertCircle, Plus, Edit2, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTracks, useCreateTrack, useUpdateTrack, useDeleteTrack, useCreateCategory } from "@/hooks/useTracks";
import { useAuthStore } from "@/stores/authStore";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

export default function TracksPage() {
  const { user } = useAuthStore();
  const memberships = user?.memberships ?? [];
  const defaultGroupId = memberships[0]?.groupId ?? null;
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  useEffect(() => {
    if (defaultGroupId && !selectedGroupId) {
      setSelectedGroupId(defaultGroupId);
    }
  }, [defaultGroupId, selectedGroupId]);

  const { data: tracks, isLoading, error, refetch } = useTracks(selectedGroupId);
  const groupId = selectedGroupId;

  const { create, isLoading: isCreating } = useCreateTrack();
  const { update, isLoading: isUpdating } = useUpdateTrack();
  const { remove, isLoading: isDeleting } = useDeleteTrack();
  const { create: createCategory } = useCreateCategory();

  const handleAddCategory = async (trackId: string) => {
    const name = prompt("Enter category name (e.g., Data Structures, System Design):");
    if (!name || !name.trim()) return;
    const icon = prompt("Enter category emoji icon (optional, e.g. 💻, 🧠, 📚):", "📚");
    try {
      await createCategory(trackId, { name: name.trim(), icon: icon?.trim() || "📚" });
      refetch();
    } catch (err) {
      console.error("Failed to create category:", err);
    }
  };

  const [showForm, setShowForm] = useState(false);
  const [editingTrack, setEditingTrack] = useState<any>(null);

  const [trackName, setTrackName] = useState("");
  const [trackDesc, setTrackDesc] = useState("");
  const [trackIcon, setTrackIcon] = useState("📚");
  const [trackColor, setTrackColor] = useState("#58a6ff");

  const openCreateForm = () => {
    setEditingTrack(null);
    setTrackName("");
    setTrackDesc("");
    setTrackIcon("📚");
    setTrackColor("#58a6ff");
    setShowForm(true);
  };

  const openEditForm = (track: any) => {
    setEditingTrack(track);
    setTrackName(track.name);
    setTrackDesc(track.description || "");
    setTrackIcon(track.icon || "📚");
    setTrackColor(track.color || "#58a6ff");
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupId || !trackName.trim()) return;

    try {
      if (editingTrack) {
        await update(editingTrack.id, {
          name: trackName,
          description: trackDesc,
          icon: trackIcon,
          color: trackColor,
        });
      } else {
        await create({
          groupId,
          name: trackName,
          description: trackDesc,
          icon: trackIcon,
          color: trackColor,
        });
      }
      refetch();
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (trackId: string) => {
    if (!confirm("Are you sure you want to delete this track and all its nested categories/resources?")) return;
    try {
      await remove(trackId);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg-elevated/20 p-4 rounded-2xl border border-border-default/30">
        <div>
          <h1 className="text-2xl font-bold font-[var(--font-outfit)] bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Study Tracks
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Explore the complete resource hierarchy. Click any category to drill down or customize.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {/* Active Group Dropdown */}
          {memberships.length > 0 && (
            <div className="flex items-center gap-2 bg-bg-primary px-3 py-1.5 rounded-xl border border-border-default">
              <span className="text-xs text-text-muted font-semibold">GROUP:</span>
              <select
                className="bg-transparent text-xs text-text-primary focus:outline-none cursor-pointer font-semibold"
                value={selectedGroupId || ""}
                onChange={(e) => {
                  setSelectedGroupId(e.target.value || null);
                }}
              >
                {memberships.map((m) => (
                  <option key={m.groupId} value={m.groupId} className="bg-bg-primary text-text-primary text-xs">
                    {m.group?.name || "Unnamed Group"}
                  </option>
                ))}
              </select>
            </div>
          )}
          {groupId && (
            <Button variant="primary" size="sm" onClick={openCreateForm} className="w-fit shadow-lg shadow-accent-blue/10">
              <Plus className="w-4 h-4 mr-1.5" /> Add Custom Track
            </Button>
          )}
        </div>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Card variant="glass">
            <CardContent className="py-6 space-y-4">
              <h3 className="text-lg font-bold font-[var(--font-outfit)]">
                {editingTrack ? "Edit Track" : "Create Custom Track"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-text-muted font-semibold block mb-1">TRACK NAME *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                      placeholder="e.g. System Design Mastery"
                      value={trackName}
                      onChange={(e) => setTrackName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-text-muted font-semibold block mb-1">COLOR</label>
                    <input
                      type="color"
                      className="w-full px-1 py-1 h-9 bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue cursor-pointer"
                      value={trackColor}
                      onChange={(e) => setTrackColor(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-text-muted font-semibold block mb-1">ICON</label>
                    <select
                      className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                      value={trackIcon}
                      onChange={(e) => setTrackIcon(e.target.value)}
                    >
                      <option value="📚">📚 Books</option>
                      <option value="💻">💻 Code</option>
                      <option value="📊">📊 Math/Finance</option>
                      <option value="📝">📝 Writing</option>
                      <option value="🚀">🚀 Rocket</option>
                      <option value="💡">💡 Idea</option>
                      <option value="🏆">🏆 Trophy</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-text-muted font-semibold block mb-1">DESCRIPTION</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                      placeholder="Brief overview of track contents..."
                      value={trackDesc}
                      onChange={(e) => setTrackDesc(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <Button variant="ghost" size="sm" type="button" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" type="submit" isLoading={isCreating || isUpdating}>
                    {editingTrack ? "Save Changes" : "Create Track"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {isLoading && (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-[200px]" />)}
        </div>
      )}

      {error && !isLoading && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Failed to load tracks</p>
            <p className="text-xs text-red-400/70 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {!isLoading && !error && !groupId && (
        <div className="text-center py-16 text-text-muted">
          <FolderTree className="w-10 h-10 mx-auto mb-4 opacity-40" />
          <p className="text-sm">You are not in any group yet.</p>
        </div>
      )}

      {!isLoading && !error && (tracks ?? []).map((track) => {
        const total = track.totalItems ?? 0;
        const done = track.completedItems ?? 0;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const trackColorStyle = track.color || "#58a6ff";

        return (
          <motion.div key={track.id} variants={fadeUp}>
            <Card variant="default" className="overflow-hidden">
              {/* Track header */}
              <div
                className="px-6 py-4 border-b border-border-default/50"
                style={{ borderLeftWidth: 4, borderLeftColor: trackColorStyle }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{track.icon || "📚"}</span>
                    <div>
                      <div className="flex items-center gap-2 group">
                        <h2 className="text-lg font-semibold text-text-primary font-[var(--font-outfit)]">{track.name}</h2>
                        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity ml-2">
                          <button
                            onClick={() => openEditForm(track)}
                            className="p-1 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                            title="Edit Track"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(track.id)}
                            className="p-1 hover:bg-red-500/10 rounded transition-colors text-red-400 hover:text-red-300"
                            title="Delete Track"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-text-muted">{track.description}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-xl font-bold" style={{ color: trackColorStyle }}>{pct}%</p>
                    <p className="text-xs text-text-muted">{done}/{total} items</p>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full" style={{ backgroundColor: trackColorStyle }} />
                </div>
              </div>

              {/* Categories */}
              <CardContent className="py-2">
                {(track.categories ?? []).map((cat) => {
                  const catTotal = cat.totalItems ?? 0;
                  const catDone = cat.completedItems ?? 0;
                  const catPct = catTotal > 0 ? Math.round((catDone / catTotal) * 100) : 0;
                  const isMustDo = (cat.resources ?? []).some((r) => r.isMustDo);
                  return (
                    <Link key={cat.id} href={`/tracks/${track.id}/${cat.id}`}
                      className="flex items-center gap-4 px-2 py-3 rounded-xl hover:bg-bg-elevated transition-colors group">
                      <FolderTree className="w-4 h-4 text-text-muted group-hover:text-text-secondary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary truncate">{cat.icon || ""} {cat.name}</span>
                          {isMustDo && (
                            <Badge variant="mustdo" className="text-[10px] px-1.5 py-0">
                              <Star className="w-2.5 h-2.5" /> Core
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-text-muted">
                          {(cat.resources ?? []).length} resources · {catDone}/{catTotal} items
                        </span>
                      </div>
                      <div className="w-20 hidden sm:block">
                        <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${catPct}%`, backgroundColor: trackColorStyle }} />
                        </div>
                      </div>
                      <span className="text-xs text-text-muted w-10 text-right">{catPct}%</span>
                      <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </CardContent>
              {groupId && (
                <div className="px-6 py-2 border-t border-border-default/10 bg-bg-elevated/5 flex justify-end">
                  <button
                    onClick={() => handleAddCategory(track.id)}
                    className="text-xs text-accent-blue hover:underline flex items-center gap-1 font-semibold py-1 px-2 rounded hover:bg-bg-elevated/30 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Category
                  </button>
                </div>
              )}
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
