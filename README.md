# ibrahimaq.com

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

You need Node.js 20.9 or later and npm.

```sh
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads as you edit files.

## Scripts

```sh
npm run dev           # development server
npm run build         # production build
npm start             # serve the production build
npm run lint          # ESLint
npm run lint:fix      # ESLint, fixing what it can
npm run typecheck     # generate route types, then tsc
npm run format        # format all files with Prettier
npm run format:check  # check formatting without changing files
npm run check         # format check, lint and typecheck in one go
```

## Structure

```
src/
├── app/                # routes, metadata, sitemap.ts, robots.ts, icons
│   ├── globals.css     # Tailwind import and design tokens
│   └── style-guide/    # component showcase at /style-guide
├── components/         # shared components (Button)
│   └── layout/         # Header, Footer
└── lib/                # shared modules (site URL and name)
```

Design tokens come from the homepage design concept (`design-concepts/homepage/tokens.css`). Tailwind's default colour, font-size, radius and shadow scales are cleared, so only the concept's tokens are available as utilities.
