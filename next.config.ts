import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
    trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      // Wikipedia/Wikimedia
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      // Vietnamese media
      {
        protocol: "https",
        hostname: "s1.vnecdn.net",
      },
      {
        protocol: "https",
        hostname: "static.thanhnien.com.vn",
      },
      {
        protocol: "https",
        hostname: "static.vietnamnet.vn",
      },
      {
        protocol: "https",
        hostname: "ecpmedia.vn",
      },
      // Stock photos
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
