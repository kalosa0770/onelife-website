import React from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth/guard";
import { CONTENT_REGISTRY } from "@/lib/content/registry";
import { AdminShell } from "@/components/admin/AdminShell";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // proxy.ts already blocks unauthenticated requests before they get here —
  // this is a second, defense-in-depth check.
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const singletons = CONTENT_REGISTRY.filter((entry) => entry.kind === "singleton").map(
    (entry) => ({ key: entry.key, label: entry.label, href: `/admin/singletons/${entry.key}` })
  );
  const collections = CONTENT_REGISTRY.filter((entry) => entry.kind === "list").map((entry) => ({
    key: entry.key,
    label: entry.label,
    href: `/admin/collections/${entry.key}`,
  }));

  return (
    <AdminShell email={session.email} singletons={singletons} collections={collections}>
      {children}
    </AdminShell>
  );
}
