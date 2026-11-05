import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short, shareable URLs for the event pages; also catches old SWS '26 links.
  async redirects() {
    return [
      { source: "/impex", destination: "/events/impex", permanent: true },
      { source: "/sws", destination: "/events/smart-woman-summit", permanent: true },
      { source: "/sws-2026", destination: "/events/smart-woman-summit", permanent: true },
      { source: "/smart-woman-summit", destination: "/events/smart-woman-summit", permanent: true },
      { source: "/platforms/impex", destination: "/events/impex", permanent: true },
      { source: "/platforms/smart-woman-summit", destination: "/events/smart-woman-summit", permanent: true },
      { source: "/platforms", destination: "/events", permanent: true },
      { source: "/new-ventures", destination: "/health-corridor", permanent: true },
      { source: "/events/impex/corridors", destination: "/events/impex#corridors", permanent: true },
      { source: "/events/impex/ledger", destination: "/events/impex#ledger", permanent: true },
      { source: "/events/impex/oti", destination: "/events/impex#oti", permanent: true },
      { source: "/events/impex/register", destination: "/events/impex#register", permanent: true },
      { source: "/events/smart-woman-summit/financial-literacy", destination: "/events/smart-woman-summit#literacy", permanent: true },
      { source: "/events/smart-woman-summit/2027", destination: "/events/smart-woman-summit#event", permanent: true },
      { source: "/events/smart-woman-summit/register", destination: "/events/smart-woman-summit#register", permanent: true },
      { source: "/health-corridor/registered-hospitals", destination: "/health-corridor#hospitals", permanent: true },
      { source: "/health-corridor/partner-insurance", destination: "/health-corridor#insurance", permanent: true },
      { source: "/health-corridor/contact", destination: "/health-corridor#contact", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;