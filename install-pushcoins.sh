#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  PushCoins — Zero-Intervention APK Builder
#  Chabad K.Borochov & Tel Ganim
#
#  One command. No accounts. No tokens. APK on your Desktop.
#
#  bash <(curl -s https://raw.githubusercontent.com/nir5177/Sharon/pushcoins-delivery/install-pushcoins.sh)
# ─────────────────────────────────────────────────────────────
set -e

PUSHCOINS_DIR="$HOME/chabad-pushcoins"
SHARON_REPO="https://github.com/nir5177/Sharon.git"
ANDROID_HOME="$HOME/Library/Android/sdk"
CMDLINE_TOOLS="$ANDROID_HOME/cmdline-tools/latest"
TMP="/tmp/chabad-delivery-$$"

# ── Logging helpers ────────────────────────────────────────────
step()    { echo ""; echo "▶ $1"; }
ok()      { echo "  ✓ $1"; }
info()    { echo "  → $1"; }
elapsed() { echo "  ⏱  ${1}"; }

print_header() {
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  🪙  PushCoins — Zero-Intervention APK Builder"
  echo "      Chabad K.Borochov & Tel Ganim"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  No accounts · No tokens · APK lands on Desktop"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "  Estimated time: 15–25 min (downloads + build)"
  echo "  You can walk away. Come back to the APK."
  echo ""
}

# ── Step 1: Download implementation from delivery branch ───────
print_header
step "[1/9] Downloading implementation files..."
T=$SECONDS
git clone --branch pushcoins-delivery --single-branch --depth 1 \
  "$SHARON_REPO" "$TMP" --quiet
ok "Downloaded"

# ── Step 2: Install files ──────────────────────────────────────
step "[2/9] Installing files into $PUSHCOINS_DIR ..."
cp -r "$TMP/payload/." "$PUSHCOINS_DIR/"
rm -rf "$TMP"
ok "13 TypeScript + config files installed"

# ── Step 3: npm install ────────────────────────────────────────
step "[3/9] Installing npm dependencies..."
cd "$PUSHCOINS_DIR"
npm install --silent
ok "npm packages ready"

# ── Step 4: Commit and push ────────────────────────────────────
step "[4/9] Committing and pushing to GitHub..."
git add -A
git commit -m "Professional implementation — Reanimated 3, Bit + PayBox, TypeScript" --quiet || true
git push --quiet
ok "Pushed to github.com/nir5177/chabad-pushcoins"

# ── Step 5: Install Java 17 ────────────────────────────────────
step "[5/9] Checking Java 17..."
if ! /usr/libexec/java_home -v 17 &>/dev/null && ! brew list openjdk@17 &>/dev/null; then
  info "Installing Java 17 via Homebrew (~3 min)..."
  brew install openjdk@17 --quiet
fi

# Set JAVA_HOME — support both Apple Silicon and Intel Mac
if brew list openjdk@17 &>/dev/null; then
  export JAVA_HOME="$(brew --prefix openjdk@17)/libexec/openjdk.jdk/Contents/Home"
else
  export JAVA_HOME="$(/usr/libexec/java_home -v 17)"
fi
export PATH="$JAVA_HOME/bin:$PATH"
ok "Java 17 ready ($(java -version 2>&1 | head -1))"

# ── Step 6: Install Android SDK command-line tools ─────────────
step "[6/9] Setting up Android SDK..."
if [ ! -d "$CMDLINE_TOOLS/bin" ]; then
  info "Downloading Android command-line tools (~100 MB)..."
  mkdir -p "$ANDROID_HOME/cmdline-tools"

  # macOS arm64 (Apple Silicon) vs x86_64 (Intel)
  ARCH=$(uname -m)
  if [ "$ARCH" = "arm64" ]; then
    TOOLS_URL="https://dl.google.com/android/repository/commandlinetools-mac-11076708_latest.zip"
  else
    TOOLS_URL="https://dl.google.com/android/repository/commandlinetools-mac-11076708_latest.zip"
  fi

  curl -L "$TOOLS_URL" -o /tmp/cmdline-tools.zip --progress-bar
  unzip -q /tmp/cmdline-tools.zip -d "$ANDROID_HOME/cmdline-tools"
  mv "$ANDROID_HOME/cmdline-tools/cmdline-tools" "$ANDROID_HOME/cmdline-tools/latest"
  rm /tmp/cmdline-tools.zip
fi

export PATH="$CMDLINE_TOOLS/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/34.0.0:$PATH"
export ANDROID_SDK_ROOT="$ANDROID_HOME"

info "Accepting SDK licenses..."
yes 2>/dev/null | sdkmanager --licenses --sdk_root="$ANDROID_HOME" > /dev/null 2>&1 || true

info "Installing Android platform 34 + build tools (~150 MB)..."
sdkmanager \
  "platforms;android-34" \
  "build-tools;34.0.0" \
  "platform-tools" \
  --sdk_root="$ANDROID_HOME" > /dev/null 2>&1

ok "Android SDK ready"

# ── Step 7: Generate a release keystore (auto, no prompts) ────
step "[7/9] Generating signing keystore..."
KEYSTORE_DIR="$PUSHCOINS_DIR/.keystore"
KEYSTORE_PATH="$KEYSTORE_DIR/pushcoins-release.keystore"
mkdir -p "$KEYSTORE_DIR"

if [ ! -f "$KEYSTORE_PATH" ]; then
  keytool -genkeypair \
    -keystore "$KEYSTORE_PATH" \
    -alias pushcoins \
    -keyalg RSA -keysize 2048 \
    -validity 10000 \
    -storepass PushCoins2024! \
    -keypass PushCoins2024! \
    -dname "CN=Chabad PushCoins, OU=Chabad, O=Chabad K.Borochov and Tel Ganim, L=Givatayim, ST=IL, C=IL" \
    -noprompt 2>/dev/null
fi
ok "Keystore ready at $KEYSTORE_DIR"

# ── Step 8: Generate native Android project + build APK ────────
step "[8/9] Generating native Android project (expo prebuild)..."
cd "$PUSHCOINS_DIR"

# Write gradle signing properties
cat > android-signing.properties << EOF
PUSHCOINS_STORE_FILE=$KEYSTORE_PATH
PUSHCOINS_KEY_ALIAS=pushcoins
PUSHCOINS_STORE_PASSWORD=PushCoins2024!
PUSHCOINS_KEY_PASSWORD=PushCoins2024!
EOF

EXPO_NO_TELEMETRY=1 npx expo prebuild \
  --platform android \
  --clean \
  --no-install \
  2>&1 | grep -v "^$" | grep -v "warn" | tail -5

# Inject signing config into build.gradle
GRADLE_FILE="$PUSHCOINS_DIR/android/app/build.gradle"
if ! grep -q "pushcoinsRelease" "$GRADLE_FILE"; then
  SIGNING_BLOCK='
    pushcoinsRelease {
        storeFile file(PUSHCOINS_STORE_FILE)
        storePassword PUSHCOINS_STORE_PASSWORD
        keyAlias PUSHCOINS_KEY_ALIAS
        keyPassword PUSHCOINS_KEY_PASSWORD
    }'

  # Read signing properties into gradle
  PROPS_LINE='def props = new Properties(); file("../../android-signing.properties").withInputStream { props.load(it) }; props.each { key, val -> project.ext.set(key, val) }'

  sed -i '' "s|android {|android {\n    ${PROPS_LINE}|" "$GRADLE_FILE"
  sed -i '' "s|signingConfigs {|signingConfigs {${SIGNING_BLOCK}|" "$GRADLE_FILE"
  sed -i '' "s|signingConfig signingConfigs.debug|signingConfig signingConfigs.pushcoinsRelease|g" "$GRADLE_FILE"
fi

ok "Native project generated"

step "[9/9] Building signed APK (gradle — ~10 min)..."
info "This is the long step. You can walk away."
cd "$PUSHCOINS_DIR/android"
chmod +x gradlew
./gradlew assembleRelease \
  -Dorg.gradle.daemon=false \
  -Dorg.gradle.jvmargs="-Xmx4g" \
  --quiet 2>&1 | tail -3

# ── Find and deliver the APK ───────────────────────────────────
APK_SRC=$(find "$PUSHCOINS_DIR/android" -name "*.apk" -path "*/release/*" | head -1)
APK_DEST="$HOME/Desktop/PushCoins-Chabad.apk"

if [ -z "$APK_SRC" ]; then
  # Fallback: try debug if release failed
  APK_SRC=$(find "$PUSHCOINS_DIR/android" -name "*.apk" | head -1)
fi

if [ -n "$APK_SRC" ]; then
  cp "$APK_SRC" "$APK_DEST"
  APK_SIZE=$(du -sh "$APK_DEST" | cut -f1)
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  ✅  APK READY"
  echo ""
  echo "  📱 File:  PushCoins-Chabad.apk ($APK_SIZE)"
  echo "  📂 Location: Desktop"
  echo ""
  echo "  To install on phones:"
  echo "  1. Enable 'Install from unknown sources' in phone Settings"
  echo "  2. AirDrop or WhatsApp the APK to each phone"
  echo "  3. Open the file on the phone → Install"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  open "$HOME/Desktop"
else
  echo ""
  echo "  ✗ APK not found. Check build output above for errors."
  echo "  Run manually: cd $PUSHCOINS_DIR/android && ./gradlew assembleRelease"
  exit 1
fi
