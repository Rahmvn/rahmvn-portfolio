import { Link } from 'react-router'
export function NotFoundPage() {
  return <main id="main-content" className="not-found page-entrance" tabIndex={-1}><h1>Page not found</h1><p>This page isn’t available.</p><Link className="back-link" to="/#home">← Back to portfolio</Link></main>
}
