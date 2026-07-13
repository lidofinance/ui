import { ForwardedRef, forwardRef } from 'react'
import { TfootProps } from './types.js'
import { TfootStyle } from './styles.js'

export const Tfoot = forwardRef(
  (props: TfootProps, ref?: ForwardedRef<HTMLTableSectionElement>) => {
    return <TfootStyle ref={ref} {...props} />
  },
)
Tfoot.displayName = 'Tfoot'
