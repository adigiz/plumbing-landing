import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "your-live-strapi-domain.com"],
  },
};

export default nextConfig;
