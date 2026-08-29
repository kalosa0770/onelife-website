import {
  Award,
  Lightbulb,
  Briefcase,
  Compass,
  Calendar,
  TrendingUp,
  Layers,
  Globe,
  Globe2,
  Sparkles,
  BookOpen,
  Tag,
  ShieldCheck,
  Users,
  Handshake,
  Rocket,
  Search,
  FlaskConical,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Phone,
  MapPin,
  Mail,
  Clock,
  Star,
  Target,
  Building2,
  LineChart,
  Trophy,
  Play,
  type LucideIcon,
} from "lucide-react";

/**
 * Every icon an admin-editable "icon" field can choose from. Deliberately a
 * curated allowlist (not all of lucide-react) — it's what drives the icon
 * picker dropdown and what content components look up at render time.
 */
export const ICONS: Record<string, LucideIcon> = {
  Award,
  Lightbulb,
  Briefcase,
  Compass,
  Calendar,
  TrendingUp,
  Layers,
  Globe,
  Globe2,
  Sparkles,
  BookOpen,
  Tag,
  ShieldCheck,
  Users,
  Handshake,
  Rocket,
  Search,
  FlaskConical,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Phone,
  MapPin,
  Mail,
  Clock,
  Star,
  Target,
  Building2,
  LineChart,
  Trophy,
  Play,
};

export type IconName = keyof typeof ICONS;

export const ICON_NAMES = Object.keys(ICONS) as IconName[];

export function getIcon(name: string | undefined | null): LucideIcon {
  if (name && name in ICONS) return ICONS[name];
  return CheckCircle2;
}
