# Travel Web - Karnataka & Goa (Vite + React)

A SEO-friendly travel website built with **Vite + React + React Router** that showcases Indian destinations, starting with **Karnataka** and **Goa**, and lists verified **travel agents** whose contact details are unlocked after UPI payment confirmation.

## Features

- **Vite + React** SPA with fast dev experience and production build.
- **State-wise guides**:
  - `/karnataka` – heritage, nature, culture, travel tips.
  - `/goa` – beaches, nightlife, heritage, travel tips.
- **Travel agents directory** (`/travel-agents`):
  - Multiple agents (Saniya, Travloger India, Weekend yaari, SMVTRAVELS, Escape3Explore).
  - Phone + WhatsApp contact details.
  - Contacts unlock only after payment confirmation.
- **UPI / QR payment flow** (no external gateway):
  - Uses your UPI ID: `tirthachetry@ybl`.
  - Shows UPI deeplink + QR code.
  - User confirms payment → contact details unlock (stored in `localStorage`).
- **SEO optimized**:
  - Per-page `<title>` and meta description via `SEO` component.
  - Canonical URLs and OG/Twitter tags.
  - `robots.txt` and `sitemap.xml` in `public/`.

## Tech Stack

- **Frontend**: React 18, React Router DOM, Vite.
- **Styling**: Plain CSS modules per page/component.
- **SEO**: Custom `SEO` React component + static tags in `index.html`.

## Getting Started (Local)

```bash
git clone https://github.com/tirthachetry-zoho/travel-web.git
cd travel-web
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

For correct canonical URLs and social preview links, set:

```bash
VITE_SITE_URL=https://your-production-domain.com
```

You can create a `.env` file in the project root:

```bash
VITE_SITE_URL=https://travel-web-yourname.vercel.app
```

> Note: `.env` is already in `.gitignore` and should **not** be committed.

## UPI / QR Payment Flow (No Razorpay)

There is **no Razorpay or external payment gateway**. The flow is:

1. User goes to `/travel-agents`.
2. Clicks **“Unlock Contact Details”** for an agent.
3. Modal shows:
   - UPI ID: `tirthachetry@ybl`.
   - QR code (generated via `upi://pay` link).
   - “Pay with UPI App” deeplink.
4. After paying in their UPI app, user clicks **“I have completed the payment”**.
5. App marks that agent as paid in `localStorage` and reveals phone + WhatsApp.

This is a **manual trust-based flow** – there is no server-side verification.

Key files:

- `src/utils/payment.js` – simple local payment tracking.
- `src/components/PaymentModal.jsx` – UPI/QR UI and confirmation.
- `src/pages/TravelAgents.jsx` – list and unlock logic.

## SEO Details

- `src/components/SEO.jsx`:
  - Sets `<title>`, `meta[name=description]`, `meta[name=keywords]`.
  - Sets Open Graph (`og:title`, `og:description`, `og:image`, `og:url`).
  - Sets Twitter card tags.
  - Adds basic JSON-LD structured data for a travel site.
- `src/config/site.js`:

```startLine:endLine:src/config/site.js
export const SITE_URL = import.meta.env.VITE_SITE_URL || ''

export const getCanonicalUrl = (path = '/') => {
  const base =
    SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')

  if (!base) return undefined
  if (path === '/') return base

  return base.replace(/\/$/, '') + path
}
```

Pages use `getCanonicalUrl` to build canonical URLs and OG image URLs based on `VITE_SITE_URL`.

Static SEO helpers:

- `index.html` – base meta tags, canonical (update to your final domain).
- `public/robots.txt` – allows crawling and points to sitemap.
- `public/sitemap.xml` – list of key routes (`/`, `/karnataka`, `/goa`, `/travel-agents`).

## Deploying to Vercel

1. Push this repo to GitHub under your account (`tirthachetry-zoho`).
2. In Vercel:
   - “Add New Project” → import this GitHub repo.
   - Framework preset: **Vite**.
   - Build command: `npm run build`.
   - Output directory: `dist`.
3. In Vercel Project Settings → Environment Variables:

   - `VITE_SITE_URL` = `https://travel-web-ecru.vercel.app` (or your custom domain if you add one).

4. Redeploy. Canonical URLs, OG tags, and sitemap will now use your production domain.

**Live Site:** [https://travel-web-ecru.vercel.app/](https://travel-web-ecru.vercel.app/)

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production (Vite)
npm run preview  # Preview production build locally
```

## Notes

- External payment gateways are not used; there is no card or bank integration in this project.
- Payments are **UPI/QR-based only**, with local unlock tracking.


