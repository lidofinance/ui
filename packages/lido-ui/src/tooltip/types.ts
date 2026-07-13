import { ReactElement, ReactNode, RefAttributes } from 'react'
import { PopoverProps } from '../popover/index.js'
export type { Theme } from '../theme/index.js'

export type TooltipProps = Omit<
  PopoverProps,
  'anchorRef' | 'title' | 'open' | 'backdrop' | 'children'
> & {
  title: ReactNode
  children: ReactElement & RefAttributes<HTMLElement>
}
