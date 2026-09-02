"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { PasswordInput } from "./fields/PasswordInput";

interface ChangeEmailFormProps {
  currentEmail: string;
}

export function ChangeEmailForm({ currentEmail }: ChangeEmailFormProps) {
  const router = useRouter();
  const [newEmail, setNewEmail] = useState(currentEmail);
  const [currentPassword, setCurrentPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth/change-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newEmail, currentPassword }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Failed to change email");
      setSuccess(true);
      setCurrentPassword("");
      router.refresh(); // re-reads the session cookie server-side, e.g. the sidebar
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to change email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
          Email Address
        </label>
        <input
          type="email"
          required
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
        />
      </div>
      <PasswordInput
        label="Current Password"
        required
        value={currentPassword}
        onChange={setCurrentPassword}
        placeholder="Confirm it's you"
        autoComplete="current-password"
      />

      {error && (
        <p className="text-sm text-onelife-red bg-onelife-red/10 border border-onelife-red/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}
      {success && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          Email updated.
        </p>
      )}

      <button
        type="submit"
        disabled={loading || newEmail.trim().toLowerCase() === currentEmail.toLowerCase()}
        className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-colors disabled:opacity-50"
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        <span>{loading ? "Saving…" : "Update Email"}</span>
      </button>
    </form>
  );
}
