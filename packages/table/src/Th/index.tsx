import { ForwardedRef, forwardRef } from 'react'
import { ThProps } from '../types'

import { ThStyle } from './styles'

function Th(props: ThProps, ref?: ForwardedRef<HTMLTableHeaderCellElement>) {
  const { align = 'left', ...rest } = props

  return <ThStyle $align={align} ref={ref} {...rest} />
}

export default forwardRef(Th)
