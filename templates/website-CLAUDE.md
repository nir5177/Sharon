# [PROJECT NAME] — Website

Master guidelines: https://github.com/nir5177/architect

## Stack
- HTML / CSS / JavaScript (static — no framework)
- GitHub Pages for hosting
- GitHub Actions for deploy on push to main

## What this site does
[One paragraph — purpose, audience]

## Hard rules (additions to master)
- No external CDN, no Google Fonts, no third-party scripts
- RTL Hebrew if Hebrew content
- No build step — source IS output
- Total size: ≤ 200 KB uncompressed
- Mobile-first responsive

## File structure
```
[repo]/
├── index.html
├── style.css
├── script.js
├── config.json    ← runtime config
└── .github/workflows/  ← deploy
```

## Coding standards
- Semantic HTML, Hebrew alt text on images
- BEM-like CSS naming
- Vanilla JS, no jQuery
- No `console.log` in committed code
- No inline `style=""` or `onclick=""`
