# Architect Review

Run a full architect review of the current state of the repo.
Check every item below and report pass/fail for each. Be specific about violations.

## Checklist

### External Dependencies
- Grep all HTML/JS/CSS files for `https://` URLs pointing outside the repo.
- Confirm no `package.json`, `node_modules/`, or build config files exist.

### File Structure
- Confirm only the expected 8 files exist (index.html, donate.html, style.css, script.js, config.js, config.json, admin/index.html, .nojekyll).
- Report any unexpected files.

### RTL / Hebrew
- Confirm `<html dir="rtl" lang="he">` in both HTML files.
- Flag any hardcoded LTR CSS (`margin-left`, `padding-left`, `text-align: left`) that should use logical properties.

### Security
- Confirm no plaintext passwords in any file.
- Confirm no API keys or tokens are committed.
- Confirm the SHA-256 hash in admin/index.html is present and non-empty.

### Config Pattern
- Confirm contact info (phone, email, WhatsApp) is NOT hardcoded in index.html or script.js — it should come from config.js/config.json.

### Code Quality
- Check for `console.log` statements in script.js.
- Check for inline `onclick=""` or `style=""` attributes in HTML.
- Check for `document.write()` or `eval()` in any JS file.

### File Size
- Report total size of all source files. Warn if > 150KB.

## Output Format

For each section: ✅ Pass or ❌ Fail — with the specific issue and file:line if failing.
End with a summary: overall status and top 3 recommended fixes if any.
