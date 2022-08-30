import React from 'react'
import { ForwardedRef, forwardRef } from 'react'
import { TbodyProps } from './types'

import { TbodyStyle } from './styles'

function Tbody(props: TbodyProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  return <TbodyStyle ref={ref} {...props} />
}

export default forwardRef(Tbody)
