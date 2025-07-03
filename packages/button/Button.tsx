import { ForwardedRef, forwardRef } from 'react'
import {
  ButtonStyle,
  ButtonContentStyle,
  ButtonLoaderStyle,
} from './ButtonStyles.js'
import { ButtonProps } from './types.js'
import { useRipple } from './useRipple.js'

const loaderSizes = {
  xxs: 'small',
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const

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
      ...rest
    }: ButtonProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { handleClick, ripple } = useRipple({ onClick })
    const loaderSize = loaderSizes[size]

    return (
      <ButtonStyle
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
        {...rest}
      >
        <ButtonContentStyle $hidden={loading}>{children}</ButtonContentStyle>
        {loading && <ButtonLoaderStyle size={loaderSize} />}
        {!active && ripple}
      </ButtonStyle>
    )
  },
)
Button.displayName = 'Button'
