import './InnerPage.css'

const groups = [
  { city: 'ירושלים', type: 'נשים', day: 'יום ב׳', time: '20:00', facilitator: 'רחל כהן' },
  { city: 'ירושלים', type: 'גברים', day: 'יום ג׳', time: '20:30', facilitator: 'דוד לוי' },
  { city: 'תל אביב', type: 'נשים', day: 'יום ג׳', time: '19:30', facilitator: 'שרה ברון' },
  { city: 'תל אביב', type: 'גברים', day: 'יום ד׳', time: '20:00', facilitator: 'משה אברהם' },
  { city: 'חיפה', type: 'נשים', day: 'יום ה׳', time: '19:00', facilitator: 'לאה גולן' },
  { city: 'בני ברק', type: 'נשים', day: 'יום ב׳', time: '20:00', facilitator: 'מרים שפירא' },
  { city: 'פתח תקווה', type: 'נשים', day: 'יום ד׳', time: '19:30', facilitator: 'עדינה זיו' },
  { city: 'אשדוד', type: 'נשים', day: 'יום ג׳', time: '20:00', facilitator: 'חנה ויס' },
  { city: 'רחובות', type: 'נשים', day: 'יום ה׳', time: '19:30', facilitator: 'נורית טל' },
  { city: 'ראשון לציון', type: 'גברים', day: 'יום ב׳', time: '21:00', facilitator: 'יעקב ברגר' },
  { city: 'נתניה', type: 'נשים', day: 'יום ד׳', time: '20:00', facilitator: 'יפה מרדכי' },
  { city: 'באר שבע', type: 'נשים', day: 'יום ה׳', time: '19:00', facilitator: 'רבקה דוד' },
]

export default function KvutzotTmicha() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>קבוצות תמיכה</h1>
          <p>קבוצות תמיכה לנשים ולגברים בנפרד – בהנחיית מנחים מוסמכים</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="inner-grid">
            <div className="inner-main">
              <h2>מה זה קבוצת תמיכה?</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <p>
                קבוצת תמיכה היא מקום בטוח שבו הורים לנוער מתמודד נפגשים אחת לשבוע בקבוצה קטנה ואינטימית,
                בהנחיית מנחה מוסמך – בוגר תכנית ההכשרה של אהבת עולם.
              </p>
              <p style={{ marginTop: 16 }}>
                הקבוצות נפרדות לנשים ולגברים, כדי לאפשר שיתוף פתוח ואמיתי יותר. כל קבוצה מונה 8–12 משתתפים.
              </p>

              <div className="highlight-box" style={{ marginTop: 32 }}>
                <h3>מה קורה בקבוצה?</h3>
                <ul className="check-list">
                  <li>שיתוף חוויות ואתגרים בסביבה בטוחה ולא שיפוטית</li>
                  <li>למידה הדדית מניסיון של הורים אחרים</li>
                  <li>קבלת כלים מעשיים מהמנחה</li>
                  <li>חיזוק ותמיכה רגשית</li>
                  <li>מפגש קבוע שיוצר מחויבות ועקביות</li>
                </ul>
              </div>

              <h2 style={{ marginTop: 48 }}>קבוצות פעילות ברחבי הארץ</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />

              <div style={{ overflowX: 'auto' }}>
                <table className="groups-table">
                  <thead>
                    <tr>
                      <th>עיר</th>
                      <th>סוג</th>
                      <th>יום</th>
                      <th>שעה</th>
                      <th>מנחה</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {groups.map((g, i) => (
                      <tr key={i}>
                        <td><strong>{g.city}</strong></td>
                        <td>
                          <span className={`type-badge ${g.type === 'נשים' ? 'women' : 'men'}`}>
                            {g.type}
                          </span>
                        </td>
                        <td>{g.day}</td>
                        <td>{g.time}</td>
                        <td>{g.facilitator}</td>
                        <td><button className="btn btn-outline event-btn">הצטרפות</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="inner-sidebar">
              <div className="sidebar-card">
                <h3>רוצים להצטרף?</h3>
                <p>פנו אלינו ונמצא עבורכם את הקבוצה המתאימה.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  💬 שלחו הודעה
                </a>
              </div>
              <div className="sidebar-card">
                <h3>אין קבוצה באזורכם?</h3>
                <p>אנחנו כל הזמן פותחים קבוצות חדשות. הירשמו לרשימת ההמתנה.</p>
                <button className="btn btn-outline" style={{ width: '100%', marginTop: 16 }}>
                  רשימת המתנה
                </button>
              </div>
              <div className="sidebar-card">
                <h3>רוצים להנחות קבוצה?</h3>
                <p>בוגרי הקורס של אהבת עולם יכולים להנחות קבוצות תמיכה.</p>
                <a href="/הקורס" className="btn btn-outline" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  פרטים על הקורס
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .groups-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .groups-table th { background: var(--primary); color: #fff; padding: 12px 14px; text-align: right; font-weight: 600; }
        .groups-table td { padding: 12px 14px; border-bottom: 1px solid var(--border); }
        .groups-table tr:hover td { background: rgba(26,61,92,0.04); }
        .type-badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .type-badge.women { background: #fce8f3; color: #a82372; }
        .type-badge.men { background: #e8f0fc; color: #1a3d8f; }
      `}</style>
    </div>
  )
}
