import './InnerPage.css'

const videos = [
  { title: 'מה באמת יכול לעבוד איתם?', date: 'מרץ 2024', duration: '38 דק׳', category: 'הרצאה' },
  { title: 'לא מאמינה לך – מה תעשי?', date: 'פברואר 2024', duration: '42 דק׳', category: 'הרצאה' },
  { title: 'גבולות מתוך אהבה – כיצד?', date: 'ינואר 2024', duration: '35 דק׳', category: 'מפגש מועדון' },
  { title: 'שיחה עם בוגרת: הסיפור שלה', date: 'דצמבר 2023', duration: '51 דק׳', category: 'ראיון' },
  { title: 'הבנת עולמו הפנימי של הנוער', date: 'נובמבר 2023', duration: '44 דק׳', category: 'הרצאה' },
  { title: 'תקשורת ללא שיפוטיות – כלים', date: 'אוקטובר 2023', duration: '39 דק׳', category: 'סדנה' },
  { title: 'הטיפול בהורה – שמירה על עצמנו', date: 'ספטמבר 2023', duration: '33 דק׳', category: 'הרצאה' },
  { title: 'בניית אמון מחדש בתוך המשפחה', date: 'אוגוסט 2023', duration: '47 דק׳', category: 'מפגש מועדון' },
  { title: 'שאלות ותשובות – ערב פתוח', date: 'יולי 2023', duration: '62 דק׳', category: 'שאלות ותשובות' },
]

const categories = ['הכל', 'הרצאה', 'מפגש מועדון', 'ראיון', 'סדנה', 'שאלות ותשובות']

export default function Podcast() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>ארכיון וידאו</h1>
          <p>הרצאות, מפגשי מועדון וראיונות – לצפייה חופשית</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">הרצאות וסרטונים</h2>
          <div className="divider" />
          <p className="section-subtitle">
            כל הרצאות ומפגשי המועדון מצולמים ועומדים לרשותכם. ניתן לצפות בחינם ובכל עת.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {categories.map((c) => (
              <button key={c} className="btn btn-outline" style={{ padding: '8px 20px', fontSize: 14 }}>
                {c}
              </button>
            ))}
          </div>

          <div className="video-grid">
            {videos.map((v, i) => (
              <div key={i} className="video-card">
                <div className="video-thumb">
                  <span style={{ fontSize: 40, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>▶️</span>
                </div>
                <div className="video-info">
                  <span style={{ fontSize: 11, background: 'var(--accent)', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
                    {v.category}
                  </span>
                  <h3 style={{ marginTop: 8 }}>{v.title}</h3>
                  <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>📅 {v.date}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>⏱ {v.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href="https://www.youtube.com/@ahavatolam-horim"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              ▶ לכל הסרטונים ביוטיוב
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
