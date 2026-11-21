// src/components/organisms/Contact/Contact.tsx
import { Section } from '../../atoms/Section/Section'
import { SectionLabel } from '../../atoms/SectionLabel/SectionLabel'
import { TextLink } from '../../atoms/TextLink/TextLink'
import { BrandIcon } from '../../atoms/BrandIcon/BrandIcon'
import { PillLink } from '../../atoms/PillLink/PillLink'
import { socialLinks } from '../../../data/socialLinks'
import { contact } from '../../../data/contact'
import './Contact.scss'

const pills = socialLinks.filter((link) => contact.socials.includes(link.label))

export function Contact() {
  return (
    <Section id="contato">
      <div className="contact">
        <SectionLabel label="contato" />
        <h2 className="contact__title">
          <span className="contact__title-line">Vamos</span>
          <span className="contact__title-line">conversar...</span>
        </h2>
        <div className="contact__links">
          <TextLink label={contact.email} href={`mailto:${contact.email}`} className="contact__email" />
          <ul className="contact__socials">
            {pills.map((link) => (
              <li key={link.label}>
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
        </div>
      </div>
    </Section>
  )
}
