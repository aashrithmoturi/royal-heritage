import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Serve tiny modern image formats so the page paints instantly while
  // heavier originals are optimised on demand.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
  },
  // Pre-bundle the heavy animation lib for faster cold loads.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },
};

export default nextConfig;
