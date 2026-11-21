// src/components/organisms/About/About.tsx
import { Section } from '../../atoms/Section/Section'
import { PhotoFrame } from '../../molecules/PhotoFrame/PhotoFrame'
import { InfoList } from '../../molecules/InfoList/InfoList'
import { aboutInfo } from '../../../data/aboutInfo'
import { contact } from '../../../data/contact'
import './About.scss'
import { SectionLabel } from '../../atoms/SectionLabel/SectionLabel'

export function About() {
  return (
    <Section id="sobre">
      <div className="about__label">
        <SectionLabel label="sobre" />
      </div>
      <div className="about">
        <div className="about__side">
          <div className="about__photo">
            <PhotoFrame src={contact.avatar} alt="Foto do Henrique" />
          </div>
        </div>

        <div className="about__main">
          <p className="about__headline">
            Olá, eu sou o Henrique, <em className="about__em">desenvolvedor backend .NET</em>. Também
            desenvolvo em <em className="about__em">React e TypeScript</em>.
          </p>
          <p className="about__hobbies">Fora do código: boxe, vôlei, academia e guitarra.</p>
          <div className="about__info">
            <InfoList items={aboutInfo} />
          </div>
        </div>
      </div>
    </Section>
  )
}