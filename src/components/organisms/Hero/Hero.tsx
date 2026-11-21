// src/components/organisms/Hero/Hero.tsx
import { Circle } from '../../atoms/Circle/Circle'
import TechText from '../../atoms/TechText/TechText'
import { StatusBadge } from '../../molecules/StatusBadge/StatusBadge'
import './Hero.scss'

const CIRCLE_SIZE = 'clamp(320px, 43vw, 620px)'

// fonte, tamanho, peso e cores vêm do CSS (TechText.scss + variáveis do global.scss)
const TITLE_PROPS = {
  size: 'big',
  letterSpacing: -0.02,
} as const

type HeroProps = {
  firstName: string
  lastName: string
}

export function Hero({ firstName, lastName }: HeroProps) {
  return (
    <section id="hero" className="hero">
      <Circle size={CIRCLE_SIZE} top={`calc(${CIRCLE_SIZE} * -0.34)`} right="-9%" />
      <div className="hero__content">
        <StatusBadge label="Desenvolvedor .NET" />
        <h1 className="hero__title" aria-label={`${firstName} ${lastName}`}>
          <span className="hero__title-line">
            <TechText text={firstName} align="left" {...TITLE_PROPS} />
          </span>
          <span className="hero__title-line hero__title-line--right">
            <TechText text={lastName} align="right" {...TITLE_PROPS} />
          </span>
        </h1>
      </div>
    </section>
  )
}
