# Repton Dubai History & Politics Hub

A static first-version website for Repton Dubai History and Politics students and parents.

## Local Preview

Run:

```bash
npm start
```

Then open `http://localhost:4173`.

The local server includes route fallback, so pages such as `/ks3-history` and `/ask-abe` work directly. The `_redirects` file provides the equivalent fallback for Cloudflare Pages.

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

## Deployment

This repository is configured for Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Pages Functions directory: `functions`

The `wrangler.toml` file records the Pages output directory. The `_redirects` file is copied into `dist/` during the build so direct links such as `/parents`, `/ib-history` and `/ask-abe` route back through `index.html`.

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

The IGCSE History Guide and IGCSE History Textbook PDFs are referenced on the IGCSE page as restricted school resources. They are not copied into `public/resources/` because the site is public-facing and textbook/guide PDFs should only be distributed through approved school access unless licensing has been confirmed.

The A Level Politics page includes a BBC Politics headline ticker. Local preview serves the feed through `/api/bbc-politics` in `server.mjs`; Cloudflare Pages serves the same path through `functions/api/bbc-politics.js`.

## Data And Secrets

Do not commit API keys, passwords, `.env` files, student data or private student work. The `.gitignore` excludes local scratch folders, build output, environment files and dependency folders. Run `npm run audit:secrets` before publishing content updates.

## Content Still To Confirm

- Separate A Level Politics assessment dates can be added to the homepage calendar when supplied by the department.
- Ask Abe is a local FAQ prototype only. A future retrieval-based assistant should be connected only to approved department materials.
