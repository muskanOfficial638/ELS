import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.empowering.legal",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
