import Image, { getImageProps } from "next/image";
import approachImage from "../../public/properties/casa-azoia/sala-escada.webp";
import heroDesktopImage from "../../public/properties/casa-azoia/hero-architecture-desktop.webp";
import heroMobileImage from "../../public/properties/casa-azoia/hero-architecture-mobile.webp";
import { LandingIntro } from "@/components/landing-intro";
import { SectionReveals } from "@/components/section-reveals";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import propertiesData from "@/data/properties.json";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();
const availablePropertiesCount = propertiesData.length;
const availablePropertiesLabel =
  availablePropertiesCount === 1
    ? "propriedade disponível"
    : "propriedades disponíveis";

const principles = [
  {
    title: "Olhar de arquitetura",
    copy: "Cada espaço é lido para além da sua forma — contexto, proporção e potencial fazem parte da mesma decisão.",
  },
  {
    title: "Curadoria criteriosa",
    copy: "Um portefólio intencionalmente pequeno, onde a relevância de cada propriedade vale mais do que o volume.",
  },
  {
    title: "Proximidade discreta",
    copy: "Uma relação atenta, pessoal e reservada, construída ao ritmo de quem procura ou confia um lugar singular.",
  },
];

const contactChannels = [
  {
    number: "01",
    label: "Telefone fixo",
    value: "+351 219 231 385",
    href: "tel:+351219231385",
    accessibleLabel: "Ligar para o telefone fixo +351 219 231 385",
  },
  {
    number: "02",
    label: "Telemóvel",
    value: "+351 960 169 569",
    href: "tel:+351960169569",
    accessibleLabel: "Ligar para o telemóvel +351 960 169 569",
  },
  {
    number: "03",
    label: "Email",
    value: "geral@thebluehouse.pt",
    href: "mailto:geral@thebluehouse.pt",
    accessibleLabel: "Enviar email para geral@thebluehouse.pt",
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

export default function Home() {
  const websiteJsonLd = siteUrl
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteUrl.toString(),
        inLanguage: siteConfig.language,
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
      <LandingIntro />
      <SectionReveals />
      <ScrollSidebar />

      <section id="inicio" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <HeroPicture />
        </div>
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner">
          <a className="hero-brand" href="#inicio" aria-label="Blue House, início">
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
            <p className="eyebrow">Arquitetura &amp; Imobiliário · Lisboa</p>
            <h1 id="hero-title">
              Espaços singulares.
              <span>Escolhas com intenção.</span>
            </h1>
            <p className="hero-lead">
              Uma abordagem próxima e criteriosa à mediação de propriedades
              excecionais, informada por um olhar de arquitetura.
            </p>
            <a className="text-link text-link-light" href="#essencia">
              <span>Conhecer a nossa visão</span>
              <span className="link-line" aria-hidden="true" />
            </a>
          </div>

          <a className="scroll-cue" href="#essencia">
            <span>Explorar</span>
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
          <p className="eyebrow eyebrow-dark">A nossa essência</p>
          <h2 id="essence-title">
            Menos propriedades.
            <span>
              Mais <em>significado.</em>
            </span>
          </h2>
          <p>
            A Blue House nasce do encontro entre arquitetura e imobiliário.
            Selecionamos com rigor para acompanhar com tempo, clareza e atenção.
          </p>
        </div>

        <div className="principles-grid" data-reveal-group>
          {principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <div className="principle-heading" aria-hidden="true">
                <span className="principle-rule" aria-hidden="true" />
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
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
            alt="Sala da Casa Azoia com escada artesanal em madeira"
            fill
            placeholder="blur"
            sizes="(min-width: 900px) 58vw, 100vw"
            quality={85}
            className="approach-image"
          />
          <div className="approach-image-shade" aria-hidden="true" />
          <span className="image-caption">Madeira · Luz · Matéria</span>
        </div>

        <div className="approach-copy" data-reveal-group>
          <span className="section-number">02</span>
          <p className="eyebrow">A abordagem</p>
          <h2 id="approach-title">
            Ver o espaço
            <span>antes da propriedade.</span>
          </h2>
          <p>
            A leitura arquitetónica revela o que nem sempre é imediato: a
            qualidade da luz, a relação com o lugar e a forma como um espaço
            pode ser vivido.
          </p>
          <a className="text-link text-link-light" href="#propriedades">
            <span>Continuar</span>
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
          <p className="eyebrow eyebrow-dark">
            {String(availablePropertiesCount).padStart(2, "0")} ·{" "}
            {availablePropertiesLabel}
          </p>
          <h2 id="closing-title">
            Lugares escolhidos
            <span>
              com <em>intenção.</em>
            </span>
          </h2>
          <p>
            Explore uma seleção cuidada de propriedades singulares, escolhidas
            pela sua arquitetura, contexto e potencial.
          </p>
          <div className="closing-note">
            <span>Propriedades</span>
            <span className="closing-rule" aria-hidden="true" />
            <span>
              {String(availablePropertiesCount).padStart(2, "0")} ·{" "}
              {availablePropertiesLabel}
            </span>
          </div>
          <a className="text-link" href="/gallery">
            <span>Ver propriedades</span>
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
              <p className="eyebrow">Contactos</p>
              <h2 id="footer-title">
                Comecemos
                <span>uma conversa.</span>
              </h2>
            </div>
            <p>
              Duas linhas telefónicas e um email para um acompanhamento
              próximo, reservado e atento a cada detalhe.
            </p>
          </div>

          <div
            className="footer-contacts"
            aria-label="Contactos da empresa"
            data-reveal-group
          >
            {contactChannels.map((contact) => (
              <div className="footer-contact" key={contact.number}>
                <div className="footer-contact-heading">
                  <span>{contact.label}</span>
                  <span aria-hidden="true">{contact.number}</span>
                </div>
                {contact.href ? (
                  <a
                    className="footer-contact-value"
                    href={contact.href}
                    aria-label={contact.accessibleLabel}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span
                    className="footer-contact-value"
                    aria-label={contact.accessibleLabel}
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
              Acompanhe a Blue House
            </span>
            <div className="footer-social-links">
              {socialNetworks.map((network) => (
                <a
                  className="footer-social-link"
                  href={network.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${network.name} da Blue House (abre num novo separador)`}
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
              <span>Licença AMI — Warrior Destiny Lda</span>
              <span>AMI — 24716</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
