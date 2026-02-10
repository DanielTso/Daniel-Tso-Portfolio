# Changelog

All notable changes to this project will be documented in this file.

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
