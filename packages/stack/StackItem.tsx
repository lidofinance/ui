import { ForwardedRef, forwardRef } from 'react'
import { StackItemStyle } from './StackItemStyles'
import { useStackContext } from './StackProvider'
import { StackItemProps } from './types'

export const StackItem = forwardRef(
  (
    { grow = 0, shrink = 0, basis = 'auto', ...rest }: StackItemProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
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
  },
)
StackItem.displayName = 'StackItem'
