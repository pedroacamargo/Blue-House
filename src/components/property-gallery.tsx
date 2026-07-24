"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

export type Property = {
  id: string;
  name: string;
  location: string;
  region: string;
  typology: string;
  status: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  specifications: Array<{
    label: string;
    value: string;
  }>;
};

type PropertyGalleryProps = {
  properties: Property[];
};

export function PropertyGallery({ properties }: PropertyGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProperty = useMemo(
    () => properties.find((property) => property.id === activeId) ?? null,
    [activeId, properties],
  );

  useEffect(() => {
    if (!activeProperty) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeProperty]);

  const galleryStyle = {
    "--gallery-rows": Math.max(Math.ceil(properties.length / 2), 1),
    "--inactive-count": Math.max(properties.length - 1, 1),
  } as CSSProperties;

  return (
    <div
      className={`property-gallery${activeProperty ? " is-expanded" : ""}`}
      style={galleryStyle}
    >
      <div className="gallery-grid" aria-label="Imóveis disponíveis">
        {properties.map((property, index) => {
          const isSelected = property.id === activeId;
          const inactiveOrder = activeProperty
            ? properties
                .filter((item) => item.id !== activeProperty.id)
                .findIndex((item) => item.id === property.id)
            : index;
          const cardStyle = {
            "--card-order": Math.max(inactiveOrder, 0),
            "--thumb-left": `${
              (Math.max(inactiveOrder, 0) / Math.max(properties.length - 1, 1)) *
              100
            }%`,
            "--thumb-width": `${100 / Math.max(properties.length - 1, 1)}%`,
          } as CSSProperties;

          return (
            <article
              className={`property-card${isSelected ? " is-selected" : ""}`}
              style={cardStyle}
              key={property.id}
            >
              <button
                className="property-card-trigger"
                type="button"
                onClick={() => setActiveId(property.id)}
                aria-expanded={isSelected}
                aria-controls={
                  isSelected ? `property-detail-${property.id}` : undefined
                }
                aria-label={
                  isSelected
                    ? `${property.name}, detalhes apresentados`
                    : `Conhecer ${property.name}, ${property.location}`
                }
              >
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes={
                    activeProperty
                      ? "(min-width: 768px) 100vw, 100vw"
                      : "(min-width: 768px) 50vw, 50vw"
                  }
                  className="property-card-image"
                />
                <span className="property-card-wash" aria-hidden="true" />

                <span className="property-card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="property-card-caption">
                  <span className="property-card-place">
                    {property.location} · {property.region}
                  </span>
                  <strong>{property.name}</strong>
                  <span className="property-card-meta">
                    <span>{property.typology}</span>
                    <span>Explorar</span>
                  </span>
                </span>
              </button>

              {isSelected && (
                <>
                  <button
                    className="property-detail-close"
                    type="button"
                    onClick={() => setActiveId(null)}
                    aria-label={`Fechar detalhes de ${property.name}`}
                  >
                    <span>Fechar</span>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="m4 4 8 8M12 4l-8 8" />
                    </svg>
                  </button>

                  <section
                    className="property-detail"
                    id={`property-detail-${property.id}`}
                    aria-label={`Informações de ${property.name}`}
                    aria-live="polite"
                  >
                    <div className="property-detail-intro">
                      <div className="property-detail-heading">
                        <span>
                          {property.status} · {property.typology}
                        </span>
                        <h2>{property.name}</h2>
                      </div>
                      <p className="property-detail-description">
                        {property.description}
                      </p>
                      <ul className="property-highlights" aria-label="Destaques">
                        {property.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <dl className="property-specifications">
                      {property.specifications.map((specification) => (
                        <div
                          className="property-spec"
                          key={specification.label}
                        >
                          <dt>{specification.label}</dt>
                          <dd>{specification.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </>
              )}
            </article>
          );
        })}
      </div>

      <p className="gallery-instruction" aria-live="polite">
        {activeProperty
          ? `${activeProperty.name} selecionada · Esc para fechar`
          : "Selecione um imóvel para descobrir os detalhes"}
      </p>
    </div>
  );
}
