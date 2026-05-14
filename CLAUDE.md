# CLAUDE.md — WordPress Charity Website Template

## Project Overview
Build a WordPress website for an Israeli nonprofit/charity organization.
Language: Hebrew. Direction: RTL. Style: Professional, clean, emotional.
Based on: yadezra.org.il structure and functionality.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| CMS | WordPress 6.x | Client self-management, Hebrew RTL support |
| Page Builder | Elementor Free | Visual editing, RTL native support |
| Theme | Hello Elementor (child theme) | Lightweight, Elementor-optimized |
| Forms | Contact Form 7 | Free, reliable, DB storage via Flamingo |
| Donations | GivingPress / Grow plugin OR external link | Israeli market standard |
| RTL | Polylang or native WP Hebrew | Full RTL support |
| Hosting | Any cPanel host or WP Engine | Client's choice |

---

## WordPress Plugins — Required

```
1. Elementor (free)                  — page builder
2. Hello Elementor theme             — base theme
3. Contact Form 7                    — contact forms
4. Flamingo                          — saves CF7 submissions to DB
5. Yoast SEO                         — SEO + Hebrew sitemap
6. Smush or ShortPixel               — image optimization
7. UpdraftPlus                       — backups
8. Wordfence                         — security
9. WP Rocket (optional, paid)        — performance cache
10. WPML or Polylang (if multilingual Hebrew+English needed)
```

---

## Theme Setup

```
/wp-content/themes/
├── hello-elementor/          # Parent theme (do not edit)
└── hello-elementor-child/    # Child theme — all custom code goes here
    ├── style.css
    ├── functions.php
    └── rtl.css               # RTL overrides if needed
```

### style.css (child theme header)
```css
/*
Theme Name: Hello Elementor Child
Template: hello-elementor
Text Domain: hello-elementor-child
*/

:root {
  --color-primary: #REPLACE_ME;
  --color-secondary: #REPLACE_ME;
  --color-accent: #REPLACE_ME;
  --font-main: 'Heebo', sans-serif;
}

body {
  font-family: var(--font-main);
  direction: rtl;
  text-align: right;
}
```

### functions.php
```php
<?php
// Enqueue parent theme styles
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_uri(), ['parent-style']);
    // Google Fonts — Heebo for Hebrew
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap');
});
```

---

## Page Structure

### Pages to create in WordPress:
```
Home (index)           — main landing page
Donate                 — donation page
About                  — about the organization
Contact                — contact page
News (Blog)            — WordPress native posts
[Service pages]        — one per service (food baskets, warm home, etc.)
```

---

## Home Page — Sections (build with Elementor)

### Section 1: HEADER / NAVIGATION
- Logo (right side) — upload as SVG/PNG to Media Library
- Navigation menu — Appearance > Menus
  - Items: עלינו | שירותים | פעילויות | חדשות | צור קשר
  - Each item = anchor link (#about, #services, etc.) or page link
- CTA Button "תרמו כעת" (left side) — links to /donate/
- Mobile: hamburger menu (Elementor Pro nav widget OR custom CSS)
- Sticky header: Elementor > Section > Motion Effects > Sticky Top
- Header background: transparent → white on scroll (custom JS in child theme)

### Section 2: HERO
- Full-width section, min-height 100vh
- Background: image with overlay (Elementor > Background Overlay, opacity 0.5)
- Heading H1 — two lines, large font, white
- Subheading — short paragraph, white
- 2 CTA buttons: Primary (תרמו) → /donate/ | Secondary (קראו עוד) → #about
- Decorative image/graphic — right column (hidden on mobile)

### Section 3: ABOUT (#about)
- Two columns: text (right) | image (left)
- H2 heading
- 3–4 paragraphs of text
- "קראו עוד" button → /about/ page
- Mobile: single column, image above text

### Section 4: STATS COUNTER
- Dark/colored background section
- 4 counter widgets (Elementor > Counter)
  - Numbers animate when scrolled into view (native Elementor behavior)
  - Example: 500,000+ ילדים | 25 שנות פעילות | 12 סניפים | 3,000 משפחות

### Section 5: SERVICES (#services)
- H2 + subheading
- 2–3 large cards, each with: image, title, short text, "קראו עוד" link
- Cards link to inner pages (custom post type or regular pages)
- Hover: slight lift (Elementor > Motion Effects > Hover Animation)

### Section 6: ACTIVITIES (נתינה סביב השנה)
- H2 heading
- Grid of 6–7 small cards: image + title + link
- Each links to inner page or anchor
- Mobile: 2 columns

### Section 7: FOUNDER QUOTE
- Alternate background color
- Large quote with decorative quotation marks
- Name + role + small portrait photo
- Use Elementor Testimonial widget or custom section

### Section 8: PHOTO GALLERY
- Elementor Carousel or Image Carousel widget
- 12–16 images from Media Library
- Auto-play: 4 seconds
- Navigation arrows on both sides
- Pause on hover (add via custom JS)

### Section 9: NEWS (#news)
- H2 + "כל החדשות" button → /news/
- 3 latest posts — use Elementor Posts widget (grid layout)
  - Each shows: featured image, title, date, excerpt, "קראו עוד"
- Posts are managed via WordPress Posts (admin)

### Section 10: INSTAGRAM FEED
- H2 + Instagram icon
- Plugin: Smash Balloon Social Photo Feed (free)
- 6 images grid (2 rows × 3 columns)
- Each links to original post
- Setup: connect Instagram account in plugin settings

### Section 11: CONTACT FORM (#contact)
- Two columns: contact info (right) | form (left)
- Contact info: address, phone, email + icons
- Social icons: Facebook, YouTube, Instagram
- Contact Form 7 shortcode embedded via Elementor HTML widget
- Form fields: name, email, phone, message, consent checkbox, submit
- CF7 config: sends email to admin AND saves to DB via Flamingo plugin
- Success message displayed inline (no page reload)

### Section 12: FOOTER
- 4 columns: logo+description | navigation | legal links | contact
- Bottom bar: copyright + credit
- Full RTL

---

## Donation Page (/donate/)

### Page Structure:
1. Header (same as homepage)
2. H1 + emotional subheading
3. **Donation amount selector:**
   - Preset buttons: ₪50 | ₪100 | ₪180 | ₪360 | ₪500 | סכום אחר
   - Custom amount input (shown when "סכום אחר" selected)
   - Active state on selected button
   - Built with Elementor + custom JS in child theme
4. **Main CTA button** — links to external payment provider
   - Israeli market options: Grow (grow.co.il), Jgive, CardCom, Tranzila
   - Client must supply the payment URL — insert as button link
5. Trust badges: SSL secured | רשום כעמותה | קבלה על תרומה
6. Footer (same as homepage)

### Important:
- WordPress/this site does NOT process payments
- All payments go through external provider (client's responsibility)
- Add to footer/page: "עיבוד התשלום מבוצע על ידי [provider name]"

---

## Contact Form — How Submissions Are Saved

### Flow:
```
User submits form
      ↓
Contact Form 7 validates
      ↓
Email sent to: admin@[client-domain].com   ← configure in CF7 settings
      ↓
Flamingo saves submission to WordPress DB  ← visible in WP Admin > Flamingo
```

### CF7 Setup:
1. Install Contact Form 7 + Flamingo plugins
2. Create form in CF7: name, email, phone, message, consent
3. Mail tab: set recipient email to client's email
4. Embed shortcode in Elementor HTML widget on contact section
5. Flamingo: all submissions visible at WP Admin > Flamingo > Inbound Messages

### Client views submissions:
- WP Admin > Flamingo > Inbound Messages
- Filter by date, search by name/email
- Export to CSV available

---

## RTL & Hebrew Support

### WordPress settings:
- Settings > General > Site Language: עברית
- This auto-enables RTL in WordPress core and most plugins

### CSS RTL rules (in child theme rtl.css):
```css
body { direction: rtl; text-align: right; }
.wp-block { text-align: right; }
.elementor-nav-menu { flex-direction: row-reverse; }
input, textarea { text-align: right; direction: rtl; }
```

### Elementor RTL:
- Elementor natively supports RTL when WP language is Hebrew
- Column order reverses automatically
- Padding/margin directions swap correctly
- Test each section on mobile after building

---

## Client Admin — What the Client Can Edit

### Via WordPress Admin (no code):
| What | Where |
|---|---|
| Page text & images | Pages > Edit with Elementor |
| News/blog posts | Posts > Add New |
| Navigation menu | Appearance > Menus |
| Contact form email recipient | CF7 > Edit form > Mail tab |
| View contact submissions | Flamingo > Inbound Messages |
| Site logo | Appearance > Customize > Site Identity |
| Upload new images | Media > Add New |

### What requires developer (you):
- Adding new sections to pages
- Changing site colors/fonts (CSS variables)
- Changing donation button URL
- Plugin updates (recommend monthly maintenance plan)

---

## Variables to Update Per Client

Before delivery, find and replace all instances of:

```
REPLACE_ORG_NAME       → Organization name
REPLACE_ORG_NAME_HE    → שם הארגון בעברית
REPLACE_PHONE          → Phone number (*XXXX or 0X-XXXXXXX)
REPLACE_EMAIL          → Contact email
REPLACE_ADDRESS        → Physical address
REPLACE_WHATSAPP       → WhatsApp number (international format)
REPLACE_DONATE_URL     → Payment provider URL (supplied by client)
REPLACE_FACEBOOK_URL   → Facebook page URL
REPLACE_INSTAGRAM_URL  → Instagram profile URL
REPLACE_YOUTUBE_URL    → YouTube channel URL
REPLACE_ADMIN_EMAIL    → WP admin + CF7 recipient email
REPLACE_COLOR_PRIMARY  → Primary brand color (hex)
REPLACE_COLOR_SECONDARY → Secondary brand color (hex)
REPLACE_FONT           → Google Font name for Hebrew
```

---

## Delivery Checklist

### Functionality:
- [ ] All navigation links work and scroll to correct sections
- [ ] Mobile hamburger menu opens and closes
- [ ] All internal page links work (About, Services, etc.)
- [ ] Contact form submits successfully
- [ ] Contact form email arrives at client email
- [ ] Contact form submission saved in Flamingo
- [ ] Donate button links to correct payment URL
- [ ] Donation amount selector works (preset + custom)
- [ ] Gallery carousel plays and navigates
- [ ] Stats counters animate on scroll
- [ ] Instagram feed displays (if account connected)
- [ ] All social media icons link correctly

### RTL & Hebrew:
- [ ] All text right-aligned
- [ ] All icons/arrows point in correct RTL direction (← not →)
- [ ] Form fields right-to-left input
- [ ] Mobile menu opens from right side
- [ ] Footer columns in correct RTL order
- [ ] Elementor widgets not showing LTR artifacts

### Performance & SEO:
- [ ] All images have Hebrew alt text
- [ ] Page title and meta description set (Yoast)
- [ ] Images compressed (Smush)
- [ ] SSL certificate active (https)
- [ ] Site loads under 3 seconds (GTmetrix test)
- [ ] Mobile responsive (Google Mobile-Friendly Test)

### Before Handoff:
- [ ] Remove all placeholder text and demo images
- [ ] Change all REPLACE_ variables to real values
- [ ] Set admin username (not "admin") and strong password
- [ ] Enable Wordfence security scan
- [ ] Set up UpdraftPlus backup schedule (weekly)
- [ ] Send client login credentials securely
- [ ] Provide 1-hour training session on WP admin

---

## Out of Scope
- Custom payment processing (use external provider only)
- Mobile app
- Membership/login system for end users
- Custom WooCommerce store
- Multi-language (Hebrew only unless specified)
- Email marketing integration (unless client requests + pays extra)
