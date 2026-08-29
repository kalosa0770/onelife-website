import React from "react";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-heading font-bold text-xl text-charcoal mb-2">
        Welcome
      </h1>
      <p className="text-sm text-slate-grey leading-relaxed">
        Use the sidebar to edit site text (headlines, intros, contact
        details) or manage collections (staff, platforms, capabilities, track
        record, and ventures). Changes go live on the site as soon as you
        save — no redeploy needed.
      </p>
    </div>
  );
}
