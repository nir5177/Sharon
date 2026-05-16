import { Link } from 'react-router-dom'
import './InnerPage.css'

const modules = [
  { num: '01', title: 'הבנת הנוער המתמודד', desc: 'מי הם? מה הם חווים? כיצד לראות את עולמם הפנימי.' },
  { num: '02', title: 'תפקיד ההורה בתהליך הריפוי', desc: 'למה ההורה הוא החוליה החשובה ביותר ואיך לממש זאת.' },
  { num: '03', title: 'תקשורת ללא שיפוטיות', desc: 'כלים מעשיים לשיחה פתוחה, שמיעה אמיתית וחיבור מחדש.' },
  { num: '04', title: 'גבולות מתוך אהבה', desc: 'כיצד להציב גבולות שמגדירים מבלי לדחות ומחוברים לאהבה.' },
  { num: '05', title: 'ניהול קבוצות תמיכה', desc: 'כלים מעשיים להנחיית קבוצה: פתיחה, דינמיקה, סגירה.' },
  { num: '06', title: 'הטיפול העצמי של המנחה', desc: 'שמירה על עצמנו בזמן שאנחנו מחזיקים אחרים.' },
]

export default function HaKurs() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>הקורס</h1>
          <p>תכנית הכשרה מקיפה למנחי קבוצות תמיכה ויועצים לעבודה עם הורים</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="inner-grid">
            <div className="inner-main">
              <h2>על הקורס</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <p>
                קורס ההכשרה של אהבת עולם הוא תכנית מקיפה המכשירה מנחים ויועצים לעבוד עם הורים לנוער מתמודד.
                הקורס משלב ידע תיאורטי מעמיק עם כלים מעשיים ומיומנויות שנבדקו בשטח.
              </p>
              <p style={{ marginTop: 16 }}>
                הקורס מיועד להורים שעברו את תהליך הריפוי האישי שלהם ורוצים לתת מניסיונם לאחרים,
                ולאנשי מקצוע שרוצים להתמחות בתחום.
              </p>

              <h2 style={{ marginTop: 40 }}>תוכנית הקורס</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {modules.map((m) => (
                  <div key={m.num} className="module-item">
                    <div className="module-num">{m.num}</div>
                    <div className="module-content">
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="highlight-box" style={{ marginTop: 40 }}>
                <h3>פרטי הקורס</h3>
                <ul className="check-list">
                  <li>משך: 6 מודולים / 12 מפגשים</li>
                  <li>פורמט: מקוון + מפגשים פרונטליים</li>
                  <li>מנחה: נעמי סובול וצוות מומחים</li>
                  <li>תעודה: בוגרי הקורס מקבלים תעודת מנחה מוסמך</li>
                  <li>הכשרה מעשית: הנחיית קבוצה מפוקחת</li>
                </ul>
              </div>
            </div>

            <aside className="inner-sidebar">
              <div className="sidebar-card">
                <h3>הרשמה לקורס</h3>
                <p>הקורס הבא מתחיל בקרוב. מקומות מוגבלים.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  פרטים והרשמה
                </a>
              </div>
              <div className="sidebar-card">
                <h3>שאלות על הקורס?</h3>
                <p>צרו קשר ונשמח לענות על כל שאלה.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  💬 WhatsApp
                </a>
              </div>
              <div className="sidebar-card">
                <h3>בוגרי הקורס</h3>
                <p>יכולים להצטרף לצוות היועצים של אהבת עולם ולהנחות קבוצות תמיכה.</p>
                <Link to="/יועצים" className="btn btn-outline" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  הצוות שלנו
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .module-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 24px;
          transition: box-shadow 0.2s;
        }
        .module-item:hover { box-shadow: var(--shadow); }
        .module-num {
          font-size: 28px;
          font-weight: 900;
          color: var(--accent-light);
          font-family: 'Frank Ruhl Libre', serif;
          line-height: 1;
          min-width: 40px;
          flex-shrink: 0;
        }
        .module-content h3 { font-size: 16px; margin-bottom: 4px; }
        .module-content p { font-size: 14px; color: var(--text-light); line-height: 1.6; }
      `}</style>
    </div>
  )
}
