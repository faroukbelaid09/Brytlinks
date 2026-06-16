# BrytLinks Agency Website

A premium dark-mode agency website for BrytLinks, an independent digital studio focused on strategy, design, and development for websites, apps, and digital products.

Live site: [brytlinks.com](https://brytlinks.com/)

## Overview

This project was built as a polished portfolio and business website with a strong first impression, interactive hero section, responsive project showcase, case-study pages, client testimonials, process section, founder/about section, and conversion-focused contact CTAs.

The design direction focuses on a refined dark interface, glassy navigation, animated motion details, strong typography, and a distinctive interactive circle hero that gives the site a more premium software-studio feel.

## Features

- Responsive dark-mode agency homepage
- Interactive animated hero with hover movement and click pulse effect
- Sticky glass-style navigation and animated full-screen menu
- Project showcase with detailed case-study pages
- Client testimonial slider with stable card sizing
- Service, process, about, and contact sections
- Real contact links for WhatsApp, email, Instagram, and TikTok
- SEO metadata and social sharing previews
- Static export configured for GitHub Pages

## Tech Stack

- Next.js App Router
- React
- Framer Motion
- CSS Modules
- Lucide React icons
- GitHub Pages static deployment

## Project Structure

```text
src/app
|-- components        Reusable page sections and UI components
|-- data              Project and case-study content
|-- utils             Deployment base path helper
|-- work/[slug]       Dynamic case-study pages
|-- globals.css       Global styling
|-- layout.js         App metadata and root layout
`-- page.js           Homepage composition
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create the production static export:

```bash
npm run build
```

The static output is generated in the `out` directory.

## Deploy

Deploy the exported site to GitHub Pages:

```bash
npm run deploy
```

The project is configured for the custom GitHub Pages domain:

```text
brytlinks.com
```

If the custom domain changes, update GitHub Pages, DNS, `public/CNAME`, and the site metadata.

## Author

Built by [Farouk Belaid](https://github.com/faroukbelaid09).
