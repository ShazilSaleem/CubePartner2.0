# Cube Partners website

Next.js 15 (App Router) implementation of the "Cube Partners" Figma design for Cube Accountants,
chartered accountants in Manchester.

## Requirements

- Node 22 (Tailwind v4's native engine needs Node 20 or newer). An `.nvmrc` is included:

```bash
nvm use
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Stack

- Next.js 15.5, React 19, TypeScript
- Tailwind CSS v4, configured in CSS. All design tokens live in `app/globals.css` under `@theme`
  (colours, Outfit and DM Sans font families, the full type scale, layout widths, shadows).
  There is no `tailwind.config.js`.
- Fonts load through `next/font/google` in `app/layout.tsx`.

## Structure

```
app/                  routes: / (Home), /services, /about, /contact, /client-area
components/layout/    Header (sticky, mobile menu), Footer, WhatsAppButton
components/ui/        Container, Button, Eyebrow
components/sections/  blocks shared by several pages: PageHero, Benefits, Mission, StatsGrid,
                      ServiceCard, OfficePhotos
components/<page>/    page-specific sections
lib/                  site data (nav, contact details), team and FAQ content, cn() helper
public/images, icons  assets exported from Figma
figma-assets/         reference notes from the design extraction
```

## Motion

The Figma file carries no keyframe or prototype animation data, so the motion layer follows the
patterns the design implies:

- Scroll reveals: `components/ui/Reveal.tsx` lifts content into place the first time it enters the
  viewport, with staggered delays for grids. Styles are in `app/globals.css` (`.reveal`).
- Hero entrances: staggered reveal of eyebrow, heading, lead, buttons and fact strip, plus a slow
  zoom on the background photo (`animate-hero-zoom`).
- Statistics count up when scrolled into view (`components/ui/CountUp.tsx`).
- Hover motion: button arrows slide, card icons lift with a soft surface tint, desaturated photos
  regain colour and scale slightly.
- Team selector crossfades portraits; the FAQ accordion animates height; the mobile menu slides in.
- `prefers-reduced-motion` disables every transition and animation, and a `<noscript>` rule keeps
  revealed content visible without JavaScript.

## Design source

Figma file `c84CbYhomcsmAYSHWY6yNj`, section "New Design". Page frames: Home 1022:6112,
Services 1022:6520, About Us 1022:6866, Contact Us 1022:7251, Client Area 1022:7480.
The design is desktop-only (1440px); responsive behaviour below that is an interpretation.

## Placeholders to replace

- `lib/team.ts`: only Dave Phonix has copy in the design. The other three roles and bios are placeholders.
- `lib/faq.ts`: the design lists questions without answers.
- `app/contact/actions.ts`: the consultation form validates and returns a success message but
  only logs the enquiry server-side. Wire it to an email provider or CRM.
- Links with `href="#"`: Partners, Academy, Careers, Forms & Templates, Privacy Policy,
  Terms & Conditions, social profiles, and the "Login Now" button. No pages exist for these in the design.
- Contact page map: a static image from the design linking to OpenStreetMap. Swap for a live embed if wanted.
