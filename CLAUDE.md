# CLAUDE.md

Portfolio website for **Fanny Livijn** (Creative, Content Strategist & Art Director). The layout is modeled on https://www.andreamena.com/; project pages follow https://bygeorge-studio.com/. Live at **https://fannylivijn.com** (GitHub repo `fannylivijn/fannylivijn.com`; the old `fannylivijn.github.io/fannylivijn.com/` address redirects there).

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
- **Creative services** (`pages/Services.jsx`): big numbers (one per service) that swap to the service name on hover/focus.
- **BTS reel** (`pages/Reel.jsx`): a vertical 9:16 (Instagram reel) frame, 10px rounded corners, muted autoplay loop with controls.
- **Styling**: single `styles.css` with CSS custom properties; breakpoints at 900px and 560px.

## Working with Fanny

- Fanny is not a developer. Explain in plain language and give click-by-click steps.
- Fanny publishes from **GitHub Desktop** (Commit to main → Push origin). The command line on this Mac has no GitHub credentials, so `git push` from the terminal fails; commit locally and ask Fanny to push.
- When she says "change place of X and Y", swap the **names** and leave thumbnails in their layout positions (that's what she confirmed she wants).
- Captions use the pattern `Brand — Description` (space, em dash, space), sentence case, no trailing period.
- New photos: convert to JPEG and shrink with `sips` (about 240–360px wide for thumbnails). New video clips: trim and compress with the built-in `avconvert` (`-p PresetLowQuality --start S --duration 5` for thumbnails). There is no ffmpeg.

## Current status (as of 2026-10-01)

Done: name, tagline, brand list (27 entries), most brand thumbnails, project captions 1–6, numbered project tiles, project pages, BTS reel, menu names, contact links, creative services (14).

Still placeholder, to fill in when Fanny sends content:
- **Brand thumbnails** still grey placeholders: Prune Imports, TIER, The North Face x One Show Club.
- **Project tiles** 3, 6 and 8 still use grey `project-N.svg` images. Copy for projects (bio, write-ups, Vogue Scandinavia and The North Face) came from Fanny's old Webflow site, saved in her Claude doc "fannylivijn.com — Site Copy"; its images live on cdn.prod.website-files.com but the URLs weren't saved (only the Vogue one was known).
- **Project pages**: Spotify (cover + 3 YouTube Shorts from Fanny's Webflow site "fanny-pack", still live in Webflow), Way Out West and Zara Larsson have a `gallery` (YouTube embed of the music video + two film photos from Zara's Instagram post C3NiMVsNUPJ, added 2026-10-28). Gallery items can be `image`, `video` or `embed` (YouTube/Vimeo, use `size: "wide"` to span both columns, `size: "third"` for three in a row; TikTok `https://www.tiktok.com/player/v1/VIDEO_ID` embeds show vertical 9:16). Projects can set `text` (paragraphs, `**bold**`), `client` and `year`, shown under the header.
- Unused files kept on purpose: `images/elle-magazine.jpg`, `images/robyn-sexistential.jpg` (earlier photos Fanny may reuse).

## Domain: fannylivijn.com

- Connected to GitHub Pages on 2026-10-01: A records `@` → 185.199.108.153 / .109 / .110 / .111.153 and CNAME `www` → `fannylivijn.github.io`; the custom domain is set in the repo's Settings → Pages.
- Registered at **Porkbun** (moved from Cargo, expires 2027-11-12, auto-renew on). Since 2026-11-02 it uses Porkbun's nameservers and DNS (4 A records + `www` CNAME → `fannylivijn.github.io`); edit DNS at Porkbun → Domain Management → DNS. The old Cloudflare zone is unused.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `app/` and publishes `app/dist` to GitHub Pages (Pages source is set to "GitHub Actions"). `HashRouter` + `base: ""` make it work on the Pages subpath without 404s.
