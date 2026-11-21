// src/components/molecules/PhotoFrame/PhotoFrame.tsx
import { ProfileCard } from '../ProfileCard/ProfileCard'
import './PhotoFrame.scss'

type PhotoFrameProps = {
  src?: string // sem src, o card mostra só o fundo
  alt: string
}

export function PhotoFrame({ src, alt }: PhotoFrameProps) {
  return (
    <div className="photo-frame">
      <div className="photo-frame__card">
        <ProfileCard
          avatarUrl={src}
          name="Henrique Pontes"
          title="Desenvolvedor backend .NET"
          handle="Pontessxx"
          status="Disponível"
          contactText="Contato"
          onContactClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
      <span className="photo-frame__sr">{alt}</span>
    </div>
  )
}
