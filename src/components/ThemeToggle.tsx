import { themeAssets } from '../content/assets'
import { DesignIcon } from './DesignIcon'
type Props = { theme: 'light' | 'dark'; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button className="theme-toggle" type="button" aria-label="Soft dark mode" aria-pressed={theme === 'dark'} onClick={onToggle}>
      <DesignIcon light={themeAssets.light} dark={themeAssets.dark} width={70} height={38} />
    </button>
  )
}
