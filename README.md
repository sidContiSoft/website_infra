# Supreme Electromech Power & Infra — Corporate Website

A production-ready, responsive marketing site for Supreme Electromech Power & Infra, built as a
single-page Angular application with routed pages, a technical product library, a filterable
project gallery and a quote request workflow.

## Stack

| Layer      | Choice                                                                 |
| ---------- | ---------------------------------------------------------------------- |
| Framework  | Angular 21.2 — standalone components, signals, zoneless change detection |
| Styling    | Tailwind CSS 4 (design tokens in `src/styles.css`)                      |
| Grid       | Bootstrap 5.3 — grid and spacing utilities only (no reboot/components)  |
| Type       | Inter (body) + Barlow Condensed (display), self-hosted via Fontsource   |
| Icons      | Hand-built inline SVG icon component (`src/app/shared/icon.ts`)         |
| Maps       | Google Maps embed on the contact page                                   |
| Images     | Local WebP assets in `public/assets/img`                                |

## Run it

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/supreme-electromech/browser
npm test           # Vitest smoke tests
```

Serve `dist/supreme-electromech/browser` from any static host with an SPA fallback to
`index.html`. The app uses `base href="/"` and hash-free routes.

> **Angular version note:** the Angular 22 CLI requires Node `^22.22.3 || ^24.15.0 || >=26`.
> This machine runs Node 22.16, so the project is on Angular 21.2 (the newest release that
> supports it). To move to 22, upgrade Node first, then run
> `ng update @angular/core@22 @angular/cli@22`.

## Pages

| Route        | Contents                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------- |
| `/`          | Hero slider, capability stats, eight services, technical depth, panel systems, process, featured projects, sectors, quote CTA |
| `/about`     | Company profile, vision/mission/values, engineering quality, design codes, quality gates, works |
| `/services`  | Detailed capability rows with scope bullets, delivery sequence, sectors                    |
| `/technical` | Engineering & detailing, frame types, crane/mezzanine systems, panel specs, accessories, insulation, quality |
| `/projects`  | Category filters, project grid, keyboard-accessible detail lightbox                        |
| `/contact`   | Quote form with drawing attachment, contact people, two office maps, FAQs                  |

## Editing content

All copy, services, technical data, project records and contact details live in
[`src/app/core/site.data.ts`](src/app/core/site.data.ts). Brand colours, fonts and shared
component styles are in [`src/styles.css`](src/styles.css) under `@theme` / `@layer components`.

Primary contact details currently wired throughout the site:

- Phone: +91 99991 16118, 0129-462862
- Enquiry email: supremelectropower@gmail.com, info@supremeinfraprojact.com, sales@supremeinfraproject.com
- Website: https://www.supremeinfraprojects.com
- Head office & Works 1: Plot No. 2043, Dua Compound, E-Block, Sanjay Colony, Sector-23,
  Faridabad 121005, Haryana
- Works 2: M 30/1, Street No. 8, Anand Parbat Industrial Area, New Rohtak Road, New Delhi

## Quote form behaviour

The form submits to the isolated website-mail module mounted in the ADTL backend at
`/website-mail/enquiry`. It sends an HTML enquiry email to the configured admin recipients and
includes an optional drawing attachment (up to 9 MB). The form also keeps the WhatsApp follow-up
and downloadable text copy.

The frontend sends one page-view event per Angular route visit to `/website-mail/visit`. The
backend stores daily totals and per-page counts in `website_mailer/data/page-views.json`; it does
not store visitor IP addresses or identify unique people. It emails weekly and monthly summaries
to the admins at 09:00 India time.

### Run locally

1. Configure the existing ADTL backend's SMTP environment values and set
   `WEBSITE_ADMIN_EMAILS` to the three Supreme Electromech admin addresses.
2. From the ADTL backend root, run `npm run start:website-mailer`. This starts only the website
   mail API at `http://localhost:4000`; it does not start the auction app or its scheduler.
3. In this project, run `npm install` and `npm start` for the Angular site.

### Deploy

Deploy the ADTL backend with persistent storage for
`website_mailer/data/page-views.json`, then deploy this Angular site. The production API host is
configured in [`src/app/core/api.config.ts`](src/app/core/api.config.ts). Weekly and monthly
summaries run from the existing backend process; missed summaries are sent after it starts again.

## Content and asset notes

- Technical specifications (frame types, panel thickness ranges, software, design codes,
  accessories) are based on the brief and the supplied reference catalogue.
- Project photographs and technical drawings are taken from the supplied reference material and
  are used as **representative placeholders**. Replace them with Supreme Electromech's own project
  photography and issued drawings before launch, and confirm usage rights for the source images.
- Project names, areas and locations in the gallery are representative typologies, not verified
  completed-project records. This is disclosed in the gallery and home page footnotes.
- No certification (e.g. ISO) is claimed. Material test certificates, weld inspection and
  third-party inspection are described as project-scope deliverables.
- The Google Maps embed requires network access in the browser; the "Get directions" links work
  independently.

## Accessibility & performance

- Keyboard-operable navigation drawer, project lightbox and sliders; Escape closes overlays.
- Visible focus rings, skip link, labelled form fields and inline validation messages.
- Scroll-reveal animations respect `prefers-reduced-motion`.
- Lazy-loaded route chunks, lazy images with explicit dimensions, self-hosted fonts and a
  ~93 kB compressed initial JS payload.
