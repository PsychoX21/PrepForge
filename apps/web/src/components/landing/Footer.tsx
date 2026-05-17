"use client";

/**
 * Footer section with links and branding.
 */
import { Flame, Heart } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-border-default/50">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold font-[var(--font-outfit)]">
              <span className="text-text-primary">Prep</span>
              <span className="text-gradient">Forge</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="#features"
              className="hover:text-text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#tracks"
              className="hover:text-text-primary transition-colors"
            >
              Tracks
            </a>
            <a
              href="#how-it-works"
              className="hover:text-text-primary transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PsychoX21/PrepForge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-bg-elevated border border-border-default flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-hover transition-all"
              aria-label="GitHub"
              id="footer-github-link"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border-default/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} PrepForge. Open source.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-accent-pink" /> for
            serious contenders
          </p>
        </div>
      </div>
    </footer>
  );
}
