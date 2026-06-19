# Fachry.dev Portfolio

A single-page developer portfolio for Fachry, built with Next.js, TypeScript, and Tailwind CSS. The current visual direction adapts a Y2K console hardware interface into a professional portfolio: chrome panels, carbon navigation, amber action states, and project cards focused on practical development work.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Features

- Single-page portfolio sections: Navbar, Hero, About, Skills, Experience, Projects, Contact, and Footer
- Responsive console-inspired interface with beveled panels and clear contact cards
- Skills carousel with reduced-motion support
- Project cards with optional image support and explicit Code / Live Demo actions
- Contact/social section with Email, GitHub, and LinkedIn links
- SEO metadata and Open Graph configuration

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file if you add environment-specific settings:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variables

No environment variables are required for the current portfolio.

## Project Structure

```text
src/
  app/
    globals.css            Tailwind import and console chrome design utilities
    layout.tsx             Root layout and metadata
    page.tsx               Single-page portfolio composition
  components/
    layout/                Navbar and footer
    sections/              Portfolio page sections
    ui/                    Shared Button, Card, Badge, image, and skill components
  data/                    Projects, experiences, and skills
  lib/                     Utilities, animations, and image paths
  types/                   Shared TypeScript types
public/
  profile/                 Profile images and placeholders
  skills/                  Skill icons
```

## Contact

- Email: `fachrinurulakbar19@gmail.com`
- GitHub: `https://github.com/Fema19`
- LinkedIn: `https://www.linkedin.com/in/fachry-much-n-a-2b68a0375`
