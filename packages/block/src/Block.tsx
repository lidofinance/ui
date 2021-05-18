import { ForwardedRef, forwardRef } from 'react'
import { BlockStyle } from './BlockStyles'
import { BlockProps } from './types'

function Block(props: BlockProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { color = 'foreground', variant = 'flat', ...rest } = props

  return <BlockStyle $color={color} $variant={variant} ref={ref} {...rest} />
}

export default forwardRef(Block)
