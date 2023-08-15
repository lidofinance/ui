import { ForwardedRef, forwardRef } from 'react'
import { BlockStyle } from './BlockStyles'
import { BlockProps } from './types'

function Block(
  {
    color = 'foreground',
    variant = 'flat',
    paddingLess = false,
    ...rest
  }: BlockProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <BlockStyle
      $color={color}
      $variant={variant}
      $paddingLess={paddingLess}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(Block)
