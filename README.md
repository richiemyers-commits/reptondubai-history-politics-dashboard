# Repton Dubai History & Politics Hub

A static first-version website for Repton Dubai History and Politics students and parents.

## Local Preview

Run:

```bash
npm start
```

Then open `http://localhost:4173`.

The local server includes route fallback, so pages such as `/ks3-history` and `/ask-abe` work directly.

For the Cloudflare Pages-style local preview, use the `pages:dev` command in the deployment section below.

## Production Build

Run:

```bash
npm run build
```

The build command:

- scans text project files for likely secrets before packaging;
- creates a clean `dist/` folder;
- copies only the public static site files needed for deployment.

Preview the production build locally with:

```bash
npm run preview
```

## Cloudflare Pages Deployment

This project is a plain JavaScript single-page app. It does not use React, Vite, Next or Astro. The production build copies the required static files into `dist/`, and Cloudflare Pages serves that folder.

### Local Commands

Install dependencies:

```bash
npm install
```

Build the Pages output:

```bash
npm run pages:build
```

Run Cloudflare Pages locally:

```bash
npm run pages:dev
```

Deploy through Wrangler Pages:

```bash
npm run pages:deploy
```

### Build Output

- Build command: `npm run build`
- Build output directory: `dist`
- Cloudflare config: `wrangler.jsonc`
- Pages project name: `reptondubai-history-politics-dashboard`
- Pages Function route: `/api/bbc-politics`

The `wrangler.jsonc` file uses `pages_build_output_dir: "./dist"`, which is the Pages-specific config shape. The old Worker static assets config is not used.

### Cloudflare Pages Dashboard Settings

Use Cloudflare Pages, not manual static upload and not Workers Static Assets.

- Framework preset: `None`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank
- Environment variables: none required

### Deploy From GitHub

1. In Cloudflare, create or open the Pages project.
2. Connect the GitHub repository: `richiemyers-commits/reptondubai-history-politics-dashboard`.
3. Use the dashboard settings above.
4. Save and deploy.

Every future push to `main` will trigger a new Cloudflare Pages deployment.

### Routing And Assets

The build script creates route folders in `dist/` for known app pages such as `/parents`, `/ib-history`, `/a-level-politics` and `/ask-abe`. Each folder contains a copy of `index.html`, so direct links and page refreshes work on Cloudflare Pages without relying on a broad `_redirects` rewrite rule.

The `_headers` file is copied into `dist/` and adds basic security headers plus sensible caching for local image assets and downloadable resources.

Static assets and resources live in:

- `public/assets/`
- `public/resources/`

These folders are copied into `dist/public/` during the build. Asset paths in the app use absolute `/public/...` URLs so they work from every route.

### Known Limitations

- The BBC Politics ticker uses a Cloudflare Pages Function at `/api/bbc-politics`. If BBC's RSS feed is unavailable, the page falls back to its built-in links.
- There are no required environment variables or secrets.
- Large copyrighted textbook PDFs should not be added to `public/resources/` unless licensing has been confirmed.
- Manual Cloudflare static upload is not the intended workflow for this app.

## Editing Content

Most visible curriculum content is in `src/data/curriculum.js`.

- Update navigation and destination cards in `navigation` and `destinations`.
- Update the homepage weekly department pick and assessment calendar in `home`.
- Update course page content in `courses`.
- Update the A Level History reading list in `aLevelHistoryReadingList`.
- Update the university Politics/PPE/Law reading list in `universityPoliticsReadingList`.
- Update Year 7, Year 8 and Year 9 KS3 History pages in `ks3YearPages`.
- Update Year 9 into Year 10 IGCSE preparation in `gcsePreparation`.
- Update university and careers guidance in `universityCareers`.
- Update skill filters and revision support in `skills`.
- Update enrichment cards in `enrichment`.
- Update parent guidance in `parentGuide`.
- Update Ask Abe's local answers in `askAbeFaq`.

The page layouts live in `src/components/ui.js` and `src/pages/routes.js`.

## Adding Resources

Add local assets to `public/assets/` and list external image or media sources in `ATTRIBUTIONS.md`. Do not hotlink images.

Curriculum booklets and pre-reading files live in `public/resources/`:

- `year-7-curriculum-booklet.docx`
- `year-8-curriculum-booklet.docx`
- `year-9-curriculum-booklet.docx`
- `year-9-into-10-igcse-pre-reading-26-27.pptx`
- `cie-history-2027-28-syllabus.pdf`
- `a-level-history-spec.pdf`
- `a-level-history-coursework-guidance.pptx`
- `a-level-politics-spec.pdf`
- `ib-history-guide-2026-2028.pdf`

The IGCSE History Guide and IGCSE History Textbook PDFs are referenced on the IGCSE page as restricted school resources. They are not copied into `public/resources/` because the site is public-facing and textbook/guide PDFs should only be distributed through approved school access unless licensing has been confirmed.

The A Level Politics page includes a BBC Politics headline ticker. Local preview serves the feed through `/api/bbc-politics` in `server.mjs`; Cloudflare Pages serves the same path through `functions/api/bbc-politics.js`.

## Data And Secrets

Do not commit API keys, passwords, `.env` files, student data or private student work. The `.gitignore` excludes local scratch folders, build output, environment files and dependency folders. Run `npm run audit:secrets` before publishing content updates.

## Content Still To Confirm

- Separate A Level Politics assessment dates can be added to the homepage calendar when supplied by the department.
- Ask Abe is a local FAQ prototype only. A future retrieval-based assistant should be connected only to approved department materials.
