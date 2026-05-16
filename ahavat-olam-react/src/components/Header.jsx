import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'דף הבית', path: '/' },
  { label: 'המועדון', path: '/המועדון' },
  { label: 'הקהילה', path: '/הקהילה' },
  { label: 'קבוצות תמיכה', path: '/קבוצות-תמיכה' },
  { label: 'יועצים', path: '/יועצים' },
  { label: 'מטפלים', path: '/מטפלים' },
  { label: 'הקורס', path: '/הקורס' },
  { label: 'ארכיון וידאו', path: '/podcast' },
  { label: 'החזון שלנו', path: '/החזון-שלנו' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📞 שלחו הודעה: <strong>050-123-4567</strong></span>
          <span>✉️ <strong>info@ahavat-olam.org.il</strong></span>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-mark">
              <span className="logo-heart">♥</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">אהבת עולם</span>
              <span className="logo-tagline">להורים לנוער מתמודד</span>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'nav-link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/הקהילה" className="btn btn-primary header-cta">הצטרפו אלינו</Link>
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="תפריט"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/הקהילה" className="mobile-cta" onClick={() => setMenuOpen(false)}>
                הצטרפו אלינו
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
