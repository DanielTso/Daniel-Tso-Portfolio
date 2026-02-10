# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Daniel Tso, a Construction Project Manager with 33 years of experience. Built with vanilla HTML5, CSS3, and JavaScript (no build process, no frameworks). Deployed to Vercel at `https://daniel-tso-portfolio.vercel.app`.

- Single-page application with smooth scrolling between sections
- Dark mode design: near-black backgrounds with orange accent color
- Mobile-first responsive design
- Fully static — no backend, no database
- Owner has basic HTML/CSS knowledge — keep modifications simple and well-commented

## Development Commands

```bash
# Local development — no build process, just open in browser
open index.html  # or firefox/google-chrome

# Deploy — push to main triggers Vercel auto-deploy
git add . && git commit -m "message" && git push origin main

# Preview deployments — Vercel creates preview URLs for every branch/PR
# Production deploys from main branch automatically

# No automated tests — manual browser testing only
```

## Architecture

### Core Files
- **index.html** — Single HTML file with ALL page sections. Nav links must match section IDs (`href="#about"` → `<section id="about">`)
- **css/variables.css** — CSS custom properties (colors, spacing, typography). All components reference these — color changes cascade automatically
- **css/reset.css** — Browser normalization and base styles (dark mode defaults)
- **css/styles.css** — All component styles (organized by section with comment headers and table of contents)
- **js/main.js** — Interactive functionality: mobile menu, smooth scrolling, active nav highlighting, scroll-to-top, scroll progress bar, animated counters, hero parallax, staggered fade-in animations, focus trap
- **assets/images/projects/** — AI-generated project images (4 PNGs, ~70-90KB each)
- **assets/images/favicon.png** — Orange "DT" monogram favicon (64x64)
- **assets/documents/resume.html** — Self-contained HTML resume (separate from main site, has its own inline styles)
- **assets/documents/Daniel_Tso_Resume.pdf** — Downloadable resume linked from nav
- **vercel.json** — Vercel deployment configuration (caching headers for assets, CSS, JS)

### Section IDs (in page order)
`home` (hero) → `impact` → `about` (3 pillar cards) → `projects` (image cards) → `experience` (card grid) → `credentials` (icon tiles) → `contact` → footer (no ID)

Nav links target: `home`, `about`, `projects`, `experience`, `credentials`, `contact`. The `impact` section has no nav link.

### Design System (variables.css)
- **Colors**: BG Primary `#0a0a0f`, BG Secondary `#111118`, BG Card `#16161f`, Orange `#e8751a`, Text Primary `#f0f0f0`, Text Secondary `#b5b5c5`, Text Muted `#9090a0`, Border `#3a3a4a`
- **Fonts**: Headings = Montserrat, Body = Inter, Monospace = JetBrains Mono (Google Fonts)
- **Breakpoints**: Mobile 320-767px, Tablet 768-1023px, Desktop 1024px+
- **Layout**: `--max-width: 1200px`, `--nav-height: 70px`
- **Border Radius**: Sharp corners — `--radius-sm: 2px`, `--radius-md: 2px` (precise, geometric)
- **Type scale**: Fluid `clamp()` values from `--text-xs` through `--text-5xl`

### CSS Organization (styles.css)
BEM architecture organized with table of contents. Sections:
1. Global/Shared — `.container`, `.section-title`, `.btn--primary`, `.btn--outline-orange`, `.tag`
2. Scroll Progress Bar — `.scroll-progress`
3. Navigation — `.nav`, `.nav__bar`, `.nav__menu`, `.nav__link`, `.nav__toggle`
4. Hero — `.hero`, `.hero__title`, `.hero__tagline`, `.hero__accent-line`, `.hero__background`
5. Impact Bar — `.impact`, `.impact__stat`, `.impact__stat-number` (monospace orange)
6. About — `.narrative`, `.narrative__statement`, `.narrative__pillars`, `.narrative__pillar`
7. Projects — `.projects__card`, `.projects__card-image`, `.projects__card-impact`
8. Experience — `.experience__card`, `.experience__title`, `.experience__company`, `.experience__date`
9. Credentials — `.credentials__tile`, `.credentials__tile--accent`, `.credentials__bar`
10. Contact — `.contact__heading`, `.contact__item`, `.contact__divider`
11. Footer — `.footer__name`, `.footer__copyright`
12. Scroll To Top
13. Utilities

### JavaScript (main.js)
All vanilla JS, no dependencies. Key DOM IDs: `navbar`, `navToggle`, `navMenu`, `scrollToTop`, `scrollProgress`, `currentYear`. Uses single consolidated scroll handler (16ms throttle) with `{ passive: true }`. Features:
- **Scroll progress bar**: 2px orange bar at top, width tracks scroll percentage
- **Animated counters**: Impact stats count from 0 when section enters viewport (ease-out cubic, 2s)
- **Hero parallax**: Blueprint pattern moves at 0.3x scroll speed
- **Staggered fade-ins**: `data-delay` attribute adds transition-delay to `.animate-on-scroll` elements
- **IntersectionObserver**: `.animate-on-scroll` → `.is-visible`
- **Nav highlighting**: `.nav__link--active` BEM modifier

### State Classes (must stay synchronized across HTML/CSS/JS)
- `.is-open` — mobile menu open state (on `navMenu` and `navToggle`)
- `.is-scrolled` — navbar background on scroll (on `navbar`)
- `.is-visible` — fade-in animation triggered (on `.animate-on-scroll` elements)
- `.nav__link--active` — active nav link highlighting (BEM modifier)
- `.menu-open` — body class to lock scroll when mobile menu is open
- `.visible` — scroll-to-top button visibility

## Content Patterns

### Adding Experience
Add `.experience__card` div in `.experience__grid` within `<section id="experience">`. Include: `.experience__title`, `.experience__company`, `.experience__date`, `.experience__desc`, `.experience__tags > .tag`. Currently 4 cards in a 2-column grid.

### Adding Skills
Add `.credentials__tile` div in `.credentials__grid` within `<section id="credentials">`. Include FontAwesome icon + label span. Use `.credentials__tile--accent` modifier for orange-highlighted tiles. Currently 6 tiles in a 3x2 grid.

### Adding Projects
Duplicate `.projects__card` in `.projects__grid` within `<section id="projects">`. Include: `.projects__card-image > img` (200px tall, loading="lazy"), `.projects__card-body`, `.projects__card-category`, `.projects__card-title`, `.projects__card-meta`, `.projects__card-impact`, `.projects__card-tags > .tag`.

## Key Content References

**Years of Experience**: "33 years" appears in hero tagline context, about statement, impact stats, and meta description. Needs annual update.

**Contact Info**: danieltso@mail.com, (480) 228-0765, Tempe, Arizona

**AI Integration**: Major differentiator. Appears in: About "AI Integrated" pillar card, Skills tile with `.credentials__tile--accent` (orange accent), credentials bar, resume.html. Should be prominently featured.

## Important Constraints

- **NO build tools** — No webpack, npm, bundlers. All CSS/JS must work directly in browser
- **Accessibility** — WCAG 2.1 Level AA. Keyboard support on all interactive elements. 4.5:1 contrast minimum. ARIA labels on icon-only buttons. Orange focus outlines.
- **Performance** — Target Lighthouse 90+, <2s load on 3G. Compress images before adding. Project images use `loading="lazy"`.
- **Content sensitivity** — Professional references include real phone numbers. No confidential project details
- **Deployment** — Hosted on Vercel. Every push to `main` goes live immediately. Preview deployments created for PRs/branches. Test thoroughly before merging to main
- **Gitignore note** — `*.png` files at repo root are ignored; only PNGs under `assets/` are tracked. Screenshots saved to repo root won't be committed

## Chat Log

**Read `chatlog.md` at the start of every session** for context on previous conversations, decisions, and in-progress work. Update it at the end of each session with a summary of what happened and any decisions made.

## Git Workflow

Commit directly to `main` (auto-deploys to Vercel production). For major changes, optionally use feature branches — Vercel creates preview deployments for each branch/PR. Note: Vercel auto-deploy via GitHub integration is NOT connected — use `npx vercel --prod` to deploy manually after pushing.

### Cache Busting
CSS and JS files use `?v=X.X` query strings for cache busting (e.g., `styles.css?v=2.1`). **Bump the version number** whenever CSS or JS files change to ensure browsers fetch the new files. The current version is `2.1`.
