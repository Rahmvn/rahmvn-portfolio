import { Fragment } from 'react'

// Preserve Figma's natural slash breaks without adding characters to copied/PDF text.
export function ResumeText({ text }: { text: string }) {
  return text.split('/').map((part, index) => <Fragment key={`${index}-${part}`}>{index > 0 && <>/<wbr /></>}{part}</Fragment>)
}
