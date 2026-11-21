import { BrandIcon } from '../../atoms/BrandIcon/BrandIcon'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { socialLinks } from '../../../data/socialLinks'
import './SocialLinks.scss'

export function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.label} className="social-links__item">
          <PillLink
            label={link.label}
            href={link.href}
            size="sm"
            arrow={link.arrow}
            icon={link.icon && <BrandIcon name={link.icon} />}
            iconHoverColor={link.iconHoverColor}
          />
        </li>
      ))}
    </ul>
  )
}