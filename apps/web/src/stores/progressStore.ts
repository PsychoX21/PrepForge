/**
 * Progress Zustand store — tracks item-level progress state.
 */
import { create } from "zustand";

interface ProgressState {
  /** Map of itemId -> progress data */
  items: Record<
    string,
    {
      status: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
      isStarred: boolean;
      isWatchLater: boolean;
      completion: number;
    }
  >;

  /** Summary counts */
  summary: {
    total: number;
    done: number;
    inProgress: number;
    starred: number;
  };

  // Actions
  setItemProgress: (
    itemId: string,
    data: Partial<ProgressState["items"][string]>
  ) => void;
  setSummary: (summary: ProgressState["summary"]) => void;
  bulkSetProgress: (items: ProgressState["items"]) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  items: {},
  summary: { total: 0, done: 0, inProgress: 0, starred: 0 },

  setItemProgress: (itemId, data) =>
    set((state) => ({
      items: {
        ...state.items,
        [itemId]: {
          ...{
            status: "NOT_STARTED" as const,
            isStarred: false,
            isWatchLater: false,
            completion: 0,
          },
          ...state.items[itemId],
          ...data,
        },
      },
    })),

  setSummary: (summary) => set({ summary }),

  bulkSetProgress: (items) =>
    set((state) => ({
      items: { ...state.items, ...items },
    })),
}));
