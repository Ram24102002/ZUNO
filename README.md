# ZUNO — Wear the Mindset

Store site for [@zuno.clo](https://www.instagram.com/zuno.clo/). React + Vite + Tailwind (client), Express (server).

## Run locally

```bash
npm run install:all   # first time only
npm run dev           # API on :5000, site on http://localhost:5173
```

## Deploy (Vercel)

`vercel.json` defines two Vercel services: `client` (the Vite site, public at `/`) and
`server` (Express, `server/app.js`, public at `/api/*`).

```bash
npx vercel login      # once
npx vercel            # preview deploy
npx vercel --prod     # production deploy
```

Or push to GitHub and import the repo at vercel.com/new — no settings to change.

## Edit products

Everything lives in `server/data/products.json` (redeploy after editing).

- Placeholder mockups are drawn by `node scripts/make-mockups.mjs`. To use a real photo, put it in `client/public/images/` and set `"image": "/images/your-photo.jpg"`.
- Mark sold out: `"soldOut": true`.
- `swatch` is the placeholder colour shown when there is no photo.

## Structure

```
client/src/pages        Home, Product, About
client/src/components   Navbar, Footer, Logo, ProductCard, ProductImage
client/src/index.css    brand colours (--color-brand etc.)
server/app.js           API routes: /api/products, /api/products/:id
server/index.js         local server
```
