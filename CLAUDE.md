# CLAUDE.md

Portfolio website for **Fanny Livijn** (Creative, Content Strategist & Art Director). The layout is modeled on https://www.andreamena.com/; project pages follow https://bygeorge-studio.com/. Live at **https://fannylivijn.github.io/fannylivijn.com/** (GitHub repo `fannylivijn/fannylivijn.com`).

## Commands

All commands run from the `app/` directory:

```bash
cd app
npm run dev      # Start dev server (Vite, hot reload)
npm run build    # Production build
npm run preview  # Preview production build locally
```

There are no tests and no linter configured. `.claude/launch.json` has a `portfolio` preview config (port 5174).

## Architecture

React + Vite SPA, minimal serif (Times) editorial layout on white.

- **All content** (text, images, videos, links) lives in `app/src/data/content.js`. Images go in `app/public/images/`, videos in `app/public/videos/`. The comments in that file document every option.
- **Routing** (`App.jsx`, `HashRouter`): `/` Home, `/projects` Selected projects, `/projects/:slug` a single project, `/services` Creative services, `/reel` BTS reel.
- **Nav** (`components/Nav.jsx`) is a vertical left column on Home and a centered row on inner pages. On Home it needs `z-index` to stay clickable above `main`.
- **Home** (`pages/Home.jsx`): tagline, bio, then an inline brand list. A client can have an `image`, or a `video` (silent autoplay loop, like a GIF), plus an optional `link`. Thumbnails are a fixed 42px high with natural width, so photos are never cropped.
- **Selected projects** (`pages/Projects.jsx`): a 3-column grid of tiles with an auto-numbered "(N)" above each caption. Image tiles and captions link to the project page; video tiles play in place (`components/ProjectVideo.jsx`, Play/Pause label).
- **Project page** (`pages/ProjectPage.jsx`, data from `data/projectInfo.js`): sticky header (bold title left, "Services:" / italic "With:" right), a two-column collage (`gallery` items with `size: "large" | "small"`, monospace captions), and a prev / all / next pager. Title and services are derived from the caption ("Title — services") unless the project sets `title` / `services` / `with` / `gallery`.
- **Creative services** (`pages/Services.jsx`): 15 big numbers that swap to the service name on hover/focus.
- **BTS reel** (`pages/Reel.jsx`): a vertical 9:16 (Instagram reel) frame, 10px rounded corners, muted autoplay loop with controls.
- **Styling**: single `styles.css` with CSS custom properties; breakpoints at 900px and 560px.

## Working with Fanny

- Fanny is not a developer. Explain in plain language and give click-by-click steps.
- Fanny publishes from **GitHub Desktop** (Commit to main → Push origin). The command line on this Mac has no GitHub credentials, so `git push` from the terminal fails; commit locally and ask Fanny to push.
- When she says "change place of X and Y", swap the **names** and leave thumbnails in their layout positions (that's what she confirmed she wants).
- Captions use the pattern `Brand — Description` (space, em dash, space), sentence case, no trailing period.
- New photos: convert to JPEG and shrink with `sips` (about 240–360px wide for thumbnails). New video clips: trim and compress with the built-in `avconvert` (`-p PresetLowQuality --start S --duration 5` for thumbnails). There is no ffmpeg.

## Current status (as of 2026-10-01)

Done: name, tagline, brand list (27 entries), most brand thumbnails, project captions 1–6, numbered project tiles, project pages, BTS reel, menu names.

Still placeholder, to fill in when Fanny sends content:
- **Bio** under the tagline (`profile.bio`) is still sample text.
- **Contact links** (`contact` in `content.js`) still point to `yourhandle`, `yourprofile` and `hello@example.com`.
- **Creative services list** is still the sample list from the reference site.
- **Brand thumbnails** still grey placeholders: Prune Imports, TIER, The North Face x One Show Club.
- **Project tiles** 1, 2, 3, 4 and 6 still use grey `project-N.svg` images; projects 7–9 are entirely placeholders ("Client Six/Seven/Eight").
- **Project pages**: only Zara Larsson has a `gallery` (with placeholder images); the Robyn page needs a proper `title` / `services`, since its caption splits into title "Robyn".
- Unused files kept on purpose: `images/elle-magazine.jpg`, `images/robyn-sexistential.jpg` (earlier photos Fanny may reuse).

## Domain: fannylivijn.com

- Bought through **Cargo** (registrar eNom, nameservers `ns1/ns2.cargo.site`); it currently shows a password-protected Cargo page.
- **Expires 2026-11-12.** Remind Fanny before then. She plans to connect it later and is considering moving it to a cheaper registrar (Cloudflare or Porkbun). A transfer takes up to a week, so start by late October.
- To connect it: at the DNS host add A records `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and CNAME `www` → `fannylivijn.github.io`; then in the repo's Settings → Pages set the custom domain to `fannylivijn.com` and tick Enforce HTTPS.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `app/` and publishes `app/dist` to GitHub Pages (Pages source is set to "GitHub Actions"). `HashRouter` + `base: ""` make it work on the Pages subpath without 404s.
