import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu } from '../../molecules/NavMenu/NavMenu'
import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle'
import './Header.scss'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

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
        <NavMenu />
        <ThemeToggle />
      </div>
    </header>
  )
}