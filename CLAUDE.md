# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm start      # Run production server
pnpm lint       # Run ESLint
```

No test suite is configured. There is no `test` script.

## Architecture

**ribersistemas** is a B2B technical consulting website built with Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui. All content is hardcoded in source files — there is no CMS or database.

### Key directories

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router pages and API routes |
| `app/api/contact/` | Email API — accepts POST, sends via Nodemailer/SMTP |
| `app/blog/` | Blog listing page + one article per subdirectory |
| `components/` | Shared React components |
| `components/ui/` | shadcn/ui primitives (Button, Card) |
| `lib/` | `utils.ts` (`cn()` helper), `structured-data.ts` (JSON-LD schemas) |
| `public/` | Static assets (logos, favicons, manifest) |

### Content model

Blog posts and services are **hardcoded arrays** in their respective `page.tsx` files — not fetched from an API:
- Blog post list: `app/blog/page.tsx`
- Each article: its own route directory (e.g., `app/blog/ia-agentes-autonomos-pymes/page.tsx`)
- Services list: `app/servicios/page.tsx`

To add a blog post: add an entry to the array in `app/blog/page.tsx` and create a new `app/blog/<slug>/page.tsx`.

### Client vs. server components

Pages and layouts default to React Server Components. Components that use state or browser APIs have `"use client"` at the top: `contact-form.tsx`, `navigation.tsx`, `cookie-banner.tsx`.

### Styling

Tailwind CSS v4 (via `@tailwindcss/postcss`). Use the `cn()` helper from `@/lib/utils` to merge classes. Color tokens use the oklch() color space and CSS variables defined in `globals.css`. Follow mobile-first responsive patterns (sm/md/lg breakpoints).

### Contact form flow

Client component (`components/contact-form.tsx`) → POST `/api/contact` → Nodemailer sends SMTP email.

Required environment variables (see `.env.example`):
```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=   # optional, defaults to SMTP_USER
```

### SEO

Each page exports a `metadata` object (Next.js `Metadata` type) with title, description, Open Graph, and canonical URL. JSON-LD structured data is generated in `lib/structured-data.ts`. `app/sitemap.ts` and `app/robots.ts` are dynamic route handlers.

### Deployment

Docker (multi-stage Alpine build, standalone Next.js output). See `DOCKER.md` for Docker Compose setup and Synology NAS reverse proxy configuration.

### Domain & redirects

`next.config.mjs` permanently redirects non-www → www and `.com` → `.es`. Security headers (HSTS, X-Frame-Options, etc.) are set there as well. TypeScript build errors are currently suppressed (`ignoreBuildErrors: true`).

### Language

The site is in Spanish (lang="es"). All user-facing strings, metadata, and error messages should be written in Spanish.
