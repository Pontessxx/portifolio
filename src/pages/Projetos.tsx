import { Circle } from '../components/atoms/Circle/Circle'
import { Section } from '../components/atoms/Section/Section'
import { SectionLabel } from '../components/atoms/SectionLabel/SectionLabel'
import { ProjectsList } from '../components/organisms/ProjectsList/ProjectsList'
import './Projetos.scss'

const CIRCLE_SIZE = 'clamp(320px, 43vw, 620px)'

const Projetos = () => {
  return (
    <div className="projetos-page">
      {/* círculos de fundo: o vidro dos cards desfoca as linhas que passam por trás */}
      <Circle size={CIRCLE_SIZE} top={`calc(${CIRCLE_SIZE} * -0.3)`} right="-9%" />
      <Circle size={`calc(${CIRCLE_SIZE} * 0.7)`} top="34%" left="-12%" />
      <Circle size={`calc(${CIRCLE_SIZE} * 0.5)`} top="70%" right="-7%" />

      <Section id="projetos" className="projetos">
        <header className="projetos__header">
          <div>
            <SectionLabel label="projetos" />
            <h1 className="projetos__title">Projetos</h1>
          </div>
          <p className="projetos__lead">
            Projetos <em className="projetos__em">pessoais </em> e <em className="projetos__em">acadêmicos</em>, do backend ao frontend.
          </p>
        </header>

        <ProjectsList />
      </Section>
    </div>
  )
}

export default Projetos
