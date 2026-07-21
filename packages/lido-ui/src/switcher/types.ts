import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme/index.js'

export type SwitcherProps = LidoComponentProps<
  'div',
  {
    children?: ReactNode
  }
>

export type SwitcherItemProps = LidoComponentProps<
  'button',
  {
    active?: boolean
    children?: ReactNode
  }
>
