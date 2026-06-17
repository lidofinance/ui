import { ForwardedRef, forwardRef } from 'react'
import { ModalExtraStyle } from './ModalExtraStyles.js'
import { ModalExtraProps } from './types.js'

export const ModalExtra = forwardRef(
  (props: ModalExtraProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return <ModalExtraStyle {...props} ref={ref} />
  },
)
ModalExtra.displayName = 'ModalExtra'
