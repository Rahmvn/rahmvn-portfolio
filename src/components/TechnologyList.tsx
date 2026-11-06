import { brandAssets } from '../content/assets'
import type { Technology } from '../content/projects'

const bordered = new Set<Technology>(['Supabase', 'Kotlin', 'Compose', 'TypeScript', 'MCP'])
const native28 = new Set<Technology>(['Supabase', 'Kotlin', 'Compose', 'TypeScript', 'MCP'])

export function TechnologyList({ items }: { items: readonly Technology[] }) {
  return <section className="technologies" aria-labelledby="technologies-heading">
    <h2 id="technologies-heading">Technologies</h2>
    <ul>{items.map(technology => <li key={technology}>
      <span className={`technology-mark${bordered.has(technology) ? ' technology-mark-bordered' : ''}`}><img className={`brand-icon ${['React', 'JavaScript', 'Vite', 'PostgreSQL', 'CSS3'].includes(technology) ? 'official-brand' : ''}`} src={brandAssets[technology]} width={native28.has(technology) ? 28 : 26} height={native28.has(technology) ? 28 : 26} alt="" /></span>
      <span>{technology}</span>
    </li>)}</ul>
  </section>
}
