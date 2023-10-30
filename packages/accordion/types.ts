import { LidoComponentProps } from '../utils/index.js'
import { ReactNode } from 'react'
export type { Theme } from '../theme/index.js'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: ReactNode
  }
>
