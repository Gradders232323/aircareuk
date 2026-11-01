# Air Care UK

Air Care UK website with the retro polar bear identity, a TM44 inspection hub and two supporting service hubs and 67 approved coverage locations across England.

## Page structure

- Five original pages remain available at their original URLs.
- `/air-conditioning` and `/facilities-management` are the service overview and area directory pages.
- TM44, air conditioning and facilities management each have 67 location pages at `/<service>/<location>`: 201 location pages, 211 pages overall.
- Location names, regions and individual planning notes are in `app/_data/locations.json`.
- Service copy is in `app/_data/services.ts`; shared layouts are in `app/_components/coverage-pages.tsx`.
- `public/sitemap.xml` lists all 211 pages. Update it when adding or removing coverage locations.
- Enquiry forms retain the existing mailto behaviour. New location forms include their source page in a hidden field.

## Run and verify

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
npm run build
npm run start -- --port 3217
```

With the production preview running, run this in a second terminal:

```sh
npm run check:coverage
```

The coverage check verifies all 211 pages, sitemap entries, location canonicals, structured data, internal coverage links, form context and unknown-area 404 responses. Set CHECK_SITE_URL to check another reachable origin.

## Cloudflare deployment

Sign into the Cloudflare account that owns www.aircareuk.co.uk:

```sh
npx wrangler login
npm run deploy
```

Source is stored in GitHub. Publishing is currently performed through Wrangler; a GitHub push alone is not a configured automatic deployment. No Cloudflare credentials are stored in this repository.

## TM44 priority

The homepage and shared navigation prioritise TM44 inspections. Dedicated area pages live under `/tm44-air-conditioning-inspections/<location>`. Shared inspection content is in `app/_data/tm44.ts` and the quote form is in `app/_components/tm44-quote-form.tsx`.

The TM44 form prepares a URL-encoded email draft for `hello@aircareuk.co.uk`; visitors must send it in their email client. It does not submit a lead to a server, store personal data or confirm email delivery. Direct inbox delivery requires a separately configured submission service. Browser QA checks the prepared draft without sending an email.

Inspection requirements were checked against GOV.UK's guide to air conditioning inspections in buildings on 1 November 2026. Relevant pages link to that guidance.

Main navigation is shared across all pages: TM44, Servicing, Installations, Repairs. General service landing pages use `app/_components/service-landing-page.tsx` and `app/_data/service-landings.ts`.
