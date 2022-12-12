import React, { ForwardedRef, forwardRef } from 'react'

import { ModalExtraStyle } from './ModalExtraStyles'
import { ModalExtraProps } from './types'

function ModalExtra(
  props: ModalExtraProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <ModalExtraStyle {...props} ref={ref} />
}

export default forwardRef(ModalExtra)
