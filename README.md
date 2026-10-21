# Gentlemen's Club Philippopolis

A private circle, bound by smoke and time.

## About

Official website for Gentlemen's Club Philippopolis — a members-only society devoted to the quiet pleasures of the cigar, the glass, and considered conversation. Located in the old town of Plovdiv, Bulgaria.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run linter

## Image conventions

- Homepage event card banners are **1600×1200 (4:3) JPEGs** named `<event>-hero.jpg` (e.g. `oliva-hero.jpg`), so every card in the home page event grid crops and scales identically.
- Prepare or refresh one with:
  ```powershell
  powershell -ExecutionPolicy Bypass -File scripts\prepare-event-hero.ps1 -SourcePath "C:\path\to\photo.jpg" -OutputName "eventname-hero"
  ```
  The source photo is center-cropped to 4:3, scaled to 1600×1200 and written to `public/images/<event>-hero.jpg`.
- A homepage card also needs its title to stay within two lines (`line-clamp-2` in `src/pages/Home.tsx`) and the card grid gives every card the same height, so the banner is never distorted by a longer title.
- The Events page banner for the same event may use the untouched original photo (e.g. `oliva-melanio-2025.jpg`), since it is rendered as a wide banner rather than a card background.

## Deployment

This project is configured for deployment on Vercel. Push to the `main` branch on GitHub to trigger automatic deployments.