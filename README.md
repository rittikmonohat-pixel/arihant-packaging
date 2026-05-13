# Arihant Packaging — Website

Next.js 15 + Tailwind CSS site for **arihantpackagingindia.com**, replacing the previous Wix site.

## Local development
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & verify
```bash
npm run build
npm run start
```

## Deploy
The Vercel project (`prj_UExOx62rYhwPQqUPXzSk15XOfKgt`) is **not** linked to a Git source, so pushes to `main` do not auto-deploy. Deploys are made via the Vercel REST API (`POST /v13/deployments`) with a flat file manifest. To restore auto-deploy, link the GitHub repo in the Vercel dashboard.

Required env vars (set in Vercel project settings):
- `WEB3FORMS_ACCESS_KEY` — primary form transport
- `RESEND_API_KEY` — fallback form transport
- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID

## Project structure
```
src/
  app/            – Next.js App Router pages
  components/     – Reusable React components
  lib/            – Product, application, blog data; site config; analytics helper
public/images/    – Optimized media
BRAND_VOICE.md    – Voice & style guide for any new copy
```

## Brand
- Primary: `#1F4E79` (Tailwind `brand-*` scale)
- Ink scale: `ink-50` through `ink-900`
- Fonts: Plus Jakarta Sans (body), Instrument Serif (italic accents)
- See `BRAND_VOICE.md` before writing any new copy.

## Forms
`/api/quote` posts to Web3Forms as the primary transport (lead routes to `arihantpackagingsalesenquiry@gmail.com`), with Resend as a fallback. Set the corresponding env vars above.
