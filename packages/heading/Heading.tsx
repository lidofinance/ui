import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Heading.module.css'

export enum HeadingColor {
  text,
  secondary,
}
export type HeadingColors = keyof typeof HeadingColor

export enum HeadingSize {
  sm,
  md,
  lg,
}
export type HeadingSizes = keyof typeof HeadingSize

export type HeadingProps = ComponentPropsWithoutRef<'div'> & {
  color?: HeadingColors
  size?: HeadingSizes
}

export const Heading = forwardRef(
  (
    { size = 'md', color = 'text', ...rest }: HeadingProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.heading, {
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
          [styles.lg]: size === 'lg',
          [styles.text]: color === 'text',
          [styles.secondary]: color === 'secondary',
        })}
        ref={ref}
        {...rest}
      />
    )
  },
)
Heading.displayName = 'Heading'

export type H1Props = ComponentPropsWithoutRef<'h1'> & {
  color?: HeadingColors
}

export const H1 = forwardRef(function H1(
  { color = 'text', children, ...rest }: H1Props,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return (
    <h1
      className={cn(styles.heading, styles.lg, {
        [styles.text]: color === 'text',
        [styles.secondary]: color === 'secondary',
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </h1>
  )
})
H1.displayName = 'H1'

export type H2Props = ComponentPropsWithoutRef<'h2'> & {
  color?: HeadingColors
}

export const H2 = forwardRef(function H2(
  { color = 'text', children, ...rest }: H1Props,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return (
    <h2
      className={cn(styles.heading, styles.md, {
        [styles.text]: color === 'text',
        [styles.secondary]: color === 'secondary',
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </h2>
  )
})
H2.displayName = 'H2'

export type H3Props = ComponentPropsWithoutRef<'h3'> & {
  color?: HeadingColors
}

export const H3 = forwardRef(function H3(
  { color = 'text', children, ...rest }: H1Props,
  ref?: ForwardedRef<HTMLHeadingElement>,
) {
  return (
    <h3
      className={cn(styles.heading, styles.sm, {
        [styles.text]: color === 'text',
        [styles.secondary]: color === 'secondary',
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </h3>
  )
})
H3.displayName = 'H3'
