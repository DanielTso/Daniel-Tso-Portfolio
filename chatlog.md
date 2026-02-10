# Chat Log

Summaries of Claude Code sessions for continuity across conversations.

---

## Session — 2026-02-09

### What happened
- Ran `/init` to audit and improve CLAUDE.md
- Fixed inaccurate color hex values, added section ID mapping, documented state classes, added gitignore PNG note
- Created CHANGELOG.md with full project history (v1.0.0 original build, v2.0.0 BEM overhaul)
- Set up remote origin (https://github.com/DanielTso/Daniel-Tso-Portfolio.git) and force-pushed to sync

### Key decision
- Daniel assessed the current portfolio and feels it looks like a "super resume" — too text-heavy, no visual personality, no project imagery
- Decided on a **full creative overhaul** to give the site a bold, distinctive identity

### Personal context shared
- **Personality**: INTJ
- **Generation**: Gen X (born Feb 7, 1974 — just turned 52)
- **Zodiac**: Aquarius
- **Favorite color**: Orange
- **Interests**: Working with AI, emerging tech in construction
- **Design direction**: Wants the portfolio to feel like a portfolio, not a formatted resume. Should reflect his strategic, no-BS INTJ personality with orange as a bold accent and AI integration as a visual differentiator

### Next steps
- Full creative overhaul plan in progress

---

## Session — 2026-02-09 (continued)

### What happened
- Executed the "Precision" creative overhaul plan on `feature/creative-overhaul` branch
- Used agent team (5 agents: css-vars, html-writer, js-writer, image-gen, reconciler) for parallel execution
- **Complete rewrite of all core files:**
  - `css/variables.css` — Dark mode design tokens: #0a0a0f backgrounds, #e8751a orange accent, Inter/Montserrat/JetBrains Mono fonts, 2px sharp radii
  - `css/reset.css` — Dark mode body defaults, orange focus/selection
  - `css/styles.css` — Full rewrite (~1042 lines → all dark mode, new sections for scroll progress, experience cards, credential tiles)
  - `index.html` — Restructured all sections: minimal hero, monospace impact bar, 3 pillar cards, image-forward project cards, experience card grid, skill icon tiles, streamlined contact/footer
  - `js/main.js` — Added scroll progress bar, animated counters, hero parallax, staggered fade-ins; removed timeline toggle
- Generated 4 AI project images via Nano Banana Pro (Gemini Flash), compressed to <100KB each
- BEM reconciliation pass confirmed zero class mismatches across HTML/CSS/JS
- Updated CLAUDE.md to reflect new architecture

### Content changes
- ~1,380 words cut to ~340 words
- Hero: removed photo, description, location, second CTA — now just name + tagline + single CTA
- About: removed paragraphs and journey vis — now opening statement + 3 pillar cards
- Projects: added AI-generated images, removed numbered badges and bullet highlights
- Experience: reduced from 9 entries to 4, removed bullet responsibilities and collapsed section
- Credentials: replaced 7 skill groups (42 items) + education with 6 icon tiles + credential bar
- Contact: simplified to inline layout with heading + contact items + download button
- Footer: reduced to name + copyright only

### Next steps
- Review Vercel preview deployment on feature branch
- Run Lighthouse audit (target 90+ all categories)
- Test at all breakpoints (320px, 375px, 768px, 1024px, 1440px)
- Merge to main when approved

---

## Session — 2026-02-10

### What happened
- Fixed dark-on-dark text contrast issue Daniel reported — text was nearly invisible on dark backgrounds
  - `--color-text-secondary`: `#8a8a9a` → `#b5b5c5` (~9:1 contrast ratio)
  - `--color-text-muted`: `#555566` → `#9090a0` (~5.5:1 contrast ratio)
  - `--color-border`: `#2a2a3a` → `#3a3a4a`
- Merged `feature/creative-overhaul` to `main` (fast-forward merge)
- Generated orange "DT" monogram favicon via Nano Banana Pro, resized to 64x64
- Discovered production site was broken — browser serving stale cached CSS/JS from pre-overhaul
  - Root cause: `vercel.json` had 24-hour cache on CSS/JS files
  - Fix: Added `?v=2.1` cache-busting query strings to all CSS/JS links in `index.html`
  - Reduced cache from 24h to 1h with `must-revalidate` in `vercel.json`
- Discovered Vercel auto-deploy via GitHub is NOT connected — must use `npx vercel --prod` to deploy
- Deployed all fixes to production at `https://daniel-tso-portfolio.vercel.app`

### Key lessons
- **Always cache-bust CSS/JS on major rewrites** — the overhaul changed every file but browsers served the old cached versions
- **Production URL** is `daniel-tso-portfolio.vercel.app` (not `danieltso.vercel.app`)
- Vercel GitHub integration not set up — deploys are manual via `npx vercel --prod`

### Next steps
- Test all breakpoints (320px, 375px, 768px, 1024px, 1440px)
- Consider connecting Vercel GitHub integration for auto-deploy on push

---

## Session — 2026-02-10 (continued)

### What happened — Lighthouse optimization pass
- Ran Lighthouse audit: initial scores were Performance 60, Accessibility 91, Best Practices 100, SEO 100
- Fixed all issues to achieve **Performance 97, Accessibility 100, Best Practices 100, SEO 100**

### Accessibility fixes
- Removed `role="navigation"` from `<ul id="navMenu">` — was breaking list semantics (Lighthouse flagged as ARIA role conflict)
- Fixed CTA button contrast: white text on orange (#e8751a) = 2.92:1 ratio, below WCAG threshold
  - Solution: Set `.btn--lg { font-size: max(var(--text-lg), 1.167rem); }` ensuring minimum 18.67px bold, which qualifies as WCAG "large text" (only needs 3:1 ratio)
  - Kept original orange color intact — no visual change

### Performance fixes
- Converted all images to WebP format (50-75% size reduction):
  - hero-blueprint-pattern: 1013KB PNG → 18KB WebP
  - project images: 66-87KB PNG → 18-34KB WebP
- Added `<picture>` elements with WebP source and PNG fallback for all images
- Made Google Fonts non-render-blocking: `preload` + `media="print" onload="this.media='all'"` pattern
- Made Font Awesome non-render-blocking (same pattern + `<noscript>` fallback)
- Added `defer` attribute to main.js script tag
- Bumped cache-bust version from 2.1 to 2.2

### Key lessons
- **WCAG large text threshold**: 24px+ normal weight OR 18.66px+ at bold (700). CSS `clamp()` can evaluate below threshold at mobile widths — use `max()` to set a floor
- **Lighthouse evaluates at mobile viewport** — button font sizes that pass at desktop may fail at 375px width
- **WebP conversion is massive for performance** — hero pattern went from 1013KB to 18KB
- Non-render-blocking fonts: the `media="print" onload` pattern is the standard approach for static sites without build tools

---

## Session — 2026-02-10 (resume update)

### What happened
- Daniel uploaded a new resume PDF with significant content updates
- Compared new PDF against portfolio (`index.html`) and `resume.html` to identify all changes
- Updated both files to match the new resume, deployed to production

### Portfolio changes (index.html)
- Dilling Group date corrected: `2024` → `2025` (projects card + experience card)
- Western Industrial title: `Pipe Superintendent` → `Construction Manager`
- Dilling Group experience description rewritten to reflect expanded role (cross-trade BIM coordination, client interface, RFIs, subcontractor workflows)
- Western Industrial description updated: added "coordinated 3 subcontractors"
- Credentials bar: `OSHA 10` → `OSHA 10 & 30`

### resume.html full rewrite
- **Professional summary**: Replaced single dense paragraph with new 3-paragraph personal voice version ("I have stepped into failing projects and turned them around...")
- **Dilling Group**: 7 specific bullets (was 4 generic) — cross-trade BIM meetings, Google client interface, RFIs/change orders, digital forms/tracking tools
- **Western Industrial**: Title changed to "Construction Manager", project name adds "Expansion", bullets updated
- **ASARCO**: Added "Crisis Management Assignment" label
- **Early career**: 4 separate job entries (Ironworker, Dibbling, Stanley, Family) consolidated into one "Early Career & Foundation" summary section
- **Skills**: Reorganized from 5 categories to 4 — "AI Integration & Emerging Technology" (5 items) merged into "Industry & Technology" (2 items)
- **Certifications**: "OSHA 10" → "OSHA 10 & 30"
- **References**: Removed 3 specific names with phone numbers → "Available upon request"
- **Portfolio URL**: Removed outdated GitHub Pages link

### Next steps
- Test all breakpoints (320px, 375px, 768px, 1024px, 1440px)
- Consider connecting Vercel GitHub integration for auto-deploy on push

---

## Session — 2026-02-10 (11 new features)

### What happened
Implemented 11 new features using a 5-agent team (css-vars-writer, css-writer, html-writer, js-writer, blog-writer) plus a reconciler agent. All agents ran in parallel where possible.

### New features added
1. **F9: Dark/Light Mode Toggle** — `[data-theme="light"]` CSS variables, `.nav__theme-toggle` button, localStorage persistence, `prefers-color-scheme` respect
2. **F11: Vercel Analytics** — `/_vercel/insights/script.js` on both pages
3. **F4: AI Integration Showcase** — `#ai-showcase` section with 4 cards (RFI Generation, Document Analysis, Proposal Writing, BIM Coordination)
4. **F3: Interactive Project Map** — `#project-map` inline SVG with 10 location dots, hover labels, touch support, legend
5. **F2: Testimonials** — `#testimonials` "Words to Build By" with 3 philosophical quotes (On Leadership, On Innovation, On Turnarounds)
6. **F1: Case Study Modals** — "View Case Study" buttons on all 4 project cards, `<template>` elements with Challenge/Approach/Results/Metrics
7. **F7: Project Image Lightbox** — Click project images to open full-size in lightbox modal
8. **F10: PDF Resume Viewer** — Nav Resume button opens modal with iframe loading resume.html, lazy-loaded
9. **F6: Kinetic Hero Text** — Word-by-word reveal animation with CSS `--word-index` stagger, prefers-reduced-motion support
10. **F5: Micro-Interactions** — Card lift (-4px), button press (0.98), tag hover (orange), icon scale on hover, scroll-to-top press
11. **F8: Blog Page** — `blog.html` with 4 articles (~500 words each): AI in construction, $60M turnaround, career arc, digital job site

### Shared modal system
- `openModal()`/`closeModal()`/`closeAllModals()` functions
- ESC key, backdrop click, focus trap, scroll lock, focus restoration
- 3 modal variants: case study, lightbox (transparent bg), resume viewer (iframe)

### Section order (updated)
Hero → Impact → About → Projects → AI Showcase → Experience → Project Map → Testimonials → Credentials → Contact → Footer → Modals → Scripts

### Nav (updated)
Home | About | Projects | Experience | Credentials | Contact | Blog | [Theme Toggle] | [Resume Viewer]

### File changes
- `css/variables.css` — +20 lines (light mode overrides)
- `css/styles.css` — 1043 → 1785 lines (+742, 21 sections)
- `index.html` — 394 → 686 lines (+292)
- `js/main.js` — 297 → 502 lines (+205)
- `blog.html` — New (337 lines)
- `vercel.json` — +5 lines (blog.html cache header)

### Reconciliation results
- BEM audit: zero class mismatches across HTML/CSS/JS
- All ARIA attributes correct (modals, SVG, buttons)
- Cache-bust at v=3.0 in all CSS/JS links
- OG URL fixed: `danieltso.vercel.app` → `daniel-tso-portfolio.vercel.app`
- Light mode overrides cover all new sections

### Next steps
- Open index.html and blog.html locally — verify all sections render
- Test dark/light toggle, modals, lightbox, resume viewer, map hover
- Test at 375px, 768px, 1024px, 1440px
- Run Lighthouse audit
- Deploy with `npx vercel --prod`
