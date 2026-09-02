"use client";

import React from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface StringListFieldProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  helpText?: string;
}

export function StringListField({
  label,
  value,
  onChange,
  helpText,
}: StringListFieldProps) {
  const items = value ?? [];

  function update(index: number, text: string) {
    const next = [...items];
    next[index] = text;
    onChange(next);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        {label}
      </label>
      <div className="space-y-2">
        {items.map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            <GripVertical className="w-3.5 h-3.5 text-slate-grey shrink-0" />
            <input
              type="text"
              value={text}
              onChange={(e) => update(index, e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
            />
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
              disabled={index === items.length - 1}
              className="text-slate-grey hover:text-charcoal disabled:opacity-30 text-xs px-1"
              aria-label="Move down"
            >
              ↓
            </button>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-slate-grey hover:text-onelife-red p-1"
              aria-label="Remove"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-charcoal/20 rounded-lg px-3 py-1.5 hover:border-charcoal hover:bg-warm-white transition-colors"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add item</span>
      </button>
      {helpText && <p className="text-[11px] text-slate-grey">{helpText}</p>}
    </div>
  );
}
