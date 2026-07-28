import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyGallery, type Property } from "@/components/property-gallery";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();
const galleryTitle = "Galeria de Imóveis de Luxo";
const galleryDescription =
  "Explore a coleção privada de imóveis de luxo selecionados pela Blue House em Lisboa, Cascais, Sintra e Comporta.";

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
            sizes="(min-width: 768px) 116px, 86px"
          />
        </Link>

        <div className="gallery-heading">
          <span>Coleção privada</span>
          <h1>Imóveis</h1>
        </div>
      </header>

      <div className="gallery-count" aria-label={`${properties.length} imóveis`}>
        <span>{String(properties.length).padStart(2, "0")}</span>
        <span>lugares selecionados</span>
      </div>

      <PropertyGallery properties={properties} />
      <ScrollSidebar />
    </main>
  );
}
