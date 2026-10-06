# FocusFlow — landing page

Responsive landing page for **FocusFlow**, a fictional focus & productivity mobile app.
Built as a test assignment.

- **Live site:** _add Vercel URL here_
- **Repository:** https://github.com/Vadim-27/lending-FocusFlow

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) · React 19 · TypeScript (strict)
- [Tailwind CSS 4](https://tailwindcss.com) with design tokens in CSS variables
- [shadcn/ui](https://ui.shadcn.com) (Base UI) · [lucide-react](https://lucide.dev)
- [next-intl](https://next-intl.dev) — EN / UA, routes `/en`, `/uk`
- [next-themes](https://github.com/pacocoursey/next-themes) — light / dark

## Sections

Header · Hero · Features · How it works · About us · Pricing (monthly / yearly) · Testimonials (carousel) · FAQ · Contact · Footer

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://focusflow.example.com`) for canonical URLs, sitemap and Open Graph.

## Project structure

```
messages/            en.json, uk.json — all copy
src/app/[locale]/    layout, page, OG image, 404
src/app/globals.css  design tokens (colors, radius, fonts) — edit here to re-theme
src/components/      layout/ · sections/ · ui/ (shadcn) · icons/
src/data/site.ts     non-translatable content structure (nav, plans, icons)
src/i18n/            routing, navigation, request config
src/proxy.ts         locale negotiation
```

## Theming

Every color, radius and font is a token in [`src/app/globals.css`](src/app/globals.css)
(`:root` for light, `.dark` for dark). Change the `--brand-*` scale and `--highlight`
to re-skin the entire site.
