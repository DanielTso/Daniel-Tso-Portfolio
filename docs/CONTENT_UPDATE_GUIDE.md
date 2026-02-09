# Content Update Guide
## How to Update Your Portfolio Website

This guide shows you how to update different parts of your portfolio. No coding experience required!

---

## Quick Reference

| What to Update | File to Edit | Line Number (approx) |
|----------------|--------------|---------------------|
| Your name/title | `index.html` | Lines 64-67 |
| About Me text | `index.html` | Lines 138-172 |
| Add new job | `index.html` | Lines 207-450 |
| Add new skill | `index.html` | Lines 515-630 |
| Add new project | `index.html` | Lines 680-850 |
| Contact info | `index.html` | Lines 1010-1050 |
| Resume PDF | `assets/documents/` | Replace file |
| Profile photo | `assets/images/` | Add image |
| Site colors | `css/variables.css` | Lines 8-18 |

---

## Opening and Editing Files

### Recommended Editors:
- **VS Code** (best option) - https://code.visualstudio.com/
- **Notepad++** (Windows)
- **Sublime Text**
- **Any text editor** (Notepad works but not recommended)

### How to open:
1. Right-click on `index.html`
2. Select "Open with..."
3. Choose your text editor

---

## Common Updates

### 1. Update Your Professional Summary (About Me)

**File:** `index.html`
**Section:** Lines 138-172

**Find this section:**
```html
<div class="about-text">
  <h3 class="about-heading">From the Field to the Future of Project Management</h3>
  <p class="about-paragraph">
    I'm not your typical construction project manager...
  </p>
  ...
</div>
```

**How to edit:**
1. Locate the `<p class="about-paragraph">` tags
2. Edit the text between `<p>` and `</p>`
3. Keep the HTML tags intact
4. Save the file

**Example:**
```html
<p class="about-paragraph">
  Your new text here. Keep it professional and highlight your strengths.
</p>
```

---

### 2. Add a New Job to Experience

**File:** `index.html`
**Section:** Lines 207-450

**Copy this template:**
```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <div class="timeline-header">
      <h3 class="job-title">Your Job Title</h3>
      <span class="job-badge current">Current</span> <!-- Remove if not current -->
    </div>
    <h4 class="company-name">Company Name</h4>
    <p class="job-meta">
      <i class="fas fa-calendar"></i> Start Date - End Date
      <span class="separator">|</span>
      <i class="fas fa-map-marker-alt"></i> City, State
    </p>
    <p class="job-description">
      <strong>Project:</strong> Project name and brief description
    </p>
    <ul class="job-responsibilities">
      <li>First key responsibility or achievement</li>
      <li>Second key responsibility or achievement</li>
      <li>Third key responsibility or achievement</li>
      <li>Fourth key responsibility or achievement</li>
    </ul>
    <div class="job-tags">
      <span class="tag">Skill 1</span>
      <span class="tag">Skill 2</span>
      <span class="tag">Skill 3</span>
    </div>
  </div>
</div>
```

**Where to paste:**
- For current job: After line 207 (at the top)
- For past job: After the current job section

---

### 3. Add a New Skill

**File:** `index.html`
**Section:** Lines 515-630

**Find the appropriate category:**
- Project Management: Lines 525-535
- Technical Coordination: Lines 540-550
- Field Leadership: Lines 555-565
- Safety & Compliance: Lines 570-580
- Industry Expertise: Lines 585-595
- Technical Skills: Lines 600-610

**Add a skill:**
```html
<li><i class="fas fa-check"></i> Your New Skill Name</li>
```

**Example:**
```html
<ul class="skill-list">
  <li><i class="fas fa-check"></i> Microsoft Project - Scheduling & Planning</li>
  <li><i class="fas fa-check"></i> Budget Management ($60M+ Projects)</li>
  <!-- Add your new skill here: -->
  <li><i class="fas fa-check"></i> Primavera P6 - Advanced Scheduling</li>
</ul>
```

---

### 4. Add a New Project

**File:** `index.html`
**Section:** Lines 680-850

**Copy this template:**
```html
<div class="project-card">
  <div class="project-image">
    <div class="image-placeholder">
      <i class="fas fa-building"></i> <!-- Change icon: server, industry, mountain, etc. -->
    </div>
    <div class="project-overlay">
      <span class="project-category">Category Name</span>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-meta">
      <span class="project-client">Client/Company Name</span>
      <span class="separator">•</span>
      <span class="project-year">2025</span>
    </p>
    <p class="project-description">
      Brief description of the project, your role, and key achievements.
      Keep it concise but impactful.
    </p>
    <ul class="project-highlights">
      <li><i class="fas fa-check-circle"></i> Key achievement or metric</li>
      <li><i class="fas fa-check-circle"></i> Key achievement or metric</li>
      <li><i class="fas fa-check-circle"></i> Key achievement or metric</li>
    </ul>
    <div class="project-tags">
      <span class="tag">Technology 1</span>
      <span class="tag">Technology 2</span>
      <span class="tag">Technology 3</span>
    </div>
  </div>
</div>
```

**Icon options** (replace `fas fa-building`):
- `fas fa-server` - Data centers
- `fas fa-industry` - Manufacturing
- `fas fa-mountain` - Mining
- `fas fa-fire` - Refinery
- `fas fa-bolt` - Power plants
- `fas fa-building` - Commercial
- `fas fa-cog` - Equipment
- `fas fa-hammer` - Construction

---

### 5. Update Contact Information

**File:** `index.html`
**Section:** Lines 1010-1050

**Email:**
```html
<a href="mailto:danieltso@mail.com">danieltso@mail.com</a>
```
Change `danieltso@mail.com` to your new email (appears twice)

**Phone:**
```html
<a href="tel:+14802280765">(480) 228-0765</a>
```
Change both the `tel:` link and display number

**Location:**
```html
<p>Tempe, Arizona<br>Available Nationwide</p>
```

---

### 6. Update Resume PDF

**Steps:**
1. Save your updated resume as PDF
2. Name it exactly: `Daniel_Tso_Resume.pdf`
3. Navigate to folder: `/home/denny/Projects/example/assets/documents/`
4. Replace the old PDF with new one
5. Commit and push changes

**Commands:**
```bash
cd /home/denny/Projects/example
git add assets/documents/Daniel_Tso_Resume.pdf
git commit -m "Update resume PDF"
git push
```

---

### 7. Add Your Professional Photo

**Steps:**
1. Choose a professional headshot
2. Crop to square (1:1 aspect ratio)
3. Resize to 500x500px or larger
4. Save as `profile.jpg` (or `profile.png`)
5. Place in: `/home/denny/Projects/example/assets/images/`

**Update HTML (line ~100):**

Replace this:
```html
<div class="image-placeholder">
  <i class="fas fa-user-tie"></i>
</div>
```

With this:
```html
<img src="assets/images/profile.jpg"
     alt="Daniel Tso - Construction Project Manager"
     style="border-radius: 50%; width: 300px; height: 300px; object-fit: cover; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
```

---

### 8. Change Site Colors

**File:** `css/variables.css`
**Lines:** 8-18

**Current colors:**
```css
--primary-color: #1a5490;        /* Deep Blue */
--secondary-color: #2c3e50;      /* Dark Gray-Blue */
--accent-color: #e67e22;         /* Construction Orange */
```

**To change:**
1. Choose your colors from https://coolors.co/
2. Replace the hex codes (#1a5490, etc.)
3. Save and refresh browser

**Example:**
```css
--primary-color: #0066cc;        /* Brighter Blue */
--accent-color: #ff6b35;         /* Different Orange */
```

---

## Publishing Updates

After making any changes:

```bash
# 1. Navigate to your project
cd /home/denny/Projects/example

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with a message describing what you changed
git commit -m "Update experience section with new JeDunn role"

# 5. Push to GitHub
git push

# 6. Wait 1-2 minutes for changes to appear live
```

---

## Testing Changes Locally

Before pushing to GitHub, test locally:

1. **Open in browser:**
   ```bash
   cd /home/denny/Projects/example
   # Then open index.html in your browser
   firefox index.html
   # or
   google-chrome index.html
   ```

2. **Check for errors:**
   - Press F12 to open Developer Tools
   - Click "Console" tab
   - Look for red error messages
   - Fix any errors before pushing

3. **Test responsiveness:**
   - Press F12
   - Click device icon (mobile view)
   - Test different screen sizes

---

## Common Mistakes to Avoid

### 1. Breaking HTML Tags
❌ **Wrong:**
```html
<p>Some text
<p>More text</p>
```

✅ **Correct:**
```html
<p>Some text</p>
<p>More text</p>
```

### 2. Forgetting to Close Tags
❌ **Wrong:**
```html
<div>
  <p>Content
</div>
```

✅ **Correct:**
```html
<div>
  <p>Content</p>
</div>
```

### 3. Breaking Quotes
❌ **Wrong:**
```html
<a href="page.html>Link</a>
```

✅ **Correct:**
```html
<a href="page.html">Link</a>
```

### 4. Wrong File Paths
❌ **Wrong:**
```html
<img src="/images/photo.jpg">
```

✅ **Correct:**
```html
<img src="assets/images/photo.jpg">
```

---

## Getting Help

If something breaks:

1. **Undo your changes:**
   ```bash
   git status  # See what changed
   git checkout index.html  # Undo changes to index.html
   ```

2. **Restore previous version:**
   ```bash
   git log --oneline  # See recent commits
   git reset --hard HEAD~1  # Go back 1 commit (careful!)
   ```

3. **Check the browser console:**
   - Press F12
   - Look for error messages
   - Google the error message

4. **Validate your HTML:**
   - Visit https://validator.w3.org/
   - Upload your index.html
   - Fix any errors shown

---

## Quick Tips

✅ **DO:**
- Make small changes and test frequently
- Keep backup copies before major edits
- Use consistent formatting
- Test on mobile devices
- Spell-check all content

❌ **DON'T:**
- Delete closing tags
- Change class names (affects styling)
- Remove important structural elements
- Commit sensitive information
- Make changes directly on GitHub (use local edits)

---

## Content Best Practices

### Writing Job Descriptions:
- Start with action verbs (Managed, Led, Directed, Coordinated)
- Include quantifiable results (110 personnel, $60M project, 3 weeks early)
- Highlight unique achievements
- Keep bullets concise (1-2 lines max)

### Writing Project Descriptions:
- Lead with the outcome or impact
- Mention client/company (if allowed)
- Include project value and scope
- List 3-5 key achievements
- Use relevant technical terms

### Professional Tone:
- Confident but not arrogant
- Specific but not overly detailed
- Achievement-focused
- Industry-appropriate language

---

## Maintenance Schedule

### After Every Job Change:
- [ ] Add new position to Experience
- [ ] Update current role badge
- [ ] Add as featured project if significant
- [ ] Update resume PDF
- [ ] Refresh professional summary

### Monthly:
- [ ] Review for typos or errors
- [ ] Update project statuses
- [ ] Check all links work
- [ ] Test mobile responsiveness

### Quarterly:
- [ ] Add new skills or certifications
- [ ] Refresh project descriptions
- [ ] Update metrics (years of experience, project count)
- [ ] Review and improve content

---

**Need more help?** Refer to the original files or create an issue in your GitHub repository.

---

*Last Updated: November 2, 2025*
