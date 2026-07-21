import { ForwardedRef, forwardRef } from 'react'
import { StackItemStyle } from './StackItemStyles.js'
import { useStackContext } from './StackProvider.js'
import { StackItemProps } from './types.js'

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
