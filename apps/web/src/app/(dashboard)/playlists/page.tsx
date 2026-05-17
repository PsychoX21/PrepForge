"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListVideo, AlertCircle, Plus, Trash2, X, PlayCircle, FolderHeart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common";
import Link from "next/link";
import {
  usePlaylists,
  useCreatePlaylist,
  useDeletePlaylist,
  useRemoveFromPlaylist,
} from "@/hooks/useProgress";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}

function getDifficultyVariant(difficulty: string | null): "green" | "default" | "destructive" {
  if (difficulty === "EASY") return "green";
  if (difficulty === "HARD" || difficulty === "DEADLY") return "destructive";
  return "default";
}

export default function PlaylistsPage() {
  const { data: playlists, isLoading, error, refetch } = usePlaylists();
  const { create: createPlaylist, isLoading: creating } = useCreatePlaylist();
  const { remove: deletePlaylist } = useDeletePlaylist();
  const { remove: removeFromPlaylist } = useRemoveFromPlaylist();

  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");

  const handleCreate = async () => {
    if (!playlistName.trim()) return;
    const ok = await createPlaylist(playlistName.trim(), playlistDesc.trim() || undefined);
    if (ok) {
      setPlaylistName("");
      setPlaylistDesc("");
      setShowCreate(false);
      refetch();
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the playlist "${name}"?`)) return;
    const ok = await deletePlaylist(id);
    if (ok) {
      if (selectedPlaylistId === id) setSelectedPlaylistId(null);
      refetch();
    }
  };

  const handleRemoveItem = async (playlistId: string, itemId: string) => {
    const ok = await removeFromPlaylist(playlistId, itemId);
    if (ok) refetch();
  };

  const selectedPlaylist = (playlists ?? []).find((p) => p.id === selectedPlaylistId);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
            <ListVideo className="w-5 h-5 text-accent-blue" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-[var(--font-outfit)]">My Playlists</h1>
            <p className="text-sm text-text-secondary">
              {isLoading ? "Loading..." : `${(playlists ?? []).length} custom playlists`}
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Create Playlist
        </Button>
      </div>

      {showCreate && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-bg-elevated border border-border-default/40 rounded-2xl max-w-md">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-text-muted font-bold block mb-1">PLAYLIST NAME</label>
              <input
                type="text"
                placeholder="E.g., Hard Probability Practice"
                className="w-full px-3 py-2 text-sm bg-bg-primary border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-xs text-text-muted font-bold block mb-1">DESCRIPTION (OPTIONAL)</label>
              <textarea
                placeholder="E.g., High frequency quant brainteasers"
                className="w-full px-3 py-2 text-sm bg-bg-primary border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue resize-none"
                rows={2}
                value={playlistDesc}
                onChange={(e) => setPlaylistDesc(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="secondary" size="sm" onClick={() => setShowCreate(false)}>
                Cancel
              </Button>
              <Button type="button" variant="primary" size="sm" disabled={creating} onClick={handleCreate}>
                Create
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-32" />)}
        </div>
      )}

      {!isLoading && !error && (playlists ?? []).length === 0 && (
        <EmptyState title="No playlists yet" description="Create a playlist above or add study items using the playlist icon inside study tracks!" />
      )}

      {!isLoading && !error && (playlists ?? []).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Playlists grid */}
          <div className="md:col-span-1 space-y-3">
            {(playlists ?? []).map((playlist) => (
              <motion.div key={playlist.id} variants={fadeUp}>
                <Card
                  variant={selectedPlaylistId === playlist.id ? "glass" : "interactive"}
                  className={`cursor-pointer transition-all border ${
                    selectedPlaylistId === playlist.id ? "border-accent-blue" : "border-border-default/40"
                  }`}
                  onClick={() => setSelectedPlaylistId(playlist.id)}
                >
                  <CardHeader className="p-4 flex flex-row items-start justify-between gap-2">
                    <div className="space-y-1 min-w-0">
                      <CardTitle className="text-sm font-bold truncate">{playlist.name}</CardTitle>
                      {playlist.description && (
                        <CardDescription className="text-xs truncate">{playlist.description}</CardDescription>
                      )}
                      <div className="pt-2">
                        <Badge variant="default" className="text-[10px] bg-accent-blue/10 text-accent-blue border-none">
                          {playlist.items?.length ?? 0} items
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(playlist.id, playlist.name);
                      }}
                      className="hover:text-red-400 text-text-muted transition-colors flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Playlist items display */}
          <div className="md:col-span-2 space-y-4">
            {selectedPlaylist ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-default/20 pb-3">
                  <div>
                    <h2 className="text-lg font-bold font-[var(--font-outfit)]">{selectedPlaylist.name}</h2>
                    {selectedPlaylist.description && (
                      <p className="text-xs text-text-muted mt-0.5">{selectedPlaylist.description}</p>
                    )}
                  </div>
                  <Badge variant="green" className="text-xs">
                    {(selectedPlaylist.items ?? []).length} Items Loaded
                  </Badge>
                </div>

                {(selectedPlaylist.items ?? []).length > 0 ? (
                  <div className="space-y-2">
                    {selectedPlaylist.items.map((pi) => (
                      <motion.div key={pi.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                        <Card variant="interactive" className="py-0">
                          <CardContent className="py-3 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 min-w-0">
                              <FolderHeart className="w-4 h-4 text-accent-blue flex-shrink-0" />
                              <div className="min-w-0">
                                {pi.item?.subUnit?.unit?.resource?.category?.trackId && pi.item?.subUnit?.unit?.resource?.category?.id ? (
                                  <Link
                                    href={`/tracks/${pi.item.subUnit.unit.resource.category.trackId}/${pi.item.subUnit.unit.resource.category.id}`}
                                    className="text-sm font-semibold text-text-primary hover:text-accent-blue hover:underline transition-colors truncate block"
                                  >
                                    {pi.item?.name}
                                  </Link>
                                ) : (
                                  <p className="text-sm font-semibold text-text-primary truncate">{pi.item?.name}</p>
                                )}
                                <p className="text-[10px] text-text-muted capitalize">
                                  {pi.item?.type?.toLowerCase() || "item"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {pi.item?.difficulty && (
                                <Badge variant={getDifficultyVariant(pi.item.difficulty)} className="text-[10px]">
                                  {pi.item.difficulty}
                                </Badge>
                              )}
                              <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => handleRemoveItem(selectedPlaylist.id, pi.itemId)}
                                className="hover:text-red-400 text-text-muted transition-colors"
                                title="Remove from playlist"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-text-muted text-center py-10">
                    This playlist is currently empty. Add items from the Study Tracks page!
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-bg-elevated/10 border border-dashed border-border-default rounded-2xl text-center p-6">
                <ListVideo className="w-8 h-8 text-text-muted opacity-40 mb-3" />
                <h3 className="text-sm font-semibold text-text-primary">No playlist selected</h3>
                <p className="text-xs text-text-muted max-w-xs mt-1">
                  Select a custom playlist from the sidebar on the left to see and manage its items.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
