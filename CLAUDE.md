# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Daniel Tso, a Construction Project Manager with 33 years of experience. Built with vanilla HTML5, CSS3, and JavaScript (no build process, no frameworks). Deployed to Vercel.

- Single-page application with smooth scrolling between sections
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
- **index.html** — Single HTML file with ALL page sections (hero, about, experience, skills, projects, education, contact, footer). Nav links must match section IDs (`href="#about"` → `<section id="about">`)
- **css/variables.css** — CSS custom properties (colors, spacing, typography). All components reference these — color changes cascade automatically
- **css/reset.css** — Browser normalization and base styles
- **css/styles.css** — All component styles (1300+ lines, organized by section with comment headers)
- **js/main.js** — Interactive functionality: mobile menu toggle, smooth scrolling, active nav highlighting, scroll-to-top button, IntersectionObserver fade-in animations, focus trap for accessibility
- **assets/documents/resume.html** — Self-contained HTML resume (separate from main site, has its own inline styles)
- **assets/documents/Daniel_Tso_Resume.pdf** — Downloadable resume linked from nav
- **vercel.json** — Vercel deployment configuration (caching headers for assets, CSS, JS)

### Design System (variables.css)
- **Colors**: Primary `#1a5490` (Deep Blue), Secondary `#2c3e50` (Dark Gray-Blue), Accent `#e67e22` (Construction Orange)
- **Fonts**: Headings = Montserrat, Body = Open Sans (Google Fonts)
- **Breakpoints**: Mobile 320-767px, Tablet 768-1023px, Desktop 1024px+
- **Layout**: `--max-width: 1200px`, `--nav-height: 70px`

### CSS Organization (styles.css)
BEM architecture organized with table of contents. Sections:
1. Global/Shared — `.container`, `.section-title`, `.btn--*`, `.tag`
2. Navigation — `.nav`, `.nav__bar`, `.nav__menu`, `.nav__link`, `.nav__toggle`
3. Hero — `.hero`, `.hero__title`, `.hero__background` (dark navy with blueprint SVG pattern)
4. Impact Bar — `.impact`, `.impact__stat`, `.impact__stat-number`
5. Career Narrative — `.narrative`, `.narrative__journey`, `.narrative__values`
6. Projects — `.projects__card`, `.projects__card-badge` (numbered "01", "02")
7. Timeline — `.timeline__item`, `.timeline__toggle`, `.timeline__collapsed`
8. Credentials — `.credentials__skill-group`, `.credentials__education-item`
9. Contact — `.contact__card`, `.contact__references-note`
10. Footer — `.footer__content`, `.footer__link`

### JavaScript (main.js)
All vanilla JS, no dependencies. Key DOM IDs: `navbar`, `navToggle`, `navMenu`, `scrollToTop`, `timelineToggle`, `timelineCollapsed`, `currentYear`. Uses single consolidated scroll handler with `{ passive: true }`. IntersectionObserver for `.animate-on-scroll` elements → adds `.is-visible` class. Menu states use `.is-open`, navbar scroll uses `.is-scrolled`.

## Content Patterns

### Adding Experience
Add `.timeline__item` div in `<section id="experience">` with BEM classes: `.timeline__job-title`, `.timeline__company`, `.timeline__meta`, `.timeline__responsibilities`, `.timeline__tags > .timeline__tag`. First 4 entries visible, older ones inside `.timeline__collapsed`.

### Adding Skills
Add `.credentials__skill-item` items with FontAwesome check icon in `.credentials__skill-group` divs within `<section id="credentials">`. Categories: Project Management, Technical Coordination, Field Leadership, Safety & Compliance, Industry Expertise, Technical Skills, AI Integration & Emerging Tech.

### Adding Projects
Duplicate `.projects__card` in `<section id="projects">`. Include: `.projects__card-badge` (number), `.projects__card-category`, `.projects__card-title`, `.projects__card-meta`, `.projects__card-description`, `.projects__card-highlights`, `.projects__card-tags > .tag`.

## Key Content References

**Years of Experience**: "33 years" appears in hero, about, footer, and console log. Needs annual update.

**Contact Info**: danieltso@mail.com, (480) 228-0765, Tempe, Arizona

**AI Integration**: Major differentiator (2025). Appears in: About "What I Bring" section, Skills 7th category, Education certifications, resume.html. Should be prominently featured.

## Important Constraints

- **NO build tools** — No webpack, npm, bundlers. All CSS/JS must work directly in browser
- **Accessibility** — WCAG 2.1 Level AA. Keyboard support on all interactive elements. 4.5:1 contrast minimum. ARIA labels on icon-only buttons
- **Performance** — Target Lighthouse 90+, <2s load on 3G. Compress images before adding
- **Content sensitivity** — Professional references include real phone numbers. No confidential project details
- **Deployment** — Hosted on Vercel. Every push to `main` goes live immediately. Preview deployments created for PRs/branches. Test thoroughly before merging to main

## Git Workflow

Commit directly to `main` (auto-deploys to Vercel production). For major changes, optionally use feature branches — Vercel creates preview deployments for each branch/PR. Session notes tracked in `.claude/session-notes/` for development documentation.
