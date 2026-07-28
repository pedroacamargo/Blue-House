# Blue House

Website da **Blue House Exquisite Properties**, uma empresa de arquitetura e
mediação imobiliária em Lisboa.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run lint
npm run build
npm run start
```

## Produção e SEO

Configure o URL público final antes do build para gerar URLs canónicos,
`robots.txt`, dados estruturados e o sitemap com o domínio correto:

```bash
SITE_URL=https://www.seu-dominio.pt npm run build
```

No serviço de alojamento, defina `SITE_URL` como variável de ambiente de
produção. Não use URLs de preview.

## Stack

- Next.js 16, com App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Contexto do projeto

- [`AGENTS.md`](AGENTS.md): instruções permanentes para trabalhar no repositório.
- [`docs/COMPANY_CONTEXT.md`](docs/COMPANY_CONTEXT.md): empresa, posicionamento e tom de voz.
- [`docs/WEBSITE_BRIEF.md`](docs/WEBSITE_BRIEF.md): requisitos e materiais pendentes do website.
- [`assets/brand/logo-reference.jpg`](assets/brand/logo-reference.jpg): logo de referência; não é o ficheiro final de produção.

O código da aplicação fica em `src/app`. A página atual é apenas uma base
provisória para iniciar o design.
