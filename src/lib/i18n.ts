export const locales = ["pt-PT", "en-GB"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-PT";
export const localeCookieName = "blue-house-locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export const translations = {
  "pt-PT": {
    meta: {
      title: "Blue House | Imobiliário de Luxo em Lisboa",
      description:
        "Arquitetura e mediação imobiliária de propriedades de luxo selecionadas em Lisboa, Cascais, Sintra e Comporta, com acompanhamento próximo e discreto.",
      category: "Imobiliário",
      galleryTitle: "Propriedades selecionadas",
      galleryDescription:
        "Conheça as propriedades selecionadas pela Blue House em Portugal.",
    },
    language: {
      label: "Idioma",
      selectorLabel: "Selecionar idioma",
      portuguese: "Português",
      english: "Inglês britânico",
    },
    navigation: {
      label: "Navegação da página",
      gallery: "Galeria",
      sections: ["Início", "Essência", "Abordagem", "Propriedades", "Contactos"],
    },
    intro: {
      loadingWebsite: "A carregar o website da Blue House",
      loading: "A carregar…",
    },
    home: {
      hero: {
        brandLabel: "Blue House, início",
        title: "Exquisite Properties",
        subtitle: "Extraordinary Places",
        lead:
          "The Blue House Exquisite Properties não é apenas uma marca. É uma forma de olhar para o património, para a arquitetura e para o ato de escolher uma casa.",
        vision: "Conhecer a nossa visão",
        explore: "Explorar",
      },
      essence: {
        eyebrow: "A nossa essência",
        title: "A essência que",
        titleMiddle: "começa na Casa e",
        titleConnector: "abraça o ",
        titleEnd: "Mundo.",
        body: [
          "The Blue House nasce de uma ideia simples mas",
          "profundamente simbólica: a nossa primeira e maior",
          "Casa é o planeta Terra, esta grande bola Azul.",
        ],
        principles: [
          {
            title: "Carácter, identidade e potencial",
            copy: [
              "Casas que são mais que bens imobiliários:",
              "lugares para viver, sentir e construir uma história.",
            ],
          },
          {
            title: "Curadoria criteriosa",
            copy: [
              "Conhecer uma propriedade é muito mais que",
              "conhecer os seus metros quadrados.",
            ],
          },
          {
            title: "Real Estate e Arquitetura",
            copy: [
              "Um conhecimento especializado que nos permite",
              "selecionar e apresentar propriedades de forma",
              "mais criteriosa, revelando o seu verdadeiro valor.",
            ],
          },
        ],
      },
      approach: {
        imageAlt: "Sala da Casa Azoia com escada artesanal em madeira",
        imageCaption: "Madeira · Luz · Matéria",
        eyebrow: "A abordagem",
        title: "Ver o espaço",
        subtitle: "antes da propriedade.",
        body: [
          "Uma casa pode ser extraordinária pela arquitetura.",
          "Única pela paisagem.",
          "Valiosa pela história.",
          "Mas torna-se verdadeiramente especial quando passa",
          "a fazer parte da história de vida de alguém.",
        ],
        continue: "Continuar",
      },
      properties: {
        eyebrow: "Propriedades",
        title: "Propriedades escolhidas",
        titlePrefix: "com",
        titleEmphasis: "intenção.",
        body:
          "Explore uma seleção cuidada de propriedades singulares, escolhidas pela sua arquitetura, contexto e potencial.",
        label: "Propriedades",
        availableSingular: "propriedade disponível",
        availablePlural: "propriedades disponíveis",
        view: "Ver propriedades",
      },
      footer: {
        eyebrow: "Contactos",
        title: "Fale connosco",
        body:
          "Duas linhas telefónicas e um email para um acompanhamento próximo, reservado e atento a cada detalhe.",
        contactsLabel: "Contactos da empresa",
        contacts: [
          {
            label: "Rede fixa nacional",
            accessibleLabel: "Ligar para a rede fixa nacional +351 219 231 385",
          },
          {
            label: "Telemóvel",
            accessibleLabel: "Ligar para o telemóvel +351 960 169 569",
          },
          {
            label: "Email",
            accessibleLabel: "Enviar email para geral@thebluehouse.pt",
          },
        ],
        follow: "Acompanhe a Blue House",
        socialLabel: "Instagram da Blue House (abre num novo separador)",
        licence: "Licença AMI - Warrior Destiny Lda",
      },
    },
    gallery: {
      backHome: "Blue House, regressar ao início",
      title: "Propriedades",
      availableProperties: "Imóveis disponíveis",
      explore: "Explorar",
      selectedDetails: "detalhes apresentados",
      discover: "Conhecer",
      close: "Fechar",
      closeDetails: "Fechar detalhes de",
      showInformation: "Mostrar informações da propriedade",
      hideInformation: "Esconder informações da propriedade",
      information: "Informações de",
      highlights: "Destaques",
      photographs: "Fotografias",
      showPhotograph: "Mostrar fotografia",
      of: "de",
      previousPhotograph: "Fotografia anterior",
      nextPhotograph: "Fotografia seguinte",
    },
  },
  "en-GB": {
    meta: {
      title: "Blue House | Luxury Property in Lisbon",
      description:
        "Architecture and property brokerage for carefully selected luxury homes in Lisbon, Cascais, Sintra and Comporta, with discreet, attentive guidance.",
      category: "Property",
      galleryTitle: "Selected properties",
      galleryDescription:
        "Discover the properties selected by Blue House in Portugal.",
    },
    language: {
      label: "Language",
      selectorLabel: "Select language",
      portuguese: "Portuguese",
      english: "British English",
    },
    navigation: {
      label: "Page navigation",
      gallery: "Gallery",
      sections: ["Home", "Essence", "Approach", "Properties", "Contact"],
    },
    intro: {
      loadingWebsite: "Loading the Blue House website",
      loading: "Loading…",
    },
    home: {
      hero: {
        brandLabel: "Blue House, home",
        title: "Exquisite Properties",
        subtitle: "Extraordinary Places",
        lead:
          "The Blue House Exquisite Properties is more than a brand. It is a way of looking at heritage, architecture and the act of choosing a home.",
        vision: "Discover our vision",
        explore: "Explore",
      },
      essence: {
        eyebrow: "Our essence",
        title: "An essence that",
        titleMiddle: "begins at Home and",
        titleConnector: "embraces the ",
        titleEnd: "World.",
        body: [
          "The Blue House was born from a simple yet deeply",
          "symbolic idea: our first and greatest Home is planet",
          "Earth, this great Blue sphere.",
        ],
        principles: [
          {
            title: "Character, identity and potential",
            copy: [
              "Homes that are more than property:",
              "places to live, feel and build a story.",
            ],
          },
          {
            title: "Considered curation",
            copy: [
              "Understanding a property is about far more than",
              "knowing its square metres.",
            ],
          },
          {
            title: "Property and Architecture",
            copy: [
              "Specialist knowledge that enables us to select",
              "and present properties with greater care,",
              "revealing their true value.",
            ],
          },
        ],
      },
      approach: {
        imageAlt: "Casa Azoia living room with a handcrafted wooden staircase",
        imageCaption: "Wood · Light · Material",
        eyebrow: "Our approach",
        title: "See the space",
        subtitle: "before the property.",
        body: [
          "A home can be extraordinary for its architecture.",
          "Unique for its landscape.",
          "Valuable for its history.",
          "But it becomes truly special when it becomes",
          "part of someone's life story.",
        ],
        continue: "Continue",
      },
      properties: {
        eyebrow: "Properties",
        title: "Properties chosen",
        titlePrefix: "with",
        titleEmphasis: "purpose.",
        body:
          "Explore a considered collection of distinctive properties, chosen for their architecture, setting and potential.",
        label: "Properties",
        availableSingular: "property available",
        availablePlural: "properties available",
        view: "View properties",
      },
      footer: {
        eyebrow: "Contact",
        title: "Talk to us",
        body:
          "Two telephone lines and an email address for personal, discreet guidance with close attention to every detail.",
        contactsLabel: "Company contact details",
        contacts: [
          {
            label: "Portuguese landline",
            accessibleLabel: "Call the Portuguese landline +351 219 231 385",
          },
          {
            label: "Mobile",
            accessibleLabel: "Call the mobile number +351 960 169 569",
          },
          {
            label: "Email",
            accessibleLabel: "Email geral@thebluehouse.pt",
          },
        ],
        follow: "Follow Blue House",
        socialLabel: "Blue House on Instagram (opens in a new tab)",
        licence: "AMI Licence - Warrior Destiny Lda",
      },
    },
    gallery: {
      backHome: "Blue House, return home",
      title: "Properties",
      availableProperties: "Available properties",
      explore: "Explore",
      selectedDetails: "details shown",
      discover: "Discover",
      close: "Close",
      closeDetails: "Close details for",
      showInformation: "Show property information",
      hideInformation: "Hide property information",
      information: "Information about",
      highlights: "Highlights",
      photographs: "Photographs",
      showPhotograph: "Show photograph",
      of: "of",
      previousPhotograph: "Previous photograph",
      nextPhotograph: "Next photograph",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}
