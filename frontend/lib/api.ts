/**
 * Base URL for API requests. Uses NEXT_PUBLIC_API_URL in production (Vercel).
 * Falls back to empty string for same-origin requests when not set.
 */
const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "")

export function getApiUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${API_BASE}${cleanPath}`
}
