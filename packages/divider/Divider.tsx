import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Divider.module.css'

export enum DividerType {
  vertical,
  horizontal,
}
export type DividerTypes = keyof typeof DividerType

export enum DividerIndent {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type DividerIndents = keyof typeof DividerIndent

export type DividerProps = ComponentPropsWithoutRef<'div'> & {
  type?: DividerTypes
  indents?: DividerIndents
  children?: never
}

export const Divider = forwardRef(
  (
    {
      type = 'horizontal',
      indents,
      className,
      children,
      ...rest
    }: DividerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.divider, className, {
          [styles.xs]: indents === 'xs',
          [styles.sm]: indents === 'sm',
          [styles.md]: indents === 'md',
          [styles.lg]: indents === 'lg',
          [styles.xl]: indents === 'xl',
          [styles.horizontal]: type === 'horizontal',
          [styles.vertical]: type === 'vertical',
        })}
        ref={ref}
        {...rest}
      />
    )
  },
)
Divider.displayName = 'Divider'
