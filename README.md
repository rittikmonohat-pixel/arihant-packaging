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
Push to GitHub. Vercel auto-deploys on every push to `main`. Set environment variables (see `.env.example`) in the Vercel project settings.

## Project structure
```
src/
  app/            – Next.js App Router pages
  components/     – Reusable React components
  lib/            – Product, application, blog data
  content/blog/   – Migrated blog posts
public/images/    – Optimized media
```

## Brand palette (locked from logo)
- Primary copper: `#924C00`
- Accent red: `#C20E1A`
- Light blue: `#BCDFFF`

## Forms
The `/api/quote` route uses Resend. Set `RESEND_API_KEY` in Vercel.
