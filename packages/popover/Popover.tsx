import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { DEFAULT_PLACEMENT } from './constants'
import { PopoverRoot, PopoverRootProps } from './PopoverRoot'
import cn from 'classnames'
import styles from './Popover.module.css'

export enum PopoverOffset {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type PopoverOffsets = keyof typeof PopoverOffset

export type PopoverProps = {
  as?: never
  offset?: PopoverOffsets
  open?: boolean
  children?: ReactNode
} & Omit<PopoverRootProps, 'in'>

export const Popover = forwardRef(
  (
    {
      placement = DEFAULT_PLACEMENT,
      open = false,
      offset = 'xs',
      className,
      ...rest
    }: PopoverProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <PopoverRoot
        className={cn(styles.popover, className, {
          [styles.xs]: offset === 'xs',
          [styles.sm]: offset === 'sm',
          [styles.md]: offset === 'md',
          [styles.lg]: offset === 'lg',
          [styles.xl]: offset === 'xl',
        })}
        placement={placement}
        in={open}
        {...rest}
        ref={ref}
      />
    )
  },
)
Popover.displayName = 'Popover'
