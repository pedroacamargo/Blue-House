import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyGallery, type Property } from "@/components/property-gallery";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();
const galleryTitle = "Propriedades singulares em Portugal";
const galleryDescription =
  "Conheça a Casa Azoia, em Sintra, e a Quinta do Pego, nas Caldas da Rainha: propriedades singulares selecionadas pela Blue House.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  alternates: siteUrl
    ? {
        canonical: "/gallery",
        languages: {
          "pt-PT": "/gallery",
        },
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
  const galleryJsonLd = siteUrl
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": new URL("/gallery#breadcrumbs", siteUrl).toString(),
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Início",
                item: siteUrl.toString(),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Propriedades",
                item: new URL("/gallery", siteUrl).toString(),
              },
            ],
          },
          {
            "@type": "CollectionPage",
            "@id": new URL("/gallery#collection", siteUrl).toString(),
            url: new URL("/gallery", siteUrl).toString(),
            name: galleryTitle,
            description: galleryDescription,
            inLanguage: siteConfig.language,
            isPartOf: {
              "@id": new URL("/#website", siteUrl).toString(),
            },
            breadcrumb: {
              "@id": new URL("/gallery#breadcrumbs", siteUrl).toString(),
            },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: properties.length,
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              itemListElement: properties.map((property, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": property.id === "casa-azoia" ? "House" : "Place",
                  "@id": new URL(
                    `/gallery#${property.id}`,
                    siteUrl,
                  ).toString(),
                  name: property.name,
                  description: property.description,
                  image: property.images.map(({ src }) =>
                    new URL(src, siteUrl).toString(),
                  ),
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: property.location,
                    addressRegion: property.region,
                    addressCountry: "PT",
                  },
                  additionalProperty: property.specifications.map(
                    ({ label, value }) => ({
                      "@type": "PropertyValue",
                      name: label,
                      value,
                    }),
                  ),
                },
              })),
            },
          },
        ],
      }
    : undefined;

  return (
    <main className="gallery-page">
      {galleryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(galleryJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
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

      <PropertyGallery properties={properties} />
      <ScrollSidebar />
    </main>
  );
}
