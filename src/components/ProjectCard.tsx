import { Link } from 'react-router'
import type { Project } from '../content/projects'

export function ProjectCard({ project }: { project: Project }) {
  const image = project.media?.thumbnail ?? project.media?.cover
  return <Link to={`/projects/${project.slug}`} className="project-card">
    <div className="project-card-image" aria-hidden="true">{image && <img src={image.src} width={image.width} height={image.height} style={{ objectFit: image.fit, objectPosition: image.fit === 'contain' ? 'center' : undefined }} alt="" loading="lazy" />}</div>
    <div className="project-card-information"><h3>{project.title}</h3><p>{project.description}</p></div>
  </Link>
}
