import type { NextConfig } from "next";

const imageHosts = [
  "images.unsplash.com",
  "www.research.colostate.edu",
  "tailwindcss.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
