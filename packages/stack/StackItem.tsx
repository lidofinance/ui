import { ForwardedRef, forwardRef } from 'react'
import { StackItemStyle, StackItemStyleProps } from './StackItemStyles'
import { useStackContext } from './StackProvider'

export type StackItemProps = Omit<
  StackItemStyleProps,
  '$grow' | '$shrink' | '$basis' | '$spacing'
> & {
  grow?: number
  shrink?: number
  basis?: string
}

function StackItem(
  { grow = 0, shrink = 0, basis = 'auto', ...rest }: StackItemProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { spacing } = useStackContext()

  return (
    <StackItemStyle
      {...rest}
      $grow={grow}
      $shrink={shrink}
      $basis={basis}
      $spacing={spacing}
      ref={ref}
    />
  )
}

export default forwardRef(StackItem)
