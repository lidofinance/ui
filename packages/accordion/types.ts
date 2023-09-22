import { LidoComponentProps } from '../utils'
import { ReactNode } from 'react'
export type { Theme } from '../theme'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: ReactNode
  }
>
