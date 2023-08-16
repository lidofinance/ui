import { ForwardedRef, forwardRef } from 'react'
import { TrProps } from './types'
import { TrStyle } from './styles'

export const Tr = forwardRef(
  (
    { highlight, ...rest }: TrProps,
    ref?: ForwardedRef<HTMLTableRowElement>,
  ) => {
    return (
      <TrStyle
        $highlight={highlight}
        $interactive={!!rest.onClick}
        ref={ref}
        {...rest}
      />
    )
  },
)
Tr.displayName = 'Tr'
