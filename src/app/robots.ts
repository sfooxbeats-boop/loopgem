import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/beat-store", "/drum-kits", "/services"],
    },
    sitemap: "https://loopgem.com/sitemap.xml",
  };
}
