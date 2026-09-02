import React from "react";
import { FileText, Layers, ArrowRight } from "lucide-react";
import { CONTENT_REGISTRY } from "@/lib/content/registry";
import { PageHeader } from "@/components/admin/PageHeader";
import { AdminCard } from "@/components/admin/AdminCard";
import Link from "next/link";

export default function AdminDashboardPage() {
  const singletonCount = CONTENT_REGISTRY.filter((e) => e.kind === "singleton").length;
  const collectionCount = CONTENT_REGISTRY.filter((e) => e.kind === "list").length;

  return (
    <div>
      <PageHeader
        title="Welcome"
        description="Use the sidebar to edit site text (headlines, intros, contact details) or manage collections (staff, platforms, capabilities, track record, and ventures). Changes go live on the site as soon as you save — no redeploy needed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <AdminCard className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-onelife-red/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-onelife-red" />
          </div>
          <div>
            <p className="font-heading font-bold text-lg text-charcoal">{singletonCount}</p>
            <p className="text-xs text-slate-grey">Editable text sections</p>
          </div>
        </AdminCard>

        <AdminCard className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-onelife-red/10 flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5 text-onelife-red" />
          </div>
          <div>
            <p className="font-heading font-bold text-lg text-charcoal">{collectionCount}</p>
            <p className="text-xs text-slate-grey">Manageable collections</p>
          </div>
        </AdminCard>
      </div>

      <Link
        href="/"
        target="_blank"
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-onelife-red hover:underline mt-8"
      >
        <span>View the live site</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
