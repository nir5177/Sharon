import './InnerPage.css'

const therapists = [
  { name: 'ד"ר מיכל לוי', spec: 'פסיכולוגית קלינית', areas: 'נוער, חרדה, דיכאון', city: 'תל אביב', emoji: '👩‍⚕️' },
  { name: 'עמית כהן', spec: 'עובד סוציאלי קליני', areas: 'משפחה, הורות, גבולות', city: 'ירושלים', emoji: '👨‍💼' },
  { name: 'ד"ר נועה שמיר', spec: 'פסיכיאטרית ילדים ונוער', areas: 'ADHD, רצף אוטיסטי, מצב רוח', city: 'חיפה', emoji: '👩' },
  { name: 'גיל ברק', spec: 'מטפל בפסיכודרמה', areas: 'ביטוי עצמי, קבוצות, משפחה', city: 'תל אביב', emoji: '👨' },
  { name: 'ריקי אשכנזי', spec: 'מטפלת בCBT', areas: 'חרדה, פחדים, מחשבות שליליות', city: 'פתח תקווה', emoji: '👩‍🦱' },
  { name: 'יהודה פרץ', spec: 'פסיכולוג חינוכי', areas: 'קשיי למידה, קשב וריכוז, בית ספר', city: 'באר שבע', emoji: '👨‍🏫' },
  { name: 'נורית גרין', spec: 'מטפלת בתנועה', areas: 'גוף ונפש, טראומה, ביטוי', city: 'רחובות', emoji: '👩‍🦳' },
  { name: 'אריה שטרן', spec: 'מטפל זוגי ומשפחתי', areas: 'זוגיות, הורות משותפת, גירושין', city: 'נתניה', emoji: '🧔' },
  { name: 'דינה מזרחי', spec: 'מטפלת באמנות', areas: 'ביטוי יצירתי, ילדים, נוער', city: 'ראשון לציון', emoji: '👩‍🎨' },
]

export default function Metaplim() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <h1>מטפלים</h1>
          <p>רשימת מטפלים מומחים שעובדים עם בני נוער מתמודדים ועם משפחותיהם</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="inner-grid">
            <div className="inner-main">
              <h2>מטפלים מומלצים</h2>
              <div className="divider" style={{ margin: '14px 0 24px' }} />
              <p>
                המטפלים ברשימה זו הם אנשי מקצוע שהוכשרו והתנסו בעבודה עם בני נוער מתמודדים ועם משפחותיהם.
                אנחנו ממליצים עליהם על סמך ניסיון עצמי של הורים מהקהילה שלנו.
              </p>
              <div className="highlight-box" style={{ marginTop: 24, marginBottom: 32 }}>
                <p style={{ fontSize: 14 }}>
                  <strong>שימו לב:</strong> ההמלצה על מטפל היא אישית ואינה תחליף לבדיקה עצמאית.
                  אנו ממליצים לקבוע פגישת היכרות לפני התחלת טיפול.
                </p>
              </div>

              <div className="people-grid">
                {therapists.map((t) => (
                  <div key={t.name} className="person-card">
                    <div className="person-avatar">{t.emoji}</div>
                    <h3>{t.name}</h3>
                    <div className="person-role">{t.spec}</div>
                    <div className="person-area">{t.areas}</div>
                    <div className="person-city">📍 {t.city}</div>
                    <button className="btn btn-outline" style={{ marginTop: 14, width: '100%', fontSize: 13, padding: '8px 16px' }}>
                      קבעו פגישה
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <aside className="inner-sidebar">
              <div className="sidebar-card">
                <h3>צריכים המלצה אישית?</h3>
                <p>יועצי אהבת עולם יכולים לעזור למצוא את המטפל המתאים לכם.</p>
                <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: 16, display: 'block', textAlign: 'center' }}>
                  💬 פנו לייעוץ
                </a>
              </div>
              <div className="sidebar-card">
                <h3>אתם מטפלים?</h3>
                <p>אנחנו מוסיפים מטפלים לרשימה לאחר בדיקה ואישור. צרו קשר לפרטים.</p>
                <button className="btn btn-outline" style={{ width: '100%', marginTop: 16 }}>
                  הגשת מועמדות
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
