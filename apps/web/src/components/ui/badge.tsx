/**
 * Badge component for status indicators, tags, and labels.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bg-elevated text-text-secondary border border-border-default",
        blue: "bg-accent-blue/10 text-accent-blue border border-accent-blue/20",
        purple: "bg-accent-purple/10 text-accent-purple border border-accent-purple/20",
        green: "bg-accent-green/10 text-accent-green border border-accent-green/20",
        orange: "bg-accent-orange/10 text-accent-orange border border-accent-orange/20",
        pink: "bg-accent-pink/10 text-accent-pink border border-accent-pink/20",
        cyan: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
        destructive: "bg-red-500/10 text-red-400 border border-red-500/20",
        mustdo: [
          "bg-gradient-to-r from-accent-orange/15 to-accent-pink/15",
          "text-accent-orange border border-accent-orange/25",
          "font-semibold",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
