"use client";

import React from "react";
import { ICON_NAMES } from "@/lib/content/icons";
import { ContentIcon } from "@/components/ContentIcon";

interface IconFieldProps {
  label: string;
  value: string;
  onChange: (icon: string) => void;
}

export function IconField({ label, value, onChange }: IconFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg border border-charcoal/15 bg-warm-white flex items-center justify-center shrink-0">
          <ContentIcon name={value} className="w-4.5 h-4.5 text-onelife-red" />
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3.5 py-2 text-xs bg-white border border-charcoal/15 rounded-lg transition-shadow focus:outline-none focus:border-charcoal focus:ring-2 focus:ring-onelife-red/15"
        >
          {ICON_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
