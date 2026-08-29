"use client";

import React from "react";
import type { FieldSchema } from "@/lib/content/types";
import { ContentForm } from "./ContentForm";

interface ItemEditorProps {
  collection: string;
  itemId?: string; // omit to create a new item
  fields: FieldSchema[];
  initialValues: Record<string, unknown>;
  backHref: string;
}

export function ItemEditor({
  collection,
  itemId,
  fields,
  initialValues,
  backHref,
}: ItemEditorProps) {
  async function onSubmit(values: Record<string, unknown>) {
    const res = await fetch(
      itemId ? `/api/admin/items/${itemId}` : "/api/admin/items",
      {
        method: itemId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          itemId ? { data: values } : { collection, data: values }
        ),
      }
    );
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error ?? "Failed to save");
    }
  }

  async function onDelete() {
    if (!itemId) return;
    const res = await fetch(`/api/admin/items/${itemId}`, { method: "DELETE" });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error ?? "Failed to delete");
    }
  }

  return (
    <ContentForm
      fields={fields}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onDelete={itemId ? onDelete : undefined}
      submitLabel={itemId ? "Save changes" : "Create"}
      backHref={backHref}
    />
  );
}
