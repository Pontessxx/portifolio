import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './PillLink.scss'

type PillLinkProps = {
  label: string
  to?: string
  href?: string
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg' // altura: sm = --space-xl (40), md = --space-2xl (48), lg = --space-3xl (56)
  arrow?: 'right' | 'up-right'
  icon?: ReactNode // ícone antes do texto (ex.: ícone da marca)
  iconHoverColor?: string // cor do ícone no hover (ex.: cor da marca)
  onClick?: () => void // sem to/href vira botão (ex.: filtros)
  pressed?: boolean // estado do botão: marcado fica preenchido
  className?: string
}

export function PillLink({
  label,
  to,
  href,
  variant = 'outline',
  size = 'sm',
  arrow,
  icon,
  iconHoverColor,
  onClick,
  pressed,
  className = '',
}: PillLinkProps) {
  const classes = `pill-link pill-link--${variant} pill-link--${size} ${className}`.trim()
  const style = iconHoverColor ? ({ '--icon-hover': iconHoverColor } as CSSProperties) : undefined
  const Icon = arrow === 'right' ? ArrowRight : arrow === 'up-right' ? ArrowUpRight : null

  const content = (
    <>
      {icon && <span className="pill-link__icon">{icon}</span>}
      {label}
      {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
    </>
  )

  if (onClick) {
    const buttonClasses = `pill-link pill-link--${pressed ? 'solid' : variant} pill-link--${size} ${className}`.trim()
    return (
      <button type="button" className={buttonClasses} style={style} onClick={onClick} aria-pressed={pressed}>
        {content}
      </button>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {content}
      </Link>
    )
  }

  if (href) {
    const isWeb = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target={isWeb ? '_blank' : undefined}
        rel={isWeb ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return <span className={`${classes} pill-link--static`}>{content}</span>
}