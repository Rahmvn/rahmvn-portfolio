import { mediaAssets } from '../content/assets'
import { DesignIcon } from './DesignIcon'
import type { ProjectImage } from '../content/projects'

export function ProjectMedia({ hero = false, image }: { hero?: boolean; image?: ProjectImage }) {
  return <div className={`project-media${hero ? ' project-media-hero' : ''}`}>
    {image ? <img className={`project-capture${image.fit === 'contain' ? ' project-capture-portrait' : ''}`} src={image.src} width={image.width} height={image.height} alt={image.alt} loading="lazy" /> : <>
    <DesignIcon light={mediaAssets.placeholder} width={28} />
    <span>Actual project screenshot</span>
    </>}
  </div>
}
