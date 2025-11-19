# Homemade Marvels - Multi-Site Cake Business

## Quick Start

```powershell
npm run dev:all         # Run all 3 sites
npm run dev:generic     # localhost:3000
npm run dev:christmas   # localhost:3001
npm run dev:buche       # localhost:3002
```

---

## 3 Sites, 1 Codebase

| Site | Theme | URL |
|------|-------|-----|
| Generic | Purple/Gold | homemade-marvels-generic.vercel.app |
| Christmas | Red/Green | homemade-marvels-christmas.vercel.app |
| Buche de Noel | Brown/Crimson | homemade-marvels-buche-noel.vercel.app |

**Shared:** Header, Footer, Gallery, Lightbox, HeroCarousel  
**Unique:** Colors, content, branding per site

---

## Architecture

```
homemade-marvels/
├─ shared/
│  ├─ components/    # Reusable UI (Header, Gallery, HeroCarousel)
│  └─ types/         # TypeScript interfaces
├─ sites/
│  ├─ generic/       # Purple/gold site
│  ├─ christmas/     # Red/green site
│  └─ buche-noel/    # Brown/crimson site
│     ├─ config/site.ts      # Colors, branding, SEO
│     ├─ data/cakes.json     # Product catalog
│     └─ public/images/      # Photos
└─ package.json      # Run scripts
```

---

## Customize

**Change colors:** Edit `sites/SITE/config/site.ts`  
**Update cakes:** Edit `sites/SITE/data/cakes.json`  
**Add images:** Place in `sites/SITE/public/images/`

---

## Deploy

**Already deployed:**
- Generic: https://homemade-marvels-generic.vercel.app
- Christmas: https://homemade-marvels-christmas.vercel.app
- Buche: https://homemade-marvels-buche-noel.vercel.app

**Auto-deploy:** Push to GitHub → Vercel rebuilds automatically

See [DEPLOY.md](DEPLOY.md) for custom domains.

---

## Tech

Next.js 16 • React 19 • TypeScript • Tailwind CSS 3 • Vercel

---

**Docs:** [START.md](START.md) • [DEPLOY.md](DEPLOY.md) • [IMAGES.md](IMAGES.md)
 **SEO optimized** - Each site has its own domain & metadata  
 **Shopify ready** - Links to Shopify for payments
