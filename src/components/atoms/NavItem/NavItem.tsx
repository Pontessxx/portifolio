import { Link, useLocation } from 'react-router-dom'
import './NavItem.scss'

type NavItemProps = {
  to: string
  label: string
}

export function NavItem({ to, label }: NavItemProps) {
  const { pathname } = useLocation()
  const isRoute = !to.includes('#')
  const isActive = isRoute && pathname === to

  return (
    <Link
      to={to}
      className={`nav-item${isActive ? ' nav-item--active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}