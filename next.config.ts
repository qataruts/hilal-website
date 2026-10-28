import type { NextConfig } from "next";

/**
 * A static site (owner, 2026-10-28: «نريد الرفع اليوم»): `next build` writes plain HTML to
 * out/, so it can be served by Vercel, by a server of our own or by GitHub Pages alike.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
