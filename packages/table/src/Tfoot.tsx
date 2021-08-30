import { ForwardedRef, forwardRef } from 'react'
import { TfootProps } from './types'

import { TfootStyle } from './styles'

function Tfoot(props: TfootProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  return <TfootStyle ref={ref} {...props} />
}

export default forwardRef(Tfoot)
