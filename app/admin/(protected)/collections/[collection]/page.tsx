import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCollectionDefinition } from "@/lib/content/registry";
import { CollectionListClient } from "@/components/admin/CollectionListClient";
import { PageHeader } from "@/components/admin/PageHeader";

interface PageProps {
  params: Promise<{ collection: string }>;
}

export default async function CollectionPage({ params }: PageProps) {
  const { collection } = await params;
  const definition = getCollectionDefinition(collection);
  if (!definition) notFound();

  const rows = await prisma.item.findMany({
    where: { collection },
    orderBy: { order: "asc" },
  });

  const items = rows.map((row) => {
    const data = row.data as Record<string, unknown>;
    return {
      id: row.id,
      title: String(data[definition.titleField] ?? ""),
      subtitle: definition.subtitleField
        ? String(data[definition.subtitleField] ?? "")
        : undefined,
    };
  });

  return (
    <div>
      <PageHeader title={definition.label} description={definition.description} />
      <CollectionListClient collection={collection} items={items} />
    </div>
  );
}
