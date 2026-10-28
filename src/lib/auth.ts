import type { AuthUser, UserRole } from "./types";

const AUTH_KEY = "upcareer_auth";

function toDisplayName(username: string): string {
  return username
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function resolveRole(username: string): UserRole {
  return username.trim().toLowerCase().startsWith("emp")
    ? "employer"
    : "applicant";
}

export function createSession(username: string, password: string): AuthUser | null {
  if (!username.trim() || !password.trim()) return null;

  const role = resolveRole(username);
  const user: AuthUser = {
    username: username.trim(),
    role,
    displayName: toDisplayName(username.trim()),
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }

  return user;
}

export function getSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function getHomePath(role: UserRole): string {
  return role === "employer" ? "/employer" : "/applicant/outcome";
}
