import { ForwardedRef, forwardRef } from 'react'
import { TrProps } from '../types'

import { TrStyle } from './styles'

function Tr(props: TrProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <TrStyle ref={ref} {...props} />
}

export default forwardRef(Tr)
