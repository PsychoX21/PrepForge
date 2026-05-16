/**
 * Socket Zustand store — manages real-time connection state.
 */
import { create } from "zustand";

interface OnlineUser {
  userId: string;
  currentFocus: string | null;
}

interface ChatMessage {
  id: string;
  content: string;
  userId: string;
  user: { displayName: string; photoUrl: string | null };
  createdAt: string;
  threadId?: string;
}

interface SocketState {
  isConnected: boolean;
  onlineUsers: OnlineUser[];
  chatMessages: ChatMessage[];

  // Actions
  setConnected: (connected: boolean) => void;
  setOnlineUsers: (users: OnlineUser[]) => void;
  addOnlineUser: (user: OnlineUser) => void;
  removeOnlineUser: (userId: string) => void;
  updateUserFocus: (userId: string, focus: string | null) => void;
  addChatMessage: (message: ChatMessage) => void;
  setChatMessages: (messages: ChatMessage[]) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  isConnected: false,
  onlineUsers: [],
  chatMessages: [],

  setConnected: (connected) => set({ isConnected: connected }),

  setOnlineUsers: (users) => set({ onlineUsers: users }),

  addOnlineUser: (user) =>
    set((state) => ({
      onlineUsers: [
        ...state.onlineUsers.filter((u) => u.userId !== user.userId),
        user,
      ],
    })),

  removeOnlineUser: (userId) =>
    set((state) => ({
      onlineUsers: state.onlineUsers.filter((u) => u.userId !== userId),
    })),

  updateUserFocus: (userId, focus) =>
    set((state) => ({
      onlineUsers: state.onlineUsers.map((u) =>
        u.userId === userId ? { ...u, currentFocus: focus } : u
      ),
    })),

  addChatMessage: (message) =>
    set((state) => ({
      chatMessages: [...state.chatMessages, message],
    })),

  setChatMessages: (messages) => set({ chatMessages: messages }),
}));
