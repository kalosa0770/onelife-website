import React from "react";
import { ChangePasswordForm } from "@/components/admin/ChangePasswordForm";

export default function AccountPage() {
  return (
    <div>
      <h1 className="font-heading font-bold text-xl text-charcoal mb-1">Account</h1>
      <p className="text-sm text-slate-grey mb-6">
        Change the password used to sign in to /admin.
      </p>
      <ChangePasswordForm />
    </div>
  );
}
