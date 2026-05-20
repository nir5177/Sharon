#!/bin/bash
set -e

# ─────────────────────────────────────────────────────────────
#  PushCoins Installer
#  Chabad K.Borochov & Tel Ganim
#  Run once on your Mac: bash install-pushcoins.sh
# ─────────────────────────────────────────────────────────────

PUSHCOINS_DIR="$HOME/chabad-pushcoins"
SHARON_REPO="https://github.com/nir5177/Sharon.git"
TMP="/tmp/chabad-delivery-$$"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PushCoins — Professional Build"
echo "  Chabad K.Borochov & Tel Ganim"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── Step 1: Download payload from delivery branch ──────────────
echo "▶ Downloading implementation files..."
git clone --branch pushcoins-delivery --single-branch --depth 1 \
  "$SHARON_REPO" "$TMP" --quiet
echo "  ✓ Downloaded"

# ── Step 2: Copy files into the PushCoins repo ─────────────────
echo "▶ Installing files into $PUSHCOINS_DIR ..."
cp -r "$TMP/payload/." "$PUSHCOINS_DIR/"
rm -rf "$TMP"
echo "  ✓ Files installed"

# ── Step 3: npm install ────────────────────────────────────────
echo "▶ Installing npm dependencies..."
cd "$PUSHCOINS_DIR"
npm install --silent
echo "  ✓ Dependencies installed"

# ── Step 4: Commit and push to GitHub ─────────────────────────
echo "▶ Committing and pushing to GitHub..."
git add -A
git commit -m "Professional implementation — Reanimated 3, Bit + PayBox, TypeScript"
git push
echo "  ✓ Pushed to github.com/nir5177/chabad-pushcoins"

# ── Step 5: EAS authentication check ──────────────────────────
echo ""
echo "▶ Checking EAS (Expo build service)..."

if ! command -v eas &>/dev/null; then
  echo "  Installing EAS CLI..."
  npm install -g eas-cli --silent
fi

if ! eas whoami &>/dev/null; then
  echo ""
  echo "  ⚠  You need to log in to Expo once."
  echo "     Get your free token here:"
  echo "     https://expo.dev/accounts/nir5177/settings/access-tokens"
  echo ""
  echo "     Then run:"
  echo "     export EXPO_TOKEN=paste_your_token_here"
  echo "     eas build --platform android --profile production --no-wait"
  echo ""
  echo "  Everything else is done. Only the build step needs your token."
  exit 0
fi

# ── Step 6: Trigger APK build ─────────────────────────────────
echo "▶ Submitting APK build to EAS cloud..."
BUILD_OUTPUT=$(eas build --platform android --profile production --no-wait 2>&1)
echo "$BUILD_OUTPUT"

BUILD_URL=$(echo "$BUILD_OUTPUT" | grep -o 'https://expo.dev/[^ ]*' | head -1)

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ Build submitted!"
echo ""
if [ -n "$BUILD_URL" ]; then
  echo "  Track build:  $BUILD_URL"
fi
echo "  Dashboard:    https://expo.dev/accounts/nir5177/builds"
echo ""
echo "  Build takes ~15 minutes."
echo "  When done: Download APK → send to community phones → done."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
