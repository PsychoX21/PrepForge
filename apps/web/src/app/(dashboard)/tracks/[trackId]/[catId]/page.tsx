"use client";

/**
 * Category details and resources list page.
 * Allows members to view items, toggle progress/stars/watch-later,
 * and dynamically create, edit, or delete categories, resources, units, subunits, and items.
 */
import * as React from "react";
import { use, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  BookOpen,
  CheckCircle,
  Circle,
  Star,
  PlayCircle,
  HelpCircle,
  Flame,
  AlertCircle,
  ExternalLink,
  Clock,
  Settings,
  Plus,
  Edit2,
  Trash2,
  ListPlus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
 
function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-bg-elevated rounded-xl ${className}`} />;
}
 
import { useTrackTree } from "@/hooks/useTracks";
import { useUpdateProgress, usePlaylists, useCreatePlaylist, useAddToPlaylist, useRemoveFromPlaylist } from "@/hooks/useProgress";
import {
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
  useCreateResource,
  useUpdateResource,
  useDeleteResource,
  useCreateUnit,
  useUpdateUnit,
  useDeleteUnit,
  useCreateSubUnit,
  useUpdateSubUnit,
  useDeleteSubUnit,
  useCreateItem,
  useUpdateItem,
  useDeleteItem
} from "@/hooks/useTracks";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

interface PageProps {
  params: Promise<{ trackId: string; catId: string }>;
}

export default function CategoryDetailPage({ params }: PageProps) {
  const { trackId, catId } = use(params);
  const { data: track, isLoading, error, refetch } = useTrackTree(trackId);
  const { update } = useUpdateProgress();

  const { data: playlists, refetch: refetchPlaylists } = usePlaylists();
  const { create: createPlaylist } = useCreatePlaylist();
  const { add: addToPlaylist } = useAddToPlaylist();
  const { remove: removeFromPlaylist } = useRemoveFromPlaylist();

  const [activePlaylistItemId, setActivePlaylistItemId] = useState<string | null>(null);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  // Custom CRUD mutations
  const { create: createCategory } = useCreateCategory();
  const { update: updateCategory } = useUpdateCategory();
  const { remove: deleteCategory } = useDeleteCategory();

  const { create: createResource } = useCreateResource();
  const { update: updateResource } = useUpdateResource();
  const { remove: deleteResource } = useDeleteResource();

  const { create: createUnit } = useCreateUnit();
  const { update: updateUnit } = useUpdateUnit();
  const { remove: deleteUnit } = useDeleteUnit();

  const { create: createSubUnit } = useCreateSubUnit();
  const { update: updateSubUnit } = useUpdateSubUnit();
  const { remove: deleteSubUnit } = useDeleteSubUnit();

  const { create: createItem } = useCreateItem();
  const { update: updateItem } = useUpdateItem();
  const { remove: deleteItem } = useDeleteItem();

  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);
  const [localCategory, setLocalCategory] = useState<any>(null);
  
  // Customization Mode
  const [isEditMode, setIsEditMode] = useState(false);
  const [modalConfig, setModalConfig] = useState<any>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formIcon, setFormIcon] = useState("📚");
  const [formType, setFormType] = useState("ARTICLE");
  const [formUrl, setFormUrl] = useState("");
  const [formIsMustDo, setFormIsMustDo] = useState(false);
  const [formDifficulty, setFormDifficulty] = useState("EASY");

  // Sync with track load
  React.useEffect(() => {
    if (track) {
      const cat = track.categories?.find((c) => c.id === catId) ?? null;
      setLocalCategory(cat);
    }
  }, [track, catId]);

  const openModal = (config: any) => {
    setModalConfig(config);
    if (config.action === "edit" && config.initialData) {
      setFormName(config.initialData.name || "");
      setFormDesc(config.initialData.description || "");
      setFormIcon(config.initialData.icon || "📚");
      setFormType(config.initialData.type || "BOOK");
      setFormUrl(config.initialData.url || "");
      setFormIsMustDo(config.initialData.isMustDo ?? false);
      setFormDifficulty(config.initialData.difficulty || "EASY");
    } else {
      setFormName("");
      setFormDesc("");
      setFormIcon("📚");
      setFormType(config.type === "item" ? "QUESTION" : "BOOK");
      setFormUrl("");
      setFormIsMustDo(false);
      setFormDifficulty("EASY");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    try {
      if (modalConfig.type === "category") {
        if (modalConfig.action === "edit") {
          await updateCategory(modalConfig.id, { name: formName, description: formDesc, icon: formIcon });
        } else {
          await createCategory(trackId, { name: formName, description: formDesc, icon: formIcon });
        }
      } else if (modalConfig.type === "resource") {
        if (modalConfig.action === "edit") {
          await updateResource(modalConfig.id, { name: formName, description: formDesc, type: formType, url: formUrl, isMustDo: formIsMustDo });
        } else {
          await createResource(modalConfig.parentId, { name: formName, description: formDesc, type: formType, url: formUrl, isMustDo: formIsMustDo });
        }
      } else if (modalConfig.type === "unit") {
        if (modalConfig.action === "edit") {
          await updateUnit(modalConfig.id, { name: formName, description: formDesc });
        } else {
          await createUnit(modalConfig.parentId, { name: formName, description: formDesc });
        }
      } else if (modalConfig.type === "subunit") {
        if (modalConfig.action === "edit") {
          await updateSubUnit(modalConfig.id, { name: formName, description: formDesc });
        } else {
          await createSubUnit(modalConfig.parentId, { name: formName, description: formDesc });
        }
      } else if (modalConfig.type === "item") {
        if (modalConfig.action === "edit") {
          await updateItem(modalConfig.id, { name: formName, description: formDesc, type: formType, url: formUrl, difficulty: formDifficulty });
        } else {
          await createItem(modalConfig.parentId, { name: formName, description: formDesc, type: formType, url: formUrl, difficulty: formDifficulty });
        }
      }

      refetch();
      setModalConfig(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteElement = async (type: string, id: string) => {
    if (!confirm(`Are you sure you want to delete this ${type} and all its nested content?`)) return;
    try {
      if (type === "category") {
        await deleteCategory(id);
        window.location.href = "/tracks";
        return;
      } else if (type === "resource") {
        await deleteResource(id);
      } else if (type === "unit") {
        await deleteUnit(id);
      } else if (type === "subunit") {
        await deleteSubUnit(id);
      } else if (type === "item") {
        await deleteItem(id);
      }
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateItem = async (
    itemId: string,
    updates: {
      status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
      isStarred?: boolean;
      isWatchLater?: boolean;
    }
  ) => {
    // 1. Optimistic Update local state immediately
    setLocalCategory((prev: any) => {
      if (!prev) return null;
      return {
        ...prev,
        resources: prev.resources?.map((res: any) => ({
          ...res,
          units: res.units?.map((unit: any) => ({
            ...unit,
            subUnits: unit.subUnits?.map((sub: any) => ({
              ...sub,
              items: sub.items?.map((item: any) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    progress: {
                      ...(item.progress ?? {}),
                      ...updates,
                    },
                  };
                }
                return item;
              }),
            })),
          })),
        })),
      };
    });

    setUpdatingItemId(itemId);
    try {
      // 2. Persist changes to server in background
      await update(itemId, updates);
    } catch (err) {
      console.error("Failed to update item, rolling back state:", err);
      if (track) {
        const cat = track.categories?.find((c) => c.id === catId) ?? null;
        setLocalCategory(cat);
      }
    } finally {
      setUpdatingItemId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium">Failed to load category details</p>
          <p className="text-xs text-red-400/70 mt-0.5">{error}</p>
        </div>
      </div>
    );
  }

  if (!localCategory) {
    return (
      <div className="text-center py-16 text-text-muted space-y-4">
        <BookOpen className="w-10 h-10 mx-auto mb-4 opacity-40" />
        <p className="text-sm">Category not found.</p>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/tracks">Back to Tracks</Link>
        </Button>
      </div>
    );
  }

  // Calculate items stats
  let totalItems = 0;
  let doneItems = 0;
  localCategory.resources?.forEach((res: any) => {
    res.units?.forEach((unit: any) => {
      unit.subUnits?.forEach((sub: any) => {
        sub.items?.forEach((item: any) => {
          totalItems++;
          const status = item.progress?.status;
          if (status === "DONE") {
            doneItems++;
          }
        });
      });
    });
  });

  const completionPct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
      {/* Back button and Customization Mode Toggle */}
      <div className="flex items-center justify-between gap-4">
        <Link href="/tracks" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors group">
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Tracks
        </Link>
        <Button
          variant={isEditMode ? "primary" : "secondary"}
          size="sm"
          onClick={() => setIsEditMode(!isEditMode)}
          className="flex items-center gap-1.5"
        >
          <Settings className={`w-4 h-4 ${isEditMode ? "animate-spin" : ""}`} />
          {isEditMode ? "Exit Customization" : "Customize Study Path"}
        </Button>
      </div>

      {/* Category header */}
      <motion.div variants={fadeUp} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-elevated/80 to-bg-primary border border-border-default/40 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{localCategory.icon || "📚"}</span>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold font-[var(--font-outfit)]">{localCategory.name}</h1>
                {isEditMode && (
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => openModal({ type: "category", action: "edit", id: localCategory.id, initialData: localCategory })}
                      className="p-1 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                      title="Edit Category Name/Icon"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteElement("category", localCategory.id)}
                      className="p-1 hover:bg-red-500/10 rounded transition-colors text-red-400 hover:text-red-300"
                      title="Delete Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-text-secondary max-w-xl">{localCategory.description || "Master these resources to boost your interview and test preparation."}</p>
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <span className="text-2xl font-bold font-[var(--font-outfit)] bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              {completionPct}% Complete
            </span>
            <p className="text-xs text-text-muted mt-1">{doneItems} of {totalItems} items completed</p>
            <div className="w-36 mt-2 h-1.5 bg-bg-primary rounded-full overflow-hidden border border-border-default/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPct}%` }}
                className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dynamic Creation Modal Popup Overlay */}
      {modalConfig && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-lg bg-bg-primary border border-border-default rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-border-default/20 flex justify-between items-center bg-bg-elevated/20">
              <h3 className="text-md font-bold font-[var(--font-outfit)] capitalize">
                {modalConfig.action} {modalConfig.type}
              </h3>
              <button onClick={() => setModalConfig(null)} className="text-text-muted hover:text-text-primary text-sm">Cancel</button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="text-xs text-text-muted font-bold block mb-1">NAME / TITLE *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                  placeholder={`Enter ${modalConfig.type} name...`}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>

              {modalConfig.type === "category" && (
                <div>
                  <label className="text-xs text-text-muted font-bold block mb-1">ICON</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none"
                    placeholder="e.g. 📚, 💻, 🧠"
                    value={formIcon}
                    onChange={(e) => setFormIcon(e.target.value)}
                  />
                </div>
              )}

              {(modalConfig.type === "resource" || modalConfig.type === "item") && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-text-muted font-bold block mb-1">TYPE</label>
                    <select
                      className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                    >
                      {modalConfig.type === "resource" ? (
                        <>
                          <option value="BOOK">BOOK</option>
                          <option value="COURSE">COURSE</option>
                          <option value="WEBSITE">WEBSITE</option>
                          <option value="PROBLEM_SET">PROBLEM SET</option>
                          <option value="VIDEO_SERIES">VIDEO SERIES</option>
                          <option value="SLIDES">SLIDES</option>
                          <option value="NOTES">NOTES</option>
                          <option value="DOC">DOCUMENT</option>
                          <option value="TEMPLATE">TEMPLATE</option>
                          <option value="GUIDE">GUIDE</option>
                          <option value="COLLECTION">COLLECTION</option>
                          <option value="PRACTICE">PRACTICE RUN</option>
                        </>
                      ) : (
                        <>
                          <option value="CONCEPT">CONCEPT MASTER</option>
                          <option value="VIDEO">VIDEO UNIT</option>
                          <option value="EXERCISE">PRACTICE EXERCISE</option>
                          <option value="QUESTION">EXAM QUESTION</option>
                          <option value="PROBLEM">CODING PROBLEM</option>
                          <option value="READING">READING TASK</option>
                          <option value="PUZZLE">BRAIN TEASER</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-text-muted font-bold block mb-1">URL (OPTIONAL)</label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                      placeholder="https://example.com/item-link"
                      value={formUrl}
                      onChange={(e) => setFormUrl(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {modalConfig.type === "item" && (
                <div>
                  <label className="text-xs text-text-muted font-bold block mb-1">DIFFICULTY</label>
                  <select
                    className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value)}
                  >
                    <option value="EASY">EASY</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HARD">HARD</option>
                    <option value="DEADLY">DEADLY</option>
                  </select>
                </div>
              )}

              {modalConfig.type === "resource" && (
                <label className="flex items-center gap-2 text-xs text-text-secondary cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formIsMustDo}
                    onChange={(e) => setFormIsMustDo(e.target.checked)}
                    className="rounded border-border-default bg-bg-elevated text-accent-blue w-4 h-4"
                  />
                  Mark as Core Study / Must-Do
                </label>
              )}

              <div>
                <label className="text-xs text-text-muted font-bold block mb-1">DESCRIPTION (OPTIONAL)</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue resize-none"
                  placeholder="Provide useful context/instructions..."
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                />
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setModalConfig(null)}>
                  Close
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Save Element
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Resources & Items list */}
      <div className="space-y-8">
        {isEditMode && (
          <div className="flex justify-end p-2 bg-bg-elevated/5 border border-dashed border-border-default/40 rounded-xl mb-2">
            <button
              onClick={() => openModal({ type: "resource", action: "create", parentId: localCategory.id })}
              className="text-xs text-accent-blue hover:underline flex items-center gap-1.5 font-semibold py-1.5 px-3 rounded-lg hover:bg-bg-elevated transition-colors"
            >
              <Plus className="w-4 h-4" /> Add New Resource Section
            </button>
          </div>
        )}
        {localCategory.resources?.map((res: any) => (
          <motion.div key={res.id} variants={fadeUp} className="space-y-4">
            <div className="flex items-start justify-between border-b border-border-default/20 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold font-[var(--font-outfit)]">{res.name}</h2>
                  <Badge variant={res.isMustDo ? "mustdo" : "default"} className="text-[10px]">
                    {res.isMustDo ? "Core Study" : "Optional"}
                  </Badge>
                  {isEditMode && (
                    <div className="flex items-center gap-1 ml-2">
                      <button
                        onClick={() => openModal({ type: "unit", action: "create", parentId: res.id })}
                        className="p-1 hover:bg-bg-elevated rounded transition-colors text-accent-blue hover:text-accent-blue/80 flex items-center gap-0.5 text-[10px] font-semibold"
                        title="Add Unit"
                      >
                        <Plus className="w-3 h-3" /> Add Unit
                      </button>
                      <button
                        onClick={() => openModal({ type: "resource", action: "edit", id: res.id, initialData: res })}
                        className="p-1 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                        title="Edit Resource"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleDeleteElement("resource", res.id)}
                        className="p-1 hover:bg-red-500/10 rounded transition-colors text-red-400 hover:text-red-300"
                        title="Delete Resource"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-text-muted mt-1">{res.description}</p>
              </div>
              {res.url && (
                <Button variant="ghost" size="sm" asChild className="text-accent-blue">
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" /> Resource Link
                  </a>
                </Button>
              )}
            </div>

            {/* Units tree */}
            <div className="space-y-6">
              {res.units?.map((unit: any) => (
                <Card key={unit.id} variant="default" className="overflow-hidden border border-border-default/30 bg-bg-elevated/10">
                  <div className="px-5 py-3 border-b border-border-default/20 bg-bg-elevated/40 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">{unit.name}</h3>
                      {unit.description && <p className="text-xs text-text-muted mt-0.5">{unit.description}</p>}
                    </div>
                    {isEditMode && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openModal({ type: "subunit", action: "create", parentId: unit.id })}
                          className="px-2 py-0.5 hover:bg-bg-elevated rounded transition-colors text-accent-purple hover:text-accent-purple/80 flex items-center gap-0.5 text-[10px] font-semibold"
                          title="Add Subunit"
                        >
                          <Plus className="w-3 h-3" /> Add Subunit
                        </button>
                        <button
                          onClick={() => openModal({ type: "unit", action: "edit", id: unit.id, initialData: unit })}
                          className="p-1 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                          title="Edit Unit"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteElement("unit", unit.id)}
                          className="p-1 hover:bg-red-500/10 rounded transition-colors text-red-400"
                          title="Delete Unit"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-0 divide-y divide-border-default/10">
                    {unit.subUnits?.map((sub: any) => (
                      <div key={sub.id} className="p-4 sm:p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-medium text-text-secondary">{sub.name}</h4>
                            {isEditMode && (
                              <div className="flex items-center gap-1 ml-2">
                                <button
                                  onClick={() => openModal({ type: "item", action: "create", parentId: sub.id })}
                                  className="px-2 py-0.5 hover:bg-bg-elevated rounded transition-colors text-accent-green hover:text-accent-green/80 flex items-center gap-0.5 text-[10px] font-semibold"
                                  title="Add Item"
                                >
                                  <Plus className="w-3 h-3" /> Add Item
                                </button>
                                <button
                                  onClick={() => openModal({ type: "subunit", action: "edit", id: sub.id, initialData: sub })}
                                  className="p-1 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                                  title="Edit Subunit"
                                >
                                  <Edit2 className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleDeleteElement("subunit", sub.id)}
                                  className="p-1 hover:bg-red-500/10 rounded transition-colors text-red-400"
                                  title="Delete Subunit"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                          {sub.description && <span className="text-xs text-text-muted">{sub.description}</span>}
                        </div>

                        {/* Items listed */}
                        <div className="space-y-2">
                          {sub.items?.map((item: any) => {
                            const isStarred = item.progress?.isStarred ?? false;
                            const isWatchLater = item.progress?.isWatchLater ?? false;
                            const status = item.progress?.status ?? "NOT_STARTED";
                            
                            let typeIcon = <HelpCircle className="w-4 h-4 text-text-muted" />;
                            if (item.type === "VIDEO") typeIcon = <PlayCircle className="w-4 h-4 text-accent-blue" />;
                            if (item.type === "CONCEPT") typeIcon = <BookOpen className="w-4 h-4 text-accent-purple" />;
                            if (item.type === "QUESTION" || item.type === "PROBLEM") typeIcon = <Flame className="w-4 h-4 text-accent-orange" />;

                            let diffColor = "text-text-muted";
                            if (item.difficulty === "EASY") diffColor = "text-accent-green bg-accent-green/10 border-accent-green/20";
                            if (item.difficulty === "MEDIUM") diffColor = "text-accent-blue bg-accent-blue/10 border-accent-blue/20";
                            if (item.difficulty === "HARD") diffColor = "text-accent-purple bg-accent-purple/10 border-accent-purple/20";
                            if (item.difficulty === "DEADLY") diffColor = "text-red-400 bg-red-500/10 border-red-500/20";

                            return (
                              <div
                                key={item.id}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border transition-all ${
                                  status === "DONE"
                                    ? "bg-bg-elevated/10 border-accent-green/10"
                                    : "bg-bg-elevated/30 border-border-default/20 hover:border-border-default/40"
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="flex-shrink-0">{typeIcon}</div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      {item.url ? (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-primary hover:text-accent-blue transition-colors truncate underline decoration-dotted">
                                          {item.name}
                                        </a>
                                      ) : (
                                        <span className="text-sm font-medium text-text-primary truncate">{item.name}</span>
                                      )}
                                      {item.difficulty && (
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${diffColor}`}>
                                          {item.difficulty}
                                        </span>
                                      )}
                                      {isEditMode && (
                                        <div className="flex items-center gap-0.5 ml-2">
                                          <button
                                            onClick={() => openModal({ type: "item", action: "edit", id: item.id, initialData: item })}
                                            className="p-0.5 hover:bg-bg-elevated rounded transition-colors text-text-muted hover:text-text-secondary"
                                            title="Edit Item"
                                          >
                                            <Edit2 className="w-3 h-3" />
                                          </button>
                                          <button
                                            onClick={() => handleDeleteElement("item", item.id)}
                                            className="p-0.5 hover:bg-red-500/10 rounded transition-colors text-red-400"
                                            title="Delete Item"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    {item.description && <p className="text-xs text-text-muted mt-0.5 line-clamp-1">{item.description}</p>}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                                  {/* Star button */}
                                  <button
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isStarred
                                        ? "bg-yellow-400/10 border-yellow-400/20 text-yellow-400"
                                        : "bg-transparent border-border-default/20 text-text-muted hover:text-text-secondary"
                                    }`}
                                    onClick={() => handleUpdateItem(item.id, { isStarred: !isStarred })}
                                    disabled={updatingItemId === item.id}
                                    aria-label="Star item"
                                  >
                                    <Star className={`w-3.5 h-3.5 ${isStarred ? "fill-yellow-400" : ""}`} />
                                  </button>

                                  {/* Watch later button */}
                                  <button
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isWatchLater
                                        ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
                                        : "bg-transparent border-border-default/20 text-text-muted hover:text-text-secondary"
                                    }`}
                                    onClick={() => handleUpdateItem(item.id, { isWatchLater: !isWatchLater })}
                                    disabled={updatingItemId === item.id}
                                    aria-label="Queue item"
                                  >
                                    <Clock className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Add to playlist button */}
                                  <button
                                    className="p-1.5 rounded-lg border bg-transparent border-border-default/20 text-text-muted hover:text-text-secondary transition-colors"
                                    onClick={() => setActivePlaylistItemId(item.id)}
                                    aria-label="Add to custom list"
                                    title="Add to Playlist"
                                  >
                                    <ListPlus className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Mark done button */}
                                  {status === "DONE" ? (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-accent-green hover:text-red-400 transition-colors"
                                      onClick={() => handleUpdateItem(item.id, { status: "NOT_STARTED" })}
                                      isLoading={updatingItemId === item.id}
                                    >
                                      <CheckCircle className="w-4 h-4 mr-1 text-accent-green" /> Complete
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      onClick={() => handleUpdateItem(item.id, { status: "DONE" })}
                                      isLoading={updatingItemId === item.id}
                                    >
                                      Mark Complete
                                    </Button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}

        {isEditMode && (
          <div className="flex justify-center pt-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() => openModal({ type: "resource", action: "create", parentId: localCategory.id })}
              className="flex items-center gap-1.5"
            >
              <ListPlus className="w-4 h-4" /> Add Resource Block to Category
            </Button>
          </div>
        )}
      </div>

      {/* Save to Playlist Modal */}
      {activePlaylistItemId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm bg-bg-primary border border-border-default/80 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-border-default/20 pb-2.5">
              <h4 className="text-sm font-bold font-[var(--font-outfit)] text-text-primary">Save to...</h4>
              <button
                onClick={() => setActivePlaylistItemId(null)}
                className="text-text-muted hover:text-text-primary text-xs font-semibold"
              >
                Close
              </button>
            </div>

            {/* List of custom checklists/playlists */}
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1 no-scrollbar">
              {(playlists ?? []).length > 0 ? (
                (playlists ?? []).map((playlist) => {
                  const isChecked = playlist.items?.some((pi) => pi.itemId === activePlaylistItemId) ?? false;
                  return (
                    <label
                      key={playlist.id}
                      className="flex items-center gap-3 p-2 hover:bg-bg-elevated/40 rounded-xl cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={async (e) => {
                          if (e.target.checked) {
                            await addToPlaylist(playlist.id, activePlaylistItemId);
                          } else {
                            await removeFromPlaylist(playlist.id, activePlaylistItemId);
                          }
                          refetchPlaylists();
                        }}
                        className="w-4 h-4 rounded border-border-default bg-bg-elevated text-accent-blue focus:ring-accent-blue"
                      />
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-text-primary">{playlist.name}</p>
                        {playlist.description && (
                          <p className="text-[10px] text-text-muted line-clamp-1">{playlist.description}</p>
                        )}
                      </div>
                    </label>
                  );
                })
              ) : (
                <p className="text-xs text-text-muted text-center py-4">No custom playlists created yet.</p>
              )}
            </div>

            {/* Create new playlist inline */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!newPlaylistName.trim()) return;
                const created = await createPlaylist(newPlaylistName.trim());
                if (created) {
                  setNewPlaylistName("");
                  await addToPlaylist(created.id, activePlaylistItemId);
                  refetchPlaylists();
                }
              }}
              className="pt-3 border-t border-border-default/20 space-y-2"
            >
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Create New Playlist</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Playlist name..."
                  className="flex-1 px-2.5 py-1.5 text-xs bg-bg-elevated border border-border-default rounded-lg text-text-primary focus:outline-none focus:border-accent-blue"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  required
                />
                <Button type="submit" size="sm" variant="primary" className="py-1 px-3 text-xs">
                  Create
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
