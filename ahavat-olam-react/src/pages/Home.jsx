import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: '🏠',
    title: 'המועדון',
    desc: 'מפגשי חיזוק והכוונה להורים אחת לחודשיים בפריסה ארצית. מקום לפגוש הורים אחרים, לשמוע מומחים ולצאת עם כלים מעשיים.',
    link: '/המועדון',
  },
  {
    icon: '👥',
    title: 'הקהילה',
    desc: 'מרכז עזרה ראשונה לכל הורה. קהילת ווטסאפ תומכת, מענה כל יום שישי בלילה ותמיכה שוטפת מהורים שעברו את הדרך.',
    link: '/הקהילה',
  },
  {
    icon: '🤝',
    title: 'קבוצות תמיכה',
    desc: 'קבוצות תמיכה לנשים ולגברים בנפרד, בערים שונות ברחבי הארץ, בהנחיית מנחים מוסמכים בוגרי אהבת עולם.',
    link: '/קבוצות-תמיכה',
  },
  {
    icon: '💡',
    title: 'יועצים',
    desc: 'צוות יועצים נבחר – בוגרי תכנית ההכשרה של אהבת עולם ואנשי מקצוע מרחבי הארץ – זמינים לענות על כל שאלה.',
    link: '/יועצים',
  },
  {
    icon: '🩺',
    title: 'מטפלים',
    desc: 'רשימת מטפלים מומחים להמלצה ולהפניה, אשר הוכשרו והתנסו בעבודה עם בני נוער מתמודדים ועם משפחותיהם.',
    link: '/מטפלים',
  },
  {
    icon: '📚',
    title: 'הקורס',
    desc: 'תכנית הכשרה מקיפה למנחי קבוצות תמיכה ויועצים לעבודה עם הורים לנוער מתמודד. למדו מהניסיון שלנו.',
    link: '/הקורס',
  },
]

const stats = [
  { value: '5,000+', label: 'הורים בקהילה' },
  { value: '120+', label: 'מפגשי מועדון' },
  { value: '60+', label: 'קבוצות תמיכה' },
  { value: '200+', label: 'יועצים מוכשרים' },
]

const testimonials = [
  {
    text: 'מצאתי כאן קהילה שמבינה אותי. לא הייתי מאמינה שיש עוד הורים שחווים את מה שאני חווה. אהבת עולם נתנה לי כוח להמשיך.',
    name: 'שרה כ.',
    city: 'ירושלים',
  },
  {
    text: 'המועדון שינה את חיי. למדתי כלים מעשיים שעזרו לי לבנות מחדש את הקשר עם הבן שלי. המנחים מקצועיים ואמיתיים.',
    name: 'דוד מ.',
    city: 'תל אביב',
  },
  {
    text: 'הקהילה זמינה 24/7, תמיד יש מישהו שמבין ושיודע לעזור. זאת עזרה ראשונה אמיתית בשעות הקשות ביותר.',
    name: 'רחל ל.',
    city: 'חיפה',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-eyebrow">ברוכים הבאים לאהבת עולם</p>
          <h1>העוצמה, הידע והכח<br />להורים לנוער מתמודד</h1>
          <p className="hero-sub">
            אנחנו מאמינים שההורים הם החוליה החשובה ביותר בתהליך הריפוי.
            לכן אנו מעניקים לכם ליווי מלא, חיזוק והכוונה – מתוך ידע מקצועי, אהבה ולא-שיפוטיות.
          </p>
          <div className="hero-btns">
            <Link to="/הקהילה" className="btn btn-primary">הצטרפו לקהילה</Link>
            <Link to="/החזון-שלנו" className="btn btn-white">הכירו אותנו</Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">במה אנחנו יכולים לעזור?</h2>
          <div className="divider" />
          <p className="section-subtitle">
            אהבת עולם מציעה מגוון רחב של שירותים ותמיכה – כדי שתמצאו את המסגרת שמתאימה לכם
          </p>
          <div className="grid-3">
            {services.map((s) => (
              <Link to={s.link} key={s.title} className="card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-more">קראו עוד ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision strip */}
      <section className="vision-strip">
        <div className="container vision-inner">
          <div className="vision-text">
            <h2>הסיפור שלנו</h2>
            <div className="divider" style={{ margin: '14px 0 24px' }} />
            <p>
              לאחר שנים של מסע אישי, <strong>נעמי סובול</strong> – מטפלת בביבליותרפיה, בעלת תואר שני בטיפול באמנות
              ומחברת הספר "קינטסוגי" – הקימה את אהבת עולם מתוך רצון עמוק לתת לכל הורה את מה שהיא עצמה
              חיפשה: ידע מקצועי, קהילה תומכת, ואהבה ללא שיפוטיות.
            </p>
            <p style={{ marginTop: 16 }}>
              השיח הציבורי מתמקד בבני הנוער המתמודדים – אך הפתרון האמיתי טמון בריפוי מערכות היחסים
              המשפחתיות ובבניית מחדש של אמון ושייכות.
            </p>
            <Link to="/החזון-שלנו" className="btn btn-primary" style={{ marginTop: 28 }}>
              קראו על החזון שלנו
            </Link>
          </div>
          <div className="vision-image">
            <div className="vision-image-placeholder">
              <span className="vision-heart">♥</span>
              <span>נעמי סובול</span>
              <span className="vision-title-sub">מייסדת אהבת עולם</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">מה הורים אומרים?</h2>
          <div className="divider" />
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card testimonial-card">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2>עלון שבת שבועי</h2>
            <p>
              קבלו כל שבוע את עלון השבת של אהבת עולם – תכנים מקצועיים, חיזוק ומאמרים של נעמי סובול
              שישמחו וייתנו לכם כוח לשבוע שמתחיל.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="כתובת מייל" className="newsletter-input" />
            <button type="submit" className="btn btn-primary">הירשמו חינם</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>מוכנים להצטרף?</h2>
          <p>הקהילה שלנו פתוחה לכל הורה. אין שיפוטיות – רק אהבה, ידע ותמיכה.</p>
          <div className="cta-btns">
            <Link to="/הקהילה" className="btn btn-white">הצטרפו לקהילה</Link>
            <Link to="/המועדון" className="btn btn-outline-white">לפרטים על המועדון</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
