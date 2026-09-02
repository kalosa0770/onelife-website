"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Layers, ExternalLink, UserCircle2 } from "lucide-react";
import { LogoutButton } from "./LogoutButton";

interface NavEntry {
  key: string;
  label: string;
  href: string;
}

interface AdminShellProps {
  email: string;
  singletons: NavEntry[];
  collections: NavEntry[];
  children: React.ReactNode;
}

export function AdminShell({ email, singletons, collections, children }: AdminShellProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname?.startsWith(`${href}/`);
  }

  const sections: { title: string; icon: typeof FileText; items: NavEntry[] }[] = [
    { title: "Site Text", icon: FileText, items: singletons },
    { title: "Collections", icon: Layers, items: collections },
  ];

  const navBody = (
    <>
      <div className="px-5 py-5 border-b border-charcoal/10">
        <Link
          href="/admin"
          onClick={() => setOpen(false)}
          className="font-heading font-bold text-sm text-charcoal tracking-tight"
        >
          OneLife Admin
        </Link>
        <p className="flex items-center gap-1.5 text-[11px] text-slate-grey mt-1 truncate">
          <UserCircle2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{email}</span>
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="flex items-center gap-1.5 px-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-grey/80 mb-2">
              <section.icon className="w-3 h-3" />
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((entry) => {
                const active = isActive(entry.href);
                return (
                  <Link
                    key={entry.key}
                    href={entry.href}
                    onClick={() => setOpen(false)}
                    className={`block px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-onelife-red text-white shadow-sm shadow-onelife-red/20"
                        : "text-charcoal/80 hover:bg-warm-white hover:text-onelife-red"
                    }`}
                  >
                    {entry.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-charcoal/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3.5 min-w-0">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-grey hover:text-charcoal transition-colors"
          >
            View site <ExternalLink className="w-3 h-3" />
          </Link>
          <Link
            href="/admin/account"
            onClick={() => setOpen(false)}
            className="text-[11px] font-medium text-slate-grey hover:text-charcoal transition-colors"
          >
            Account
          </Link>
        </div>
        <LogoutButton />
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-warm-white text-charcoal lg:flex">
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-3.5 bg-white border-b border-charcoal/10 shadow-sm">
        <Link href="/admin" className="font-heading font-bold text-sm text-charcoal tracking-tight">
          OneLife Admin
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-2 -mr-2 text-charcoal rounded-md hover:bg-warm-white transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-[1px] transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar — slide-in drawer on mobile, static column from lg up */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] bg-white border-r border-charcoal/10 flex flex-col shadow-xl transition-transform duration-200 ease-out
          lg:static lg:z-auto lg:w-64 lg:shrink-0 lg:h-screen lg:sticky lg:top-0 lg:shadow-none lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1.5 text-slate-grey hover:text-charcoal rounded-md hover:bg-warm-white transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
        {navBody}
      </aside>

      <main className="flex-1 min-w-0 px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="max-w-5xl mx-auto lg:mx-0">{children}</div>
      </main>
    </div>
  );
}
