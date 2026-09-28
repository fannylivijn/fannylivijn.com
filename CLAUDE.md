# CLAUDE.md

## Commands

All commands run from the `app/` directory:

```bash
cd app
npm run dev      # Start dev server (Vite, hot reload)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Architecture

React + Vite SPA portfolio, modeled on a minimal serif editorial layout.

- **All content** (text, images, links) lives in `app/src/data/content.js`. Images go in `app/public/images/`.
- **Routing** (`App.jsx`, `HashRouter`): `/` Home, `/projects` Selected projects, `/services` Services.
- **Nav** is a vertical left column on Home and a centered row on inner pages.
- **Services** grid shows numbers that swap to the service name on hover/focus.
- **Styling**: single `styles.css` with CSS custom properties; breakpoints at 900px and 560px.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `app/` and publishes `app/dist` to GitHub Pages. `HashRouter` + `base: ""` make it work on the Pages subpath without 404s.
