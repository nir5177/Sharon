import { Link } from 'react-router-dom'
import './InnerPage.css'

const features = [
  { icon: '💬', title: 'קבוצת וואטסאפ', desc: 'קהילה תוססת של אלפי הורים, זמינה 24/7. שאלו, שתפו, קבלו מענה מיידי מהורים שחוו את אותה הדרך.' },
  { icon: '📧', title: 'רשימת דיוור', desc: 'עדכונים שבועיים, מאמרים מקצועיים ועלון שבת – ישירות לתיבת המייל שלכם.' },
  { icon: '🕯️', title: 'מענה כל שישי בלילה', desc: 'כל ערב שישי, לפני כניסת השבת, נעמי סובול וצוות הקהילה זמינים לשאלות ולתמיכה.' },
  { icon: '🎓', title: 'תכנים מקצועיים', desc: 'גישה לארכיון של מאות מאמרים, הרצאות וסרטונים בנושא חינוך ילדים מתמודדים.' },
  { icon: '🤲', title: 'תמיכה ולא שיפוטיות', desc: 'סביבה בטוחה, מקבלת ותומכת. אין שיפוטיות – רק אהבה, הבנה ורצון לעזור.' },
  { icon: '📍', title: 'פגישות פנים-אל-פנים', desc: 'מפגשי מועדון אחת לחודשיים ברחבי הארץ, לפגישה אמיתית עם הקהילה.' },
]

export default function HaKehila() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>הקהילה</h1>
          <p>מרכז עזרה ראשונה לכל הורה – קהילה תומכת, חמה ולא שיפוטית</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">הקהילה שלנו</h2>
          <div className="divider" />
          <p className="section-subtitle">
            הקהילה של אהבת עולם היא המקום שבו הורים לנוער מתמודד מוצאים אחד את השני –
            ומגלים שהם לא לבד. זהו מרכז עזרה ראשונה: מקצועי, חם ותמיד זמין.
          </p>

          <div className="grid-3">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section style={{ background: 'var(--primary)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,4vw,40px)', marginBottom: 16 }}>
            הצטרפו לקהילה היום
          </h2>
          <p style={{ color: '#9bafc4', fontSize: 18, maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.8 }}>
            ההצטרפות חינמית ופתוחה לכל הורה. אין צורך בהרשמה מסובכת –
            פשוט לחצו על הכפתור ובואו אלינו.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-primary">
              💬 הצטרפו לקבוצת הוואטסאפ
            </a>
            <Link to="/המועדון" className="btn btn-white">
              לפרטים על המועדון
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="inner-grid">
            <div>
              <h2>מה אומרים חברי הקהילה?</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { t: 'הקהילה הזאת הצילה אותי. בשעות הכי קשות, מצאתי שם אנשים שמבינים, שלא שופטים, שיודעים מה אני עוברת. לא ידעתי שיש עוד הורים כאלו.', n: 'מרים ג., רחובות' },
                  { t: 'כל ערב שישי אני יודע שיש מישהו שזמין. זה נותן לי שקט – גם כשאני לא צריך לפנות. פשוט לדעת שאני לא לבד.', n: 'יוסף ב., אשדוד' },
                  { t: 'עלון השבת הוא הדבר שאני הכי מצפה לו כל שבוע. כל פעם יש משהו שמדבר ישירות לליבי.', n: 'עדינה מ., ירושלים' },
                ].map((q, i) => (
                  <div key={i} className="testimonial-card card" style={{ padding: '24px 28px' }}>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.8 }}>"{q.t}"</p>
                    <p style={{ marginTop: 12, fontWeight: 700, color: 'var(--primary)', fontSize: 14 }}>— {q.n}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="inner-sidebar">
              <div className="sidebar-card">
                <h3>הצטרפו עכשיו</h3>
                <p>הצטרפות חינמית לקהילת הוואטסאפ של אהבת עולם.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  הצטרפו לוואטסאפ
                </a>
              </div>
              <div className="sidebar-card">
                <h3>עלון שבת</h3>
                <p>הירשמו לקבלת העלון השבועי שלנו למייל.</p>
                <form onSubmit={e => e.preventDefault()} style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input type="email" placeholder="כתובת מייל" style={{ padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'Heebo,sans-serif', direction: 'rtl', outline: 'none', fontSize: 14 }} />
                  <button className="btn btn-outline" type="submit" style={{ width: '100%' }}>הירשמו חינם</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
