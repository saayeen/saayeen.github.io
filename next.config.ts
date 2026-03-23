import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Genera sitio estático para GitHub Pages
  images: {
    unoptimized: true,   // Permite que las imágenes funcionen sin servidor
  },
};

export default nextConfig;
