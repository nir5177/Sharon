# Sharon — Shoreshim Website

**Master guidelines:** https://github.com/nir5177/architect
This file extends the master guidelines with rules specific to this repo.

## What this is
Static Hebrew website for the Shoreshim non-profit (`shoreshim.org.il`).
Deployed on GitHub Pages.

## Architecture
```
Sharon/
├── index.html        ← main page (Hebrew, RTL)
├── donate.html       ← donation page
├── style.css         ← all styles
├── script.js         ← all JavaScript
├── config.js         ← runtime config (phone, email, WhatsApp)
├── config.json       ← config data (read by admin panel)
├── admin/
│   └── index.html    ← password-protected admin panel
└── .github/workflows/
    └── deploy.yml    ← GitHub Pages auto-deploy
```

**Target: ≤ 8 files, ≤ 150KB uncompressed.**

## Hard Rules

### No External Dependencies
- No CDN links, no Google Fonts, no npm/bundlers/frameworks
- Reason: must work through Israeli content filters (Netspark, Rimon, Netiv, Etrog)

### RTL / Hebrew First
- All HTML: `dir="rtl"` and `lang="he"`
- Prefer CSS logical properties (`margin-inline-start` over `margin-left`)

### No Build Step
- Source IS output. No dist/, build/, node_modules/

### Security
- Admin panel: SHA-256 password hash only, never plaintext
- No secrets, API keys, or credentials in repo
- No third-party tracking on forms

## Decision Framework
Before any change:
1. Does it add an external dependency? → Stop. Find a local solution.
2. Does it break RTL? → Test first.
3. Does it exceed 8 files or 150KB? → Justify or refactor.
4. Is it content (phone/email)? → Goes in config.json, not hardcoded.
5. Does it touch admin? → Verify SHA-256 hash intact.

## Coding Standards
- **HTML:** Semantic, Hebrew alt text, no inline `style=""`
- **CSS:** Single file, BEM naming, mobile-first
- **JS:** Single file, vanilla, no console.log, no inline onclick

## Never Do
- Add node_modules/, dist/, or build/
- Add external `<script src="https://...">` or `<link href="https://...">`
- Remove or weaken the admin password hash
- Create new HTML files without explicit approval
- Use document.write() or eval()
