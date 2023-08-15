import { ForwardedRef, forwardRef } from 'react'
import { ChipProps } from './types'
import { ChipWrapperStyle } from './ChipStyles'

function Chip(
  { children, onClick, variant = 'positive', ...rest }: ChipProps,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  return (
    <ChipWrapperStyle
      $interactive={!!onClick}
      $variant={variant}
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </ChipWrapperStyle>
  )
}

export default forwardRef(Chip)
