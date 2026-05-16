import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ─── Font Configuration ─────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "PrepForge — Forge Your Path to Top Tech & Quant Roles",
    template: "%s | PrepForge",
  },
  description:
    "Collaborative preparation platform for competitive programming, quantitative trading, and software engineering interviews. Track progress, compete with peers, and level up together.",
  keywords: [
    "competitive programming",
    "quantitative trading",
    "interview preparation",
    "CSES",
    "codeforces",
    "leetcode",
    "study tracker",
    "gamified learning",
  ],
  authors: [{ name: "PrepForge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PrepForge",
    title: "PrepForge — Forge Your Path to Top Tech & Quant Roles",
    description:
      "Track your preparation progress with granular detail. Compete on leaderboards. Collaborate in real-time.",
  },
};

// ─── Root Layout ────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
