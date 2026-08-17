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
      images: [
        absoluteUrl(
          "/properties/casa-azoia/hero-architecture-desktop.webp",
        ),
      ],
    },
    {
      url: absoluteUrl("/gallery"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: propertiesData.flatMap(({ images }) =>
        images.map(({ src }) => absoluteUrl(src)),
      ),
    },
  ];
}
