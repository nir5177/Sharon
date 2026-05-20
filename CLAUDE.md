# Sharon — Architect Hub + Website

This repo serves two roles:
1. **The Shoreshim non-profit website** (deployed on GitHub Pages)
2. **The architect control center** for all nir5177 projects

Master guidelines: `.claude/architect/MASTER_GUIDELINES.md`
All projects: `.claude/architect/PROJECT_REGISTRY.md`
Agent protocol: `.claude/architect/AGENT_PROTOCOL.md`

---

# Website Rules (Shoreshim — shoreshim.org.il)

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
└── .github/
    └── workflows/    ← GitHub Pages deploy
```

**Target: ≤ 8 files, ≤ 150KB uncompressed.**

## Hard Rules

### No External Dependencies
- No CDN links (`<script src="https://...">`), no Google Fonts
- No npm, no bundlers, no frameworks
- Everything inline or local — works through Israeli content filters

### RTL / Hebrew First
- All HTML: `dir="rtl"` and `lang="he"`
- Prefer CSS logical properties over directional ones

### No Build Step
- The source IS the output. No dist/, build/, node_modules/

### Security
- Admin panel: SHA-256 password hash only, never plaintext
- No secrets in repo
- Forms: no third-party data leakage

## Decision Framework

Before any change:
1. Does it add an external dependency? → Stop. Find a local solution.
2. Does it break RTL? → Test first.
3. Does it exceed 8 files or 150KB? → Justify or refactor.
4. Is it content? → Goes in config.json/config.js, not hardcoded HTML.
5. Does it touch admin? → Verify SHA-256 hash is intact.

## Coding Standards

### HTML
- Semantic elements, Hebrew alt text on all images, no inline styles

### CSS
- Single file: style.css. BEM-like naming. Mobile-first.

### JavaScript
- Single file: script.js. Vanilla JS only. No console.log. No inline onclick.

### Config Pattern
- Phone/WhatsApp/email → config.json → config.js → script.js
- Never hardcode contact info in HTML

## Never Do
- Add node_modules/, dist/, or build/
- Add external script or link tags
- Remove or weaken admin password hash
- Create new HTML files without explicit approval
- Use document.write() or eval()
