import { Route, Routes } from 'react-router'
import { projects } from '../content/projects'
import { SiteHeader } from '../components/SiteHeader'
import { SiteNavigation } from '../components/SiteNavigation'
import { HomePage } from '../pages/HomePage'
import { ProjectPage } from '../pages/ProjectPage'
import { ResumePage } from '../pages/ResumePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { useTheme } from '../theme/useTheme'
import { RouteEffects } from './RouteEffects'
import { useActiveSection } from './useActiveSection'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection()
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active={active} theme={theme} onToggle={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {projects.map((project, index) => <Route key={project.slug} path={`/projects/${project.slug}`} element={<ProjectPage project={project} next={projects[(index + 1) % projects.length]!} />} />)}
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <RouteEffects />
      <SiteNavigation active={active} mobile />
    </div>
  )
}
