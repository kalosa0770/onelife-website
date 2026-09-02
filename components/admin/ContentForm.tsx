"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, Trash2 } from "lucide-react";
import type { FieldSchema } from "@/lib/content/types";
import { ImageField } from "./fields/ImageField";
import { IconField } from "./fields/IconField";
import { StringListField } from "./fields/StringListField";
import { ObjectListField } from "./fields/ObjectListField";

interface ContentFormProps {
  fields: FieldSchema[];
  initialValues: Record<string, unknown>;
  onSubmit: (values: Record<string, unknown>) => Promise<void>;
  onDelete?: () => Promise<void>;
  submitLabel?: string;
  backHref: string;
}

export function ContentForm({
  fields,
  initialValues,
  onSubmit,
  onDelete,
  submitLabel = "Save",
  backHref,
}: ContentFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, unknown>>(initialValues);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(key: string, value: unknown) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSubmit(values);
      router.push(backHref);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;
    if (!confirm("Delete this item? This can't be undone.")) return;
    setDeleting(true);
    setError(null);
    try {
      await onDelete();
      router.push(backHref);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setDeleting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {fields.map((field) => {
        const value = values[field.key];
        return (
          <div key={field.key}>
            {field.type === "text" || field.type === "url" ? (
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
                  {field.label}
                </label>
                <input
                  type={field.type === "url" ? "url" : "text"}
                  value={(value as string) ?? ""}
                  onChange={(e) => set(field.key, e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
                />
                {field.helpText && (
                  <p className="text-[11px] text-slate-grey">{field.helpText}</p>
                )}
              </div>
            ) : field.type === "textarea" ? (
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
                  {field.label}
                </label>
                <textarea
                  rows={field.rows ?? 3}
                  value={(value as string) ?? ""}
                  onChange={(e) => set(field.key, e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
                />
                {field.helpText && (
                  <p className="text-[11px] text-slate-grey">{field.helpText}</p>
                )}
              </div>
            ) : field.type === "select" ? (
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
                  {field.label}
                </label>
                <select
                  value={(value as string) ?? ""}
                  onChange={(e) => set(field.key, e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : field.type === "image" ? (
              <ImageField
                label={field.label}
                value={(value as string) ?? ""}
                onChange={(url) => set(field.key, url)}
                helpText={field.helpText}
              />
            ) : field.type === "icon" ? (
              <IconField
                label={field.label}
                value={(value as string) ?? ""}
                onChange={(icon) => set(field.key, icon)}
              />
            ) : field.type === "stringlist" ? (
              <StringListField
                label={field.label}
                value={(value as string[]) ?? []}
                onChange={(v) => set(field.key, v)}
                helpText={field.helpText}
              />
            ) : field.type === "objectlist" ? (
              <ObjectListField
                label={field.label}
                itemFields={field.itemFields ?? []}
                value={(value as Record<string, string>[]) ?? []}
                onChange={(v) => set(field.key, v)}
                helpText={field.helpText}
              />
            ) : null}
          </div>
        );
      })}

      {error && (
        <p className="text-sm text-onelife-red bg-onelife-red/10 border border-onelife-red/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-charcoal/10">
        <div>
          {onDelete && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting || saving}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-onelife-red hover:underline disabled:opacity-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{deleting ? "Deleting…" : "Delete"}</span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button
            type="button"
            onClick={() => router.push(backHref)}
            className="text-xs font-semibold uppercase tracking-wider text-slate-grey hover:text-charcoal transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving || deleting}
            className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? "Saving…" : submitLabel}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
