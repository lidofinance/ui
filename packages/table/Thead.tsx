import { ForwardedRef, forwardRef } from 'react'
import { TheadProps } from './types.js'
import { TheadStyle } from './styles.js'

export const Thead = forwardRef(
  (
    { sticky = false, ...rest }: TheadProps,
    ref?: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return <TheadStyle ref={ref} $sticky={sticky} {...rest} />
  },
)
Thead.displayName = 'Thead'
