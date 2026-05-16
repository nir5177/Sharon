import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-heart">♥</span>
              <span className="footer-logo-name">אהבת עולם</span>
            </div>
            <p>
              העוצמה, הידע והכח להורים לנוער מתמודד. אנחנו מאמינים שההורים הם
              החוליה החשובה ביותר בתהליך הריפוי.
            </p>
            <div className="footer-social">
              <a href="https://www.youtube.com/@ahavatolam-horim" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
              </a>
              <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2-.4-1.1-.6-1.5-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.1 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3zm-5.4 7.3h-.1A9.9 9.9 0 0 1 6.8 20l-.3-.2-3.4.9.9-3.3-.2-.3A9.9 9.9 0 0 1 2 12.1C2 6.6 6.5 2.1 12.1 2.1c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.5-4.5 10-10 10zm8.6-18.5A11.9 11.9 0 0 0 12.1 0C5.4 0 0 5.4 0 12.1c0 2.1.6 4.2 1.6 6L0 24l6.1-1.6c1.8 1 3.8 1.5 5.9 1.5 6.7 0 12.1-5.4 12.1-12.1 0-3.2-1.3-6.3-3.4-8.6z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>ניווט</h4>
            <ul>
              <li><Link to="/">דף הבית</Link></li>
              <li><Link to="/המועדון">המועדון</Link></li>
              <li><Link to="/הקהילה">הקהילה</Link></li>
              <li><Link to="/קבוצות-תמיכה">קבוצות תמיכה</Link></li>
              <li><Link to="/החזון-שלנו">החזון שלנו</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>שירותים</h4>
            <ul>
              <li><Link to="/יועצים">יועצים</Link></li>
              <li><Link to="/מטפלים">מטפלים</Link></li>
              <li><Link to="/הקורס">הקורס</Link></li>
              <li><Link to="/podcast">ארכיון וידאו</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>צרו קשר</h4>
            <ul>
              <li>📞 050-123-4567</li>
              <li>✉️ info@ahavat-olam.org.il</li>
              <li>💬 קהילת וואטסאפ – הצטרפו עכשיו</li>
            </ul>
            <Link to="/הקהילה" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-block' }}>
              הצטרפו אלינו
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} אהבת עולם. כל הזכויות שמורות.</p>
          <p>נוסדה על ידי <strong>נעמי סובול</strong></p>
        </div>
      </div>
    </footer>
  )
}
