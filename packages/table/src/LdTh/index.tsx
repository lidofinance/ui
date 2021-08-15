import { ForwardedRef, forwardRef } from 'react'
import { LdTableProps } from '../types'

import { LdThStyle } from './styles'

function LdTh(props: LdTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdThStyle ref={ref} {...props} />
}

export default forwardRef(LdTh)
