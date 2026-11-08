# ZUNO — Wear the Mindset

Store site for [@zuno.clo](https://www.instagram.com/zuno.clo/). React + Vite + Tailwind (client), Express (server).

## Run locally

```bash
npm run install:all   # first time only
npm run dev           # API on :5000, site on http://localhost:5173
```

## Deploy (Vercel)

`vercel.json` is already set up: the React build is served as a static site and the
Express API runs as a serverless function (`api/index.js` → `server/app.js`).

```bash
npx vercel login      # once
npx vercel            # preview deploy
npx vercel --prod     # production deploy
```

Or push to GitHub and import the repo at vercel.com/new — no settings to change.

## Edit products

Everything lives in `server/data/products.json` (redeploy after editing).

- Add a photo: put it in `client/public/images/` and set `"image": "/images/your-photo.jpg"`.
- Mark sold out: `"soldOut": true`.
- `swatch` is the placeholder colour shown when there is no photo.

## Structure

```
client/src/pages        Home, Product, About
client/src/components   Navbar, Footer, Logo, ProductCard, ProductImage
client/src/index.css    brand colours (--color-brand etc.)
server/app.js           API routes: /api/products, /api/products/:id
server/index.js         local server
api/index.js            Vercel entry point
```
