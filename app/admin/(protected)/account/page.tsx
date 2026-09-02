import React from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth/guard";
import { ChangeEmailForm } from "@/components/admin/ChangeEmailForm";
import { ChangePasswordForm } from "@/components/admin/ChangePasswordForm";
import { PageHeader } from "@/components/admin/PageHeader";
import { AdminCard } from "@/components/admin/AdminCard";

export default async function AccountPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="space-y-8">
      <div>
        <PageHeader
          title="Account"
          description="Manage the email and password used to sign in to /admin."
        />
        <AdminCard className="max-w-sm">
          <h2 className="font-heading font-bold text-sm text-charcoal mb-5">Email Address</h2>
          <ChangeEmailForm currentEmail={session.email} />
        </AdminCard>
      </div>

      <div>
        <AdminCard className="max-w-sm">
          <h2 className="font-heading font-bold text-sm text-charcoal mb-5">Password</h2>
          <ChangePasswordForm />
        </AdminCard>
      </div>
    </div>
  );
}
