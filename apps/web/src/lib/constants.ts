/**
 * PrepForge application constants
 * Centralized configuration for theming, XP system, and app metadata.
 */

// ─── Application Metadata ───────────────────────────────────────────────────
export const APP_NAME = "PrepForge" as const;
export const APP_DESCRIPTION =
  "Collaborative preparation platform for competitive programming, quantitative trading, and software engineering interviews." as const;
export const APP_VERSION = "1.0.0" as const;

// ─── Design Tokens ──────────────────────────────────────────────────────────
export const COLORS = {
  // Core dark theme
  bg: {
    primary: "#0d1117",
    secondary: "#161b22",
    tertiary: "#1c2128",
    elevated: "#21262d",
    overlay: "rgba(13, 17, 23, 0.85)",
  },
  // Accent colors
  accent: {
    blue: "#58a6ff",
    purple: "#a78bfa",
    green: "#34d399",
    orange: "#f97316",
    pink: "#f472b6",
    cyan: "#22d3ee",
  },
  // Neon glows
  glow: {
    blue: "0 0 20px rgba(88, 166, 255, 0.4)",
    purple: "0 0 20px rgba(167, 139, 250, 0.4)",
    green: "0 0 20px rgba(52, 211, 153, 0.4)",
  },
  // Text
  text: {
    primary: "#e6edf3",
    secondary: "#8b949e",
    muted: "#6e7681",
    link: "#58a6ff",
  },
  // Borders
  border: {
    default: "#30363d",
    hover: "#484f58",
    active: "#58a6ff",
  },
} as const;

// ─── Gamification System ────────────────────────────────────────────────────
export const XP_CONFIG = {
  /** XP awarded for different actions */
  actions: {
    MARK_ITEM_DONE: 10,
    MARK_SUBUNIT_DONE: 25,
    MARK_UNIT_DONE: 50,
    MARK_RESOURCE_DONE: 100,
    ADD_COMMENT: 5,
    ADD_NOTE: 5,
    SHARE_PUBLIC_NOTE: 15,
    DAILY_LOGIN: 10,
    STREAK_BONUS_7: 50,
    STREAK_BONUS_30: 200,
    STREAK_BONUS_100: 500,
  },
  /** Level thresholds (cumulative XP needed) */
  levelThresholds: [
    0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 11000, 15000, 20000,
    27000, 35000, 45000, 60000, 80000, 100000, 130000, 170000,
  ],
  /** Level titles */
  levelTitles: [
    "Novice",
    "Apprentice",
    "Scholar",
    "Practitioner",
    "Journeyman",
    "Specialist",
    "Expert",
    "Master",
    "Grandmaster",
    "Sage",
    "Oracle",
    "Legend",
    "Mythic",
    "Transcendent",
    "Ascendant",
    "Immortal",
    "Celestial",
    "Omniscient",
    "Ethereal",
    "Godlike",
  ],
} as const;

// ─── Track Metadata ─────────────────────────────────────────────────────────
export const DEFAULT_TRACKS = [
  {
    name: "Quantitative Trader/Researcher",
    icon: "📊",
    color: "#a78bfa",
    description:
      "Probability, puzzles, AI/ML, finance fundamentals, and speed math.",
  },
  {
    name: "Software Engineer",
    icon: "💻",
    color: "#58a6ff",
    description:
      "Competitive programming, systems knowledge, C++ mastery, and DSA.",
  },
  {
    name: "Resume & General Prep",
    icon: "📝",
    color: "#34d399",
    description:
      "Resume building, communication skills, mock interviews, and networking.",
  },
] as const;

// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Tracks", href: "/tracks", icon: "BookOpen" },
  { label: "War Room", href: "/war-room", icon: "Radio" },
  { label: "Leaderboard", href: "/leaderboard", icon: "Trophy" },
  { label: "Groups", href: "/groups", icon: "Users" },
] as const;

// ─── API Configuration ─────────────────────────────────────────────────────
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
export const WS_URL =
  process.env.NEXT_PUBLIC_WS_URL || "http://localhost:4001";
