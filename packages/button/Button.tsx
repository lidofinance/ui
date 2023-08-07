import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { useRipple } from './useRipple'
import cn from 'classnames'
import { Loader } from '../loaders'
import './Button.css'

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
        className={cn('btn', className, {
          ['btn_xxs']: size === 'xxs',
          ['btn_xs']: size === 'xs',
          ['btn_sm']: size === 'sm',
          ['btn_md']: size === 'md',
          ['btn_lg']: size === 'lg',
          ['btn_filled']: variant === 'filled',
          ['btn_outlined']: variant === 'outlined',
          ['btn_text']: variant === 'text',
          ['btn_ghost']: variant === 'ghost',
          ['btn_translucent']: variant === 'translucent',
          ['btn_fullwidth']: fullwidth,
          ['btn_primary']: color === 'primary',
          ['btn_secondary']: color === 'secondary',
          ['btn_warning']: color === 'warning',
          ['btn_error']: color === 'error',
          ['btn_success']: color === 'success',
          ['btn_square']: square,
          ['btn_loading']: loading,
          ['btn_active']: active,
        })}
        onClick={handleClick}
        disabled={disabled || loading}
        type='button'
        ref={ref}
        {...rest}
      >
        <span className={cn('btn__content', { ['btn_hidden']: loading })}>
          {children}
        </span>
        {loading && <Loader className='loader' size={loaderSize} />}
        {!active && ripple}
      </button>
    )
  },
)
Button.displayName = 'Button'
