# Kismet Code Digital — Website

React + Vite, multi-page (React Router), no other framework dependencies
beyond `react-router-dom`.

## Run locally

```
npm install
npm run dev
```

## Build for production

```
npm run build
```

Outputs static files to `dist/` — deployable to GitHub Pages, Netlify,
Vercel, or any static host.

## Push to your own GitHub repo

```
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Structure

- `src/pages/` — Home, Work, Services, About, Contact
- `src/components/` — Nav, Footer, CompassMark (signature glyph)
- `src/tokens.css` — all colors, type, and spacing in one place
- `src/assets/logo.png` — your logo, resized for web (799x442, ~113KB)

## Next steps before going live

- Contact form currently just shows a success message on submit -
  wire it to Formspree, EmailJS (same pattern used on ConnectUs), or
  a serverless function so messages actually arrive somewhere.
- Point kismetcodedigital.com's DNS at wherever you deploy (Namecheap
  to your host's nameservers or A record).
- Swap hello@kismetcodedigital.com for your real inbox if different.
