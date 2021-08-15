import { ForwardedRef, forwardRef } from 'react'
import { LdTableProps } from '../types'

import { LdTableStyle } from './styles'

function LdTable(props: LdTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdTableStyle ref={ref} {...props} />
}

export default forwardRef(LdTable)
