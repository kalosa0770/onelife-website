import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSingletonDefinition } from "@/lib/content/registry";
import { withDefaults } from "@/lib/content/defaults";
import { SingletonEditor } from "@/components/admin/SingletonEditor";

interface PageProps {
  params: Promise<{ key: string }>;
}

export default async function SingletonPage({ params }: PageProps) {
  const { key } = await params;
  const definition = getSingletonDefinition(key);
  if (!definition) notFound();

  const row = await prisma.singleton.findUnique({ where: { key } });

  return (
    <div>
      <h1 className="font-heading font-bold text-xl text-charcoal mb-1">
        {definition.label}
      </h1>
      {definition.description && (
        <p className="text-sm text-slate-grey mb-6">{definition.description}</p>
      )}
      {!definition.description && <div className="mb-6" />}
      <SingletonEditor
        singletonKey={key}
        fields={definition.fields}
        initialValues={withDefaults(
          definition.fields,
          (row?.data as Record<string, unknown>) ?? {}
        )}
        backHref="/admin"
      />
    </div>
  );
}
