import { ForwardedRef, forwardRef } from 'react'
import { LdTrProps } from '../types'

import { LdTrStyle } from './styles'

function LdTr(props: LdTrProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdTrStyle ref={ref} {...props} />
}

export default forwardRef(LdTr)
