import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@ogle/auth", "@ogle/db", "@ogle/ui"],
};

export default nextConfig;
