# Project Registry
# All active repos under nir5177 — maintained by Architect

---

## nir5177/Sharon
**Type:** Non-profit website (static)
**Stack:** HTML + CSS + JS (no framework)
**Status:** ✅ Production — deployed on GitHub Pages
**URL:** https://nir5177.github.io/Sharon/
**Rules:** `.claude/architect/` (this file) + `CLAUDE.md`
**Key constraints:**
- No CDN, no external fonts, no frameworks
- RTL Hebrew throughout
- Max 8 files, max 150KB total
- Admin panel at /admin/ (SHA-256 password)
**Build:** GitHub Actions → GitHub Pages (auto on push to main)
**Last architect action:** Added CLAUDE.md + architect system

---

## nir5177/chabad-pushcoins
**Type:** Mobile app (Android)
**Stack:** React Native + Expo SDK 51 + TypeScript
**Status:** 🔨 In development — APK building via GitHub Actions
**Purpose:** Tzedakah pushka app for Chabad K.Borochov & Tel Ganim community
**Rules:** `CLAUDE.md` in repo root
**Key constraints:**
- Expo managed workflow (no ejection)
- EAS Build for production APKs
- INTERNET-only permission
- No analytics, no tracking
- Bit + PayBox deep links to 0508100010
- RTL Hebrew, coin drag-drop UX
**Build:** GitHub Actions → signed APK → GitHub Release
**Assets needed:** Real coin photos (½/1/2/5/10 NIS) + pushka photo
**Last architect action:** Full TypeScript implementation + CI pipeline

---

## Template for new repos

## nir5177/REPO-NAME
**Type:** [website / mobile-app / api / tool]
**Stack:** [technologies]
**Status:** [🔨 In development / ✅ Production / 🗄 Archived]
**Purpose:** [one line]
**Rules:** CLAUDE.md in repo root
**Key constraints:**
- [list non-negotiables]
**Build:** [how it builds and deploys]
**Last architect action:** [what was last done]
