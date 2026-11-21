// src/components/organisms/Footer/Footer.tsx
import { useLocation } from 'react-router-dom'
import { TextLink } from '../../atoms/TextLink/TextLink'
import { contact } from '../../../data/contact'
import './Footer.scss'

export function Footer() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          {contact.name} — {contact.location}
        </p>
        {onHome ? (
          <TextLink label="Voltar ao topo" to="/#hero" arrow="up" className="footer__top" />
        ) : (
          <TextLink label="Voltar para a home" to="/" arrow="left" className="footer__top" />
        )}
      </div>
    </footer>
  )
}
