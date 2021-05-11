import { ReactNode } from 'react'

export type AccordionProps = {
  defaultExpanded?: boolean
  summary: ReactNode
} & Omit<JSX.IntrinsicElements['div'], 'ref'>
