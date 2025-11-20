import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds (warnings only in dev)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
