import { ForwardedRef, forwardRef } from 'react'
import { StackItemStyle } from './StackItemStyles'
import { useStackContext } from './StackProvider'
import { StackItemProps } from './types'

function StackItem(props: StackItemProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { grow = 0, shrink = 0, basis = 'auto', ...rest } = props
  const { spacing } = useStackContext()

  return (
    <StackItemStyle
      $grow={grow}
      $shrink={shrink}
      $basis={basis}
      $spacing={spacing}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(StackItem)
