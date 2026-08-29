import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth/guard";
import { CONTENT_REGISTRY } from "@/lib/content/registry";
import { LogoutButton } from "@/components/admin/LogoutButton";

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

  const singletons = CONTENT_REGISTRY.filter((entry) => entry.kind === "singleton");
  const collections = CONTENT_REGISTRY.filter((entry) => entry.kind === "list");

  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex">
      <aside className="w-64 shrink-0 border-r border-charcoal/10 bg-white flex flex-col h-screen sticky top-0">
        <div className="px-5 py-5 border-b border-charcoal/10">
          <Link href="/admin" className="font-heading font-bold text-sm text-charcoal">
            OneLife Admin
          </Link>
          <p className="text-[11px] text-slate-grey mt-0.5">{session.email}</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          <div>
            <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-slate-grey mb-2">
              Site Text
            </p>
            <div className="space-y-0.5">
              {singletons.map((entry) => (
                <Link
                  key={entry.key}
                  href={`/admin/singletons/${entry.key}`}
                  className="block px-2 py-1.5 rounded text-xs font-medium text-charcoal/85 hover:bg-warm-white hover:text-onelife-red transition-colors"
                >
                  {entry.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-slate-grey mb-2">
              Collections
            </p>
            <div className="space-y-0.5">
              {collections.map((entry) => (
                <Link
                  key={entry.key}
                  href={`/admin/collections/${entry.key}`}
                  className="block px-2 py-1.5 rounded text-xs font-medium text-charcoal/85 hover:bg-warm-white hover:text-onelife-red transition-colors"
                >
                  {entry.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="px-5 py-4 border-t border-charcoal/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-[11px] text-slate-grey hover:text-charcoal">
              View site ↗
            </Link>
            <Link href="/admin/account" className="text-[11px] text-slate-grey hover:text-charcoal">
              Account
            </Link>
          </div>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 px-8 py-8 max-w-5xl">{children}</main>
    </div>
  );
}
