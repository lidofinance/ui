import { PopoverProps } from '../popover'
import React from 'react'
export type { Theme } from '../theme'

export type TooltipProps = Omit<
  PopoverProps,
  'anchorRef' | 'title' | 'open' | 'backdrop' | 'children'
> & {
  title: React.ReactNode
  children: React.ReactElement & React.RefAttributes<HTMLElement>
}
