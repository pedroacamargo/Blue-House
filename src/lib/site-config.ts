export const siteConfig = {
  name: "Blue House",
  legalName: "Blue House Exquisite Properties",
  title: "Blue House | Imobiliário de Luxo em Portugal",
  description:
    "Propriedades singulares em Portugal, selecionadas pela Blue House com conhecimento de arquitetura, acompanhamento próximo e mediação imobiliária discreta.",
  locale: "pt_PT",
  language: "pt-PT",
  email: "geral@thebluehouse.pt",
  phone: "+351 219 231 385",
  mobile: "+351 960 169 569",
  instagram: "https://www.instagram.com/thebluehouse.pt/",
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
