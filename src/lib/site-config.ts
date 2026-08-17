export const siteConfig = {
  name: "Blue House",
  legalName: "Blue House Exquisite Properties",
  title: "Blue House | Imobiliário de Luxo em Lisboa",
  description:
    "Arquitetura e mediação imobiliária de propriedades de luxo selecionadas em Lisboa, Cascais, Sintra e Comporta, com acompanhamento próximo e discreto.",
  locale: "pt_PT",
  language: "pt-PT",
} as const;

export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (!configuredUrl) return undefined;

  const siteUrl = new URL(configuredUrl);

  if (!["http:", "https:"].includes(siteUrl.protocol)) {
    throw new Error("SITE_URL must use the http or https protocol.");
  }

  return siteUrl;
}
