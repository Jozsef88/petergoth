import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = new URL(baseUrl);

  return [
    {
      url: site.toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
