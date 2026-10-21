"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FORMS, isVisible, type FormField } from "@/lib/site/forms";
import { SITE_SETTINGS } from "@/lib/site/content-data";

interface LeadFormProps {
  formId: keyof typeof FORMS;
  /** Accent for focus rings; the submit button is always Onelife red. */
  accent: string;
}

const inputClass =
  "w-full px-4 py-3 text-sm bg-warm-white border border-charcoal/20 rounded focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors";
const labelClass = "block text-[11px] font-heading font-semibold uppercase tracking-wider text-foreground mb-1.5";

export const LeadForm = ({ formId, accent }: LeadFormProps) => {
  const def = FORMS[formId];
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const set = (name: string, value: string | boolean) =>
    setValues((v) => ({ ...v, [name]: value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = def.fields
      .filter((field) => isVisible(field, values) && values[field.name] !== undefined && values[field.name] !== "")
      .map((field) => {
        const value = values[field.name];
        return `${field.label}: ${typeof value === "boolean" ? (value ? "Yes" : "No") : value}`;
      })
      .join("\n");
    const mailto = `mailto:${SITE_SETTINGS.email}?subject=${encodeURIComponent(def.subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailto);
  }

  const renderField = (field: FormField) => {
    const id = `${def.id}-${field.name}`;
    const common = {
      id,
      name: field.name,
      required: field.required,
      "aria-describedby": field.hint ? `${id}-hint` : undefined,
    };

    if (field.type === "checkbox") {
      return (
        <label key={field.name} htmlFor={id} className="flex items-start gap-3 text-sm text-slate-grey leading-snug cursor-pointer">
          <input
            {...common}
            type="checkbox"
            checked={values[field.name] === true}
            onChange={(e) => set(field.name, e.target.checked)}
            className="mt-0.5 w-4 h-4 shrink-0 accent-[var(--accent)]"
          />
          <span>{field.label}</span>
        </label>
      );
    }

    return (
      <div key={field.name}>
        <label htmlFor={id} className={labelClass}>
          {field.label}
          {!field.required && <span className="font-normal normal-case tracking-normal text-slate-grey"> (optional)</span>}
        </label>
        {field.type === "select" ? (
          <select {...common} value={(values[field.name] as string) ?? ""} onChange={(e) => set(field.name, e.target.value)} className={inputClass}>
            <option value="">Select…</option>
            {field.options?.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        ) : field.type === "textarea" ? (
          <textarea {...common} maxLength={field.maxLength} rows={3} value={(values[field.name] as string) ?? ""} onChange={(e) => set(field.name, e.target.value)} className={inputClass} />
        ) : (
          <input {...common} maxLength={field.maxLength} type={field.type} placeholder={field.placeholder} value={(values[field.name] as string) ?? ""} onChange={(e) => set(field.name, e.target.value)} className={inputClass} />
        )}
        {field.hint && <p id={`${id}-hint`} className="text-xs text-slate-grey mt-1">{field.hint}</p>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" style={{ "--accent": accent } as React.CSSProperties}>
      {def.fields.filter((f) => isVisible(f, values)).map(renderField)}

      <button
        type="submit"
        className="w-full bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        <span>{def.submitLabel}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-xs leading-relaxed text-slate-grey">
        Submitting opens a prefilled email draft in your email app. Review and send it to complete your enquiry; this website does not store submissions.
      </p>
    </form>
  );
};
