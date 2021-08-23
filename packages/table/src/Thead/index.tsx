import { ForwardedRef, forwardRef } from 'react'
import { TheadProps } from '../types'

import { TheadStyle } from './styles'

function Thead(props: TheadProps, ref?: ForwardedRef<HTMLDivElement>) {
  return <TheadStyle ref={ref} {...props} />
}

export default forwardRef(Thead)
