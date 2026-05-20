# Architect Guidelines — Shoreshim Website

You are working on **Shoreshim** (`shoreshim.org.il`), a Hebrew non-profit static website.
Read this file completely before touching any code. These rules are non-negotiable.

---

## Project Architecture

```
Sharon/
├── index.html        ← main page (Hebrew, RTL)
├── donate.html       ← donation page
├── style.css         ← all styles
├── script.js         ← all JavaScript logic
├── config.js         ← runtime config (phone, email, WhatsApp)
├── config.json       ← config data (read by admin panel)
├── admin/
│   └── index.html    ← password-protected admin panel
└── .github/
    └── workflows/
        └── deploy.yml ← GitHub Pages auto-deploy
```

**Total target: ≤ 8 files, ≤ 150KB uncompressed.**

---

## Hard Rules (never violate these)

### No External Dependencies
- **No CDNs.** No `<script src="https://...">`, no `<link href="https://fonts.googleapis.com/...">`.
- **No npm, no bundlers, no frameworks** (React, Vue, Tailwind, etc.).
- **No Google Fonts** — use system fonts or self-hosted only.
- All CSS, JS, and fonts must be inline or local files.
- Reason: this site must work through Israeli content filters (Netspark, Rimon, Netiv, Etrog).

### RTL / Hebrew First
- All HTML must include `dir="rtl"` and `lang="he"`.
- CSS logical properties preferred (`margin-inline-start` over `margin-left`).
- Never assume LTR layout. Test every UI change mentally in RTL.

### No Build Step
- The output IS the source. What's in the repo is what gets served.
- Never introduce a `package.json`, `webpack.config.js`, `vite.config.js`, or any build artifact.

### Security
- The admin panel uses SHA-256 password hashing stored in `admin/index.html`. Never store plaintext passwords.
- Never commit real tokens, API keys, or credentials to the repo.
- `config.json` and `config.js` hold contact info only — not secrets.
- Form submissions must never leak user data to third-party trackers.

---

## Decision Framework

Before making any change, ask in this order:

1. **Does it add an external dependency?** → If yes, stop and find a pure JS/CSS solution.
2. **Does it break RTL layout?** → Test before proposing.
3. **Does it increase file count beyond 8 or total size beyond 150KB?** → Justify or refactor.
4. **Is this a content change or a code change?** → Content changes belong in `config.json`/`config.js`, not hardcoded in HTML.
5. **Does it touch the admin panel?** → Double-check the SHA-256 password hash is untouched unless explicitly asked.

---

## Coding Standards

### HTML
- Semantic elements (`<section>`, `<nav>`, `<article>`, `<footer>`).
- Every image needs `alt` text in Hebrew.
- No inline `style=""` attributes — use CSS classes.

### CSS
- Single file: `style.css`. No `<style>` blocks in HTML except critical above-the-fold CSS.
- BEM-like naming: `.section-name__element--modifier`.
- Mobile-first media queries.

### JavaScript
- Single file: `script.js`. No `<script>` blocks in HTML except tiny init calls.
- Vanilla JS only. No jQuery, no Lodash.
- No `console.log` in production code.
- Event listeners attached via `addEventListener`, never inline `onclick=""`.

### Config Pattern
- Runtime values (phone, WhatsApp, email, stats) live in `config.json`.
- `config.js` reads `config.json` and exposes a `CONFIG` global for `script.js`.
- Never hardcode contact info in HTML or JS.

---

## Deployment

- Push to `main` → GitHub Actions deploys to GitHub Pages automatically.
- URL: `https://nir5177.github.io/Sharon/`
- Admin panel at `/admin/` — password-protected, credentials never in git.

---

## What to Always Do

- Check `config.json` before hardcoding any contact info.
- Verify RTL rendering mentally for every layout change.
- Keep changes minimal — one concern per commit.
- When asked to add a feature, first check if it can be done in CSS alone.

## What to Never Do

- Never add a `node_modules/`, `dist/`, or `build/` directory.
- Never add `<script src="https://...">` or `<link href="https://...">` pointing outside the repo.
- Never remove or weaken the admin password hash.
- Never create new HTML files beyond the existing two (`index.html`, `donate.html`) without explicit approval.
- Never use `document.write()` or `eval()`.
