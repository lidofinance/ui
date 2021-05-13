export type { Theme } from '@lidofinance/theme'

export type AccordionProps = {
  defaultExpanded?: boolean
  summary: React.ReactNode
} & Omit<JSX.IntrinsicElements['div'], 'ref'>
