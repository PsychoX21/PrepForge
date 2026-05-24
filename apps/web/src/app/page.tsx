"use client";

/**
 * PrepForge Landing Page
 *
 * The main entry point — a stunning, animated landing page that showcases
 * the platform's features, tracks, and call-to-action.
 */
import { useEffect } from "react";
import { API_BASE_URL } from "@/lib/constants";
import {
  AnimatedBackground,
  Navbar,
  HeroSection,
  FeaturesSection,
  TracksSection,
  HowItWorksSection,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  useEffect(() => {
    // Pre-warm the backend by sending a silent request to trigger container spin-up in background
    if (typeof window !== "undefined" && API_BASE_URL) {
      fetch(`${API_BASE_URL}/health`).catch(() => {});
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TracksSection />
        <HowItWorksSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
