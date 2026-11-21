import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SectionLabel } from '../../atoms/SectionLabel/SectionLabel'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard'
import { featuredProjects } from '../../../data/projects'
import './FeaturedProjects.scss'

const SWIPE_DISTANCE = 50 // px mínimos de arraste para trocar de card
const AUTOPLAY_MS = 5000 // tempo que cada card fica em foco

export function FeaturedProjects() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const swipeStart = useRef<number | null>(null)
  const total = featuredProjects.length

  // dá a volta: depois do último vai para o primeiro, e vice-versa
  const goTo = (index: number) => setActive((index + total) % total)

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
    <section id="projetos-destaque" className="featured">
      <div className="featured__inner">
        <header className="featured__header">
          <SectionLabel label="projetos em destaque" />
          <PillLink label="Ver todos" to="/projetos" arrow="right" />
        </header>
      </div>

      <div
        className="featured__carousel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <ul className="featured__track" style={{ '--index': active } as CSSProperties}>
          {featuredProjects.map((project, i) => {
            const isActive = i === active
            return (
              <li
                key={project.title}
                className={`featured__slide${isActive ? ' featured__slide--active' : ''}`}
                onClick={() => !isActive && goTo(i)}
              >
                {/* inert: card vizinho não recebe foco nem clique interno; o clique cai no <li> e troca de card */}
                <div className="featured__card" inert={!isActive}>
                  <ProjectCard project={project} index={i} total={total} active={isActive} />
                </div>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="featured__nav featured__nav--prev"
          aria-label="Projeto anterior"
          onClick={() => goTo(active - 1)}
        >
          <ArrowLeft size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="featured__nav featured__nav--next"
          aria-label="Próximo projeto"
          onClick={() => goTo(active + 1)}
        >
          <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
