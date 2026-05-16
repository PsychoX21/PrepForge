"use client";

/**
 * PrepForge Landing Page
 *
 * The main entry point — a stunning, animated landing page that showcases
 * the platform's features, tracks, and call-to-action.
 */
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
