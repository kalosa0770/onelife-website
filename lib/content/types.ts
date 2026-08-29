// Shared types for the content registry — see registry.ts for the actual
// per-collection field definitions, and README.md for the big picture.

export type FieldType =
  | "text" // single-line string
  | "textarea" // multi-line string, line breaks preserved on render
  | "url"
  | "image" // string URL, rendered with an upload button + preview in admin
  | "icon" // string key into lib/content/icons.ts, rendered as a picker
  | "select" // string constrained to `options`
  | "stringlist" // string[] — a simple repeatable list of short text values
  | "objectlist"; // Record<string, string>[] — repeatable structured rows, shape given by `itemFields`

export interface FieldSchema {
  key: string;
  label: string;
  type: FieldType;
  /** select: allowed values. */
  options?: { value: string; label: string }[];
  /** objectlist: the field schema for one row. */
  itemFields?: FieldSchema[];
  /** Shown under the input in the admin form. */
  helpText?: string;
  /** textarea: how many rows to render (default 3). */
  rows?: number;
}

export interface SingletonDefinition {
  kind: "singleton";
  key: string;
  label: string;
  description?: string;
  fields: FieldSchema[];
}

export interface CollectionDefinition {
  kind: "list";
  key: string;
  label: string;
  description?: string;
  fields: FieldSchema[];
  /** Field used to label each row in the admin list view. */
  titleField: string;
  /** Optional secondary field shown alongside the title in the list view. */
  subtitleField?: string;
}

export type ContentDefinition = SingletonDefinition | CollectionDefinition;

/** The generic JSON payload shape stored in Item.data / Singleton.data. */
export type ContentRecord = Record<string, unknown>;
