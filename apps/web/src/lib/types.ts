/**
 * PrepForge shared TypeScript types
 * Defines the complete data model for the application.
 */

// ─── Enums ──────────────────────────────────────────────────────────────────

export enum ResourceType {
  BOOK = "BOOK",
  COURSE = "COURSE",
  WEBSITE = "WEBSITE",
  PROBLEM_SET = "PROBLEM_SET",
  VIDEO_SERIES = "VIDEO_SERIES",
  SLIDES = "SLIDES",
  NOTES = "NOTES",
  DOC = "DOC",
  TEMPLATE = "TEMPLATE",
  GUIDE = "GUIDE",
  COLLECTION = "COLLECTION",
  PRACTICE = "PRACTICE",
}

export enum ItemType {
  QUESTION = "QUESTION",
  VIDEO = "VIDEO",
  PUZZLE = "PUZZLE",
  READING = "READING",
  EXERCISE = "EXERCISE",
  CONCEPT = "CONCEPT",
  PROBLEM = "PROBLEM",
}

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  DEADLY = "DEADLY",
}

export enum ProgressStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export enum MemberRole {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}

export enum NoteVisibility {
  PERSONAL = "PERSONAL",
  PUBLIC = "PUBLIC",
}

// ─── Core Models ────────────────────────────────────────────────────────────

export interface User {
  id: string;
  firebaseUid: string;
  email: string;
  displayName: string;
  photoUrl: string | null;
  xp: number;
  level: number;
  streak: number;
  lastActive?: string;
  lastActiveDate?: string | null;
  createdAt: string;
  memberships?: GroupMember[];
  progress?: UserItemProgress[];
}

export interface Group {
  id: string;
  name: string;
  description: string | null;
  inviteCode: string;
  inviteExpiry: string | null;
  createdById: string;
  memberCount?: number;
  tracks?: Track[];
  members?: GroupMember[];
  _count?: { tracks?: number; members?: number };
  createdAt: string;
}

export interface GroupMember {
  id: string;
  userId: string;
  groupId: string;
  role: MemberRole;
  joinedAt: string;
  user?: User;
  group?: Group;
}

// ─── Resource Hierarchy ─────────────────────────────────────────────────────

export interface Track {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  order: number;
  isDefault: boolean;
  groupId: string;
  categories?: Category[];
  /** Computed: total items and completed count */
  totalItems?: number;
  completedItems?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  order: number;
  trackId: string;
  resources?: Resource[];
  totalItems?: number;
  completedItems?: number;
}

export interface Resource {
  id: string;
  name: string;
  description: string | null;
  type: ResourceType;
  url: string | null;
  isMustDo: boolean;
  order: number;
  categoryId: string;
  units?: Unit[];
  totalItems?: number;
  completedItems?: number;
}

export interface Unit {
  id: string;
  name: string;
  description: string | null;
  order: number;
  resourceId: string;
  subUnits?: SubUnit[];
  totalItems?: number;
  completedItems?: number;
}

export interface SubUnit {
  id: string;
  name: string;
  description: string | null;
  order: number;
  unitId: string;
  items?: Item[];
  totalItems?: number;
  completedItems?: number;
}

export interface Item {
  id: string;
  name: string;
  description: string | null;
  type: ItemType;
  url: string | null;
  difficulty: Difficulty | null;
  order: number;
  subUnitId: string;
  progress?: UserItemProgress;
}

// ─── User Engagement ────────────────────────────────────────────────────────

export interface UserItemProgress {
  id: string;
  userId: string;
  itemId: string;
  status: ProgressStatus;
  completion: number;
  isStarred: boolean;
  isWatchLater: boolean;
  completedAt: string | null;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  itemId: string;
  parentId: string | null;
  user?: User;
  replies?: Comment[];
  createdAt: string;
}

export interface Note {
  id: string;
  content: string;
  visibility: NoteVisibility;
  userId: string;
  itemId: string;
  user?: User;
  createdAt: string;
}

// ─── Real-time / Socket Events ──────────────────────────────────────────────

export interface PresenceData {
  userId: string;
  displayName: string;
  photoUrl: string | null;
  currentFocus: string | null; // e.g., "CSES -> Sorting -> Playlist"
  isOnline: boolean;
  lastSeen: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  userId: string;
  groupId: string;
  threadId: string | null; // null = general chat, else item-specific
  user?: User;
  createdAt: string;
}

// ─── API Response Wrappers ──────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

// ─── Heatmap Data ───────────────────────────────────────────────────────────

export interface HeatmapEntry {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // intensity level
}

// ─── Leaderboard ────────────────────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  user: User;
  xp: number;
  itemsCompleted: number;
  streak: number;
}
