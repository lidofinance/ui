import { ForwardedRef, forwardRef } from 'react'
import { BlockStyle } from './BlockStyles'
import { BlockProps } from './types'

function Block(props: BlockProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    color = 'foreground',
    variant = 'flat',
    paddingLess = false,
    ...rest
  } = props

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
