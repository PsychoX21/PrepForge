/**
 * Button component with multiple variants.
 * Built with Radix UI Slot for composition and CVA for variant management.
 */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Variants ───────────────────────────────────────────────────────────────

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-accent-blue to-accent-purple",
          "text-white font-semibold",
          "shadow-lg shadow-accent-blue/20",
          "hover:shadow-xl hover:shadow-accent-blue/30",
          "hover:brightness-110",
        ].join(" "),
        secondary: [
          "bg-bg-elevated border border-border-default",
          "text-text-primary",
          "hover:bg-bg-tertiary hover:border-border-hover",
        ].join(" "),
        ghost: [
          "text-text-secondary",
          "hover:bg-bg-elevated hover:text-text-primary",
        ].join(" "),
        danger: [
          "bg-red-500/10 text-red-400 border border-red-500/20",
          "hover:bg-red-500/20 hover:border-red-500/30",
        ].join(" "),
        success: [
          "bg-accent-green/10 text-accent-green border border-accent-green/20",
          "hover:bg-accent-green/20 hover:border-accent-green/30",
        ].join(" "),
        glow: [
          "bg-accent-blue/10 text-accent-blue border border-accent-blue/30",
          "hover:bg-accent-blue/20",
          "shadow-[0_0_15px_rgba(88,166,255,0.15)]",
          "hover:shadow-[0_0_25px_rgba(88,166,255,0.25)]",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// ─── Component ──────────────────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child component (Radix Slot pattern) */
  asChild?: boolean;
  /** Show loading spinner */
  isLoading?: boolean;
}

const LoadingSpinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // When asChild is true, Radix Slot expects exactly ONE React element child.
    // We cannot inject extra elements (like loading spinner) alongside it.
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
