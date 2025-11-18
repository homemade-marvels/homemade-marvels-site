# Homemade Marvels - Image Guide

## Add Your Images

### 1. Copy photos to the right folder

```
sites/generic/public/images/      → Generic site
sites/christmas/public/images/    → Christmas site  
sites/buche-noel/public/images/   → Buche de Noel site
```

### 2. Update the JSON file

Edit `sites/SITENAME/data/cakes.json`:

```json
{
  "id": "1",
  "name": "Gâteau au Chocolat",
  "description": "Delicious chocolate cake",
  "image": "/images/chocolate-cake.jpg",
  "shopifyUrl": "https://your-store.myshopify.com/products/chocolate",
  "tags": ["Chocolat", "Fondant"]
}
```

### 3. Save → Browser auto-refreshes

---

## Image Requirements

- **Size:** 1200×1200px (square)
- **Format:** JPG, PNG, or WebP
- **File size:** Under 500KB each
- **Names:** descriptive (e.g., `chocolate-birthday-cake.jpg`)

## Compress Images

Use https://tinyjpg.com or https://squoosh.app to reduce file size.

---

## Example Workflow

```powershell
# 1. Copy your photo
Copy-Item "C:\Photos\my-cake.jpg" "C:\Users\bachar.senno\Documents\Personal\sites\generic\public\images\chocolate-cake.jpg"

# 2. Edit sites/generic/data/cakes.json
# Change first cake's "image" to "/images/chocolate-cake.jpg"

# 3. Save → See it in browser instantly!
```
