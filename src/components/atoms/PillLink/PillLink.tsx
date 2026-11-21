import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './PillLink.scss'

type PillLinkProps = {
  label: string
  to?: string
  href?: string
  variant?: 'outline' | 'solid'
  arrow?: 'right' | 'up-right'
  icon?: ReactNode // ícone antes do texto (ex.: ícone da marca)
  iconHoverColor?: string // cor do ícone no hover (ex.: cor da marca)
  className?: string
}

export function PillLink({
  label,
  to,
  href,
  variant = 'outline',
  arrow,
  icon,
  iconHoverColor,
  className = '',
}: PillLinkProps) {
  const classes = `pill-link pill-link--${variant} ${className}`.trim()
  const style = iconHoverColor ? ({ '--icon-hover': iconHoverColor } as CSSProperties) : undefined
  const Icon = arrow === 'right' ? ArrowRight : arrow === 'up-right' ? ArrowUpRight : null

  const content = (
    <>
      {icon && <span className="pill-link__icon">{icon}</span>}
      {label}
      {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
    </>
  )

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