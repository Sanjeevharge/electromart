# Electromart – MERN Edition

Electromart has been rebuilt as a full MERN (MongoDB, Express, React, Node.js) experience.  
The new stack replaces the static HTML prototype with a dynamic catalog, luxury-inspired UI, and API‑driven checkout flow.

## Highlights
- **Curated catalog API** with Mongo/Mongoose models, text search, category filtering, and featured/new arrival feeds.
- **In-memory or Atlas ready**: set `MONGODB_URI` for a real cluster, or use the default Mongo Memory Server for local demos (the API auto-seeds demo data on boot).
- **React + Vite frontend** themed as a premium boutique: hero stories, category tiles, filterable showroom, immersive product detail, cart drawer, and concierge checkout form.
- **React Query + Axios** power data fetching/caching; Headless UI + Tailwind create a posh, responsive experience.

## Project Structure
```
electromart-main/
├─ server/   # Express + Mongo API
└─ client/   # Vite + React + Tailwind frontend
```

## Getting Started
### 1. Backend API
```bash
cd server
cp .env.example .env        # optional – set MONGODB_URI to use Atlas/local Mongo
npm install
npm run dev                 # or `npm start` for production mode
```
The API boots on `http://localhost:4000` by default and auto-seeds demo data if the database is empty.

### 2. Frontend
```bash
cd client
cp .env.example .env        # customise VITE_API_BASE_URL if needed
npm install
npm run dev                 # launches Vite dev server on http://localhost:5173
```

### Production Builds
```bash
cd server && npm start      # ensure env vars are set for your DB + port
cd client && npm run build  # outputs static assets in client/dist
```

## API Snapshot
| Method | Endpoint                | Description                               |
|--------|------------------------|-------------------------------------------|
| GET    | `/api/products`        | List products, supports `category`, `tag`, `search`, `minPrice`, `maxPrice`, `sort` (`price-asc`, `price-desc`, `rating`). |
| GET    | `/api/products/:slug`  | Product detail + related items.           |
| GET    | `/api/products/featured` | Featured + new-arrival feeds.           |
| GET    | `/api/categories`      | Categories with spotlighted products.     |
| POST   | `/api/orders`          | Creates an order from the cart payload.   |

## Frontend Pages
- **Home** – hero narrative, category carousel, curated experiences, featured & new-arrival rails.
- **Showroom** – filterable grid with search, category selector, sorting, and price range slider.
- **Product Detail** – immersive gallery, finish/storage selectors, highlight cards, related products, and add-to-cart.
- **Cart Drawer** – Headless UI slide-over with quantity controls and subtotal.
- **Concierge Checkout** – multi-section form that posts to the order API and shows confirmation messaging.

## Legacy Assets
The original static HTML/CSS site is preserved inside `webdevelopment_electromart/` for reference, but it is no longer used in the build.

Enjoy curating your own Electromart capsule! ✨
