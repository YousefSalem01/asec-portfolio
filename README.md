# ASEC Automation — Website

React (Vite) website for ASEC Automation, built from the company's 2024–2026 marketing material.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve the built site locally
```

## Deploy

`dist/` is a static site — host it anywhere:

- **Netlify** — drag `dist/` into the dashboard, or connect the repo (build: `npm run build`, publish: `dist`). `public/_redirects` is included for client-side routes.
- **Vercel** — import the repo; `vercel.json` handles client-side routes.
- **cPanel / any web server** — upload the contents of `dist/` and send unknown paths to `index.html`.

## Editing content

All text lives in `src/data/` — no need to touch the page components:

| File | What it holds |
| --- | --- |
| `site.js` | Contact details, offices, stats, sectors, milestones, certifications, clients, social links |
| `services.js` | The six service pages (`/services/<slug>`) |
| `projects.js` | Featured projects and the searchable reference list |
| `gallery.js` | Gallery photos and captions |

Images are in `public/images/` (WebP, max 1600px wide). To add a photo, drop it in that folder and reference it as `/images/<name>.webp`.

## Before going live

- **Social links** — add the full LinkedIn / Facebook / X URLs in `src/data/site.js` → `company.social`; icons appear in the footer automatically.
- **Contact form** — currently opens the visitor's email app with the enquiry pre-filled (no server needed). To receive submissions directly, connect a form service such as Formspree or Netlify Forms in `src/pages/Contact.jsx`.
