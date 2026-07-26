import { useState } from 'react'
import { NAV } from '../data/site'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="adno-nav">
      <div className="adno-wrap adno-nav__inner">
        <a className="adno-brand" href="#top" onClick={closeMenu}>
          <span className="adno-brand__mark">
            Adno<span></span>Para
          </span>
        </a>
        <div className={`adno-navlinks${menuOpen ? ' is-open' : ''}`}>
          {NAV.map((link) => (
            <a key={link.href} className="adno-navlink" href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="adno-btn adno-btn--primary adno-btn--sm" href="#contact" onClick={closeMenu}>
            Book a consult
          </a>
        </div>
        <button
          className="adno-navtoggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
            {menuOpen ? <path d="M3 3 L15 15 M15 3 L3 15" /> : <path d="M2 5 H16 M2 9 H16 M2 13 H16" />}
          </svg>
        </button>
      </div>
    </nav>
  )
}