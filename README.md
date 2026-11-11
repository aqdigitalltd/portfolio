# ibrahimaq.com

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Scripts

```sh
npm run dev        # development server
npm run lint       # ESLint
npm run typecheck  # generate route types, then tsc
npm run build      # production build
npm start          # serve the production build
```

## Structure

```
src/
├── app/                # routes, metadata, sitemap.ts, robots.ts, icons
│   └── globals.css     # Tailwind import and design tokens
├── components/layout/  # Header, Footer
└── lib/                # shared modules (site URL and name)
```

Design tokens come from the homepage design concept (`design-concepts/homepage/tokens.css`). Tailwind's default colour, font-size, radius and shadow scales are cleared, so only the concept's tokens are available as utilities.
