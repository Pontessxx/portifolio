// src/components/organisms/Footer/Footer.tsx
import { TextLink } from '../../atoms/TextLink/TextLink'
import { contact } from '../../../data/contact'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          {contact.name} — {contact.location}
        </p>
        <TextLink label="Voltar ao topo" to="/#hero" arrow="up" className="footer__top" />
      </div>
    </footer>
  )
}
