import { ForwardedRef, forwardRef } from 'react'
import { ChipProps } from './types'
import { ChipWrapperStyle } from './ChipStyles'

function Chip(props: ChipProps, ref?: ForwardedRef<HTMLInputElement>) {
  const { children, onClick, variant = 'positive', ...rest } = props

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
