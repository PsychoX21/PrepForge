/**
 * PrepForge API client.
 * Type-safe fetch wrapper with Firebase auth token injection.
 */
import { getIdToken } from "./firebase";
import { API_BASE_URL } from "./constants";
import type { ApiResponse, PaginatedResponse } from "./types";

// ─── Types ──────────────────────────────────────────────────────────────────

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
}

// ─── Error Handling ─────────────────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// ─── Core Fetch ─────────────────────────────────────────────────────────────

async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { body, params, headers: customHeaders, ...rest } = options;

  // Build URL with query params
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  // Get auth token
  const token = await getIdToken();

  // Build headers
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(customHeaders as Record<string, string>),
  };

  // Execute request
  const response = await fetch(url.toString(), {
    ...rest,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  // Handle errors
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new ApiError(
      response.status,
      errorData?.message || `API Error: ${response.statusText}`,
      errorData
    );
  }

  // Parse response
  return response.json();
}

// ─── HTTP Method Helpers ────────────────────────────────────────────────────

export const api = {
  get<T>(endpoint: string, params?: RequestOptions["params"]): Promise<T> {
    return apiFetch<T>(endpoint, { method: "GET", params });
  },

  post<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiFetch<T>(endpoint, { method: "POST", body });
  },

  patch<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiFetch<T>(endpoint, { method: "PATCH", body });
  },

  put<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiFetch<T>(endpoint, { method: "PUT", body });
  },

  delete<T>(endpoint: string): Promise<T> {
    return apiFetch<T>(endpoint, { method: "DELETE" });
  },
} as const;

// ─── Typed API Endpoints ────────────────────────────────────────────────────

export type { ApiResponse, PaginatedResponse };
