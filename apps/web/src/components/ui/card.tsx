/**
 * Card components with glassmorphism variants.
 * Supports multiple visual styles including glass, glow, and elevated effects.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Card Variants ──────────────────────────────────────────────────────────

const cardVariants = cva(
  "rounded-2xl transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: [
          "bg-bg-secondary border border-border-default",
          "hover:border-border-hover",
        ].join(" "),
        glass: [
          "bg-bg-secondary/60 backdrop-blur-xl",
          "border border-white/[0.06]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        ].join(" "),
        elevated: [
          "bg-bg-elevated border border-border-default",
          "shadow-xl shadow-black/20",
          "hover:shadow-2xl hover:shadow-black/30",
          "hover:-translate-y-0.5",
        ].join(" "),
        glow: [
          "bg-bg-secondary border border-accent-blue/20",
          "shadow-[0_0_30px_rgba(88,166,255,0.08)]",
          "hover:shadow-[0_0_40px_rgba(88,166,255,0.15)]",
          "hover:border-accent-blue/30",
        ].join(" "),
        interactive: [
          "bg-bg-secondary border border-border-default",
          "hover:bg-bg-tertiary hover:border-border-hover",
          "hover:-translate-y-0.5",
          "hover:shadow-lg hover:shadow-black/20",
          "cursor-pointer",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ─── Card ───────────────────────────────────────────────────────────────────

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

// ─── Card Header ────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-6 pb-0", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// ─── Card Title ─────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold text-text-primary tracking-tight font-display",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// ─── Card Description ──────────────────────────────────────────────────────

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-text-secondary", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ─── Card Content ───────────────────────────────────────────────────────────

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

// ─── Card Footer ────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
