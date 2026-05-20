# [PROJECT NAME] — Mobile App

Master guidelines: https://github.com/nir5177/architect

## Stack
- React Native + Expo (managed workflow)
- TypeScript
- EAS Build for releases

## Project-specific rules
[Fill in the constraints unique to this project]

## What this app does
[One paragraph — purpose, audience, key flows]

## Hard rules (additions to master)
- Never eject from Expo without architect approval
- No analytics, tracking, or crash-reporter SDKs
- INTERNET-only Android permission unless justified
- All user-facing strings in Hebrew (RTL) unless explicitly multilingual
- Asset budget: total `assets/` ≤ 5 MB

## Build
- Dev: `npx expo start`
- Preview: `eas build --profile preview --platform android`
- Production: `eas build --profile production --platform android`

## Coding standards
- Functional components + hooks (no classes)
- `StyleSheet.create()` instead of inline styles
- File naming: `PascalCase.tsx` for components/screens
- State: `useState` / `useReducer` (no Redux without architect approval)
