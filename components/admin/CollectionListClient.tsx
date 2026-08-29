"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Pencil } from "lucide-react";

interface CollectionListItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface CollectionListClientProps {
  collection: string;
  items: CollectionListItem[];
}

export function CollectionListClient({
  collection,
  items: initialItems,
}: CollectionListClientProps) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function persistOrder(next: CollectionListItem[]) {
    setItems(next);
    await fetch("/api/admin/items/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection,
        orderedIds: next.map((item) => item.id),
      }),
    });
    router.refresh();
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    persistOrder(next);
  }

  async function remove(id: string) {
    if (!confirm("Delete this item? This can't be undone.")) return;
    setBusyId(id);
    await fetch(`/api/admin/items/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((item) => item.id !== id));
    setBusyId(null);
    router.refresh();
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link
          href={`/admin/collections/${collection}/new`}
          className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add new</span>
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-slate-grey py-8 text-center border border-dashed border-charcoal/15 rounded-lg">
          Nothing here yet.
        </p>
      ) : (
        <div className="border border-charcoal/10 rounded-lg divide-y divide-charcoal/10 bg-white overflow-hidden">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-5 py-4"
            >
              <div className="flex flex-col shrink-0">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  className="text-slate-grey hover:text-charcoal disabled:opacity-25 text-xs leading-none"
                  aria-label="Move up"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === items.length - 1}
                  className="text-slate-grey hover:text-charcoal disabled:opacity-25 text-xs leading-none mt-1"
                  aria-label="Move down"
                >
                  ▼
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-charcoal truncate">
                  {item.title || "(untitled)"}
                </p>
                {item.subtitle && (
                  <p className="text-xs text-slate-grey truncate">{item.subtitle}</p>
                )}
              </div>

              <Link
                href={`/admin/collections/${collection}/${item.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-onelife-red shrink-0"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit</span>
              </Link>

              <button
                type="button"
                onClick={() => remove(item.id)}
                disabled={busyId === item.id}
                className="text-slate-grey hover:text-onelife-red p-1 shrink-0 disabled:opacity-50"
                aria-label="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
