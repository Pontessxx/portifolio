// src/components/molecules/InfoList/InfoList.tsx
import type { InfoItem } from '../../../data/aboutInfo'
import './InfoList.scss'

type InfoListProps = {
  items: InfoItem[]
}

export function InfoList({ items }: InfoListProps) {
  return (
    <dl className="info-list">
      {items.map((item) => (
        <div key={item.term} className="info-list__item">
          <dt className="info-list__term">{item.term}</dt>
          <dd className="info-list__text">{item.text}</dd>
        </div>
      ))}
    </dl>
  )
}