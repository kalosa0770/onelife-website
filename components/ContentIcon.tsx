import { getIcon } from "@/lib/site/icons";

interface ContentIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/**
 * Renders a named icon from the site's static icon registry.
 */
export function ContentIcon({ name, className, strokeWidth }: ContentIconProps) {
  const Icon = getIcon(name);
  // eslint-disable-next-line react-hooks/static-components
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
