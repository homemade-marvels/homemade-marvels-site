# Homemade Marvels - Multi-Site Cake Business

##  Quick Start

```powershell
# Run any site
npm run dev:generic     # localhost:3000 (purple/gold)
npm run dev:christmas   # localhost:3001 (red/green) 
npm run dev:buche       # localhost:3002 (brown/crimson)
```

**Read [START.md](START.md) for full instructions.**

---

## Project Overview

**3 independent websites, 1 codebase:**

| Site | Theme | Domain |
|------|-------|--------|
| Generic | Purple/Gold/White | homemade-marvels.com |
| Christmas | Red/Green/Gold | noel-gourmand.com |
| Buche de Noel | Brown/Crimson | buches-artisanales.com |

**Shared:** Components (Header, Footer, Gallery, Lightbox)  
**Unique:** Colors, branding, content, domain

---

## Architecture

```
homemade-marvels/
 shared/              # Reusable components
    components/      # Header, Footer, Gallery, etc.
    types/          # TypeScript definitions
 sites/
    generic/        # Site 1
    christmas/      # Site 2
    buche-noel/     # Site 3
        config/site.ts    # Colors, contact, SEO
        data/cakes.json   # Cake catalog
        public/images/    # Photos
 package.json        # Root scripts
```

---

## Key Files

### Customize a Site
- **Colors/Branding:** `sites/SITE/config/site.ts`
- **Cakes:** `sites/SITE/data/cakes.json`
- **Images:** `sites/SITE/public/images/`

### Add New Site
1. Copy any `sites/` folder
2. Update `config/site.ts` (colors, name, domain)
3. Update `data/cakes.json` (products)
4. Add to root `package.json` scripts

---

## Deployment

See [DEPLOY.md](DEPLOY.md)

**TL;DR:**
1. Push to GitHub
2. Connect to Vercel (3 projects, same repo, different root dirs)
3. Add custom domains
4. Auto-deploys on git push

---

## Tech Stack

- **Next.js 16** - Static site generation
- **React 19** - Components
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Vercel** - Hosting (free)

---

## Guides

- [START.md](START.md) - Run locally, add images, change colors
- [DEPLOY.md](DEPLOY.md) - Deploy to production  
- [HOW_TO_ADD_IMAGES.md](HOW_TO_ADD_IMAGES.md) - Image guidelines

---

## Benefits

 **One codebase** - Fix bugs once, all sites benefit  
 **Scalable** - Add unlimited sites (copy folder, change config)  
 **Fast** - Static HTML, loads instantly  
 **Free hosting** - Vercel doesn't charge for static sites  
 **SEO optimized** - Each site has its own domain & metadata  
 **Shopify ready** - Links to Shopify for payments
