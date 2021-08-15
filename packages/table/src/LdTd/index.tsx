import { ForwardedRef, forwardRef } from 'react'
import { LdTableProps } from '../types'

import { LdTdStyle } from './styles'

function LdTd(props: LdTableProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { align = 'left', textColor = 'secondary', ...rest } = props

  return <LdTdStyle $align={align} $textColor={textColor} ref={ref} {...rest} />
}

export default forwardRef(LdTd)
