# Quick Start

## Run All Sites

```powershell
npm run dev:all
```

Opens:
- Generic: http://localhost:3000
- Christmas: http://localhost:3001
- Buche de Noel: http://localhost:3002

## Run One Site

```powershell
npm run dev:generic    # Port 3000
npm run dev:christmas  # Port 3001
npm run dev:buche      # Port 3002
```

---

## Customize

### Change Colors

Edit `sites/SITENAME/config/site.ts`:

```typescript
theme: {
  primaryColor: '#4B0082',     // Headings
  accentColor: '#FFD700',      // Buttons
  backgroundColor: '#F5F3F0',  // Sections
}
```

### Update Cakes

Edit `sites/SITENAME/data/cakes.json`:

```json
{
  "id": 1,
  "name": "Gâteau au Chocolat",
  "description": "Rich chocolate cake...",
  "image": "/images/chocolate-cake.jpg",
  "shopifyUrl": "https://shop.com/chocolate"
}
```

### Add Images

1. Place images in `sites/SITENAME/public/images/`
2. Reference in `cakes.json` as `/images/filename.jpg`
3. Browser auto-refreshes

---

## Live Sites

- Generic: https://homemade-marvels-generic.vercel.app
- Christmas: https://homemade-marvels-christmas.vercel.app
- Buche: https://homemade-marvels-buche-noel.vercel.app

**Auto-deploy:** Push to GitHub → Vercel rebuilds

See [DEPLOY.md](DEPLOY.md) for custom domains.
npm run build:all
```

Creates `out/` folder in each site with static HTML files.
