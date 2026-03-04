# Tridan General Construction – Website

Conversion-focused contractor website for **Tridan General Construction**, serving Mississauga, Toronto, and Milton, Ontario.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Homepage with services, areas, process, projects, reviews |
| `/services` | All renovation services with links to city pages |
| `/projects` | Project gallery |
| `/about` | About Tridan and why choose us |
| `/contact` | Contact form and phone/email |
| `/thank-you` | Post-form thank you (redirect after estimate request) |
| `/privacy` | Privacy policy |
| `/mississauga-home-renovations` | Local SEO page – Home Renovations in Mississauga |
| `/toronto-home-renovations` | Local SEO page – Home Renovations in Toronto |
| `/milton-home-renovations` | Local SEO page – Home Renovations in Milton |

## Conversion features

- **Sticky header** with “Call Now” and “Get a Free Estimate”
- **Mobile sticky bar** (Call Now / Get Estimate) on small screens
- **CTAs** after major sections
- **Lead form** on `/contact` (and on location pages) with redirect to `/thank-you`

## SEO

- Next.js **metadata** on every page (title, description)
- **JSON-LD** `HomeAndConstructionBusiness` schema in root layout (phone, service area, website)
- **Local SEO pages** with city-focused titles, descriptions, FAQs, and internal links
- **Internal links** from homepage and services to Mississauga, Toronto, and Milton pages

## Business details (placeholders)

- **Phone:** (416) 700-4230  
- **Email:** tridancontractor@gmail.com  
- **Service areas:** Mississauga, Toronto, Milton  

Update these in `lib/constants.ts` and in the JSON-LD schema in `lib/schema.ts`.
