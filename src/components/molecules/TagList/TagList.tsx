// src/components/molecules/TagList/TagList.tsx
import { Tag } from '../../atoms/Tag/Tag'
import './TagList.scss'

type TagListProps = {
  tags: string[]
  className?: string
}

export function TagList({ tags, className = '' }: TagListProps) {
  return (
    <ul className={`tag-list ${className}`.trim()}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag label={tag} />
        </li>
      ))}
    </ul>
  )
}
