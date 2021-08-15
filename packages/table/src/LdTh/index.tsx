import { ForwardedRef, forwardRef } from 'react'
import { LdTableProps } from '../types'

import { LdThStyle } from './styles'

function LdTh(props: LdTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { align = 'left', ...rest } = props

  return <LdThStyle $align={align} ref={ref} {...rest} />
}

export default forwardRef(LdTh)
