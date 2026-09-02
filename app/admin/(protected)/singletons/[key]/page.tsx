import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSingletonDefinition } from "@/lib/content/registry";
import { withDefaults } from "@/lib/content/defaults";
import { SingletonEditor } from "@/components/admin/SingletonEditor";
import { PageHeader } from "@/components/admin/PageHeader";
import { AdminCard } from "@/components/admin/AdminCard";

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
      <PageHeader title={definition.label} description={definition.description} />
      <AdminCard className="max-w-2xl">
        <SingletonEditor
          singletonKey={key}
          fields={definition.fields}
          initialValues={withDefaults(
            definition.fields,
            (row?.data as Record<string, unknown>) ?? {}
          )}
          backHref="/admin"
        />
      </AdminCard>
    </div>
  );
}
