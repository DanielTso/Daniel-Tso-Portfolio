# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 2026-02-10

### Changed
- "Precision" creative overhaul — dark mode, geometric design, orange accent
- Complete rewrite of all CSS with dark mode design tokens and BEM architecture
- Restructured sections: Hero → Impact Bar → About (3 pillars) → Projects (image cards) → Experience (card grid) → Credentials (icon tiles) → Contact → Footer
- Hero redesigned: minimal centered layout with accent line, uppercase title, monospace tagline, single CTA
- About: replaced paragraphs with opening statement + 3 pillar cards (Field to Office, Crisis Tested, AI Integrated)
- Projects: added AI-generated images, removed numbered badges and bullet highlights
- Experience: reduced from 9 entries to 4 card grid, removed timeline toggle and collapsed section
- Credentials: replaced 7 skill groups (42 items) + education with 6 icon tiles + credential bar
- Contact: simplified to inline layout with heading + contact items + download button
- Footer: reduced to name + copyright only
- Content cut from ~1,380 words to ~340 words
- Fonts: Open Sans → Inter (body), added JetBrains Mono (monospace accents)
- Reduced vercel.json CSS/JS cache from 24h to 1h with must-revalidate

### Added
- 4 AI-generated project images via Nano Banana Pro (Gemini Flash)
- Scroll progress bar (2px orange bar at viewport top)
- Animated counters in impact bar (count from 0 on scroll into view)
- Hero parallax effect (blueprint pattern at 0.3x scroll speed)
- Staggered fade-in animations with data-delay attribute
- Orange "DT" monogram favicon
- Cache-busting query strings on CSS/JS links (?v=2.1)

### Fixed
- Dark text contrast — brightened text-secondary (#8a8a9a → #b5b5c5) and text-muted (#555566 → #9090a0)
- Browser serving stale cached CSS/JS from pre-overhaul (cache-bust fix)

### Removed
- Timeline toggle and collapsed experience entries
- Career journey visualization
- Profile photo from hero
- Navigation links from footer
- 7 skill group checklists (replaced with icon tiles)

## [2.0.0] - 2026-02-09

### Changed
- Complete portfolio overhaul with BEM CSS architecture
- Restructured sections: Hero → Impact Bar → Career Narrative → Projects → Experience → Credentials → Contact → Footer
- Migrated deployment from GitHub Pages to Vercel with auto-deploy on push to main
- Replaced flat CSS with design system using CSS custom properties (variables.css)
- Rewrote all JavaScript with consolidated scroll handler and IntersectionObserver animations
- Mobile menu now uses focus trap for accessibility compliance

### Added
- Impact bar section with key career statistics (33 years, 11 years at Bechtel, 110+ personnel, $60M+)
- Career narrative section replacing basic "About" with journey visualization
- Timeline toggle to show/hide older experience entries
- Scroll-to-top button with smooth scrolling
- Skip-to-content link for screen readers
- Fluid typography scale using clamp() values
- vercel.json with cache headers for assets, CSS, and JS
- CLAUDE.md with architecture documentation and content patterns

## [1.0.0] - 2025-11-02

### Added
- Initial portfolio website for Daniel Tso
- Single-page design with HTML5, CSS3, and vanilla JavaScript
- Sections: Hero, About, Projects, Experience, Skills, Education, Contact
- Mobile-first responsive design (320px, 768px, 1024px breakpoints)
- Google Fonts (Montserrat, Open Sans) and Font Awesome icons
- Downloadable resume PDF
- Self-contained HTML resume (assets/documents/resume.html)
- WCAG 2.1 Level AA accessibility (keyboard navigation, ARIA labels, semantic HTML)
- GitHub Pages deployment
