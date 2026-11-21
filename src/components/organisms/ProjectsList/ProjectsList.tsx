// src/components/organisms/ProjectsList/ProjectsList.tsx
import { useState } from 'react'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { Reveal } from '../../atoms/Reveal/Reveal'
import { ProjectListItem } from '../../molecules/ProjectListItem/ProjectListItem'
import { projectFilters, projects } from '../../../data/projects'
import './ProjectsList.scss'

export function ProjectsList() {
  const [filter, setFilter] = useState(projectFilters[0])

  // a numeração segue a lista completa, então não muda ao filtrar
  const visible = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === projectFilters[0] || project.categories?.includes(filter))

  return (
    <div className="projects-list">
      <div className="projects-list__bar">
        <div className="projects-list__filters" role="group" aria-label="Filtrar projetos">
          {projectFilters.map((name) => (
            <PillLink key={name} label={name} pressed={filter === name} onClick={() => setFilter(name)} />
          ))}
        </div>

        {/* acompanha o filtro: "06 projetos" → "02 projetos" → "01 projeto" */}
        <p className="projects-list__count" aria-live="polite">
          {String(visible.length).padStart(2, '0')} {visible.length === 1 ? 'projeto' : 'projetos'}
        </p>
      </div>

      <div className="projects-list__items">
        {visible.map(({ project, index }) => (
          <Reveal key={project.title}>
            <ProjectListItem project={project} index={index} total={projects.length} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
