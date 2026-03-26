# CLAUDE.md — Portfolio Project Context

## What is this?
Personal portfolio website for Hamza Gabajiwala, Software Development Engineer at Yahoo.

## Tech Stack
- Next.js 14 (App Router, static export via `output: "export"`)
- Tailwind CSS with custom dark/light theme
- Framer Motion for animations
- TypeScript
- Deployed to both Vercel (primary) and GitHub Pages (mirror)

## Key Architecture Decisions

### Dual hosting (Vercel + GitHub Pages)
- `next.config.mjs` uses `GITHUB_PAGES` env var to conditionally set `basePath: "/portfolio"` for GitHub Pages
- GitHub Actions workflow sets `GITHUB_PAGES=true` during build
- Vercel builds without basePath (serves from root `/`)
- `lib/basePath.ts` exports `assetPath()` helper for static assets (`<img>`, `<a>`) that need manual basePath prepending
- `<Link>` from next/link handles basePath automatically — only use `assetPath()` for raw HTML elements

### Theme system
- Dark/light toggle via `ThemeProvider.tsx` (React context + localStorage)
- Theme class (`dark`/`light`) applied to `<html>` element
- Dark mode uses Tailwind's zinc scale (zinc-100 through zinc-700)
- Light mode overrides in `globals.css` using `html.light` selectors to invert zinc colors
- Accent color: teal-400 (dark) / teal-600 (light) — `#2dd4bf` / `#0d9488`

### Content management
- All content in `data/*.ts` files as typed arrays — no CMS, no markdown
- Experience bullets in portfolio are shortened one-liners (full versions in CV at `~/Documents/cv_updated.md`)
- Skills, projects, publications each have their own data file

### Design elements
- Rotating mandala SVG in hero section (60s full rotation, teal strokes)
- Islamic geometric tile pattern in side gutters only (CSS columns with mask-image gradient fade)
- Pattern uses different stroke color and opacity for light vs dark mode
- `globals.css` contains all theme overrides, animations, and pattern definitions

## Common Tasks

### Update experience/skills/projects
Edit files in `data/` directory. The portfolio uses shorter one-liner bullets — keep the full detailed versions in `~/Documents/cv_updated.md` for the actual CV.

### Add a new section
1. Create component in `components/`
2. Import and add to `app/page.tsx` inside `<main>`
3. Use `SectionHeading` component for consistent heading style
4. Wrap animated content in `motion.div` from framer-motion

### Adjust theme colors
- Dark mode: edit Tailwind classes directly (zinc-* scale + teal-400)
- Light mode: override in `globals.css` under `html.light` selectors
- Mandala: edit stroke colors in `Hero.tsx` SVG + `globals.css` light override
- Background pattern: edit SVG data URL in `globals.css` body::before/after

### Deploy
- Push to `main` → auto-deploys to both Vercel and GitHub Pages
- Local preview: `npm run dev` (no basePath, serves from root)
- Production build test: `npm run build` (uses basePath only if `GITHUB_PAGES=true`)

## Files to know
| File | Purpose |
|------|---------|
| `next.config.mjs` | Static export + conditional basePath |
| `lib/basePath.ts` | `assetPath()` helper for dual hosting |
| `app/globals.css` | Theme overrides, patterns, animations |
| `components/ThemeProvider.tsx` | Dark/light context + localStorage |
| `data/*.ts` | All portfolio content |
| `.github/workflows/deploy.yml` | GitHub Pages deployment |
