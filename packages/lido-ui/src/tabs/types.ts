import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme/index.js'

export type TabsProps = LidoComponentProps<
  'div',
  {
    children?: ReactNode
  }
>

export type TabProps = LidoComponentProps<
  'button',
  {
    active?: boolean
    children?: ReactNode
  }
>
