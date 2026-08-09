import Image, { getImageProps } from "next/image";
import approachImage from "../../public/properties/casa-azoia/sala-escada.webp";
import heroDesktopImage from "../../public/properties/casa-azoia/hero-architecture-desktop.webp";
import heroMobileImage from "../../public/properties/casa-azoia/hero-architecture-mobile.webp";
import { LandingIntro } from "@/components/landing-intro";
import { SectionReveals } from "@/components/section-reveals";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const siteUrl = getSiteUrl();

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
    label: "Telefone principal",
    value: "+351 ··· ··· ···",
    accessibleLabel: "Telefone principal, número a confirmar",
  },
  {
    number: "02",
    label: "Contacto direto",
    value: "+351 ··· ··· ···",
    accessibleLabel: "Contacto direto, número a confirmar",
  },
  {
    number: "03",
    label: "Contacto adicional",
    value: "+351 ··· ··· ···",
    accessibleLabel: "Contacto adicional, número a confirmar",
  },
  {
    number: "04",
    label: "Email da empresa",
    value: "A confirmar",
    accessibleLabel: "Email da empresa a confirmar",
  },
];

const socialNetworks = ["Instagram", "Pinterest", "Facebook"];

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
          <a className="text-link text-link-light" href="#casa-azoia">
            <span>Continuar</span>
            <span className="link-line" aria-hidden="true" />
          </a>
        </div>

        <SectionTransition className="transition-to-soft-paper" />
      </section>

      <section
        id="casa-azoia"
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
          <p className="eyebrow eyebrow-dark">Disponível · Azoia, Sintra</p>
          <h2 id="closing-title">
            Uma casa entre a serra
            <span>
              e o <em>Atlântico.</em>
            </span>
          </h2>
          <p>
            Conheça a Casa Azoia, os seus interiores acolhedores, os terraços
            banhados pela luz do poente e a paisagem que a envolve.
          </p>
          <div className="closing-note">
            <span>Casa Azoia</span>
            <span className="closing-rule" aria-hidden="true" />
            <span>Disponível</span>
          </div>
          <a className="text-link" href="/gallery">
            <span>Ver a propriedade</span>
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
              Três linhas telefónicas e um email para um acompanhamento
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
                <span
                  className="footer-contact-value"
                  aria-label={contact.accessibleLabel}
                >
                  {contact.value}
                </span>
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
                <button
                  className="footer-social-link"
                  type="button"
                  disabled
                  aria-label={`${network}, ligação a confirmar`}
                  key={network}
                >
                  <span>{network}</span>
                  <span className="footer-social-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <path d="M4 12 12 4M6 4h6v6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="footer-bottom" data-reveal-group>
            <div className="footer-signature">
              <span className="footer-monogram" aria-hidden="true">
                BH
              </span>
              <span>
                Blue House
                <small>Exquisite Properties</small>
              </span>
            </div>
            <span>Lisboa · Portugal</span>
            <span>Est. 2023</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
