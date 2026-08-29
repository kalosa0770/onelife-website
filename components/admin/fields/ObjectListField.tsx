"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import type { FieldSchema } from "@/lib/content/types";
import { IconField } from "./IconField";

interface ObjectListFieldProps {
  label: string;
  itemFields: FieldSchema[];
  value: Record<string, string>[];
  onChange: (value: Record<string, string>[]) => void;
  helpText?: string;
}

function emptyRow(itemFields: FieldSchema[]): Record<string, string> {
  return Object.fromEntries(itemFields.map((f) => [f.key, ""]));
}

export function ObjectListField({
  label,
  itemFields,
  value,
  onChange,
  helpText,
}: ObjectListFieldProps) {
  const rows = value ?? [];

  function updateRow(index: number, key: string, val: string) {
    const next = rows.map((row, i) => (i === index ? { ...row, [key]: val } : row));
    onChange(next);
  }

  function remove(index: number) {
    onChange(rows.filter((_, i) => i !== index));
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= rows.length) return;
    const next = [...rows];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        {label}
      </label>
      <div className="space-y-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className="border border-charcoal/15 rounded-lg p-4 bg-warm-white space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-grey">
                Item {index + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  className="text-slate-grey hover:text-charcoal disabled:opacity-30 text-xs px-1"
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === rows.length - 1}
                  className="text-slate-grey hover:text-charcoal disabled:opacity-30 text-xs px-1"
                  aria-label="Move down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-slate-grey hover:text-onelife-red p-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {itemFields.map((field) => (
                <div
                  key={field.key}
                  className={field.type === "textarea" ? "sm:col-span-2" : ""}
                >
                  {field.type === "icon" ? (
                    <IconField
                      label={field.label}
                      value={row[field.key] ?? ""}
                      onChange={(v) => updateRow(index, field.key, v)}
                    />
                  ) : field.type === "textarea" ? (
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-grey">
                        {field.label}
                      </label>
                      <textarea
                        rows={2}
                        value={row[field.key] ?? ""}
                        onChange={(e) => updateRow(index, field.key, e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-grey">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        value={row[field.key] ?? ""}
                        onChange={(e) => updateRow(index, field.key, e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...rows, emptyRow(itemFields)])}
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-charcoal/20 rounded px-3 py-1.5 hover:border-charcoal"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add item</span>
      </button>
      {helpText && <p className="text-[11px] text-slate-grey">{helpText}</p>}
    </div>
  );
}
