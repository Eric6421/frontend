"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Clock3, UserRound } from "lucide-react";
import Logo from "./Logo";
import { clearSession, getSession } from "@/lib/auth";
import { useEffect, useState } from "react";
import type { AuthUser } from "@/lib/types";

const tabs = [
  {
    href: "/applicant/outcome",
    label: "Outcome",
    icon: BarChart3,
  },
  {
    href: "/applicant/cmf-score",
    label: "CMF Score",
    icon: Clock3,
  },
  {
    href: "/applicant/demographic",
    label: "Demographic",
    icon: UserRound,
  },
] as const;

export default function ApplicantNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(getSession());
  }, []);

  const initial = (user?.displayName?.[0] ?? "U").toUpperCase();

  function handleLogout() {
    clearSession();
    // Hard navigate so /login remounts with a clean form (not stuck on "Signing in...")
    window.location.assign("/login");
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Logo size="sm" />
          <span className="hidden text-sm text-slate-400 sm:inline">/</span>
          <span className="hidden truncate text-sm text-slate-500 sm:inline">
            Results
          </span>
        </div>

        <nav className="flex items-center gap-1 rounded-xl bg-slate-50 p-1">
          {tabs.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600"
            title={user?.displayName}
          >
            {initial}
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
