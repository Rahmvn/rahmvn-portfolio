import { Link } from 'react-router'
import type { Project } from '../content/projects'
import { ProjectMedia } from '../components/ProjectMedia'
import { TechnologyList } from '../components/TechnologyList'
import { SystemOverview } from '../components/SystemOverview'
import { ResponsiveCopy } from '../components/ResponsiveCopy'

export function ProjectPage({ project, next }: { project: Project; next: Project }) {
  return <main id="main-content" className="case-study page-entrance" tabIndex={-1}>
    <div className="project-introduction">
      <Link className="back-link" to="/#projects">← Back to projects</Link>
      <div className="project-heading"><h1>{project.title}</h1><p className="project-subtitle">{project.subtitle}</p><p className="project-summary"><ResponsiveCopy text={project.introduction} mobile={project.mobile?.introduction} /></p></div>
      <div className="project-actions">
        {project.website && <a className="action-link action-primary" href={project.website} target="_blank" rel="noopener noreferrer">Visit live website<span aria-hidden="true">↗</span></a>}
        <a className={`action-link ${project.website ? 'action-secondary' : 'action-primary'}`} href={project.repository} target="_blank" rel="noopener noreferrer">View on GitHub<span aria-hidden="true">↗</span></a>
      </div>
    </div>
    {project.slug === 'alabarin' ? <SystemOverview /> : <ProjectMedia hero image={project.media?.cover} />}
    <TechnologyList items={project.technologies} />
    <div className="project-narrative">
      <section className="project-work" aria-labelledby="work-heading"><h2 id="work-heading">The work</h2><p><ResponsiveCopy text={project.work} mobile={project.mobile?.work} /></p></section>
      <dl className="project-scope"><div><dt>Scope</dt><dd>{project.scope}</dd></div><div><dt>Key areas</dt><dd>{project.areas}</dd></div><div><dt>{project.statusLabel}</dt><dd>{project.status}</dd></div></dl>
    </div>
    <div className="project-supporting">{project.captions.map((caption, index) => <figure key={caption}><ProjectMedia image={project.media?.supporting[index]} /><figcaption>{caption}</figcaption></figure>)}</div>
    <div className="project-ending">
      <section className="project-outcome" aria-labelledby="outcome-heading"><h2 id="outcome-heading">{project.outcomeTitle}</h2><p><ResponsiveCopy text={project.outcome} mobile={project.mobile?.outcome} /></p></section>
      <nav className="project-pagination" aria-label="Project navigation"><Link to="/#projects">← All projects</Link><Link to={`/projects/${next.slug}`}>Next: {next.title} →</Link></nav>
    </div>
  </main>
}
