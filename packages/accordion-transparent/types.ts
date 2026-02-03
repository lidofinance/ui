import { LidoComponentProps } from '../utils'
import { ReactNode } from 'react'
export type { Theme } from '../theme/index.js'

export type AccordionTransparentProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: ReactNode
    onExpand?: () => void
    onCollapse?: () => void
  }
>
