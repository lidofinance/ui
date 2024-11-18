import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './text.module.css'

export enum TextColor {
  default,
  secondary,
  primary,
  warning,
  error,
  success,
}
export type TextColors = keyof typeof TextColor

export enum TextSize {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
}
export type TextSizes = keyof typeof TextSize

export type TextWeight = 400 | 500 | 700 | 800 | string | number

export type TextProps = ComponentPropsWithoutRef<'p'> & {
  color?: TextColors
  size?: TextSizes
  weight?: TextWeight
  underline?: boolean
  strikeThrough?: boolean
  strong?: boolean
  italic?: boolean
}

export const Text = forwardRef(
  (
    {
      size = 'md',
      weight = 400,
      color = 'default',
      underline,
      italic,
      strikeThrough,
      strong,
      className,
      ...rest
    }: TextProps,
    ref?: ForwardedRef<HTMLParagraphElement>,
  ) => {
    return (
      <p
        className={cn(styles.text, className, {
          [styles.xxs]: size === 'xxs',
          [styles.xs]: size === 'xs',
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
          [styles.lg]: size === 'lg',
          [styles.xl]: size === 'xl',

          [styles.italic]: italic,
          [styles.underline]: underline,
          [styles.strikeThrough]: strikeThrough,

          [styles.default]: color === 'default',
          [styles.secondary]: color === 'secondary',
          [styles.primary]: color === 'primary',
          [styles.warning]: color === 'warning',
          [styles.error]: color === 'error',
          [styles.success]: color === 'success',
        })}
        ref={ref}
        style={{
          fontWeight: strong ? 700 : weight,
        }}
        {...rest}
      />
    )
  },
)
Text.displayName = 'Text'