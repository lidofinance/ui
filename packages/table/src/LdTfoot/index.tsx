import { ForwardedRef, forwardRef } from 'react'
import { LdTfootProps } from '../types'

import { LdTfootStyle } from './styles'

function LdTfoot(props: LdTfootProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdTfootStyle ref={ref} {...props} />
}

export default forwardRef(LdTfoot)
