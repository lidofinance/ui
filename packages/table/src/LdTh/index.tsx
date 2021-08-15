import { ForwardedRef, forwardRef } from 'react'
import { LdThProps } from '../types'

import { LdThStyle } from './styles'

function LdTh(props: LdThProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { align = 'left', ...rest } = props

  return <LdThStyle $align={align} ref={ref} {...rest} />
}

export default forwardRef(LdTh)
