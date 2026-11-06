import { Link, useLocation } from 'react-router'
import type { Section } from '../app/useActiveSection'
import { navLight, navDark } from '../content/assets'
import { DesignIcon } from './DesignIcon'

const destinations = [
  { id: 'home', label: 'Home' }, { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' }, { id: 'resume', label: 'Résumé' }, { id: 'contact', label: 'Contact' },
] as const

export function SiteNavigation({ active, mobile = false }: { active: Section | null; mobile?: boolean }) {
  const location = useLocation()
  return <nav className={mobile ? 'mobile-navigation' : 'desktop-navigation'} aria-label={mobile ? 'Mobile navigation' : 'Main navigation'}>
    {destinations.filter(item => !mobile || item.id !== 'resume').map(item => {
      const selected = item.id === 'resume' ? location.pathname === '/resume' : active === item.id
      const to = item.id === 'resume' ? '/resume' : `/#${item.id}`
      return <Link key={item.id} to={to} className="navigation-link" aria-current={selected ? item.id === 'resume' ? 'page' : 'location' : undefined}
        onClick={() => {
          if (`${location.pathname}${location.hash}` !== to) return
          window.dispatchEvent(new Event('portfolio:section-navigation'))
          const target = document.getElementById(item.id)
          target?.focus({ preventScroll: true })
          target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
        }}>
        {mobile && item.id !== 'resume' && <span className="tab-indicator"><DesignIcon light={navLight[item.id]} dark={navDark[item.id]} width={20} /></span>}
        <span>{item.label}</span>
      </Link>
    })}
  </nav>
}
