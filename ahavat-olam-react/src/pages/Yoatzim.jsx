import './InnerPage.css'

const advisors = [
  { name: 'נעמי סובול', role: 'מייסדת ומנהלת', area: 'הורות, ביבליותרפיה, טיפול באמנות', city: 'ירושלים', emoji: '👩' },
  { name: 'ד"ר רחל כהן', role: 'יועצת בכירה', area: 'פסיכולוגיה קלינית, נוער בסיכון', city: 'תל אביב', emoji: '👩‍⚕️' },
  { name: 'אבי לוי', role: 'יועץ ומנחה', area: 'גברים ואבהות, משפחה', city: 'חיפה', emoji: '👨' },
  { name: 'שרה ברגר', role: 'יועצת ומנחה', area: 'קבוצות נשים, תקשורת', city: 'בני ברק', emoji: '👩‍🦱' },
  { name: 'יוסף אברהם', role: 'יועץ', area: 'ממד רוחני, אמונה והורות', city: 'ירושלים', emoji: '🧔' },
  { name: 'מרים זיו', role: 'יועצת', area: 'מתבגרים, בריאות נפש', city: 'פתח תקווה', emoji: '👩‍🦳' },
  { name: 'דוד שפירא', role: 'יועץ', area: 'הורות ממוקדת, גבולות', city: 'אשדוד', emoji: '👨‍🦲' },
  { name: 'לאה גרינברג', role: 'יועצת', area: 'עצמאות רגשית, ריפוי', city: 'רחובות', emoji: '👩‍🦰' },
  { name: 'נתן כץ', role: 'יועץ', area: 'ילדים על הרצף, משפחה', city: 'נתניה', emoji: '👨‍🦱' },
]

export default function Yoatzim() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>יועצים</h1>
          <p>צוות יועצים נבחר – בוגרי תכנית ההכשרה של אהבת עולם ואנשי מקצוע</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">הצוות שלנו</h2>
          <div className="divider" />
          <p className="section-subtitle">
            כל אחד מיועצינו הוא בוגר תכנית ההכשרה של אהבת עולם – עם ניסיון אישי, ידע מקצועי
            ולב שלם. הם כאן בשבילכם.
          </p>

          <div className="people-grid">
            {advisors.map((a) => (
              <div key={a.name} className="person-card">
                <div className="person-avatar">{a.emoji}</div>
                <h3>{a.name}</h3>
                <div className="person-role">{a.role}</div>
                <div className="person-area">{a.area}</div>
                <div className="person-city">📍 {a.city}</div>
                <button className="btn btn-outline" style={{ marginTop: 14, width: '100%', fontSize: 13, padding: '8px 16px' }}>
                  פנו ליועץ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f0f7ff', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>רוצים להצטרף לצוות?</h2>
          <div className="divider" />
          <p style={{ color: 'var(--text-light)', maxWidth: 560, margin: '0 auto 32px', fontSize: 16, lineHeight: 1.8 }}>
            בוגרי הקורס של אהבת עולם מוזמנים להצטרף לצוות היועצים שלנו ולעזור להורים אחרים.
          </p>
          <a href="/הקורס" className="btn btn-primary">למידע על הקורס</a>
        </div>
      </section>
    </div>
  )
}
