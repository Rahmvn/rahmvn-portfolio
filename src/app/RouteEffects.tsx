import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

export function RouteEffects() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map<string, number>())
  const initial = useRef(true)
  const previousKey = useRef(location.key)

  useLayoutEffect(() => {
    const heading = document.querySelector('h1')
    document.title = location.pathname === '/' ? 'Abdulrahman Saheed — Software Engineer' : `${location.pathname === '/resume' ? 'Résumé' : heading?.textContent ?? 'Portfolio'} | Abdulrahman Saheed`
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) description.content = location.pathname === '/' ? 'Abdulrahman Saheed — full-stack software engineer building web applications, client websites and Android systems.' : `${heading?.textContent ?? 'Portfolio'} — Abdulrahman Saheed, software engineer.`
    const saved = positions.current.get(location.key)
    const savedPositions = positions.current
    const target = document.getElementById(location.hash.slice(1))
    const wasInitial = initial.current
    initial.current = false
    if (previousKey.current !== location.key) (target ?? document.getElementById('main-content'))?.focus({ preventScroll: true })
    previousKey.current = location.key
    if (navigationType === 'POP' && saved !== undefined) window.scrollTo({ top: saved, behavior: 'instant' })
    else if (target) {
      target.scrollIntoView({ behavior: wasInitial || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    } else window.scrollTo({ top: 0, behavior: 'instant' })
    return () => {
      savedPositions.set(location.key, window.scrollY)
    }
  }, [location, navigationType])

  useEffect(() => {
    const previous = history.scrollRestoration
    history.scrollRestoration = 'manual'
    return () => { history.scrollRestoration = previous }
  }, [])

  return null
}
