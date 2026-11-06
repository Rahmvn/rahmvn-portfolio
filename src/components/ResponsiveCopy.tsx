// Figma supplies shorter editorial copy for several mobile case-study sections.
export function ResponsiveCopy({ text, mobile }: { text: string; mobile?: string }) {
  return mobile ? <><span className="desktop-copy">{text}</span><span className="mobile-copy">{mobile}</span></> : text
}
