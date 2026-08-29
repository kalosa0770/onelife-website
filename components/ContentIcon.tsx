import { getIcon } from "@/lib/content/icons";

interface ContentIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/**
 * Renders an icon chosen by name from an admin-editable field (see
 * lib/content/icons.ts). Centralized here so the "look up a component by a
 * data-driven key" pattern — which the React Compiler's static-components
 * lint rule can't distinguish from actually constructing a new component —
 * only needs justifying once. `getIcon` always resolves to a stable
 * reference from a static registry, never a freshly created component, so
 * this never causes the remounts that rule protects against.
 */
export function ContentIcon({ name, className, strokeWidth }: ContentIconProps) {
  const Icon = getIcon(name);
  // eslint-disable-next-line react-hooks/static-components
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
