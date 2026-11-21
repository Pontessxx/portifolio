import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './PillLink.scss'

type PillLinkProps = {
  label: string
  to?: string
  href?: string
  variant?: 'outline' | 'solid'
  arrow?: 'right' | 'up-right'
  className?: string
}

export function PillLink({ label, to, href, variant = 'outline', arrow, className = '' }: PillLinkProps) {
  const classes = `pill-link pill-link--${variant} ${className}`.trim()
  const Icon = arrow === 'right' ? ArrowRight : arrow === 'up-right' ? ArrowUpRight : null

  const content = (
    <>
      {label}
      {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
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
        target={isWeb ? '_blank' : undefined}
        rel={isWeb ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return <span className={`${classes} pill-link--static`}>{content}</span>
}