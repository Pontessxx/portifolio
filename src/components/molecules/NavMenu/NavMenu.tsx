import { NavItem } from '../../atoms/NavItem/NavItem'
import { navLinks } from '../../../data/navLink'
import './NavMenu.scss'

export function NavMenu() {
  return (
    <nav className="nav-menu" aria-label="Seções">
      <ul className="nav-menu__list">
        {navLinks.map((link) => (
          <li key={link.to} className="nav-menu__item">
            <NavItem to={link.to} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}