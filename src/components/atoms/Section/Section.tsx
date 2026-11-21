// src/components/atoms/Section/Section.tsx
import type { ReactNode } from 'react'
import './Section.scss'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {children}
    </section>
  )
}