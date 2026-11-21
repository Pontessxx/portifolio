import { Link } from 'react-router-dom'
import { NavMenu } from '../../molecules/NavMenu/NavMenu'
import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle'
import './Header.scss'

export function Header() {
  return (
    <header className="header">
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