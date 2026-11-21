// src/components/molecules/ExperienceItem/ExperienceItem.tsx
import type { ExperienceEntry } from '../../../data/experience'
import './ExperienceItem.scss'

type ExperienceItemProps = {
  entry: ExperienceEntry
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  const { year, period, title, organization, highlights, current } = entry

  return (
    <article className={`experience-item${current ? ' experience-item--current' : ''}`}>
      <div className="experience-item__when">
        <span className="experience-item__year">{year}</span>
        <p className="experience-item__period">{period}</p>
      </div>

      <div className="experience-item__details">
        <h3 className="experience-item__title">{title}</h3>
        <p className="experience-item__organization">{organization}</p>
        <ul className="experience-item__list">
          {highlights.map((text) => (
            <li key={text} className="experience-item__bullet">
              <span className="experience-item__mark" aria-hidden="true">
                /
              </span>
              <span className="experience-item__text">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}