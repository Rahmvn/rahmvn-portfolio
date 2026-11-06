import { contactLight, contactDark } from '../content/assets'
import { identity } from '../content/resume'
import { DesignIcon } from './DesignIcon'

const contacts = [
  { id: 'email', label: 'Email', href: `mailto:${identity.email}` },
  { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${identity.telephone.replace('+', '')}` },
  { id: 'github', label: 'GitHub', href: identity.github },
  { id: 'x', label: 'X', href: 'https://x.com/RahmvnDev' },
] as const

export function ContactLinks() {
  return <div className="contact-links">{contacts.map(item => {
    const content = <><span className="contact-icon"><DesignIcon light={contactLight[item.id]} dark={contactDark[item.id]} width={24} /></span><span>{item.label}</span></>
    return <a className="contact-link" key={item.id} href={item.href} {...(item.href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content}</a>
  })}</div>
}
