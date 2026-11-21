import { useTheme } from '../../../hooks/useTheme'
import './ThemeToggle.scss'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      {theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
    </button>
  )
}