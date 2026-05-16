"use client";

/**
 * Groups page — manage study groups and invites.
 */
import { motion } from "framer-motion";
import { Users, Plus, Copy, UserPlus, Settings, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MOCK_GROUPS = [
  {
    id: "1",
    name: "IIT Prep Squad",
    description: "Intern preparation for quant and SWE roles",
    memberCount: 8,
    trackCount: 3,
    inviteCode: "ABc12DeF",
    role: "OWNER",
  },
  {
    id: "2",
    name: "CP Grinders",
    description: "Daily competitive programming practice",
    memberCount: 12,
    trackCount: 1,
    inviteCode: "xYz78PqR",
    role: "MEMBER",
  },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

export default function GroupsPage() {
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
          <Button variant="secondary" size="sm">
            <UserPlus className="w-4 h-4" /> Join Group
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4" /> Create Group
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_GROUPS.map((group) => (
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
                  <Badge variant={group.role === "OWNER" ? "purple" : "default"}>
                    {group.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {group.memberCount} members
                  </span>
                  <span>·</span>
                  <span>{group.trackCount} tracks</span>
                </div>

                {/* Invite code */}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-bg-elevated border border-border-default">
                  <span className="text-xs text-text-muted">Invite:</span>
                  <code className="text-xs font-mono text-accent-blue flex-1">
                    {group.inviteCode}
                  </code>
                  <button className="p-1 hover:bg-bg-tertiary rounded transition-colors" aria-label="Copy invite code">
                    <Copy className="w-3.5 h-3.5 text-text-muted" />
                  </button>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="secondary" size="sm" className="flex-1">
                    <ExternalLink className="w-3.5 h-3.5" /> Open
                  </Button>
                  {group.role === "OWNER" && (
                    <Button variant="ghost" size="icon-sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
