import { Link } from 'react-router-dom'
import './InnerPage.css'

const events = [
  { date: 'ינואר 2025', city: 'ירושלים', venue: 'מרכז תרבות ירושלים', topic: 'כלים מעשיים לתקשורת עם ילדכם' },
  { date: 'מרץ 2025', city: 'תל אביב', venue: 'בית ציוני אמריקה', topic: 'הבנת עולמו הפנימי של הנוער המתמודד' },
  { date: 'מאי 2025', city: 'חיפה', venue: 'מרכז קהילתי נווה שאנן', topic: 'גבולות מתוך אהבה – כיצד?' },
  { date: 'יולי 2025', city: 'בני ברק', venue: 'היכל הרצוג', topic: 'בניית אמון מחדש בתוך המשפחה' },
  { date: 'ספטמבר 2025', city: 'רחובות', venue: 'מרכז קהילתי רחובות', topic: 'מה באמת עובד? ניסיון מהשטח' },
  { date: 'נובמבר 2025', city: 'אשדוד', venue: 'מרכז תרבות אשדוד', topic: 'שומרים על עצמנו – הטיפול בהורה' },
]

export default function HaMoadon() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>המועדון</h1>
          <p>מפגשי חיזוק והכוונה להורים – אחת לחודשיים, בפריסה ארצית</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="inner-grid">
            <div className="inner-main">
              <h2>מה זה המועדון?</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <p>
                המועדון הוא לב ליבה של אהבת עולם. אחת לחודשיים אנחנו מתכנסים יחד – הורים מרחבי הארץ –
                למפגש עשיר ומחזק שמעניק ידע מעשי, תמיכה הדדית וכלים שתוכלו לקחת הביתה.
              </p>
              <p style={{ marginTop: 16 }}>
                כל מפגש כולל הרצאה של מומחה, שאלות ותשובות, ושיתוף מניסיון אישי של הורים שכבר עברו חלק
                מהדרך. אתם לא לבד – ויחד אנחנו חזקים יותר.
              </p>

              <div className="highlight-box" style={{ marginTop: 32 }}>
                <h3>מה תקבלו במפגש?</h3>
                <ul className="check-list">
                  <li>הרצאה מאת מומחה בתחום הנוער המתמודד</li>
                  <li>כלים מעשיים לשיפור התקשורת עם ילדכם</li>
                  <li>מענה על שאלות אישיות</li>
                  <li>חיבור לרשת הורים תומכת</li>
                  <li>חוברת מסכמת ומשאבים נוספים</li>
                </ul>
              </div>

              <h2 style={{ marginTop: 48 }}>לוח מפגשים 2025</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <div className="events-list">
                {events.map((e, i) => (
                  <div key={i} className="event-item">
                    <div className="event-date">{e.date}</div>
                    <div className="event-details">
                      <strong>{e.city} – {e.venue}</strong>
                      <span>{e.topic}</span>
                    </div>
                    <button className="btn btn-outline event-btn">הרשמה</button>
                  </div>
                ))}
              </div>
            </div>

            <aside className="inner-sidebar">
              <div className="sidebar-card">
                <h3>הצטרפו למפגש הקרוב</h3>
                <p>ההרשמה חינמית ופתוחה לכל הורה. מקומות מוגבלים.</p>
                <Link to="/הקהילה" className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
                  הרשמה למפגש
                </Link>
              </div>
              <div className="sidebar-card" style={{ marginTop: 20 }}>
                <h3>שאלות?</h3>
                <p>אנחנו כאן לכל שאלה. כתבו לנו ונחזור אליכם בהקדם.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: 16 }}>
                  💬 WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
