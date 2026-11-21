import type { CSSProperties } from 'react'
import './Circle.scss'

type CircleProps = {
  size: string // ex: 'clamp(320px, 44vw, 620px)' ou '128%'
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export function Circle({ size, top, right, bottom, left }: CircleProps) {
  const style: CSSProperties = { width: size, top, right, bottom, left }

  return <div className="circle" style={style} aria-hidden="true" />
}