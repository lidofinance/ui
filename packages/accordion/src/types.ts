import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: React.ReactNode
  }
>
