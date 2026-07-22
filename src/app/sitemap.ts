import type { MetadataRoute } from "next";

const BASE_URL = "https://loopgem.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/courses", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/booking", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/pricing-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
