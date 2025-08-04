# 🚀 GitHub Pages Deployment Guide
**Get your MMC Games Hub live in minutes!**

## 📋 Quick Setup Checklist

### 1. Create New Repository
1. Go to [GitHub.com](https://github.com) 
2. Click **"New repository"**
3. Name it: `mmc-games-hub`
4. Make it **Public** (required for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

### 2. Upload Files
Copy these files from your current project to the new repository:

#### **Required Files:**
```
/
├── index.html                 (NEW - simplified games hub)
├── phet-fractions.html       (Copy from current project)
├── phet-numberline.html      (Copy & rename from phet-numberline-game.html)
├── phet-arithmetic.html      (Copy & rename from phet-arithmetic-game.html)
├── phet-area.html           (Copy & rename from phet-area-game.html)
├── phet-fraction-matcher.html (Copy & rename)
├── phet-make-ten.html       (Copy & rename from phet-make-ten-game.html)
├── phet-equality.html       (Copy & rename from phet-equality-game.html)
└── assets/
    ├── css/
    │   ├── main.css          (Copy from current project)
    │   ├── games.css         (Copy from current project)
    │   ├── noscript.css      (Copy from current project)
    │   └── fontawesome-all.min.css (Copy from current project)
    ├── js/
    │   ├── main.js           (Copy from current project)
    │   ├── games.js          (Copy from current project)
    │   ├── jquery.min.js     (Copy from current project)
    │   ├── browser.min.js    (Copy from current project)
    │   ├── breakpoints.min.js (Copy from current project)
    │   ├── jquery.scrollex.min.js (Copy from current project)
    │   ├── jquery.scrolly.min.js (Copy from current project)
    │   └── util.js           (Copy from current project)
    └── webfonts/            (Copy entire folder from current project)
└── images/
    ├── mmc-logo.png         (Copy from current project)
    ├── Polypad.png          (Copy from current project)
    ├── ABCYA.png            (Copy from current project)
    ├── ToyTheater.png       (Copy from current project)
    └── pic01.jpg - pic06.jpg (Copy from current project)
```

### 3. File Modifications Needed

#### **Update Game Page Names:**
You'll need to rename these files when copying:
- `phet-fractions-game.html` → `phet-fractions.html`
- `phet-numberline-game.html` → `phet-numberline.html`
- `phet-arithmetic-game.html` → `phet-arithmetic.html`
- `phet-area-game.html` → `phet-area.html`
- `phet-fraction-matcher-game.html` → `phet-fraction-matcher.html`
- `phet-make-ten-game.html` → `phet-make-ten.html`
- `phet-equality-game.html` → `phet-equality.html`

#### **Update Links in Game Pages:**
In each PhET game page, change:
```html
<!-- FROM: -->
<a href="games.html" class="button">← Back to Games</a>

<!-- TO: -->
<a href="index.html#games" class="button">← Back to Games</a>
```

### 4. Enable GitHub Pages
1. In your repository, go to **Settings**
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Choose **"/ (root)"** folder
6. Click **Save**

### 5. Your Site Will Be Live At:
```
https://YOUR-USERNAME.github.io/mmc-games-hub
```

## 🎯 Upload Methods

### Method A: Web Interface (Easiest)
1. Click **"uploading an existing file"** in your new repository
2. Drag and drop all files/folders
3. Write commit message: "Initial MMC Games Hub deployment"
4. Click **"Commit changes"**

### Method B: GitHub Desktop
1. Clone your repository locally
2. Copy files into the folder
3. Commit and push changes

### Method C: Command Line
```bash
git clone https://github.com/YOUR-USERNAME/mmc-games-hub.git
cd mmc-games-hub
# Copy your files here
git add .
git commit -m "Initial MMC Games Hub deployment"
git push origin main
```

## ⚙️ Customization After Deployment

### Update Contact Information
In `index.html`, update the contact section:
```html
<li>
    <h3>Email</h3>
    <a href="mailto:YOUR-EMAIL@example.com">YOUR-EMAIL@example.com</a>
</li>
```

### Add Analytics (Optional)
Add Google Analytics or other tracking code before the closing `</body>` tag in `index.html`.

### Custom Domain (Optional)
If you have a custom domain:
1. In repository **Settings** → **Pages**
2. Add your domain in **Custom domain**
3. Create a `CNAME` file in your repository root with your domain

## 🔧 Maintenance

### Adding New Games
1. Create new HTML file (follow existing pattern)
2. Add game card to `index.html` games grid
3. Update navigation links
4. Commit and push changes

### Updating Existing Games
1. Edit the appropriate HTML file
2. Commit and push changes
3. Changes appear live in ~5 minutes

## 🚨 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify repository is public

### Games Not Working?
- Check browser console for errors
- Verify PhET URLs are correct
- Ensure all asset files are uploaded

### Styling Issues?
- Verify CSS files are in correct paths
- Check for missing font files
- Ensure images are uploaded

## 📊 Performance Tips

### Image Optimization
- Compress images before uploading
- Use appropriate file formats (PNG for logos, JPG for photos)
- Consider WebP format for better compression

### Loading Speed
- PhET simulations load from their CDN (fast)
- External site links are instant
- Static assets served by GitHub's CDN

## 🎉 Go Live Checklist

- [ ] Repository created and public
- [ ] All files uploaded correctly
- [ ] GitHub Pages enabled
- [ ] Site loads at github.io URL
- [ ] All games work properly
- [ ] External links function
- [ ] Mobile responsive
- [ ] Contact info updated

## 📞 Need Help?

If you run into issues:
1. Check GitHub's [Pages documentation](https://docs.github.com/en/pages)
2. Verify file paths match exactly
3. Test locally first if possible
4. Check browser developer console for errors

**Estimated setup time: 15-30 minutes**
**Time to go live: 5-10 minutes after upload**

---

Once live, share this URL with MMC educators:
**`https://YOUR-USERNAME.github.io/mmc-games-hub`**
