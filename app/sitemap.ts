import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.URL || process.env.NEXT_PUBLIC_SITE_URL || "https://tehlilkhan.netlify.app";

  const routes = [
    "",
    "/about",
    "/ai-lab",
    "/ai-lab/llm-router",
    "/ai-lab/pr-reviewer",
    "/ai-lab/voice-to-sql",
    "/ai-lab/semantic-caching",
    "/ai-lab/e2e-testing",
    "/ai-lab/dynamic-ui",
    "/case-studies",
    "/contact",
    "/dashboard",
    "/education",
    "/systems",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/ai-lab/") ? 0.6 : 0.8,
  }));
}
