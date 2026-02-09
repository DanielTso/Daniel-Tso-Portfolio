# Deployment Guide
## Publishing Your Portfolio to GitHub Pages

This guide will walk you through deploying your portfolio website to GitHub Pages for free hosting.

---

## Prerequisites

- [x] GitHub account (you're already logged in as DanielTso)
- [x] Git installed on your computer
- [x] Portfolio files completed
- [ ] Resume PDF ready to upload

---

## Step 1: Prepare Your Resume PDF

Before deploying, add your resume PDF:

1. Save your latest resume as PDF
2. Rename it to: `Daniel_Tso_Resume.pdf`
3. Place it in: `/home/denny/Projects/example/assets/documents/`

```bash
# Example command:
cp ~/path/to/your/resume.pdf /home/denny/Projects/example/assets/documents/Daniel_Tso_Resume.pdf
```

---

## Step 2: Add Professional Photo (Optional but Recommended)

1. Choose a professional headshot (square format, 500x500px minimum)
2. Save as `profile.jpg` or `profile.png`
3. Place in: `/home/denny/Projects/example/assets/images/`
4. Update `index.html` line ~77 to replace placeholder:

```html
<!-- Replace this: -->
<div class="image-placeholder">
  <i class="fas fa-user-tie"></i>
</div>

<!-- With this: -->
<img src="assets/images/profile.jpg" alt="Daniel Tso - Construction Project Manager" style="border-radius: 50%; width: 300px; height: 300px; object-fit: cover;">
```

---

## Step 3: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd /home/denny/Projects/example

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Daniel Tso Portfolio Website"
```

---

## Step 4: Create GitHub Repository

### Option A: Using GitHub CLI (gh)

```bash
# Create a new public repository
gh repo create portfolio --public --source=. --remote=origin --push

# Or create with a custom name
gh repo create danieltso-portfolio --public --source=. --remote=origin --push
```

### Option B: Using GitHub Website

1. Go to https://github.com/new
2. Repository name: `portfolio` or `danieltso-portfolio`
3. Description: "Professional portfolio showcasing construction project management expertise"
4. Set to **Public**
5. **Do NOT** initialize with README (you already have one)
6. Click "Create repository"

7. Connect your local repo to GitHub:

```bash
# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/DanielTso/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 5: Enable GitHub Pages

### Using GitHub CLI:

```bash
gh repo edit --enable-pages --pages-branch main --pages-path /
```

### Using GitHub Website:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

6. Wait 1-2 minutes for deployment

7. Your site will be live at:
   ```
   https://DanielTso.github.io/portfolio/
   ```

---

## Step 6: Verify Deployment

1. Wait 2-3 minutes for initial build
2. Visit your live URL: `https://DanielTso.github.io/portfolio/`
3. Test all sections:
   - [ ] Navigation works
   - [ ] All sections display correctly
   - [ ] Mobile menu functions
   - [ ] Resume download link works
   - [ ] Contact links work (email, phone)
   - [ ] Responsive on mobile

---

## Step 7: Set Up Custom Domain (Optional)

If you own a custom domain (e.g., `danieltso.com`):

### 1. Add CNAME file to your repo:

```bash
echo "danieltso.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Update your domain's DNS settings:

Add these DNS records at your domain registrar:

**For apex domain (danieltso.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: DanielTso.github.io
```

### 3. Configure in GitHub:

1. Go to repository Settings > Pages
2. Under "Custom domain", enter: `danieltso.com`
3. Click Save
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS" (wait 24 hours for SSL cert)

---

## Troubleshooting

### Issue: 404 Error

**Solution:**
- Ensure `index.html` is in the root directory
- Check GitHub Pages is enabled
- Wait 5 minutes after enabling

### Issue: Resume Download Not Working

**Solution:**
- Verify PDF is in `assets/documents/` folder
- Check filename matches exactly: `Daniel_Tso_Resume.pdf`
- Commit and push the PDF file

### Issue: Images Not Showing

**Solution:**
- Use relative paths (not absolute)
- Ensure images are committed to repo
- Check file extensions match code

### Issue: Styles Not Loading

**Solution:**
- Check CSS file paths in `index.html`
- Clear browser cache (Ctrl+Shift+R)
- Verify all CSS files are committed

---

## Updating Your Portfolio

After making changes:

```bash
# Navigate to project directory
cd /home/denny/Projects/example

# Check what changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update experience section with new project"

# Push to GitHub
git push

# Changes will be live in 1-2 minutes
```

---

## Performance Optimization

### Before deploying, optimize images:

```bash
# Install imagemagick (if not installed)
sudo apt install imagemagick

# Optimize all images
cd assets/images
for img in *.jpg; do
  convert "$img" -quality 85 -strip "optimized_$img"
done
```

### Test performance:

1. Visit https://pagespeed.web.dev/
2. Enter your GitHub Pages URL
3. Run test
4. Target scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## Maintenance Checklist

### Monthly:
- [ ] Update experience section if job changes
- [ ] Add new projects completed
- [ ] Update skills if new certifications
- [ ] Refresh resume PDF
- [ ] Check all links still work

### Quarterly:
- [ ] Review and update professional summary
- [ ] Add new accomplishments
- [ ] Update contact information if changed
- [ ] Review analytics (if added)

### Annually:
- [ ] Complete content refresh
- [ ] Update profile photo
- [ ] Modernize design if needed
- [ ] Review SEO performance

---

## Security Considerations

1. **Never commit sensitive information:**
   - API keys
   - Passwords
   - Personal documents (SSN, etc.)
   - Client confidential information

2. **Be selective about project details:**
   - Don't share proprietary information
   - Get permission before listing client names
   - Keep budget details general ("$60M+" not exact)

3. **Protect personal information:**
   - Email is public (that's okay)
   - Phone is public (consider Google Voice number)
   - Don't list full home address

---

## Next Steps After Deployment

1. **Share your portfolio:**
   - Add URL to LinkedIn profile
   - Include in email signature
   - Add to resume PDF
   - Share on professional networks

2. **Monitor performance:**
   - Set up Google Analytics (optional)
   - Track resume downloads
   - Monitor contact inquiries

3. **Get feedback:**
   - Ask colleagues to review
   - Test on multiple devices
   - Make improvements based on feedback

---

## Support Resources

- **GitHub Pages Docs:** https://docs.github.com/pages
- **GitHub CLI Docs:** https://cli.github.com/manual/
- **Git Tutorial:** https://git-scm.com/docs/gittutorial
- **HTML/CSS Reference:** https://developer.mozilla.org/

---

**Your portfolio is ready to launch!** 🚀

Follow these steps and you'll have a professional online presence in minutes.

---

*Last Updated: November 2, 2025*
