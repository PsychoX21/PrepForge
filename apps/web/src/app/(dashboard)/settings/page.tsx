"use client";

/**
 * Profile settings page.
 */
import { motion } from "framer-motion";
import { User, Shield, Bell, Palette, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  { title: "Profile", description: "Manage your display name and avatar", icon: User },
  { title: "Privacy", description: "Control who can see your progress", icon: Shield },
  { title: "Notifications", description: "Configure alert preferences", icon: Bell },
  { title: "Appearance", description: "Theme and display settings", icon: Palette },
];

const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function SettingsPage() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold font-[var(--font-outfit)]">Settings</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your account and preferences</p>
      </div>

      {SECTIONS.map((section) => (
        <motion.div key={section.title} variants={fadeUp}>
          <Card variant="default">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center">
                  <section.icon className="w-4.5 h-4.5 text-text-secondary" />
                </div>
                <div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-muted">Settings panel coming soon.</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <motion.div variants={fadeUp}>
        <Button variant="danger" size="sm">
          <LogOut className="w-4 h-4" /> Sign Out
        </Button>
      </motion.div>
    </motion.div>
  );
}
