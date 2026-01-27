import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webkorps-app.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "purecatamphetamine.github.io",
      },
      {
        protocol: "https",
        hostname: "www.webkorps.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://www.webkorps.com/blog/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*).(png|jpg|jpeg|webp|svg|gif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, must-revalidate" },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      "react-router-dom": path.join(__dirname, "src", "lib", "react-router-dom.js"),
    },
  },
  webpack: (config) => {
    config.resolve.alias["react-router-dom"] = path.join(__dirname, "src", "lib", "react-router-dom.js");
    return config;
  },
};

export default nextConfig;
