// src/components/atoms/TextLink/TextLink.tsx
import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import './TextLink.scss'

type TextLinkProps = {
  label: string
  to?: string // rota interna (ex.: '/#hero')
  href?: string // link externo ou mailto:
  arrow?: 'up'
  className?: string
}

// Link sublinhado; tamanho, fonte e peso vêm do elemento pai.
export function TextLink({ label, to, href, arrow, className = '' }: TextLinkProps) {
  const classes = `text-link ${className}`.trim()
  const content = (
    <>
      {label}
      {arrow === 'up' && <ArrowUp size={16} strokeWidth={1.75} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  )
}
