# Quick Start Guide

## Installation

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all dependencies including Next.js, React, Framer Motion, Lenis, and Tailwind CSS.

## Development Server

After installation completes, start the dev server:

```bash
npm run dev
```

The website will be available at **<http://localhost:3000>**

## What to Expect

- **Homepage**: Glassmorphism navbar, cinematic hero with stagger animations, vertical project list
- **Project Pages**: Click any project to see the detail page at `/work/[slug]`
- **Smooth Scrolling**: Lenis provides buttery-smooth scrolling throughout
- **Animations**: Framer Motion powers all transitions and hover effects

## Troubleshooting

**TypeScript errors in IDE?**

- These will resolve after `npm install` completes

**Video background not showing?**

- Add your video to `/public/videos/hero-bg.mp4` (currently using static fallback)

**Need to regenerate images?**

- Project images are in `/public/projects/`
- Replace them with your own designs as needed
