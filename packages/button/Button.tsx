import { ForwardedRef, forwardRef } from 'react'
import {
  ButtonStyle,
  ButtonContentStyle,
  ButtonLoaderStyle,
  ButtonStyleProps,
} from './ButtonStyles'
import { ButtonColors, ButtonSizes, ButtonVariants } from './constants'
import { useRipple } from './useRipple'

const loaderSizes = {
  xxs: 'small',
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const

export type ButtonProps = Omit<
  ButtonStyleProps,
  | '$size'
  | '$variant'
  | '$color'
  | '$fullwidth'
  | '$square'
  | '$loading'
  | '$active'
> & {
  size?: ButtonSizes
  variant?: ButtonVariants
  color?: ButtonColors
  fullwidth?: boolean
  square?: boolean
  loading?: boolean
  active?: boolean
}

function Button(props: ButtonProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const {
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
    ...rest
  } = props

  const { handleClick, ripple } = useRipple(props)
  const loaderSize = loaderSizes[size]

  return (
    <ButtonStyle
      {...rest}
      $size={size}
      $variant={variant}
      $color={color}
      $fullwidth={fullwidth}
      $square={square}
      $loading={loading}
      $active={active}
      onClick={handleClick}
      disabled={disabled || loading}
      type='button'
      ref={ref}
    >
      <ButtonContentStyle $hidden={loading}>{children}</ButtonContentStyle>
      {loading && <ButtonLoaderStyle size={loaderSize} />}
      {!active && ripple}
    </ButtonStyle>
  )
}

export default forwardRef(Button)
