import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyGallery, type Property } from "@/components/property-gallery";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesEnglishData from "@/data/properties.en-GB.json";
import propertiesData from "@/data/properties.json";
import { getLocale } from "@/lib/get-locale";
import { getTranslations } from "@/lib/i18n";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = getTranslations(locale);

  return {
    title: meta.galleryTitle,
    description: meta.galleryDescription,
    alternates: siteUrl
      ? {
          canonical: "/gallery",
        }
      : undefined,
    openGraph: {
      type: "website",
      locale: locale.replace("-", "_"),
      siteName: siteConfig.name,
      title: `${meta.galleryTitle} | ${siteConfig.name}`,
      description: meta.galleryDescription,
      url: siteUrl ? new URL("/gallery", siteUrl) : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.galleryTitle} | ${siteConfig.name}`,
      description: meta.galleryDescription,
    },
  };
}

export default async function GalleryPage() {
  const locale = await getLocale();
  const translation = getTranslations(locale);
  const properties = (locale === "en-GB"
    ? propertiesEnglishData
    : propertiesData) as Property[];

  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <Link
          className="gallery-brand"
          href="/"
          aria-label={translation.gallery.backHome}
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
          <h1>{translation.gallery.title}</h1>
        </div>
      </header>

      <PropertyGallery properties={properties} copy={translation.gallery} />
      <ScrollSidebar
        locale={locale}
        navigation={translation.navigation}
        language={translation.language}
      />
    </main>
  );
}
