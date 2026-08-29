import React from "react";
import { notFound } from "next/navigation";
import { getCollectionDefinition } from "@/lib/content/registry";
import { getDefaultData } from "@/lib/content/defaults";
import { ItemEditor } from "@/components/admin/ItemEditor";

interface PageProps {
  params: Promise<{ collection: string }>;
}

export default async function NewItemPage({ params }: PageProps) {
  const { collection } = await params;
  const definition = getCollectionDefinition(collection);
  if (!definition) notFound();

  return (
    <div>
      <h1 className="font-heading font-bold text-xl text-charcoal mb-6">
        New {definition.label.replace(/s$/, "")}
      </h1>
      <ItemEditor
        collection={collection}
        fields={definition.fields}
        initialValues={getDefaultData(definition.fields)}
        backHref={`/admin/collections/${collection}`}
      />
    </div>
  );
}
