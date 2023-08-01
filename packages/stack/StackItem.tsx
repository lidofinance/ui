import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react'
import { useStackContext } from './StackProvider'
import cn from 'classnames'
import styles from './StackItem.module.css'

export type StackItemProps = ComponentPropsWithoutRef<'div'> & {
  grow?: number
  shrink?: number
  basis?: string
}

export const StackItem = forwardRef(
  (
    {
      grow = 0,
      shrink = 0,
      basis = 'auto',
      className,
      style,
      ...rest
    }: StackItemProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const { spacing } = useStackContext()

    return (
      <div
        className={cn(styles.stackItem, className, {
          [styles.spacingXs]: spacing === 'xs',
          [styles.spacingSm]: spacing === 'sm',
          [styles.spacingMd]: spacing === 'md',
          [styles.spacingLg]: spacing === 'lg',
          [styles.spacingXl]: spacing === 'xl',
          [styles.spacingXxl]: spacing === 'xxl',
        })}
        style={{
          flexGrow: `${grow}`,
          flexShrink: `${shrink}`,
          flexBasis: `${basis}`,
          ...style,
        }}
        ref={ref}
        {...rest}
      />
    )
  },
)
StackItem.displayName = 'StackItem'
