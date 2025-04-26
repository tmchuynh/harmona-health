import type { NextConfig } from "next";

const imageHosts = [
  "www.psychiatry.org",
  "images-na.ssl-images-amazon.com",
  "images.wiley.com",
  "oc87recoverydiaries.org",
  "cdn.themighty.com",
  "www.madinamerica.com",
  "www.meditationoasis.com",
  "www.mind.org.uk",
  "images-na.ssl-images-amazon.com",
  "www.mindful.org",
  "tailwindcss.com",
  "www.calmsage.com",
  "www.mindfuleating.org",
  "www.headspace.com",
  "upload.wikimedia.org",
  "biglifejournal.com",
  "minddoc.de",
  "www.sanvello.com",
  "cdn.youper.ai",
  "www.meditationapp.com",
  "www.simplehabit.com",
  "www.smilingmind.com.au",
  "www.wakingup.com",
  "www.breathe.com",
  "www.research.colostate.edu",
];

const nextConfig: NextConfig = {
  middleware: {
    matcher: ["/api/wellness-library/digital-products/wellness-dictionary"],
  },
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
