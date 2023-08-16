import { PopoverProps } from '@lidofinance/popover'
import { ReactElement, ReactNode, RefAttributes } from 'react'
export type { Theme } from '@lidofinance/theme'

export type TooltipProps = Omit<
  PopoverProps,
  'anchorRef' | 'title' | 'open' | 'backdrop' | 'children'
> & {
  title: ReactNode
  children: ReactElement & RefAttributes<HTMLElement>
}
