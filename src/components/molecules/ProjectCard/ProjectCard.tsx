import { CircleButton } from '../../atoms/CircleButton/CircleButton'
import { TagList } from '../TagList/TagList'
import { PillLink } from '../../atoms/PillLink/PillLink'
import type { Project } from '../../../data/projects'
import './ProjectCard.scss'

type ProjectCardProps = {
  project: Project
  index: number // posição (0-based)
  total: number
  active?: boolean // card em foco: botões preenchidos; nos outros, só borda e texto
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ProjectCard({ project, index, total, active = false }: ProjectCardProps) {
  const variant = active ? 'solid' : 'outline'
  const { title, description, tags, image, to, href } = project

  return (
    <article className="project-card">
      {/* sem imagem, mostra um degradê no lugar */}
      <div className="project-card__media" aria-hidden="true">
        {image && <img src={image} alt="" loading="lazy" draggable={false} />}
      </div>

      <div className="project-card__body">
        <span className="project-card__count">
          {pad(index + 1)} / {pad(total)}
        </span>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <TagList tags={tags} />

        <div className="project-card__actions">
          <PillLink label="Ver projeto" to={to} href={href} variant={variant} />
          <CircleButton icon="right" to={to} href={href} variant={variant} ariaLabel={`Abrir projeto ${title}`} />
        </div>
      </div>
    </article>
  )
}
