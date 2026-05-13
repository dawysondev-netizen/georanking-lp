import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.georanking.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "developers.google.com",
        pathname: "/static/search/blog/images/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        pathname: "/marketing-cms/assets/images/**",
      },
      {
        protocol: "https",
        hostname: "nbg1.your-objectstorage.com",
        pathname: "/s3-ads-software/**",
      },
    ],
  },
};

export default nextConfig;
