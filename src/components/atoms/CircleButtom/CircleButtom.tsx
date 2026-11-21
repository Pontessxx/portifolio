import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './CircleButtom.scss'

const icons = {
  right: ArrowRight,
  'up-right': ArrowUpRight,
}

type CircleButtonProps = {
  icon: keyof typeof icons
  ariaLabel: string
  to?: string
  href?: string
}

export function CircleButton({ icon, ariaLabel, to, href }: CircleButtonProps) {
  const Icon = icons[icon]
  const content = <Icon size={20} strokeWidth={1.75} aria-hidden="true" />

  if (to) {
    return (
      <Link to={to} className="circle-button" aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  const isWeb = href?.startsWith('http')

  return (
    <a
      href={href}
      className="circle-button"
      aria-label={ariaLabel}
      target={isWeb ? '_blank' : undefined}
      rel={isWeb ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  )
}