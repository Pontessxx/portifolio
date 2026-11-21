// src/components/organisms/Hero/Hero.tsx
import { Circle } from '../../atoms/Circle/Circle'
import './Hero.scss'

const CIRCLE_SIZE = 'clamp(320px, 43vw, 620px)'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <Circle size={CIRCLE_SIZE} top={`calc(${CIRCLE_SIZE} * -0.34)`} right="-9%" />
      <div className="hero__content">
        {/* título, descrição, botões... */}
      </div>
    </section>
  )
}