import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const sections = ['home', 'projects', 'about', 'contact'] as const
export type Section = (typeof sections)[number]

export function useActiveSection() {
  const { pathname, hash } = useLocation()
  const [active, setActive] = useState<Section>('home')
  useEffect(() => {
    if (pathname !== '/') return
    let frame = 0
    let disposed = false
    let requested = sections.find(id => hash === `#${id}`)
    const measure = () => {
      const marker = Math.min(window.innerHeight * 0.28, 240)
      let next: Section = 'home'
      for (const id of sections) {
        const element = document.getElementById(id)
        if (!element || element.getBoundingClientRect().top > marker) continue
        if (id === 'contact') {
          const about = document.getElementById('about')
          if (about && Math.abs(about.getBoundingClientRect().top - element.getBoundingClientRect().top) < 2 && requested !== 'contact') continue
        }
        next = id
      }
      const requestedNode = requested && document.getElementById(requested)
      const requestedBounds = requestedNode && requestedNode.getBoundingClientRect()
      // Font reflow can move the bottom after a smooth scroll was calculated.
      // Keep a visible requested section selected when its start cannot reach the marker.
      if (requested && requestedBounds && requestedBounds.top < window.innerHeight - 88 && requestedBounds.bottom > 24
        && requestedBounds.top + window.scrollY - 24 > document.documentElement.scrollHeight - window.innerHeight) next = requested
      // At the end of a short viewport the final section may not reach the marker.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
        if (requested && requestedBounds && requestedBounds.top < window.innerHeight && requestedBounds.bottom > 24) next = requested
        else next = window.innerWidth < 850 ? 'contact' : 'about'
      }
      setActive(next)
    }
    const schedule = () => { if (disposed) return; cancelAnimationFrame(frame); frame = requestAnimationFrame(measure) }
    const onRepeatedDestination = () => { requested = sections.find(id => hash === `#${id}`); schedule() }
    const clearRequest = () => { requested = undefined; schedule() }
    const onKey = (event: KeyboardEvent) => { if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) clearRequest() }
    const observer = new IntersectionObserver(schedule, { threshold: [0, 0.25, 0.5, 1] })
    for (const id of sections) { const node = document.getElementById(id); if (node) observer.observe(node) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('wheel', clearRequest, { passive: true })
    window.addEventListener('touchstart', clearRequest, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('portfolio:section-navigation', onRepeatedDestination)
    void document.fonts.ready.then(schedule)
    measure()
    return () => {
      disposed = true
      observer.disconnect(); cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule)
      window.removeEventListener('wheel', clearRequest); window.removeEventListener('touchstart', clearRequest); window.removeEventListener('keydown', onKey)
      window.removeEventListener('portfolio:section-navigation', onRepeatedDestination)
    }
  }, [pathname, hash])
  return pathname === '/' ? active : null
}
