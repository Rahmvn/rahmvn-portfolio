import { projects } from '../content/projects'
import { ProjectCard } from '../components/ProjectCard'
import { ContactLinks } from '../components/ContactLinks'
import { SiteFooter } from '../components/SiteFooter'

export function HomePage() {
  return <>
    <main id="main-content" className="home-page page-entrance" tabIndex={-1}>
      <section id="home" className="hero" tabIndex={-1} aria-labelledby="home-heading">
        <h1 id="home-heading">Abdulrahman Saheed.</h1>
        <p className="hero-role">Full-stack Software Engineer</p>
        <p className="hero-description">I design, build and maintain web applications and software systems, from commercial platforms to backend and Android engineering.</p>
      </section>
      <section id="projects" className="featured-projects" tabIndex={-1} aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <div className="about-contact">
        <section id="about" tabIndex={-1} aria-labelledby="about-heading"><h2 id="about-heading">About</h2><p>I enjoy solving practical problems through software, from understanding requirements and making technical decisions to building, testing and maintaining the finished product.</p></section>
        <section id="contact" tabIndex={-1} aria-labelledby="contact-heading"><h2 id="contact-heading">Contact</h2><ContactLinks /></section>
      </div>
    </main>
    <SiteFooter />
  </>
}
