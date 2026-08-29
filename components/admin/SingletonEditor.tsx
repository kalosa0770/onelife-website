"use client";

import React from "react";
import type { FieldSchema } from "@/lib/content/types";
import { ContentForm } from "./ContentForm";

interface SingletonEditorProps {
  singletonKey: string;
  fields: FieldSchema[];
  initialValues: Record<string, unknown>;
  backHref: string;
}

export function SingletonEditor({
  singletonKey,
  fields,
  initialValues,
  backHref,
}: SingletonEditorProps) {
  async function onSubmit(values: Record<string, unknown>) {
    const res = await fetch(`/api/admin/singletons/${singletonKey}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: values }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error ?? "Failed to save");
    }
  }

  return (
    <ContentForm
      fields={fields}
      initialValues={initialValues}
      onSubmit={onSubmit}
      submitLabel="Save changes"
      backHref={backHref}
    />
  );
}
