# מדריך העלאה לשרת — אתר שורשים

## קבצים להעלאה

```
shoreshim/
├── index.html          ← דף הבית הראשי
├── donate.html         ← עמוד תרומות
├── style.css           ← עיצוב האתר
├── script.js           ← פונקציונליות האתר
├── config.js           ← הגדרות האתר (טלפון, וואטסאפ, מיילים)
├── config.json         ← נתוני ההגדרות (ממשק ניהול)
└── admin/
    └── index.html      ← ממשק ניהול האתר (סיסמה נדרשת)
```

**סה"כ: 8 קבצים | ~120KB לפני דחיסה**

---

## אפשרות א׳ — cPanel (Shared Hosting)

### 1. דרך File Manager (הכי פשוט):
1. היכנסו ל-cPanel → **File Manager**
2. נווטו לתיקייה **`public_html`**
3. אם האתר בדומיין הראשי → העלו הכל ישירות ל-`public_html/`
4. אם האתר בתת-תיקייה (למשל `shoreshim.example.com`) → צרו תיקייה `shoreshim` ב-`public_html/` והעלו לשם
5. לחצו **Upload** → בחרו את קובץ ה-ZIP (`shoreshim-production.zip`)
6. לאחר ההעלאה — לחצו על הקובץ → **Extract** → הוציאו לאותה תיקייה
7. מחקו את קובץ ה-ZIP

### 2. דרך FTP/SFTP:
```
Host:     ftp.yourserver.com
User:     your-cpanel-user
Pass:     your-cpanel-password
Port:     21 (FTP) או 22 (SFTP)
מיקום:   /public_html/   (או /public_html/shoreshim/)
```

העלו את כל הקבצים (לא את התיקייה — את תוכנה):
- index.html
- donate.html
- style.css
- script.js
- config.js
- config.json
- תיקיית admin/ (כולל admin/index.html)

---

## אפשרות ב׳ — GitHub Pages (חינם, כבר מוגדר)

הקוד כבר מועלה ל-GitHub. צריך לאפשר את Pages:

1. גשו ל: `https://github.com/nir5177/Sharon/settings/pages`
2. תחת **Source** → בחרו **"GitHub Actions"**
3. לחצו **Save**
4. המתינו ~3 דקות

**הכתובת תהיה:** `https://nir5177.github.io/Sharon/`

---

## אפשרות ג׳ — hosting ישראלי (ClickSpace, Domains.co.il, Netvision)

**העלאה דרך File Manager של cPanel:**
1. היכנסו ללוח הניהול של ה-hosting
2. פתחו File Manager
3. גשו ל-`public_html/`
4. בחרו **Upload** → העלו את ה-ZIP
5. חלצו (Extract) לאותה תיקייה
6. מחקו את ה-ZIP

**לאחר ההעלאה האתר יהיה פעיל מיידית.**

---

## הגדרת ממשק הניהול (/admin/)

לאחר ההעלאה, הממשק נגיש בכתובת:
`https://yourdomain.com/admin/`

**כניסה ראשונה:**
- צרו GitHub Personal Access Token:
  1. גשו ל: https://github.com/settings/tokens/new
  2. שם: `Sharon Admin`
  3. הרשאה: `repo` (full control)
  4. לחצו Generate Token → שמרו את ה-token
- סיסמה ברירת מחדל: **`password`**
- **שנו את הסיסמה לאחר הכניסה הראשונה** (ראו הוראות בתחתית)

**מה ניתן לנהל:**
- מספר טלפון ו-WhatsApp
- כתובת אימייל
- מספרי הסטטיסטיקות
- קישור לעמוד תרומות (Matara.pro / Nedarim Plus)

**שינוי סיסמת הניהול:**
פתחו `admin/index.html` בעורך טקסט וחפשו:
```javascript
var ADMIN_PASS_HASH = '5e884898da28047151d0e56f8dc6292773603d0d56f86021d60e1a7f5b12a8e'; // "password"
```
הכניסו לכלי זה: https://emn178.github.io/online-tools/sha256.html
הקלידו את הסיסמה החדשה, העתיקו את ה-Hash והחליפו.

---

## תרומות — Matara.pro / Nedarim Plus

**עד לקבלת ה-URL האמיתי מ-Matara.pro:**
- עמוד התרומות עובד במצב Demo (מציג הודעת הצלחה)

**לאחר קבלת ה-URL:**
1. פתחו את ממשק הניהול (`/admin/`)
2. גשו לסעיף "קישור עמוד תרומות"
3. הכניסו את ה-URL (לדוגמה: `https://matara.pro/nedarimpl/XXXXX`)
4. לחצו "שמירה ופרסום"

---

## תמיכה טכנית

**הכל פה מוכן ועצמאי:**
- ✅ אין תלות בשירות חיצוני
- ✅ עובד עם כל סינון אינטרנט (Netspark / Rimon / Netiv / Etrog)
- ✅ אין Google Fonts / CDN חיצוני
- ✅ טפסי הקשר — פרטיות מוחלטת
- ✅ כל הקבצים: HTML + CSS + JS בלבד

**אם יש שגיאה בהעלאה:**
- ודאו שכל הקבצים בתיקייה `public_html/` ישירות (לא תיקייה בתוך תיקייה)
- ודאו ש-`index.html` הוא הקובץ הראשי
