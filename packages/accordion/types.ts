import { LidoComponentProps } from '../utils'
import React from 'react'
export type { Theme } from '../theme'

export type AccordionProps = LidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: React.ReactNode
  }
>
