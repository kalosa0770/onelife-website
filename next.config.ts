import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short, shareable URLs for the event pages; also catches old SWS '26 links.
  async redirects() {
    return [
      { source: "/impex", destination: "/platforms/impex", permanent: true },
      { source: "/sws", destination: "/platforms/smart-woman-summit", permanent: true },
      { source: "/sws-2026", destination: "/platforms/smart-woman-summit", permanent: true },
      { source: "/smart-woman-summit", destination: "/platforms/smart-woman-summit", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;