import { Circle } from '../components/atoms/Circle/Circle'
import { PillLink } from '../components/atoms/PillLink/PillLink'
import { Section } from '../components/atoms/Section/Section'
import { SectionLabel } from '../components/atoms/SectionLabel/SectionLabel'
import './NotFound.scss'

const CIRCLE_SIZE = 'clamp(320px, 43vw, 620px)'

export function NotFound() {
  return (
    <div className="not-found-page">
      <Circle size={CIRCLE_SIZE} top={`calc(${CIRCLE_SIZE} * -0.2)`} right="-9%" />
      <Circle size={`calc(${CIRCLE_SIZE} * 0.5)`} bottom={`calc(${CIRCLE_SIZE} * 0.05)`} left="-7%" />

      <Section id="erro-404" className="not-found">
        <SectionLabel label="erro 404" />
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">
          Essa página <em className="not-found__em">não existe</em> ou foi movida.
        </p>
        <div className="not-found__actions">
          <PillLink label="Voltar para a home" to="/" variant="solid" arrow="right" />
          <PillLink label="Ver projetos" to="/projetos" />
        </div>
      </Section>
    </div>
  )
}
