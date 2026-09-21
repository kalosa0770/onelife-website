"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FORMS, isVisible, type FormField } from "@/lib/forms/definitions";
import { trackConversion } from "@/components/Tracking";

interface LeadFormProps {
  formId: keyof typeof FORMS;
  /** Accent for focus rings; the submit button is always Onelife red. */
  accent: string;
}

const inputClass =
  "w-full px-4 py-3 text-sm bg-warm-white border border-charcoal/20 rounded focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors";
const labelClass = "block text-[11px] font-heading font-semibold uppercase tracking-wider text-foreground mb-1.5";

function collectMeta() {
  const params = new URLSearchParams(window.location.search);
  const meta: Record<string, string> = { page: window.location.pathname };
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const v = params.get(key);
    if (v) meta[key] = v;
  }
  if (document.referrer) meta.referrer = document.referrer;
  return meta;
}

export const LeadForm = ({ formId, accent }: LeadFormProps) => {
  const def = FORMS[formId];
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (name: string, value: string | boolean) =>
    setValues((v) => ({ ...v, [name]: value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    setErrors({});
    try {
      const res = await fetch(`/api/forms/${def.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values, meta: collectMeta() }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(json.errors ?? {});
        setFormError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      trackConversion(def.conversion, def.id);
      setDone(true);
    } catch {
      setFormError("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="text-center py-10 space-y-3">
        <CheckCircle2 className="w-10 h-10 mx-auto" style={{ color: accent }} />
        <h3 className="font-heading font-bold text-xl text-foreground">{def.successTitle}</h3>
        <p className="text-sm text-slate-grey max-w-md mx-auto leading-relaxed">{def.successBody}</p>
      </div>
    );
  }

  const renderField = (field: FormField) => {
    const id = `${def.id}-${field.name}`;
    const error = errors[field.name];
    const common = {
      id,
      name: field.name,
      required: field.required,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${id}-error` : field.hint ? `${id}-hint` : undefined,
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
          {error && <span id={`${id}-error`} className="sr-only">{error}</span>}
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
        {field.hint && !error && <p id={`${id}-hint`} className="text-xs text-slate-grey mt-1">{field.hint}</p>}
        {error && <p id={`${id}-error`} className="text-xs text-onelife-red mt-1">{error}</p>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-4" style={{ "--accent": accent } as React.CSSProperties}>
      {def.fields.filter((f) => isVisible(f, values)).map(renderField)}

      {/* Honeypot — hidden from people and assistive tech, bots fill it. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" tabIndex={-1} autoComplete="off" value={(values._hp as string) ?? ""} onChange={(e) => set("_hp", e.target.value)} />
        </label>
      </div>

      {formError && <p role="alert" className="text-sm text-onelife-red">{formError}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        <span>{loading ? "Sending…" : def.submitLabel}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};
