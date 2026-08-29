import React, { Suspense } from "react";
import Image from "next/image";
import { LoginForm } from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center px-4">
      <Image
        src="/logo-onelife.jpg"
        alt="OneLife Logo"
        width={140}
        height={38}
        className="h-9 w-auto mb-8"
      />
      <div className="w-full max-w-sm bg-white border border-charcoal/10 rounded-lg shadow-sm p-8">
        <h1 className="font-heading font-bold text-lg text-charcoal mb-1">
          Admin Sign In
        </h1>
        <p className="text-xs text-slate-grey mb-6">
          Manage staff, platforms, and site content.
        </p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
