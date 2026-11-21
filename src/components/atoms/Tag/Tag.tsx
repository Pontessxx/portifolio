// src/components/atoms/Tag/Tag.tsx
import './Tag.scss'

type TagProps = {
  label: string
}

export function Tag({ label }: TagProps) {
  return <span className="tag">{label}</span>
}
