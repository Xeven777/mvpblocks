import { createMDX } from "fumadocs-mdx/next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX();

const isAnalyze = process.env.ANALYZE === "true";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react", "next-themes"],
  },
};

// Compose the configurations
const finalConfig = withMDX(config);

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(finalConfig)
  : finalConfig;
