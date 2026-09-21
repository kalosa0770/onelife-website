import "server-only";
import type { FormDefinition } from "./definitions";

// Email is sent through Resend's REST API when RESEND_API_KEY and
// FORMS_FROM_EMAIL are set. Without them this is a no-op: the submission is
// already saved, so a missing mail provider must never fail the visitor.

async function send(to: string, subject: string, text: string, replyTo?: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.FORMS_FROM_EMAIL;
  if (!key || !from) return;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

export async function notifyFormSubmission(
  def: FormDefinition,
  values: Record<string, string | boolean>
) {
  const lines = def.fields
    .filter((f) => values[f.name] !== undefined)
    .map((f) => `${f.label}: ${typeof values[f.name] === "boolean" ? (values[f.name] ? "Yes" : "No") : values[f.name]}`);
  const email = typeof values.email === "string" ? values.email : undefined;

  const tasks = [
    send(
      process.env[def.notifyEnv] || def.notifyTo,
      `New submission: ${def.id}`,
      lines.join("\n"),
      email
    ),
  ];
  if (def.acknowledge && email) {
    tasks.push(send(email, def.acknowledge.subject, def.acknowledge.body));
  }

  const results = await Promise.allSettled(tasks);
  for (const r of results) {
    if (r.status === "rejected") console.error(`[forms] ${def.id} email failed:`, r.reason);
  }
}
