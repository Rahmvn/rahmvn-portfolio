import { Link, useLocation } from 'react-router'
import type { Section } from '../app/useActiveSection'
import { SiteNavigation } from './SiteNavigation'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader({ active, theme, onToggle }: { active: Section | null; theme: 'light' | 'dark'; onToggle: () => void }) {
  const { pathname } = useLocation()
  return <header className="site-header">
    <Link className="wordmark" to="/#home" aria-label="Abdulrahman Saheed — home">AS.</Link>
    <div className="header-actions">
      <SiteNavigation active={active} />
      <Link className="mobile-resume" to="/resume" aria-current={pathname === '/resume' ? 'page' : undefined}>Résumé</Link>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </div>
  </header>
}
