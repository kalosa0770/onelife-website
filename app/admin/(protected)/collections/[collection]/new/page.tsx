import React from "react";
import { notFound } from "next/navigation";
import { getCollectionDefinition } from "@/lib/content/registry";
import { getDefaultData } from "@/lib/content/defaults";
import { ItemEditor } from "@/components/admin/ItemEditor";
import { PageHeader } from "@/components/admin/PageHeader";
import { AdminCard } from "@/components/admin/AdminCard";

interface PageProps {
  params: Promise<{ collection: string }>;
}

export default async function NewItemPage({ params }: PageProps) {
  const { collection } = await params;
  const definition = getCollectionDefinition(collection);
  if (!definition) notFound();

  return (
    <div>
      <PageHeader title={`New ${definition.label.replace(/s$/, "")}`} />
      <AdminCard className="max-w-2xl">
        <ItemEditor
          collection={collection}
          fields={definition.fields}
          initialValues={getDefaultData(definition.fields)}
          backHref={`/admin/collections/${collection}`}
        />
      </AdminCard>
    </div>
  );
}
