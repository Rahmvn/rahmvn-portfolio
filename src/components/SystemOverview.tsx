import { useLayoutEffect, useRef, useState } from 'react'
import { diagramAssets } from '../content/assets'
import { DesignIcon } from './DesignIcon'
import { ResponsiveCopy } from './ResponsiveCopy'

const nodes = [
  { key: 'android', label: 'Traveller', title: 'Android app', description: 'Journey observations and offline recovery', mobile: 'Journey observations' },
  { key: 'supabase', label: 'Evidence + access', title: 'Supabase', description: 'Auth, records and bounded authorization', mobile: 'Auth and Journey records' },
  { key: 'viewer', label: 'Trusted contact', title: 'React Viewer', description: 'Authorized historical evidence', mobile: 'Historical status' },
  { key: 'mcp', label: 'Tool access', title: 'MCP service', description: 'Authorized status questions', mobile: 'Authorized questions' },
]

export function SystemOverview() {
  const container = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const element = container.current
    if (!element) return
    const measure = () => setScale(element.clientWidth / (window.innerWidth < 850 ? 342 : 1060))
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    window.addEventListener('resize', measure)
    measure()
    return () => { observer.disconnect(); window.removeEventListener('resize', measure) }
  }, [])
  return <div ref={container} className="system-overview" aria-label="Journey evidence system overview">
    <div className="diagram-canvas" style={{ transform: `scale(${scale})` }}>
      <p className="diagram-eyebrow">System overview</p>
      <h2 className="diagram-title">Journey evidence, available to authorized people</h2>
      <div className="diagram-routes diagram-routes-desktop"><DesignIcon light={diagramAssets.desktop} dark={diagramAssets.desktopDark} width={1060} height={470} /></div>
      <div className="diagram-routes diagram-routes-mobile"><DesignIcon light={diagramAssets.mobile} width={342} height={508} /></div>
      <ul className="diagram-nodes">{nodes.map(node => <li key={node.key} className={`diagram-node diagram-${node.key}`}><span>{node.label}</span><h3>{node.title}</h3><p><ResponsiveCopy text={node.description} mobile={node.mobile} /></p></li>)}</ul>
      <p className="diagram-note"><ResponsiveCopy text="Historical observations do not prove current location, arrival or safety." mobile="Historical evidence is not proof of present safety." /></p>
    </div>
  </div>
}
