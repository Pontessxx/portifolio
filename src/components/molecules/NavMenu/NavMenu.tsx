import { NavItem } from '../../atoms/NavItem/NavItem'
import { navLinks } from '../../../data/navLink'
import './NavMenu.scss'

type NavMenuProps = {
  id?: string
  open?: boolean // só afeta o mobile: mostra/esconde o painel do menu hambúrguer
  onNavigate?: () => void
}

export function NavMenu({ id, open = false, onNavigate }: NavMenuProps) {
  return (
    <nav id={id} className={`nav-menu${open ? ' nav-menu--open' : ''}`} aria-label="Seções">
      <ul className="nav-menu__list">
        {navLinks.map((link) => (
          <li key={link.to} className="nav-menu__item" onClick={onNavigate}>
            <NavItem to={link.to} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
