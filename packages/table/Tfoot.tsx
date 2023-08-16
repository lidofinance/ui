import { ForwardedRef, forwardRef } from 'react'
import { TfootProps } from './types'
import { TfootStyle } from './styles'

export const Tfoot = forwardRef(
  (props: TfootProps, ref?: ForwardedRef<HTMLTableSectionElement>) => {
    return <TfootStyle ref={ref} {...props} />
  },
)
Tfoot.displayName = 'Tfoot'
