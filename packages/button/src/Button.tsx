import React, { ForwardedRef, forwardRef } from 'react'
import {
  ButtonStyle,
  ButtonContentStyle,
  ButtonLoaderStyle,
} from './ButtonStyles'
import { ButtonButtonProps, ButtonProps } from './types'
import { useRipple } from './useRipple'

const loaderSizes = {
  xxs: 'small',
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const

function Button(
  props: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
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
    href,
    ...rest
  } = props as ButtonButtonProps

  const { handleClick, ripple } = useRipple(props)
  const loaderSize = loaderSizes[size]

  return (
    <ButtonStyle
      as={href ? ('a' as React.ElementType) : undefined}
      $size={size}
      $variant={variant}
      $fullwidth={fullwidth}
      $color={color}
      $square={square}
      $loading={loading}
      $active={active}
      onClick={handleClick}
      disabled={disabled || loading}
      type='button'
      ref={ref}
      href={href}
      {...rest}
    >
      <ButtonContentStyle $hidden={loading}>{children}</ButtonContentStyle>
      {loading && <ButtonLoaderStyle size={loaderSize} />}
      {!active && ripple}
    </ButtonStyle>
  )
}

export default forwardRef(Button)
