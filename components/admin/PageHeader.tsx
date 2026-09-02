import React from "react";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="font-heading font-bold text-xl sm:text-2xl text-charcoal tracking-tight mb-1.5">
        {title}
      </h1>
      {description && (
        <p className="text-sm text-slate-grey leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}
