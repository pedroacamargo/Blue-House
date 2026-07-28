import type { MetadataRoute } from "next";
import propertiesData from "@/data/properties.json";
import { getSiteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  const absoluteUrl = (pathname: string) =>
    new URL(pathname, siteUrl).toString();

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/brand/architectural-horizon.png")],
    },
    {
      url: absoluteUrl("/gallery"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: propertiesData.map(({ image }) => absoluteUrl(image)),
    },
  ];
}
