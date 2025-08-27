import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phpstack-1499764-5738009.cloudwaysapps.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
