# Ogden Contracting Ltd — website

A one-page website for **Ogden Contracting Ltd** (Ogden Built), a family-owned
general contractor in Langley, BC. It is built with [Astro](https://astro.build),
which turns the files in `src/` into a plain, fast HTML page.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads when you save a file.

To make the final version that goes online: `npm run build` (output goes to `dist/`).

## Where to change things

| What you want to change | File |
| --- | --- |
| Text, phone number, address, services, gallery photos, social links | `src/data/site.js` |
| Colours, fonts, sizes, spacing | `src/styles/global.css` (colours are at the top) |
| Page layout / sections | `src/pages/index.astro` |

Most edits only need `src/data/site.js`.

## Put it online (Vercel)

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects **Astro** automatically. Keep the default settings and click **Deploy**.
4. Every time you push to the `main` branch, Vercel updates the live site.

## Hook up the contact form

The form currently only shows a thank-you message; it does not send anything yet.

1. Create a free form at https://formspree.io and copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `src/data/site.js`.
3. Commit and push. Submissions now arrive in your email.

## Open items before launch

- **Photos and logo are hot-linked** from `ogdenbuilt.ca/wp-content/uploads/...`.
  Download them into `public/images/` and change the links in `src/data/site.js`
  to `/images/your-file.jpg`, so the site doesn't depend on the old website.
- **Contact form** needs a Formspree URL (see above).
- Check the domain in `astro.config.mjs` (`site: 'https://ogdenbuilt.ca'`) is the final one.

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

- See the history: `git log --oneline`
- Undo one commit (makes a new commit that reverses it, safe to push):

```bash
git revert <commit-id>
```
