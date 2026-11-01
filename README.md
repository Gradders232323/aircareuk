# Air Care UK

Website source with the approved retro polar bear logo in the site headers and footers.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

## Publish to Cloudflare

Sign into the Cloudflare account that owns www.aircareuk.co.uk:

```sh
npx wrangler login
npm run deploy
```

Repository upload alone does not publish the website. No Cloudflare credentials are included.
The source was prepared from the available local Air Care UK website copy; confirm it matches the current production site before deployment.
