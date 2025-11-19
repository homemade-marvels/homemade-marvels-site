# Deploy to Vercel

## Already Deployed ✓

- **Generic:** https://homemade-marvels-generic.vercel.app
- **Christmas:** https://homemade-marvels-christmas.vercel.app
- **Buche:** https://homemade-marvels-buche-noel.vercel.app

**Auto-deploy:** Push to GitHub → Vercel rebuilds automatically

---

## Update Sites

```powershell
git add .
git commit -m "Update content"
git push
```

Vercel detects changes and redeploys in ~2 minutes.

---

## Add Custom Domains

### For each site:

1. Go to Vercel project → **Settings** → **Domains**
2. Add your domain (e.g., `homemade-marvels.com`)
3. Copy the DNS settings Vercel provides
4. Add DNS records at your domain registrar:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `cname.vercel-dns.com`
5. Wait 24-48 hours for DNS propagation

### Domain mapping:
- Generic → `homemade-marvels.com`
- Christmas → `noel-gourmand.com`
- Buche → `buches-artisanales.com`

---

## Deploy New Site

1. Vercel dashboard → **Add New Project**
2. Import: `homemade-marvels/homemade-marvels-site`
3. **Root Directory:** `sites/SITENAME` (e.g., `sites/generic`)
4. Framework: Next.js (auto-detected)
5. Deploy

---

## Troubleshooting

**Changes not appearing?**
- Check deployment status in Vercel dashboard
- Hard refresh browser: `Ctrl+Shift+R`

**Build fails?**
- Check Root Directory is set correctly (`sites/SITENAME`)
- Verify `vercel.json` exists in site folder

**Images broken?**
- Use absolute paths: `/images/cake.jpg`
- Images must be in `sites/SITENAME/public/images/`
