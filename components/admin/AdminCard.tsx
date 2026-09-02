import React from "react";

export function AdminCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-charcoal/10 rounded-xl shadow-sm p-5 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
