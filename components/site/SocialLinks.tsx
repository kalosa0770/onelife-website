import type { SiteSettings } from "@/lib/site/content";

interface SocialLinksProps {
  siteSettings: Pick<SiteSettings, "linkedinUrl" | "xUrl" | "instagramUrl">;
  className?: string;
  iconClassName?: string;
}

const linkClass = "transition-colors hover:text-onelife-red";

export function SocialLinks({ siteSettings, className = "", iconClassName = "h-4 w-4" }: SocialLinksProps) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div className={`flex items-center ${className}`}>
      {siteSettings.linkedinUrl && (
        <a href={siteSettings.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}>
          <svg className={iconClassName} viewBox="0 0 24 24" {...stroke}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      )}
      {siteSettings.xUrl && (
        <a href={siteSettings.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={linkClass}>
          <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      )}
      {siteSettings.instagramUrl && (
        <a href={siteSettings.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={linkClass}>
          <svg className={iconClassName} viewBox="0 0 24 24" {...stroke}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      )}
    </div>
  );
}
