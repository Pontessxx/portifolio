// src/components/atoms/Tag/Tag.tsx
import type { CSSProperties } from 'react'
import './Tag.scss'

type TagProps = {
  label: string
  dotColor?: string // ponto colorido antes do texto (ex.: status)
}

export function Tag({ label, dotColor }: TagProps) {
  const style = dotColor ? ({ '--tag-dot': dotColor } as CSSProperties) : undefined

  return (
    <span className="tag" style={style}>
      {dotColor && <span className="tag__dot" aria-hidden="true" />}
      {label}
    </span>
  )
}
