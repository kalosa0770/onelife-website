"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, Loader2 } from "lucide-react";

interface ImageFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helpText?: string;
}

export function ImageField({ label, value, onChange, helpText }: ImageFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Upload failed");
      onChange(body.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
        {label}
      </label>
      <div className="flex items-start gap-4">
        <div className="relative w-28 h-28 rounded border border-charcoal/15 bg-warm-white overflow-hidden shrink-0">
          {value ? (
            <Image src={value} alt="" fill className="object-cover" unoptimized />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-grey text-[10px]">
              No image
            </div>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Image URL, or upload a file"
            className="w-full px-3 py-2 text-xs bg-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal"
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = "";
            }}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-charcoal border border-charcoal/20 rounded px-3 py-1.5 hover:border-charcoal disabled:opacity-50"
          >
            {uploading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <UploadCloud className="w-3.5 h-3.5" />
            )}
            <span>{uploading ? "Uploading…" : "Upload image"}</span>
          </button>
          {error && <p className="text-[11px] text-onelife-red">{error}</p>}
          {helpText && <p className="text-[11px] text-slate-grey">{helpText}</p>}
        </div>
      </div>
    </div>
  );
}
