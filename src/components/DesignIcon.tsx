export function DesignIcon({ light, dark, width, height = width, className = '' }: {
  light: string; dark?: string; width: number; height?: number; className?: string
}) {
  return <span className={`design-icon ${className}`} aria-hidden="true">
    <img className={dark ? 'icon-light' : undefined} src={light} alt="" width={width} height={height} />
    {dark && <img className="icon-dark" src={dark} alt="" width={width} height={height} />}
  </span>
}
