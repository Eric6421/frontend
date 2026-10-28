"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getHomePath, getSession } from "@/lib/auth";
import type { AuthUser, UserRole } from "@/lib/types";

type AuthGuardProps = {
  children: React.ReactNode;
  role?: UserRole;
};

export default function AuthGuard({ children, role }: AuthGuardProps) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    if (role && session.role !== role) {
      router.replace(getHomePath(session.role));
      return;
    }
    setUser(session);
    setReady(true);
  }, [router, role]);

  if (!ready || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-500">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
