import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu } from '../../molecules/NavMenu/NavMenu'
import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle'
import './Header.scss'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Henrique<br />Oliveira
        </Link>
        <NavMenu id="main-nav" open={menuOpen} onNavigate={() => setMenuOpen(false)} />
        <div className="header__actions">
          <ThemeToggle />
          <button
            type="button"
            className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}