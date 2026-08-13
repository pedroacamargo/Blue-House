import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyGallery, type Property } from "@/components/property-gallery";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();
const galleryTitle = "Propriedades selecionadas";
const galleryDescription =
  "Conheça as propriedades selecionadas pela Blue House em Portugal.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  alternates: siteUrl
    ? {
        canonical: "/gallery",
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${galleryTitle} | ${siteConfig.name}`,
    description: galleryDescription,
    url: siteUrl ? new URL("/gallery", siteUrl) : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${galleryTitle} | ${siteConfig.name}`,
    description: galleryDescription,
  },
};

export default function GalleryPage() {
  const properties = propertiesData as Property[];

  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <Link
          className="gallery-brand"
          href="/"
          aria-label="Blue House, regressar ao início"
        >
          <Image
            src="/brand/Logo-Quality.png"
            alt="Blue House Exquisite Properties"
            width={2000}
            height={2000}
            preload
            unoptimized
          />
        </Link>

        <div className="gallery-heading">
          <h1>Propriedades</h1>
        </div>
      </header>

      <div
        className="gallery-count"
        aria-label={`${properties.length} ${properties.length === 1 ? "propriedade disponível" : "propriedades disponíveis"}`}
      >
        <span>{String(properties.length).padStart(2, "0")}</span>
        <span>
          {properties.length === 1
            ? "propriedade disponível"
            : "propriedades disponíveis"}
        </span>
      </div>

      <PropertyGallery properties={properties} />
      <ScrollSidebar />
    </main>
  );
}
