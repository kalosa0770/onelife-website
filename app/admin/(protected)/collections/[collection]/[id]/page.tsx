import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCollectionDefinition } from "@/lib/content/registry";
import { withDefaults } from "@/lib/content/defaults";
import { ItemEditor } from "@/components/admin/ItemEditor";

interface PageProps {
  params: Promise<{ collection: string; id: string }>;
}

export default async function EditItemPage({ params }: PageProps) {
  const { collection, id } = await params;
  const definition = getCollectionDefinition(collection);
  if (!definition) notFound();

  const row = await prisma.item.findUnique({ where: { id } });
  if (!row || row.collection !== collection) notFound();

  return (
    <div>
      <h1 className="font-heading font-bold text-xl text-charcoal mb-6">
        Edit {definition.label.replace(/s$/, "")}
      </h1>
      <ItemEditor
        collection={collection}
        itemId={id}
        fields={definition.fields}
        initialValues={withDefaults(
          definition.fields,
          row.data as Record<string, unknown>
        )}
        backHref={`/admin/collections/${collection}`}
      />
    </div>
  );
}
