# Four Lost Cats — Product Requirements Document

## Original Problem Statement
Build an award-worthy, immersive single-page landing website for **Four Lost Cats** — Nashik's most aesthetic, ELLE DECOR-featured, cat-friendly café & event space. Must be a cinematic, scroll-driven, Three.js-enhanced experience with color-blocking visual identity (blue lower level → peach upper level), floating paper lanterns, playful cat motifs, and premium motion — NOT a generic café template.

## User Choices
- Stack: **React** (react-three-fiber for the 3D, framer-motion, lenis)
- Images: **AI-generated** custom, warm editorial
- CTAs: **Simple links** (tel:, Instagram, Zomato, Google Maps) — no backend/forms
- Hero: **Full Three.js scene**
- Directive: Awwwards Site-of-the-Day level — bold, kinetic hero with masked line reveal, editorial marquee, numbered chapters, purposeful motion.

## Architecture
- Frontend-only landing page. Backend (`server.py`) untouched (default template, unused).
- `App.js`: sets up Lenis smooth scroll (exposed as `window.__lenis`), respects reduced-motion.
- `pages/FourLostCats.jsx`: assembles Loader + all sections; `?nointro` query param skips the loader (for testing).
- Design system in `tailwind.config.js` (brand.* colors, fonts: Outfit/Fraunces/Plus Jakarta Sans/JetBrains Mono/Inter/Caveat) + `index.css` (glassmorphism, grain, marquee/ticker keyframes).
- Content/data centralized in `src/data/site.js` (32 menu items, testimonials, gallery, stats, badges, contact).
- 3D hero in `components/three/HeroScene.jsx` (floating emissive lantern spheres, drifting particles, blue+peach point lights, mouse-parallax rig). Mobile/reduced-motion/no-WebGL falls back to a static hero image (`useSupports3D`).

## User Personas
- Aesthetic-seeking café-goers / travelers who discover via Instagram and decide to visit.
- Locals looking at menu, hours, location.
- Event enquirers (workshops, birthdays, shoots).

## Core Requirements (static)
- Immersive intro loader → cinematic hero → story → design showcase → tabbed menu → events → gallery → testimonials+stats → visit/map → Instagram → footer.
- SEO: single H1, semantic H2s, Schema.org CafeOrCoffeeShop JSON-LD, OG/Twitter meta, canonical.
- Fully responsive; sticky mobile CTA bar; animated hamburger overlay; accessible tabs/links; prefers-reduced-motion handling.

## Implemented (2026-06)
- ✅ All 11 sections built and verified end-to-end (testing agent: 100% frontend, no bugs).
- ✅ Three.js hero with floating lanterns, particles, color-block lighting, mouse parallax + CSS/image fallback.
- ✅ Time-based loading screen (four staggered cats + counter) that auto-dismisses ~2.5s.
- ✅ Glass sticky nav (transparent→frosted on scroll), smooth-scroll nav, mobile overlay menu.
- ✅ Interactive 7-tab menu (32 items) with animated pill + glass tilt cards; featured items with images/badges.
- ✅ Scroll-driven blue→peach color journey, zigzag design blocks, parallax images.
- ✅ Horizontal pinned gallery (desktop) / grid (mobile), auto-scrolling testimonial ticker, animated stat counters.
- ✅ Visit hub with embedded Google Map + action buttons + feature badges.
- ✅ Instagram grid, editorial marquee footer with cat easter egg, Ready2Up credit.
- ✅ AI-generated imagery for interiors, coffee, food, cats, events.

## Backlog / Remaining
- P1: Full "Our Story" dedicated content/page (currently scrolls to design section).
- P2: Real Instagram feed integration (currently curated AI images linking to profile).
- P2: Functional reservation/event enquiry form with backend (currently tel: link, per user choice).
- P2: Dark-mode toggle variant.
- P2: Add data-testids already present everywhere; mobile-nav testids added.

## Next Tasks
- Await user feedback on art direction; iterate on any section polish.
