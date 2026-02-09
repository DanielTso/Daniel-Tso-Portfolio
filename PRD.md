# Product Requirements Document (PRD)
## Construction PM Portfolio Website

**Version:** 1.0
**Date:** November 2, 2025
**Owner:** Daniel Tso
**Status:** Planning Phase

---

## 1. Product Overview

### 1.1 Purpose
A professional portfolio website that serves as an online resume for a Construction Project Manager, designed to attract potential employers and showcase professional qualifications.

### 1.2 Target Users
- **Primary:** Hiring managers and recruiters in construction industry
- **Secondary:** Professional network connections, colleagues, industry contacts

### 1.3 Product Vision
A clean, modern, mobile-responsive portfolio website that professionally presents construction project management experience and skills, deployable to GitHub Pages, and maintainable by someone with basic HTML/CSS knowledge.

---

## 2. User Stories & Requirements

### 2.1 Must-Have Features (P0 - Phase 1)

#### US-001: Hero Section
**As a** visitor
**I want to** immediately see the professional's name, title, and key value proposition
**So that** I can quickly understand who they are and their expertise

**Acceptance Criteria:**
- Display full name prominently
- Show current title: "Construction Project Manager"
- Include professional tagline/summary (1-2 sentences)
- Display professional photo or avatar
- Include call-to-action button (e.g., "View My Work", "Download Resume")
- Responsive on all screen sizes

#### US-002: About Me Section
**As a** potential employer
**I want to** read a professional summary and background
**So that** I can understand the candidate's experience and approach

**Acceptance Criteria:**
- 2-3 paragraph professional summary
- Highlight years of experience
- Mention key industries/project types
- Emphasize unique value proposition
- Include location (Omaha, NE)
- Professional but personable tone

#### US-003: Professional Experience
**As a** hiring manager
**I want to** review work history and responsibilities
**So that** I can assess relevant experience

**Acceptance Criteria:**
- Display positions in reverse chronological order
- Each position includes:
  - Job title
  - Company name
  - Location
  - Dates (start - end)
  - 3-5 key responsibilities or achievements
- Visual timeline or card layout
- Highlight progression and growth

#### US-004: Skills Showcase
**As a** recruiter
**I want to** quickly see technical and professional skills
**So that** I can match candidate to job requirements

**Acceptance Criteria:**
- Organized into categories:
  - Project Management Skills
  - Technical Skills (software, tools)
  - Construction Specialties
  - Soft Skills/Leadership
- Visual presentation (badges, icons, or grid layout)
- Easy to scan and read
- Minimum 15-20 skills listed

#### US-005: Projects Portfolio
**As a** potential employer
**I want to** see examples of completed projects
**So that** I can evaluate the scope and quality of work

**Acceptance Criteria:**
- Display 4-6 notable projects
- Each project includes:
  - Project name/title
  - Client/company (if shareable)
  - Project type and scope
  - Budget size (range)
  - Duration
  - Key achievements/outcomes
  - Technologies/methodologies used
- Optional: Project images (if available and permissible)
- Card or grid layout

#### US-006: Contact Section
**As a** interested employer
**I want to** easily contact the candidate
**So that** I can initiate conversation about opportunities

**Acceptance Criteria:**
- Email address (clickable mailto: link)
- LinkedIn profile link
- GitHub profile link
- Phone number (optional)
- Location (city, state)
- Simple contact form OR clear call-to-action
- All links open correctly

#### US-007: Mobile Responsiveness
**As a** mobile user
**I want to** view the portfolio on my phone or tablet
**So that** I can review it anywhere

**Acceptance Criteria:**
- Responsive design works on:
  - Mobile (320px - 767px)
  - Tablet (768px - 1023px)
  - Desktop (1024px+)
- Navigation adapts (hamburger menu on mobile)
- Images scale appropriately
- Text remains readable
- No horizontal scrolling required

#### US-008: Resume Download
**As a** hiring manager
**I want to** download a PDF resume
**So that** I can save it to our application system

**Acceptance Criteria:**
- Prominent "Download Resume" button
- PDF file named professionally (e.g., "Daniel_Tso_Resume.pdf")
- PDF includes all key information from website
- Button visible on multiple pages/sections

#### US-009: Navigation
**As a** visitor
**I want to** easily navigate between sections
**So that** I can find information quickly

**Acceptance Criteria:**
- Fixed/sticky navigation bar
- Links to all main sections
- Smooth scrolling between sections
- Active section highlighted in navigation
- Mobile-friendly hamburger menu
- Logo/name links back to top

### 2.2 Nice-to-Have Features (P1 - Future Enhancements)

#### US-010: Certifications Section
- Display professional certifications
- License information
- Training completions

#### US-011: Testimonials
- Quotes from colleagues or clients
- Recommendations from LinkedIn
- Project success stories

#### US-012: Blog/Insights Section
- Industry insights
- Project lessons learned
- Professional development posts

#### US-013: Contact Form Backend
- Working contact form with email delivery
- Form validation
- Thank you message after submission

---

## 3. Technical Requirements

### 3.1 Technology Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Modern CSS (Flexbox, Grid, CSS Variables)
- **Icons:** Font Awesome or similar icon library
- **Fonts:** Google Fonts
- **Hosting:** GitHub Pages
- **Version Control:** Git/GitHub

### 3.2 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 3.3 Performance Requirements
- Page load time: < 2 seconds on 3G connection
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices)
- Optimized images (WebP with fallbacks)
- Minified CSS/JS (optional for Phase 1)

### 3.4 SEO Requirements
- Semantic HTML5 elements
- Meta tags (title, description, Open Graph)
- Descriptive alt text for images
- Clean URL structure
- robots.txt and sitemap.xml

### 3.5 Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast (4.5:1 minimum)
- Descriptive link text
- ARIA labels where appropriate

---

## 4. Design Requirements

### 4.1 Visual Design
- **Style:** Clean, modern, professional
- **Color Scheme:** Professional palette (blues, grays, neutrals)
- **Typography:** Clear hierarchy, readable fonts
- **Spacing:** Generous whitespace for readability
- **Layout:** Grid-based, balanced, organized

### 4.2 Brand Guidelines
- Professional but approachable tone
- Construction industry appropriate
- Modern design showing technical aptitude
- Consistent styling across all sections

---

## 5. Content Requirements

### 5.1 Required Content (Client to Provide)
- Professional bio (200-300 words)
- Work experience details (positions, dates, responsibilities)
- Skills list (organized by category)
- Project details (4-6 projects minimum)
- Contact information (email, LinkedIn, phone)
- Professional photo or headshot
- Resume PDF file
- Optional: Project images or screenshots

### 5.2 Content Guidelines
- Professional language
- Action-oriented descriptions
- Quantifiable achievements where possible
- Industry-standard terminology
- Free of typos and grammatical errors

---

## 6. Success Metrics

### 6.1 Launch Metrics
- Website successfully deployed to GitHub Pages
- All sections display correctly on mobile, tablet, desktop
- All links functional
- Page load time under 2 seconds
- Zero critical bugs

### 6.2 Usage Metrics (Post-Launch)
- Page views
- Time on site
- Bounce rate
- Resume download clicks
- Contact link clicks

---

## 7. Project Phases

### Phase 1: MVP (Current)
- All P0 features (US-001 through US-009)
- Basic deployment to GitHub Pages
- Client can update content independently

### Phase 2: Enhancements (Future)
- P1 features based on feedback
- Custom domain setup
- Analytics integration
- Contact form backend
- Content additions

---

## 8. Dependencies & Assumptions

### 8.1 Dependencies
- Client provides all content (text, images, resume PDF)
- GitHub repository already created
- GitHub Pages enabled for hosting

### 8.2 Assumptions
- Client has access to GitHub account
- Client can push changes to GitHub repository
- Standard construction project information can be shared publicly
- Professional photo available or will use alternative

---

## 9. Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content not ready | Medium | High | Use placeholder content, provide templates |
| Sensitive project info shared | Low | High | Content review checklist, NDA reminders |
| Client unable to update | Low | Medium | Detailed documentation, simple structure |
| Design doesn't match expectations | Low | Medium | Early design approval, iteration cycles |

---

## 10. Open Questions
- [ ] Do you have a professional photo/headshot available?
- [ ] Are there specific company colors or branding preferences?
- [ ] Do you have project images you can share publicly?
- [ ] Do you have an updated resume PDF ready?
- [ ] Any specific companies or projects that should NOT be mentioned?
- [ ] Preferred email address for contact?
- [ ] Do you own any custom domain names?

---

## 11. Approval & Sign-off

**Reviewed by:** _________________
**Date:** _________________
**Approved:** ☐ Yes  ☐ No  ☐ With Changes

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________

---

*Document Version: 1.0*
*Last Updated: November 2, 2025*
