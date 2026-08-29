import type { FieldSchema } from "./types";

/** A blank value for every field in a schema — used to seed new-item/new-singleton
 * forms and to backfill any field an existing record doesn't have yet. */
export function getDefaultData(
  fields: FieldSchema[]
): Record<string, unknown> {
  return Object.fromEntries(
    fields.map((field) => {
      if (field.type === "stringlist" || field.type === "objectlist") {
        return [field.key, []];
      }
      if (field.type === "select") {
        return [field.key, field.options?.[0]?.value ?? ""];
      }
      return [field.key, ""];
    })
  );
}

export function withDefaults(
  fields: FieldSchema[],
  data: Record<string, unknown>
): Record<string, unknown> {
  return { ...getDefaultData(fields), ...data };
}
