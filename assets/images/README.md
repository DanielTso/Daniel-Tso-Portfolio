# Images Folder

## Professional Photo

Add your professional headshot here for the portfolio hero section.

### Requirements:
- **Format:** JPG or PNG
- **Filename:** `profile.jpg` or `profile.png`
- **Size:** 500x500px minimum (square aspect ratio)
- **Quality:** High resolution, professional quality
- **File Size:** Optimize to under 500KB

### Photo Guidelines:

✅ **DO:**
- Use professional business attire or construction site PPE
- Ensure good lighting and clear background
- Smile naturally and look approachable
- Use recent photo (within last 2 years)
- Crop to square format (1:1 ratio)

❌ **DON'T:**
- Use casual/vacation photos
- Include other people
- Use low-resolution images
- Have busy/distracting backgrounds

### Optimization:

Before uploading, optimize your image:

```bash
# Using ImageMagick
convert profile.jpg -resize 800x800 -quality 85 profile.jpg

# Or use online tools:
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/
```

### How to Add:

1. Save your professional photo
2. Rename to `profile.jpg` (or `profile.png`)
3. Place in this folder
4. Update `index.html` (see CONTENT_UPDATE_GUIDE.md)
5. Commit and push:

```bash
git add assets/images/profile.jpg
git commit -m "Add professional photo"
git push
```

### Current Status:
- [ ] Professional photo added
- [ ] Image optimized
- [ ] HTML updated
- [ ] Tested on website

---

## Project Images (Optional)

You can also add images for your featured projects:

- `project-google.jpg` - Google Datacenter
- `project-mission-mine.jpg` - Mission Mine
- `project-nestle.jpg` - Nestle Purina
- etc.

**Requirements:**
- 800x600px or similar landscape ratio
- Under 300KB each
- Optimized for web

---

**Next Step:** Add your professional photo before deploying!
