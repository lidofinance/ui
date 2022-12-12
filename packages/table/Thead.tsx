import React, { ForwardedRef, forwardRef } from 'react'
import { TheadProps } from './types'

import { TheadStyle } from './styles'

function Thead(props: TheadProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  const { sticky = false, ...rest } = props

  return <TheadStyle ref={ref} $sticky={sticky} {...rest} />
}

export default forwardRef(Thead)
