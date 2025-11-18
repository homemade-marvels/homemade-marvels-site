# Quick Start

# Quick Start

## Run All Sites at Once

```powershell
cd "C:\Users\bachar.senno\Documents\Personal"
npm run dev:all
```

Opens all 3 sites:
- Generic: http://localhost:3000
- Christmas: http://localhost:3001  
- Buche de Noel: http://localhost:3002

## Run Individual Sites

```powershell
# Generic site (purple/gold)
npm run dev:generic
# Opens at http://localhost:3000

# Christmas site (red/green)
npm run dev:christmas  
# Opens at http://localhost:3001

# Buche de Noel site (brown/crimson)
npm run dev:buche
# Opens at http://localhost:3002
```

## Add Your Images

1. Put images in: `sites/SITENAME/public/images/`
2. Edit: `sites/SITENAME/data/cakes.json`
3. Change `"image": "/images/your-photo.jpg"`
4. Save - browser auto-refreshes

## Change Colors

Edit: `sites/SITENAME/config/site.ts`

```typescript
theme: {
  primaryColor: '#4B0082',  // Main headings
  accentColor: '#FFD700',   // Buttons
  backgroundColor: '#FFFAF0' // Sections
}
```

## Deploy

See [DEPLOY.md](DEPLOY.md)

---

## Sites Overview

| Site | Colors | Domain | Port |
|------|--------|--------|------|
| Generic | Purple/Gold/White | homemade-marvels.com | 3000 |
| Christmas | Red/Green/Gold | noel-gourmand.com | 3001 |
| Buche de Noel | Brown/Crimson | buches-artisanales.com | 3002 |

## Project Structure

```
sites/
├── generic/          # Purple/gold theme
├── christmas/        # Christmas red/green  
└── buche-noel/      # Brown/crimson
    ├── config/site.ts    # Colors, contact, SEO
    ├── data/cakes.json   # Cake data
    └── public/images/    # Your photos
```

## Build for Production

```powershell
npm run build:all
```

Creates `out/` folder in each site with static HTML files.
