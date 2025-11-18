# Deploy to Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com with GitHub)
- Your sites pushed to GitHub

## Deploy Each Site

### 1. Push to GitHub
```powershell
cd "C:\Users\bachar.senno\Documents\Personal"
git init
git add .
git commit -m "Initial commit - 3 sites"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/homemade-marvels.git
git push -u origin main
```

### 2. Deploy Generic Site
1. Go to https://vercel.com/new
2. Import your GitHub repo
3. **Root Directory**: `sites/generic`
4. **Framework Preset**: Next.js
5. Click **Deploy**
6. Done! Site live at: `your-project.vercel.app`

### 3. Deploy Christmas Site
1. Click **Add New Project**
2. Import same repo
3. **Root Directory**: `sites/christmas`
4. **Framework Preset**: Next.js
5. Click **Deploy**

### 4. Deploy Buche de Noel Site
1. Click **Add New Project**
2. Import same repo
3. **Root Directory**: `sites/buche-noel`
4. **Framework Preset**: Next.js
5. Click **Deploy**

## Connect Custom Domains

### In Vercel Dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `homemade-marvels.com`)
3. Follow DNS instructions from your domain registrar
4. Wait 24-48 hours for DNS propagation

### Repeat for each site:
- Generic → `homemade-marvels.com`
- Christmas → `noel-gourmand.com`
- Buche → `buches-artisanales.com`

## Update After Changes

```powershell
git add .
git commit -m "Update site"
git push
```

Vercel auto-deploys on push. That's it!

---

## Alternative: Manual Deploy (No GitHub)

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy each site
cd sites/generic
vercel --prod

cd ../christmas
vercel --prod

cd ../buche-noel
vercel --prod
```

---

## Troubleshooting

**Build fails?**
- Check `next.config.ts` has `output: 'export'`
- Verify all dependencies installed: `npm install`

**Images not loading?**
- Images must be in `public/` folder
- Use paths like `/images/cake.jpg` (not `./images`)

**Wrong site showing?**
- Check Root Directory in Vercel settings
- Must be `sites/SITENAME` not just root
