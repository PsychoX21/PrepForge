"use client";

/**
 * Profile settings page.
 * Allows updating user profile info and executing sign out.
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, LogOut, Check, AlertCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";

const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const { setUser } = useAuthStore();

  const [displayName, setDisplayName] = useState(user?.displayName ?? "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl ?? "");
  
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) return;

    setIsSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const updated = await api.patch<any>("/users/me", {
        displayName: displayName.trim(),
        photoUrl: photoUrl.trim() || null,
      });

      // Update global auth store state
      if (user) {
        setUser({
          ...user,
          displayName: displayName.trim(),
          photoUrl: photoUrl.trim() || null,
        });
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Settings</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your account and preferences</p>
      </div>

      <motion.div variants={fadeUp}>
        <Card variant="glass">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                <User className="w-4.5 h-4.5 text-accent-blue" />
              </div>
              <div>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>Customize how you appear to your group members</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Enter display name"
                  required
                  className="w-full px-3.5 py-2.5 text-sm bg-bg-elevated border border-border-default/30 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Avatar Image URL
                </label>
                <input
                  type="url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full px-3.5 py-2.5 text-sm bg-bg-elevated border border-border-default/30 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/60 transition-colors font-mono text-xs"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2 text-xs text-accent-green bg-accent-green/10 p-3 rounded-xl border border-accent-green/20">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Profile updated successfully!</span>
                </div>
              )}

              <Button type="submit" variant="primary" size="md" isLoading={isSaving} className="w-full sm:w-auto">
                Save Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Gamification Stats Card */}
      <motion.div variants={fadeUp}>
        <Card variant="default">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-accent-purple" />
              </div>
              <div>
                <CardTitle>Gamification Status</CardTitle>
                <CardDescription>Your current level, experience points, and milestones</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-bg-elevated/40 p-4 rounded-xl border border-border-default/20">
              <p className="text-2xl font-bold text-accent-blue font-[var(--font-outfit)]">Lv. {user?.level ?? 1}</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">Current Level</p>
            </div>
            <div className="bg-bg-elevated/40 p-4 rounded-xl border border-border-default/20">
              <p className="text-2xl font-bold text-accent-purple font-[var(--font-outfit)]">{(user?.xp ?? 0).toLocaleString()}</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">Total Experience</p>
            </div>
            <div className="bg-bg-elevated/40 p-4 rounded-xl border border-border-default/20 col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-accent-orange font-[var(--font-outfit)]">{user?.streak ?? 0} days</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">Active Streak</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Account Settings */}
      <motion.div variants={fadeUp}>
        <Card variant="default" className="border-red-500/10">
          <CardHeader>
            <CardTitle className="text-base text-red-400">Account Management</CardTitle>
            <CardDescription>Perform destructive or session management actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="danger" size="md" onClick={logout} className="w-full sm:w-auto">
              <LogOut className="w-4 h-4" /> Sign Out from PrepForge
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
