import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { useRipple } from './useRipple'
import cn from 'classnames'
import styles from './Button.module.css'
import { Loader } from '../loaders'

const loaderSizes = {
  xxs: 'small',
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const

export enum ButtonSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type ButtonSizes = keyof typeof ButtonSize

export enum ButtonVariant {
  filled,
  outlined,
  text,
  ghost,
  translucent,
}
export type ButtonVariants = keyof typeof ButtonVariant

export enum ButtonColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type ButtonColors = keyof typeof ButtonColor

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  size?: ButtonSizes
  variant?: ButtonVariants
  color?: ButtonColors
  fullwidth?: boolean
  square?: boolean
  loading?: boolean
  active?: boolean
  as?: never
}

export const Button = forwardRef(
  (
    {
      size = 'md',
      variant = 'filled',
      color = 'primary',
      square = false,
      fullwidth = false,
      loading = false,
      active = false,
      onClick,
      disabled,
      children,
      className,
      ...rest
    }: ButtonProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { handleClick, ripple } = useRipple({ onClick })
    const loaderSize = loaderSizes[size]

    return (
      <button
        className={cn(styles.button, className, {
          [styles.xxs]: size === 'xxs',
          [styles.xs]: size === 'xs',
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
          [styles.lg]: size === 'lg',
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
          [styles.text]: variant === 'text',
          [styles.ghost]: variant === 'ghost',
          [styles.translucent]: variant === 'translucent',
          [styles.fullwidth]: fullwidth,
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.warning]: color === 'warning',
          [styles.error]: color === 'error',
          [styles.success]: color === 'success',
          [styles.square]: square,
          [styles.loading]: loading,
          [styles.active]: active,
        })}
        onClick={handleClick}
        disabled={disabled || loading}
        type='button'
        ref={ref}
        {...rest}
      >
        <span className={cn(styles.content, { [styles.hidden]: loading })}>
          {children}
        </span>
        {loading && <Loader className={styles.loader} size={loaderSize} />}
        {!active && ripple}
      </button>
    )
  },
)
Button.displayName = 'Button'
