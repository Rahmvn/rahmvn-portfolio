import { useEffect, useRef, useState } from 'react'
import type { ProjectImage, ProjectVideoContent } from '../content/projects'

export function ProjectVideo({ video, poster }: { video: ProjectVideoContent; poster?: ProjectImage }) {
  const [loaded, setLoaded] = useState(false)
  const frame = useRef<HTMLIFrameElement>(null)
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`

  useEffect(() => {
    if (loaded) frame.current?.focus()
  }, [loaded])

  return <figure className="project-video">
    <div className="project-video-frame">
      {loaded ? <iframe
        ref={frame}
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&cc_load_policy=1&rel=0`}
        title={`${video.title} — YouTube video player`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      /> : <button className="project-video-poster" type="button" onClick={() => setLoaded(true)} aria-label={`Play ${video.title}`}>
        {poster && <img src={poster.src} width={poster.width} height={poster.height} alt="" loading="lazy" />}
        <span className="project-video-play action-link action-primary"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3.5 16 10 6 16.5Z" fill="currentColor" /></svg>Play demo</span>
      </button>}
    </div>
    <figcaption><span>{video.title}</span><a href={watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></figcaption>
  </figure>
}
