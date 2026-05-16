/**
 * UI state store using Zustand.
 * Controls sidebar, modals, and other global UI state.
 */
import { create } from "zustand";

// ─── Store Interface ────────────────────────────────────────────────────────

interface UIState {
  /** Whether the sidebar is collapsed (desktop) */
  isSidebarCollapsed: boolean;
  /** Whether the mobile menu is open */
  isMobileMenuOpen: boolean;
  /** Whether the command palette / search is open */
  isSearchOpen: boolean;
  /** Currently active modal ID */
  activeModal: string | null;
  /** Toast notification queue */
  toasts: Toast[];

  // Actions
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Toast {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
  duration?: number;
}

// ─── Store ──────────────────────────────────────────────────────────────────

export const useUIStore = create<UIState>((set) => ({
  isSidebarCollapsed: false,
  isMobileMenuOpen: false,
  isSearchOpen: false,
  activeModal: null,
  toasts: [],

  toggleSidebar: () =>
    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
  addToast: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { ...toast, id: `toast-${Date.now()}-${Math.random()}` },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
