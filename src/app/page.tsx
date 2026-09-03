import Image, { getImageProps } from "next/image";
import approachImage from "../../public/properties/casa-azoia/sala-escada.webp";
import heroDesktopImage from "../../public/properties/casa-azoia/hero-architecture-desktop.webp";
import heroMobileImage from "../../public/properties/casa-azoia/hero-architecture-mobile.webp";
import { LandingIntro } from "@/components/landing-intro";
import { SectionReveals } from "@/components/section-reveals";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";
import { getLocale } from "@/lib/get-locale";
import { getTranslations } from "@/lib/i18n";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();
const availablePropertiesCount = propertiesData.length;

const contactChannels = [
  {
    number: "01",
    value: "+351 219 231 385",
    href: "tel:+351219231385",
  },
  {
    number: "02",
    value: "+351 960 169 569",
    href: "tel:+351960169569",
  },
  {
    number: "03",
    value: "geral@thebluehouse.pt",
    href: "mailto:geral@thebluehouse.pt",
  },
];

const socialNetworks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thebluehouse.pt/",
  },
];

function SectionTransition({
  className,
  reverse = false,
}: {
  className: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`section-transition ${className}${reverse ? " is-reversed" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path
          className="transition-surface"
          d="M0 74L1440 110V140H0Z"
        />
      </svg>
    </div>
  );
}

function HeroPicture() {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: heroDesktopImage,
    alt: "",
    fill: true,
    sizes: "100vw",
    quality: 90,
  });

  return (
    <picture className="hero-picture">
      <source
        media="(min-width: 64rem)"
        srcSet={desktopSrcSet}
        sizes="100vw"
      />
      <Image
        src={heroMobileImage}
        alt=""
        fill
        fetchPriority="high"
        sizes="100vw"
        quality={90}
        className="hero-image"
      />
    </picture>
  );
}

function TextLines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 && <br className="pdf-line-break" />}
      {line}
    </span>
  ));
}

export default async function Home() {
  const locale = await getLocale();
  const translation = getTranslations(locale);
  const { home } = translation;
  const availablePropertiesLabel =
    availablePropertiesCount === 1
      ? home.properties.availableSingular
      : home.properties.availablePlural;
  const websiteJsonLd = siteUrl
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteUrl.toString(),
        inLanguage: locale,
      }
    : undefined;

  return (
    <main className="site-shell">
      {websiteJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <LandingIntro
        loadingWebsiteLabel={translation.intro.loadingWebsite}
        loadingLabel={translation.intro.loading}
      />
      <SectionReveals />
      <ScrollSidebar
        locale={locale}
        navigation={translation.navigation}
        language={translation.language}
      />

      <section id="inicio" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <HeroPicture />
        </div>
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner">
          <a
            className="hero-brand"
            href="#inicio"
            aria-label={home.hero.brandLabel}
          >
            <Image
              src="/brand/Logo-Quality.png"
              alt="Blue House Exquisite Properties"
              width={2000}
              height={2000}
              loading="eager"
              sizes="(min-width: 1024px) 232px, (min-width: 768px) 208px, 176px"
            />
          </a>

          <div className="hero-copy">
            <p className="eyebrow">The Blue House</p>
            <h1 id="hero-title">
              {home.hero.title}
              <span>{home.hero.subtitle}</span>
            </h1>
            <p className="hero-lead">{home.hero.lead}</p>
            <a className="text-link text-link-light" href="#essencia">
              <span>{home.hero.vision}</span>
              <span className="link-line" aria-hidden="true" />
            </a>
          </div>

          <a className="scroll-cue" href="#essencia">
            <span>{home.hero.explore}</span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </a>
        </div>

        <SectionTransition className="transition-to-paper" />
      </section>

      <section
        id="essencia"
        className="essence-section reveal-section"
        aria-labelledby="essence-title"
        data-reveal-section
      >
        <span className="section-monogram essence-monogram" aria-hidden="true">
          BH
        </span>
        <div className="section-index" aria-hidden="true">
          01
        </div>

        <div className="section-intro" data-reveal-group>
          <p className="eyebrow eyebrow-dark">{home.essence.eyebrow}</p>
          <h2 id="essence-title">
            {home.essence.title}
            <span>
              {home.essence.titleMiddle}
              <br /> {home.essence.titleConnector}
              <em>{home.essence.titleEnd}</em>
            </span>
          </h2>
          <p><TextLines lines={home.essence.body} /></p>
        </div>

        <div className="principles-grid" data-reveal-group>
          {home.essence.principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <div className="principle-heading" aria-hidden="true">
                <span className="principle-rule" aria-hidden="true" />
              </div>
              <h3>{principle.title}</h3>
              <p><TextLines lines={principle.copy} /></p>
            </article>
          ))}
        </div>

        <SectionTransition className="transition-to-deep-blue" reverse />
      </section>

      <section
        id="abordagem"
        className="approach-section reveal-section"
        aria-labelledby="approach-title"
        data-reveal-section
      >
        <div className="approach-image-wrap" data-reveal-group>
          <Image
            src={approachImage}
            alt={home.approach.imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 900px) 58vw, 100vw"
            quality={85}
            className="approach-image"
          />
          <div className="approach-image-shade" aria-hidden="true" />
          <span className="image-caption">{home.approach.imageCaption}</span>
        </div>

        <div className="approach-copy" data-reveal-group>
          <span className="section-number">02</span>
          <p className="eyebrow">{home.approach.eyebrow}</p>
          <h2 id="approach-title">
            {home.approach.title}
            <span>{home.approach.subtitle}</span>
          </h2>
          <p><TextLines lines={home.approach.body} /></p>
          <a className="text-link text-link-light" href="#propriedades">
            <span>{home.approach.continue}</span>
            <span className="link-line" aria-hidden="true" />
          </a>
        </div>

        <SectionTransition className="transition-to-soft-paper" />
      </section>

      <section
        id="propriedades"
        className="closing-section reveal-section"
        aria-labelledby="closing-title"
        data-reveal-section
      >
        <span className="section-monogram closing-monogram" aria-hidden="true">
          BH
        </span>
        <div className="section-index" aria-hidden="true">
          03
        </div>

        <div className="closing-content" data-reveal-group>
          <p className="eyebrow eyebrow-dark">{home.properties.eyebrow}</p>
          <h2 id="closing-title">
            {home.properties.title}
            <span>
              {home.properties.titlePrefix} <em>{home.properties.titleEmphasis}</em>
            </span>
          </h2>
          <p>{home.properties.body}</p>
          <div className="closing-note">
            <span>{home.properties.label}</span>
            <span className="closing-rule" aria-hidden="true" />
            <span>
              {String(availablePropertiesCount).padStart(2, "0")} ·{" "}
              {availablePropertiesLabel}
            </span>
          </div>
          <a className="text-link" href="/gallery">
            <span>{home.properties.view}</span>
            <span className="link-line" aria-hidden="true" />
          </a>
        </div>

        <SectionTransition className="transition-to-footer" reverse />
      </section>

      <footer
        id="contacto"
        className="site-footer reveal-section"
        aria-labelledby="footer-title"
        data-reveal-section
      >
        <div className="footer-inner">
          <div className="footer-intro" data-reveal-group>
            <div>
              <p className="eyebrow">{home.footer.eyebrow}</p>
              <h2 id="footer-title">{home.footer.title}</h2>
            </div>
            <p>{home.footer.body}</p>
          </div>

          <div
            className="footer-contacts"
            aria-label={home.footer.contactsLabel}
            data-reveal-group
          >
            {contactChannels.map((contact, index) => (
              <div className="footer-contact" key={contact.number}>
                <div className="footer-contact-heading">
                  <span>{home.footer.contacts[index].label}</span>
                  <span aria-hidden="true">{contact.number}</span>
                </div>
                {contact.href ? (
                  <a
                    className="footer-contact-value"
                    href={contact.href}
                    aria-label={home.footer.contacts[index].accessibleLabel}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span
                    className="footer-contact-value"
                    aria-label={home.footer.contacts[index].accessibleLabel}
                  >
                    {contact.value}
                  </span>
                )}
                <span className="footer-contact-rule" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div
            className="footer-socials"
            role="group"
            aria-labelledby="footer-socials-title"
            data-reveal-group
          >
            <span
              id="footer-socials-title"
              className="footer-socials-label"
            >
              {home.footer.follow}
            </span>
            <div className="footer-social-links">
              {socialNetworks.map((network) => (
                <a
                  className="footer-social-link"
                  href={network.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={home.footer.socialLabel}
                  key={network.name}
                >
                    <span>{network.name}</span>
                    <span className="footer-social-arrow" aria-hidden="true">
                      <svg viewBox="0 0 16 16">
                        <path d="M4 12 12 4M6 4h6v6" />
                      </svg>
                    </span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-license">
              <span>{home.footer.licence}</span>
              <span>AMI - 24716</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
