"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-grey hover:text-onelife-red transition-colors"
    >
      <LogOut className="w-4 h-4" />
      <span>Log out</span>
    </button>
  );
}
