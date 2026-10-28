"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AuthGuard from "@/components/AuthGuard";
import { clearSession, getSession } from "@/lib/auth";
import type { AuthUser } from "@/lib/types";

export default function EmployerPage() {
  return (
    <AuthGuard role="employer">
      <EmployerContent />
    </AuthGuard>
  );
}

function EmployerContent() {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(getSession());
  }, []);

  function handleLogout() {
    clearSession();
    window.location.assign("/login");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-sm text-slate-400">/</span>
            <span className="text-sm text-slate-500">Employer View</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-600 sm:inline">
              {user?.username}
            </span>
            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-700">
              EMPLOYER
            </span>
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

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Top Matched Applicants
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Employer dashboard placeholder. The top-30 applicant cards UI will be
          implemented in a later milestone. Sign in with a non-
          <span className="font-semibold text-blue-600">emp</span> username to
          explore the Applicant UI (Outcome &amp; CMF Score).
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Avg Match Score", value: "68.9%", tone: "text-emerald-600" },
            { label: "Top Score", value: "95%", tone: "text-blue-600" },
            { label: "Avg CMF Overall", value: "70.5", tone: "text-violet-600" },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className={`text-3xl font-bold tabular-nums ${card.tone}`}>
                {card.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{card.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
