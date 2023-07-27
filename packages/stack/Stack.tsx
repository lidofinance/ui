import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { StackProvider } from './StackProvider'
import cn from 'classnames'
import { className } from 'postcss-selector-parser'
import styles from './Stack.module.css'

export enum StackAlign {
  'center',
  'stretch',
  'flex-start',
  'flex-end',
  'baseline',
}

export type StackAligns = keyof typeof StackAlign

export enum StackJustify {
  'center',
  'start',
  'end',
  'stretch',
  'flex-start',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly',
}

export type StackJustifies = keyof typeof StackJustify

export enum StackDirection {
  'row',
  'row-reverse',
  'column',
  'column-reverse',
}

export type StackDirections = keyof typeof StackDirection

export enum StackWrap {
  'nowrap',
  'wrap',
  'wrap-reverse',
}

export type StackWraps = keyof typeof StackWrap

export enum StackSpacing {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}

export type StackSpacings = keyof typeof StackSpacing

export type StackProps = ComponentPropsWithoutRef<'div'> & {
  align?: StackAligns
  justify?: StackJustifies
  direction?: StackDirections
  wrap?: StackWraps
  spacing?: StackSpacings
}

export const Stack = forwardRef(
  (
    {
      align = 'flex-start',
      justify = 'flex-start',
      direction = 'row',
      wrap = 'wrap',
      spacing,
      children,
      ...rest
    }: StackProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.stack, className, {
          [styles.alignCenter]: align === 'center',
          [styles.alignStretch]: align === 'stretch',
          [styles.alignFlexStart]: align === 'flex-start',
          [styles.alignFlexEnd]: align === 'flex-end',
          [styles.alignBaseline]: align === 'baseline',
          [styles.justifyCenter]: justify === 'center',
          [styles.justifyStart]: justify === 'start',
          [styles.justifyEnd]: justify === 'end',
          [styles.justifyStretch]: justify === 'stretch',
          [styles.justifyFlexStart]: justify === 'flex-start',
          [styles.justifyFlexEnd]: justify === 'flex-end',
          [styles.justifySpaceAround]: justify === 'space-around',
          [styles.justifySpaceBetween]: justify === 'space-between',
          [styles.justifySpaceEvenly]: justify === 'space-evenly',
          [styles.directionRow]: direction === 'row',
          [styles.directionRowReverse]: direction === 'row-reverse',
          [styles.directionColumn]: direction === 'column',
          [styles.directionColumnReverse]: direction === 'column-reverse',
          [styles.wrapNowrap]: wrap === 'nowrap',
          [styles.wrapWrap]: wrap === 'wrap',
          [styles.wrapWrapReverse]: wrap === 'wrap-reverse',
          [styles.spacingXs]: spacing === 'xs',
          [styles.spacingSm]: spacing === 'sm',
          [styles.spacingMd]: spacing === 'md',
          [styles.spacingLg]: spacing === 'lg',
          [styles.spacingXl]: spacing === 'xl',
          [styles.spacingXxl]: spacing === 'xxl',
        })}
        ref={ref}
        {...rest}
      >
        <StackProvider spacing={spacing}>{children}</StackProvider>
      </div>
    )
  },
)
Stack.displayName = 'Stack'
