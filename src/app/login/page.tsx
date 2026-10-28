"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { createSession, getHomePath, getSession } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Next.js soft-nav can restore this page with stale client state
  // (e.g. loading still true after a previous successful Sign In).
  useEffect(() => {
    setLoading(false);
    setError("");

    const session = getSession();
    if (session) {
      router.replace(getHomePath(session.role));
    }
  }, [pathname, router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const user = createSession(username, password);
    if (!user) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }

    // Full navigation so login form state is not kept in the soft cache.
    window.location.assign(getHomePath(user.role));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <div className="mb-8 flex flex-col items-center text-center">
        <Logo size="lg" />
        <p className="mt-2 text-sm text-slate-500">
          Career Matching Results Platform
        </p>
      </div>

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-2xl font-bold tracking-tight text-[#0F172A]">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          View your career matching results or applicant rankings
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="username"
              className="text-xs font-bold tracking-wide text-slate-500"
            >
              USERNAME
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. amirah.hassan or emp_techcorp"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-xs font-bold tracking-wide text-slate-500"
            >
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
          Demo: use any username starting with{" "}
          <span className="font-semibold text-blue-600">emp</span> to log in as
          an employer
        </p>
      </div>

      <p className="mt-8 max-w-md text-center text-xs text-slate-400">
        After completing the game, you are automatically redirected here.
      </p>
    </main>
  );
}
