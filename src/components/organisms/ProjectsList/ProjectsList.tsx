// src/components/organisms/ProjectsList/ProjectsList.tsx
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { ProjectListItem } from '../../molecules/ProjectListItem/ProjectListItem'
import { projectFilters, projects } from '../../../data/projects'
import './ProjectsList.scss'

const SWIPE_DISTANCE = 50 // px mínimos de arraste para trocar de projeto
const AUTOPLAY_MS = 6000 // tempo que cada projeto fica em foco

export function ProjectsList() {
  const [filter, setFilter] = useState(projectFilters[0])
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const swipeStart = useRef<number | null>(null)

  // a numeração segue a lista completa, então não muda ao filtrar
  const visible = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === projectFilters[0] || project.categories?.includes(filter))

  const total = visible.length
  // dá a volta: depois do último vai para o primeiro, e vice-versa
  const goTo = (index: number) => setActive(total ? (index + total) % total : 0)

  const changeFilter = (name: string) => {
    setFilter(name)
    setActive(0)
  }

  // passa sozinho; reinicia a contagem a cada troca (inclusive manual) e pausa com mouse/foco
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion || total < 2) return
    const timer = window.setTimeout(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [active, paused, total])

  const onPointerDown = (e: PointerEvent) => {
    swipeStart.current = e.clientX
  }

  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return
    const delta = e.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) >= SWIPE_DISTANCE) goTo(active + (delta < 0 ? 1 : -1))
  }

  return (
    <div className="projects-list">
      <div className="projects-list__bar">
        <div className="projects-list__filters" role="group" aria-label="Filtrar projetos">
          {projectFilters.map((name) => (
            <PillLink key={name} label={name} pressed={filter === name} onClick={() => changeFilter(name)} />
          ))}
        </div>

        {/* acompanha o filtro: "06 projetos" → "02 projetos" → "01 projeto" */}
        <p className="projects-list__count" aria-live="polite">
          {String(total).padStart(2, '0')} {total === 1 ? 'projeto' : 'projetos'}
        </p>
      </div>

      <div
        className="projects-list__carousel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <ul className="projects-list__track" style={{ '--index': active } as CSSProperties}>
          {visible.map(({ project, index }, i) => {
            const isActive = i === active
            return (
              <li
                key={project.title}
                className={`projects-list__slide${isActive ? ' projects-list__slide--active' : ''}`}
                onClick={() => !isActive && goTo(i)}
              >
                {/* inert: card vizinho não recebe foco nem clique interno; o clique cai no <li> e troca de card */}
                <div className="projects-list__card" inert={!isActive}>
                  <ProjectListItem project={project} index={index} total={projects.length} />
                </div>
              </li>
            )
          })}
        </ul>

        {total > 1 && (
          <>
            <button
              type="button"
              className="projects-list__nav projects-list__nav--prev"
              aria-label="Projeto anterior"
              onClick={() => goTo(active - 1)}
            >
              <ArrowLeft size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="projects-list__nav projects-list__nav--next"
              aria-label="Próximo projeto"
              onClick={() => goTo(active + 1)}
            >
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="projects-list__dots">
          {visible.map(({ project }, i) => (
            <button
              key={project.title}
              type="button"
              className={`projects-list__dot${i === active ? ' projects-list__dot--active' : ''}`}
              aria-label={`Ir para ${project.title}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
