import { ForwardedRef, forwardRef } from 'react'
import { LdTheadProps } from '../types'

import { LdTheadStyle } from './styles'

function LdThead(props: LdTheadProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdTheadStyle ref={ref} {...props} />
}

export default forwardRef(LdThead)
