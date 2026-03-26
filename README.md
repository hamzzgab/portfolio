# Portfolio — Hamza Gabajiwala

Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** [hamzzgab.github.io/portfolio](https://hamzzgab.github.io/portfolio/)

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** (dark minimal theme)
- **Framer Motion** (scroll animations)
- **TypeScript**
- **GitHub Pages** (via GitHub Actions)

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
public/         # Static assets (certificates, resume, profile photo)
```

## Updating Content

All content lives in `data/` as typed objects — edit these files to update the site:

- `data/experience.ts` — work experience entries
- `data/skills.ts` — skill categories and items
- `data/projects.ts` — project cards
- `data/publications.ts` — publications list
