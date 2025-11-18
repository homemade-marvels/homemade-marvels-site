# Test All Sites

## Run Each Site

```powershell
# Terminal 1 - Generic
npm run dev:generic
# Open: http://localhost:3000
# Should see: Purple/Gold theme, "Homemade Marvels"

# Terminal 2 - Christmas  
npm run dev:christmas
# Open: http://localhost:3001
# Should see: Red/Green theme, "Noël Gourmand"

# Terminal 3 - Buche de Noel
npm run dev:buche
# Open: http://localhost:3002
# Should see: Brown/Crimson theme, "Bûches Artisanales"
```

## Build All Sites

```powershell
npm run build:all
```

Should create `out/` folders in each site with no errors.

## Verify

✅ Each site has different colors  
✅ Each site has unique name/branding  
✅ All 8 sample cakes show in gallery  
✅ Clicking cake opens lightbox  
✅ "Commander" buttons work  
✅ Responsive on mobile (test with F12 → device toolbar)

## Proof of Concept Complete ✅

3 sites, same code, different themes = Multi-site approach works!
