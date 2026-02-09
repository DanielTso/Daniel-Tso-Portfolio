# Quick Start Guide
## Get Your Portfolio Live in 10 Minutes

**Daniel Tso - Construction Project Manager Portfolio**

---

## Before You Start - Checklist

- [x] Portfolio files created ✓
- [ ] Resume PDF ready (`Daniel_Tso_Resume.pdf`)
- [ ] Professional photo ready (optional but recommended)
- [ ] GitHub account logged in (DanielTso) ✓
- [ ] Git configured on your computer

---

## 5-Step Launch Process

### Step 1: Add Your Resume (2 minutes)

```bash
# Copy your resume PDF to the documents folder
cp ~/path/to/your/resume.pdf /home/denny/Projects/example/assets/documents/Daniel_Tso_Resume.pdf
```

**Don't have it ready?** Skip for now - you can add it later.

---

### Step 2: Add Your Photo (2 minutes) - OPTIONAL

```bash
# Copy your professional photo to images folder
cp ~/path/to/your/photo.jpg /home/denny/Projects/example/assets/images/profile.jpg
```

**Then update index.html line ~100** (see CONTENT_UPDATE_GUIDE.md for details)

**Don't have a photo ready?** The placeholder icon will work fine for now.

---

### Step 3: Create GitHub Repository (2 minutes)

```bash
# Navigate to your project
cd /home/denny/Projects/example

# Initialize git (if not done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Daniel Tso Portfolio Website"

# Create GitHub repo and push (using GitHub CLI)
gh repo create portfolio --public --source=. --remote=origin --push
```

**Alternative:** Create repo manually on GitHub.com and push.

---

### Step 4: Enable GitHub Pages (2 minutes)

```bash
# Enable GitHub Pages using CLI
gh repo edit --enable-pages --pages-branch main --pages-path /
```

**Alternative:**
1. Go to repo Settings on GitHub.com
2. Click "Pages" in sidebar
3. Set Source to "main" branch
4. Click Save

---

### Step 5: Verify & Share (2 minutes)

1. **Wait 2-3 minutes** for deployment
2. **Visit your site:**
   ```
   https://DanielTso.github.io/portfolio/
   ```
3. **Test everything:**
   - [ ] Site loads correctly
   - [ ] Navigation works
   - [ ] Mobile responsive
   - [ ] Links work
   - [ ] Resume downloads (if added)

4. **Share your portfolio:**
   - Add to LinkedIn profile
   - Update resume with URL
   - Include in email signature
   - Share with network

---

## 🎉 You're Live!

Your portfolio is now online at: `https://DanielTso.github.io/portfolio/`

---

## What's Next?

### Immediate (Today):
1. **Add resume PDF** if you haven't already
2. **Test on mobile device** - text a friend the link
3. **Share with 3 people** for feedback
4. **Update LinkedIn** with portfolio URL

### This Week:
1. **Add professional photo** to make it more personal
2. **Review all content** for typos
3. **Test all features** thoroughly
4. **Add to job applications** you're working on

### This Month:
1. **Set up custom domain** (optional): `danieltso.com`
2. **Add Google Analytics** to track visitors
3. **Get professional feedback** from colleagues
4. **Start applying** with your new portfolio!

---

## Common Questions

**Q: Can I update content after it's live?**
A: Yes! Make changes locally, commit, and push. Updates appear in 1-2 minutes.

**Q: What if I don't have a resume PDF ready?**
A: The download button will be there but won't work. Add it when ready.

**Q: Can I use a custom domain?**
A: Yes! See DEPLOYMENT_GUIDE.md for instructions.

**Q: How much does GitHub Pages cost?**
A: $0 - It's completely free!

**Q: Can I see who visits my site?**
A: Add Google Analytics for visitor tracking (free).

**Q: What if something breaks?**
A: Run `git checkout index.html` to undo changes, or restore from previous commit.

---

## Need Help?

1. **Content updates:** See `docs/CONTENT_UPDATE_GUIDE.md`
2. **Deployment issues:** See `docs/DEPLOYMENT_GUIDE.md`
3. **Technical problems:** Open an issue on your GitHub repo
4. **Can't figure it out:** Reach out to a developer friend

---

## Pro Tips

💡 **Tip 1:** Test locally before pushing:
```bash
# Open in browser to preview changes
firefox index.html
```

💡 **Tip 2:** Keep content fresh - update monthly

💡 **Tip 3:** Share everywhere:
- LinkedIn profile
- Email signature
- Resume PDF footer
- Business cards
- Job applications

💡 **Tip 4:** Ask for feedback from:
- Former colleagues
- Hiring managers
- Industry contacts
- Developer friends

💡 **Tip 5:** Track your success:
- Resume downloads
- Contact inquiries
- Interview mentions
- Job offers!

---

## Success Metrics

After 30 days, you should see:

- ✅ Portfolio linked from LinkedIn
- ✅ Resume PDF updated with portfolio URL
- ✅ Mentioned in at least 3 job applications
- ✅ At least 1 piece of positive feedback
- ✅ Professional photo added
- ✅ Content reviewed and refined

---

## Your Portfolio Stack

**What you built:**
- Clean, professional single-page portfolio
- Fully responsive mobile design
- Modern, accessible HTML/CSS/JavaScript
- Optimized for fast loading
- SEO-friendly structure
- Free GitHub Pages hosting

**Your unique advantage:**
- 33 years of field experience
- Modern technical coordination skills
- Proven project management capabilities
- Professional online presence
- Stand out from other candidates

---

## Final Checklist

Before sharing widely:

- [ ] Resume PDF added and working
- [ ] Professional photo added (or placeholder okay)
- [ ] All content reviewed for typos
- [ ] Contact information correct
- [ ] Tested on desktop browser
- [ ] Tested on mobile phone
- [ ] All links work (email, phone)
- [ ] Site loads fast (< 2 seconds)
- [ ] Shared with 2-3 people for feedback
- [ ] Added to LinkedIn profile
- [ ] Updated resume with portfolio URL

---

## 🚀 Launch Command

Ready to go live? Run this:

```bash
cd /home/denny/Projects/example
git add .
git commit -m "Launch Daniel Tso Portfolio - Ready for production"
git push
```

**Your portfolio will be live in 2 minutes!**

---

*Good luck with your job search, Daniel! Your unique combination of field expertise and modern technical skills will stand out to employers. This portfolio showcases that perfectly.*

---

**Portfolio URL:** https://DanielTso.github.io/portfolio/

**Created:** November 2, 2025
**Status:** Ready to Deploy ✓
