import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'
const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

function savedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(storageKey)
    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

function systemTheme(): Theme {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const preference = useRef(savedTheme())
  const [theme, setTheme] = useState<Theme>(() => savedTheme() ?? systemTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => { if (!preference.current) setTheme(systemTheme()) }
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return
      preference.current = isTheme(event.newValue) ? event.newValue : null
      setTheme(preference.current ?? systemTheme())
    }
    media.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
    return () => {
      media.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    preference.current = next
    setTheme(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // The in-memory choice continues to work for this visit.
    }
  }

  return { theme, toggleTheme }
}
