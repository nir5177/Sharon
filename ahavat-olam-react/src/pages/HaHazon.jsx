import { Link } from 'react-router-dom'
import './InnerPage.css'

const values = [
  { icon: '❤️', title: 'אהבה ללא תנאי', desc: 'אנחנו מאמינים שהורים אוהבים את ילדיהם ללא תנאי, וכך גם אנו מתייחסים לכל הורה שפונה אלינו.' },
  { icon: '🚫', title: 'ללא שיפוטיות', desc: 'אין לנו שיפוטיות כלפי הורים, ילדים או בחירות. כל אחד עושה ככל יכולתו עם הכלים שיש לו.' },
  { icon: '🎓', title: 'ידע מקצועי', desc: 'אנחנו מביאים ידע מקצועי עדכני ממיטב המומחים בתחום – ומשלבים אותו עם ניסיון אישי ואמיתי.' },
  { icon: '🤝', title: 'קהילה', desc: 'הכוח של הקהילה גדול מהכוח של כל אחד לבד. יחד, הורים מוצאים תמיכה, אומץ וחוכמה.' },
  { icon: '🌱', title: 'צמיחה', desc: 'אנחנו מאמינים ביכולת של כל הורה וכל ילד לצמוח, להשתנות ולבנות מחדש מערכות יחסים.' },
  { icon: '🕊️', title: 'תקווה', desc: 'גם בנקודות הקשות ביותר – יש תקווה. אנחנו כאן כדי להחזיר אותה ולשמר אותה.' },
]

export default function HaHazon() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>החזון שלנו</h1>
          <p>הסיפור, הערכים והאנשים מאחורי אהבת עולם</p>
        </div>
      </div>

      {/* Founder story */}
      <section className="section">
        <div className="container">
          <div className="inner-grid">
            <div className="inner-main">
              <h2>הסיפור של נעמי סובול</h2>
              <div className="divider" style={{ margin: '14px 0 28px' }} />
              <p>
                לאחר שנים של מסע אישי שבו נעמי סובול חוותה באופן עצמי את ההתמודדות עם ילד מתמודד,
                היא הבינה שמשהו חסר: ההורים.
              </p>
              <p style={{ marginTop: 16 }}>
                השיח הציבורי, הטיפולים והמשאבים – כולם מופנים לבני הנוער עצמם. אבל ההורים נשארים
                לבד, מבולבלים, אשמים, ולעיתים שבורים. נעמי ידעה שהפתרון האמיתי מתחיל כאן – בריפוי
                מערכות היחסים המשפחתיות ובבניית מחדש של אמון ושייכות.
              </p>
              <p style={{ marginTop: 16 }}>
                מתוך הניסיון האישי הזה, ומתוך הכשרה מקצועית עמוקה – תואר שני בטיפול באמנות,
                התמחות בביבליותרפיה ופסיכותרפיה – נעמי הקימה את אהבת עולם: מקום שנותן לכל הורה
                את מה שהיא עצמה חיפשה.
              </p>
              <p style={{ marginTop: 16 }}>
                היום, אהבת עולם היא קהילה של אלפי הורים, עשרות יועצים ומנחים, ומאות קבוצות תמיכה
                ברחבי הארץ. אבל הלב נשאר אותו לב: כל הורה ראוי לתמיכה, לאהבה ולידע.
              </p>
            </div>

            <aside className="inner-sidebar">
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                color: '#fff',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>👩</div>
                <h3 style={{ color: '#fff', marginBottom: 4, fontSize: 20 }}>נעמי סובול</h3>
                <p style={{ color: 'var(--accent-light)', fontSize: 14, marginBottom: 16 }}>מייסדת אהבת עולם</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 16, textAlign: 'right' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {['M.A. בטיפול באמנות', 'מתמחה בביבליותרפיה', 'מחברת הספר "קינטסוגי"', 'מרצה ומנחה מוסמכת'].map((item) => (
                      <li key={item} style={{ fontSize: 13, color: '#9bafc4', paddingRight: 16, position: 'relative' }}>
                        <span style={{ position: 'absolute', right: 0, color: 'var(--accent-light)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">הייעוד שלנו</h2>
          <div className="divider" />
          <p className="section-subtitle">
            אנחנו מאמינים שהורים הם החוליה החשובה ביותר בתהליך הריפוי של ילדיהם.
            לכן אנחנו מקדישים את כל המשאבים שלנו כדי לחזק אותם.
          </p>
          <div className="grid-3">
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,4vw,40px)', marginBottom: 16 }}>
            בואו להיות חלק מהקהילה
          </h2>
          <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.8 }}>
            אתם לא לבד. יש קהילה שמחכה לכם, עם ידע, תמיכה ואהבה ללא תנאי.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/הקהילה" className="btn btn-white">הצטרפו לקהילה</Link>
            <Link to="/המועדון" className="btn" style={{ border: '2px solid rgba(255,255,255,0.8)', background: 'transparent', color: '#fff' }}>
              המועדון הקרוב
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
