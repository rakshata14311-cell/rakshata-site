# Rakshita Mulimani — writing site

## What's built so far

- Homepage: hero, Featured Writing (4 pieces), archive preview, a quiet Work
  link, About preview
- `/writing` — full archive (12 essays), no filters/search yet — that's next
- `/writing/[slug]` — full reading pages for all 12 essays, with real text
- `/work` — links out to all 7 HomeTriangle pieces
- `/about` and `/contact` — clearly-labeled placeholders. These need your
  real bio and your real email/LinkedIn before they're real pages — nothing
  has been invented.

## Preview it locally

You'll need [Node.js](https://nodejs.org) installed (v18 or newer).

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:4321`) in your
browser. Every page is live and clickable.

## Deploy it for free

Once you're happy with it:

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com),
   sign in with GitHub, and pick this repo
3. Build command: `npm run build` — Output folder: `dist`
4. Deploy. You'll get a free `.netlify.app` or `.vercel.app` URL immediately

Connecting `rakshitamulimani.com` later is a DNS settings change in that same
dashboard — no rebuild needed.

## Adding a new essay

Drop a new Markdown file into `src/content/writing/`, following the same
frontmatter shape as the existing files (title, description, date, category,
platform, readingTime, originalUrl, coverImage, featured). It'll
automatically show up in the archive, the homepage (if `featured: true`),
and get its own reading page. No other files need to change.
