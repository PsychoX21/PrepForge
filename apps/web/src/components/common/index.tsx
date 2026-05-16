"use client";

/**
 * Common shared components — Loading, ErrorBoundary, EmptyState
 */
import React, { Component, ReactNode } from "react";
import { Flame, AlertTriangle, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Loading ────────────────────────────────────────────────────────────────

interface LoadingProps {
  className?: string;
  message?: string;
  size?: "sm" | "md" | "lg";
}

export function Loading({
  className,
  message = "Loading...",
  size = "md",
}: LoadingProps) {
  const sizes = { sm: "w-6 h-6", md: "w-10 h-10", lg: "w-14 h-14" };
  const iconSizes = { sm: "w-3 h-3", md: "w-5 h-5", lg: "w-7 h-7" };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
    >
      <div
        className={cn(
          sizes[size],
          "rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center animate-pulse"
        )}
      >
        <Flame className={cn(iconSizes[size], "text-white animate-flame")} />
      </div>
      {message && (
        <p className="text-text-muted text-sm animate-pulse">{message}</p>
      )}
    </div>
  );
}

// ─── EmptyState ─────────────────────────────────────────────────────────────

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-bg-elevated border border-border-default flex items-center justify-center mb-4">
        {icon || <FolderOpen className="w-6 h-6 text-text-muted" />}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-text-muted max-w-xs">{description}</p>
      )}
      {action && (
        <Button
          variant="primary"
          size="sm"
          onClick={action.onClick}
          className="mt-4"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

// ─── ErrorBoundary ──────────────────────────────────────────────────────────

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-base font-semibold text-text-primary mb-1">
              Something went wrong
            </h3>
            <p className="text-sm text-text-muted max-w-xs mb-4">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try Again
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
