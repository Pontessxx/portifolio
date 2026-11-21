// src/components/organisms/Experience/Experience.tsx
import { Section } from '../../atoms/Section/Section'
import { SectionLabel } from '../../atoms/SectionLabel/SectionLabel'
import { ExperienceItem } from '../../molecules/ExperienceItem/ExperienceItem'
import { experiences } from '../../../data/experience'
import './Experience.scss'

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionLabel label="experiência" />
      <div className="experience__list">
        {experiences.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  )
}