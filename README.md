# Portfolio — Hamza Gabajiwala

Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** [portfolio-sigma-eight-90.vercel.app](https://portfolio-sigma-eight-90.vercel.app/)
**Mirror:** [hamzzgab.github.io/portfolio](https://hamzzgab.github.io/portfolio/)

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** (dark/light theme with teal accents)
- **Framer Motion** (scroll animations, page transitions)
- **TypeScript**
- **Vercel** (primary hosting + analytics)
- **GitHub Pages** (mirror via GitHub Actions)

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to out/
```

## Project Structure

```
app/            # Next.js pages (main + gallery)
components/     # React components (Hero, Experience, Projects, etc.)
data/           # Content as TypeScript files (easy to update)
lib/            # Utilities (basePath helper for dual hosting)
public/         # Static assets (certificates, resume, profile photo)
```

## Updating Content

All content lives in `data/` as typed objects — edit these files to update the site:

- `data/experience.ts` — work experience entries
- `data/skills.ts` — skill categories and items
- `data/projects.ts` — project cards
- `data/publications.ts` — publications list

## Features

- Dark/light mode toggle (persisted to localStorage)
- Rotating mandala animation in hero section
- Islamic geometric tile pattern in side gutters
- Teal accent color system throughout
- Responsive (single column on mobile, side patterns on desktop)
- Page transitions between main and gallery pages
- Full SEO/Open Graph metadata
- Vercel Analytics integration
