import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/downloads/", "/beat-store", "/drum-kits", "/services"],
    },
    sitemap: "https://www.loopgem.com/sitemap.xml",
  };
}
