import type { BrandIconName } from '../components/atoms/BrandIcon/BrandIcon'

export type SocialLink = {
  label: string
  href?: string
  arrow?: 'right' | 'up-right'
  icon?: BrandIconName
  iconHoverColor?: string // cor do ícone ao passar o mouse
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Pontessxx', arrow: 'up-right', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/henrique-pontes-oliveira', arrow: 'up-right', icon: 'linkedin', iconHoverColor: '#0A66C2' },
  { label: 'E-mail', href: 'mailto:hpo.pontes@gmail.com', arrow: 'up-right', icon: 'mail', iconHoverColor: '#EA4335' },
  { label: 'Osasco, SP — Brasil' }, // sem href: vira etiqueta
]
