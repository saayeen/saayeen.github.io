import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",    // Genera build estático en /out
  images: { unoptimized: true },
};

export default nextConfig;
