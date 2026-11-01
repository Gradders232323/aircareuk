# Air Care UK

Air Care UK website with the retro polar bear identity, two service hubs and 67 approved coverage locations across England.

## Page structure

- Five original pages remain available at their original URLs.
- `/air-conditioning` and `/facilities-management` are the service overview and area directory pages.
- Each service has 67 location pages at `/<service>/<location>`: 134 location pages, 141 pages overall.
- Location names, regions and individual planning notes are in `app/_data/locations.json`.
- Service copy is in `app/_data/services.ts`; shared layouts are in `app/_components/coverage-pages.tsx`.
- `public/sitemap.xml` lists all 141 pages. Update it when adding or removing coverage locations.
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

The coverage check verifies all 141 pages, sitemap entries, location canonicals, structured data, internal coverage links, form context and unknown-area 404 responses. Set CHECK_SITE_URL to check another reachable origin.

## Cloudflare deployment

Sign into the Cloudflare account that owns www.aircareuk.co.uk:

```sh
npx wrangler login
npm run deploy
```

Source is stored in GitHub. Publishing is currently performed through Wrangler; a GitHub push alone is not a configured automatic deployment. No Cloudflare credentials are stored in this repository.
