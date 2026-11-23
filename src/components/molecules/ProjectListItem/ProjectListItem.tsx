// src/components/molecules/ProjectListItem/ProjectListItem.tsx
import { BrandIcon } from '../../atoms/BrandIcon/BrandIcon'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { Tag } from '../../atoms/Tag/Tag'
import { TagList } from '../TagList/TagList'
import type { Project } from '../../../data/projects'
import './ProjectListItem.scss'

type ProjectListItemProps = {
  project: Project
  index: number // posição (0-based) na lista completa
  total: number
}

const pad = (n: number) => String(n).padStart(2, '0')
const STATUS_COLOR = '#ff5a2b'

export function ProjectListItem({ project, index, total }: ProjectListItemProps) {
  const { title, description, tags, image, href, status, actionLabel = 'GitHub' } = project

  return (
    <article className="project-item">
      <div className="project-item__body">
        <p className="project-item__count">
          {pad(index + 1)} / {pad(total)}
        </p>
        <h2 className="project-item__title">{title}</h2>
        {status && (
          <div>
            <Tag label={status} dotColor={STATUS_COLOR} />
          </div>
        )}
        <TagList tags={tags} />
        <div className="project-item__footer">
          <p className="project-item__description">{description}</p>

          <div className="project-item__actions">
            {/* botão do GitHub em cores invertidas do tema (destaque); sem href fica apagado até o link existir */}
            <PillLink
              label={actionLabel}
              href={href}
              variant={href ? 'solid' : 'outline'}
              arrow={href ? 'up-right' : undefined}
              icon={<BrandIcon name="github" />}
            />
          </div>
        </div>
      </div>

      <div className="project-item__media">
        {image ? (
          <img src={image} alt={`Imagem do projeto ${title}`} loading="lazy" />
        ) : (
          <span className="project-item__placeholder">[PRINT DO PROJETO]</span>
        )}
      </div>
    </article>
  )
}
