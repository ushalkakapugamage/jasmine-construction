# Jasmin Constructions website

Production-oriented Vite + React + TypeScript build for Jasmin Constructions.

## Run locally

```sh
npm install
npm run dev
```

Create a production bundle with `npm run build`.

## Content handoff

The site deliberately does not publish unverified project, service or company claims.

- Add approved project records to `src/data/projects.ts` and set `published: true`. Each record automatically appears in the archive and gets a case-study page at `/projects/[slug]`.
- Add approved services in `src/data/site.ts` and set `published: true` before showing service-specific claims.
- Replace every illustrative Unsplash image with licensed Jasmin Constructions photography before launch.
- Confirm the legal brand spelling, website domain, company story, leadership, exact services and delivery process before public publishing.

## Before deployment

- Replace the email-draft fallback in `src/pages/Contact.tsx` with a protected enquiry endpoint (server-side validation, rate limiting and spam protection).
- Set `VITE_SITE_URL` to the final canonical domain and replace the marked URLs in `public/sitemap.xml`.
- Add analytics only after choosing a privacy-appropriate provider and consent strategy.
- Supply responsive, optimised project imagery through a CMS/object-storage image pipeline.
