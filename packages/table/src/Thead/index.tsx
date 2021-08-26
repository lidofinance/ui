import { ForwardedRef, forwardRef } from 'react'
import { TheadProps } from '../types'

import { TheadStyle } from './styles'

function Thead(props: TheadProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  return <TheadStyle ref={ref} {...props} />
}

export default forwardRef(Thead)
