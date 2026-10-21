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