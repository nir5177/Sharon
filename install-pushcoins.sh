#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  PushCoins — Fully Automated Installer
#  Chabad K.Borochov & Tel Ganim
#
#  Run once:
#  bash <(curl -s https://raw.githubusercontent.com/nir5177/Sharon/pushcoins-delivery/install-pushcoins.sh)
# ─────────────────────────────────────────────────────────────
set -e

PUSHCOINS_DIR="$HOME/chabad-pushcoins"
SHARON_REPO="https://github.com/nir5177/Sharon.git"
PUSHCOINS_REPO="nir5177/chabad-pushcoins"
TOKEN_CACHE="$HOME/.pushcoins-expo-token"
TMP="/tmp/chabad-delivery-$$"

print_header() {
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  🪙  PushCoins — Chabad K.Borochov & Tel Ganim"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
}

step() { echo "▶ $1"; }
ok()   { echo "  ✓ $1"; }
info() { echo "  → $1"; }

# ── Step 1: Download implementation files ──────────────────────
print_header
step "Downloading implementation files from GitHub..."
git clone --branch pushcoins-delivery --single-branch --depth 1 \
  "$SHARON_REPO" "$TMP" --quiet
ok "Downloaded"

# ── Step 2: Install files into PushCoins repo ──────────────────
step "Installing files into $PUSHCOINS_DIR ..."
cp -r "$TMP/payload/." "$PUSHCOINS_DIR/"
rm -rf "$TMP"
ok "Files installed (13 TypeScript/config files)"

# ── Step 3: npm install ────────────────────────────────────────
step "Installing npm dependencies..."
cd "$PUSHCOINS_DIR"
npm install --silent
ok "Dependencies ready"

# ── Step 4: Commit and push ────────────────────────────────────
step "Committing and pushing to GitHub..."
git add -A
git commit -m "Professional implementation — Reanimated 3, Bit + PayBox, TypeScript" --quiet
git push --quiet
ok "Pushed → github.com/$PUSHCOINS_REPO"

# ── Step 5: Install GitHub CLI if missing ─────────────────────
step "Checking GitHub CLI (gh)..."
if ! command -v gh &>/dev/null; then
  if command -v brew &>/dev/null; then
    info "Installing gh via Homebrew..."
    brew install gh --quiet
    ok "gh installed"
  else
    info "Homebrew not found. Install gh manually: https://cli.github.com"
    info "Then re-run this script."
    exit 1
  fi
else
  ok "gh already installed"
fi

# ── Step 6: Authenticate GitHub CLI if needed ─────────────────
step "Checking GitHub CLI authentication..."
if ! gh auth status &>/dev/null; then
  info "Opening GitHub login in browser..."
  gh auth login --hostname github.com --git-protocol https --web
  ok "GitHub CLI authenticated"
else
  ok "GitHub CLI already authenticated"
fi

# ── Step 7: Get Expo token ────────────────────────────────────
step "Setting up Expo build credentials..."
if [ -f "$TOKEN_CACHE" ]; then
  EXPO_TOKEN=$(cat "$TOKEN_CACHE")
  ok "Using cached Expo token"
else
  echo ""
  info "Opening Expo token page in your browser..."
  open "https://expo.dev/accounts/nir5177/settings/access-tokens" 2>/dev/null || \
    xdg-open "https://expo.dev/accounts/nir5177/settings/access-tokens" 2>/dev/null || true
  echo ""
  echo "  In the browser:"
  echo "  1. Click 'Create Token'"
  echo "  2. Name it: PushCoins Build"
  echo "  3. Click Generate → Copy the token"
  echo "  4. Paste it here (hidden):"
  echo ""
  printf "  Token: "
  read -rs EXPO_TOKEN
  echo ""

  if [ -z "$EXPO_TOKEN" ]; then
    echo "  ✗ No token entered. Exiting."
    exit 1
  fi

  echo "$EXPO_TOKEN" > "$TOKEN_CACHE"
  chmod 600 "$TOKEN_CACHE"
  ok "Token saved to $TOKEN_CACHE (won't ask again)"
fi

# ── Step 8: Set GitHub Actions secret automatically ───────────
step "Setting EXPO_TOKEN as GitHub Actions secret..."
echo "$EXPO_TOKEN" | gh secret set EXPO_TOKEN --repo "$PUSHCOINS_REPO"
ok "Secret set → future pushes will auto-build APK via GitHub Actions"

# ── Step 9: Install EAS CLI if needed ─────────────────────────
step "Checking EAS CLI..."
if ! command -v eas &>/dev/null; then
  info "Installing EAS CLI..."
  npm install -g eas-cli --silent
fi
ok "EAS CLI ready"

# ── Step 10: Trigger first APK build ──────────────────────────
step "Submitting first APK build to EAS cloud..."
echo ""
EXPO_TOKEN="$EXPO_TOKEN" eas build \
  --platform android \
  --profile production \
  --non-interactive \
  --no-wait

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅  ALL DONE"
echo ""
echo "  Build in progress (~15 min):"
echo "  https://expo.dev/accounts/nir5177/builds"
echo ""
echo "  When complete:"
echo "  Download APK → send to phones → install"
echo ""
echo "  Future builds: automatic on every git push"
echo "  (GitHub Actions will build without any action from you)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
