import { useState } from 'react'
import { NAV } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

// Module scope keeps the array reference stable across renders, so the
// observer effect inside useActiveSection isn't torn down every paint.
const SECTION_IDS = NAV.map((l) => l.href.replace('#', ''))

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const active = useActiveSection(SECTION_IDS)

  return (
    <nav className="adno-nav">
      <div className="adno-wrap adno-nav__inner">
        <a className="adno-brand" href="#top" onClick={closeMenu} aria-label="Adnopara — home">
          <img
            className="adno-brand__logo"
            src="/adnopara-wordmark-dark.png"
            alt="Adnopara"
            width="480"
            height="168"
          />
        </a>
        <div className={`adno-navlinks${menuOpen ? ' is-open' : ''}`}>
          {NAV.map((link) => {
            const isActive = link.href === `#${active}`
            return (
              <a
                key={link.href}
                className={`adno-navlink${isActive ? ' is-active' : ''}`}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            )
          })}
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