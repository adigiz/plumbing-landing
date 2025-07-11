import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://beneficial-rainbow-49484dea8b.strapiapp.com/**')],
  },
};

export default nextConfig;
