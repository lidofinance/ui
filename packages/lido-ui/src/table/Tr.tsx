import { ForwardedRef, forwardRef } from 'react'
import { TrProps } from './types.js'
import { TrStyle } from './styles.js'

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
