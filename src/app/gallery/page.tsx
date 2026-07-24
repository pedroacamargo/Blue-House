import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyGallery, type Property } from "@/components/property-gallery";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";

export const metadata: Metadata = {
  title: "Galeria de Imóveis | Blue House",
  description:
    "Uma coleção reservada de propriedades selecionadas pela Blue House.",
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
