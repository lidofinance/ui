import { ForwardedRef, forwardRef } from 'react'
import { LdTbodyProps } from '../types'

import { LdTbodyStyle } from './styles'

function LdTbody(props: LdTbodyProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <LdTbodyStyle ref={ref} {...props} />
}

export default forwardRef(LdTbody)
