import { CircleButton } from '../../atoms/CircleButton/CircleButton'
import { PillLink } from '../../atoms/PillLink/PillLink'
import './HeroCta.scss'

type HeroCtaProps = {
  label: string
  to: string
  ariaLabel: string
}

export function HeroCta({ label, to, ariaLabel }: HeroCtaProps) {
  return (
    <div className="hero-cta">
      <PillLink label={label} to={to} variant="solid" className="hero-cta__pill" />
      <CircleButton icon="right" to={to} ariaLabel={ariaLabel} />
    </div>
  )
}