import { ForwardedRef, forwardRef } from 'react'
import { ButtonStyle, ButtonContentStyle } from './ButtonStyles'
import { ButtonProps } from './types'
import { useRipple } from './useRipple'

function Button(props: ButtonProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'primary',
    square = false,
    fullwidth = false,
    children,
    ...rest
  } = props

  const { handleClick, ripple } = useRipple(props)

  return (
    <ButtonStyle
      $size={size}
      $variant={variant}
      $fullwidth={fullwidth}
      $color={color}
      $square={square}
      onClick={handleClick}
      type='button'
      ref={ref}
      {...rest}
    >
      <ButtonContentStyle>{children}</ButtonContentStyle>
      {ripple}
    </ButtonStyle>
  )
}

export default forwardRef(Button)
