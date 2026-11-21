import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './CircleButton.scss'

const icons = {
  right: ArrowRight,
  'up-right': ArrowUpRight,
}

type CircleButtonProps = {
  icon: keyof typeof icons
  ariaLabel: string
  to?: string
  href?: string
  variant?: 'solid' | 'outline'
}

export function CircleButton({ icon, ariaLabel, to, href, variant = 'solid' }: CircleButtonProps) {
  const Icon = icons[icon]
  const content = <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
  const classes = `circle-button circle-button--${variant}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  const isWeb = href?.startsWith('http')

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      target={isWeb ? '_blank' : undefined}
      rel={isWeb ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  )
}