"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Login failed");
      const next = searchParams.get("next") || "/admin";
      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2.5 text-sm bg-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal"
        />
      </div>
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2.5 text-sm bg-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal"
        />
      </div>
      {error && (
        <p className="text-sm text-onelife-red bg-onelife-red/10 border border-onelife-red/20 rounded px-4 py-3">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-sm transition-colors disabled:opacity-50"
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        <span>{loading ? "Signing in…" : "Sign in"}</span>
      </button>
    </form>
  );
}
