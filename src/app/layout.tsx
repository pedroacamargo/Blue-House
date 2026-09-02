import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { getLocale } from "@/lib/get-locale";
import { getTranslations } from "@/lib/i18n";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = getTranslations(locale);

  return {
    metadataBase: siteUrl,
    title: {
      default: meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.description,
    applicationName: siteConfig.legalName,
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: meta.category,
    alternates: siteUrl
      ? {
          canonical: "/",
        }
      : undefined,
    openGraph: {
      type: "website",
      locale: locale.replace("-", "_"),
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#30416c",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
