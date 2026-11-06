import { Link } from 'react-router'
import { identity, profile, experience, skills } from '../content/resume'
import { SiteFooter } from '../components/SiteFooter'
import { ResumeText } from '../components/ResumeText'

export function ResumePage() {
  return <>
    <main id="main-content" className="resume-page page-entrance" tabIndex={-1}>
      <div className="resume-hero">
        <div className="resume-identity"><h1>{identity.name}</h1><p className="resume-role">{identity.role}</p>
          <p className="resume-contact"><span>{identity.location}</span><span aria-hidden="true"> · </span><a href={`mailto:${identity.email}`}>{identity.email}</a><span aria-hidden="true"> · </span><a href={`tel:${identity.telephone}`}>{identity.phone}</a><span aria-hidden="true"> · </span><a href={identity.portfolio} target="_blank" rel="noopener noreferrer"><span className="screen-link-label">Portfolio</span><span className="print-link-label">{identity.portfolio.replace(/^https:\/\//, '').replace(/\/$/, '')}</span></a><span aria-hidden="true"> · </span><a href={identity.github} target="_blank" rel="noopener noreferrer"><span className="screen-link-label">GitHub</span><span className="print-link-label">github.com/Rahmvn</span></a></p>
        </div>
        <div className="resume-actions"><button className="action-link action-secondary" type="button" onClick={() => window.print()}>Print</button><a className="action-link action-primary" href="/downloads/Abdulrahman_Saheed_CV.pdf" download="Abdulrahman_Saheed_CV.pdf">Download PDF</a></div>
      </div>
      <div className="resume-top-rule" />
      <section className="resume-section resume-profile" aria-labelledby="profile-heading"><h2 id="profile-heading">Profile</h2><div className="resume-section-content"><p><ResumeText text={profile} /></p></div></section>
      <section className="resume-section resume-experience" aria-labelledby="experience-heading"><h2 id="experience-heading">Engineering experience</h2><div className="resume-section-content">
        {experience.map(entry => <article className="resume-entry" key={entry.organization}>
          <div className="resume-entry-heading"><h3>{entry.organization}</h3><p className="resume-dates">{entry.dates}</p></div>
          <p className="resume-entry-role">{entry.role}</p>
          {entry.links.length > 0 && <p className="resume-entry-links">{entry.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><span className="screen-link-label">{link.label}</span><span className="print-link-label">{link.url.replace(/^https:\/\//, '').replace(/\/$/, '')}</span></a>)}</p>}
          <ul className="resume-bullets">{entry.bullets.map(bullet => <li key={bullet}><ResumeText text={bullet} /></li>)}</ul>
        </article>)}
      </div></section>
      <section className="resume-section resume-education" aria-labelledby="education-heading"><h2 id="education-heading">Education</h2><div className="resume-section-content"><div className="education-heading"><h3>Summit University, Offa, Nigeria</h3><p className="resume-graduation">Expected 2028</p></div><p>Bachelor of Science (B.Sc.) in Software Engineering</p></div></section>
      <section className="resume-section resume-skills" aria-labelledby="skills-heading"><h2 id="skills-heading">Technical skills</h2><dl className="resume-section-content">{skills.map(skill => <div key={skill.category}><dt>{skill.category}</dt><dd><ResumeText text={skill.values} /></dd></div>)}</dl></section>
      <Link className="resume-return back-link" to="/#home">← Back to portfolio</Link>
    </main>
    <SiteFooter />
  </>
}
