import { ForwardedRef, forwardRef } from 'react'
import { ModalExtraStyle } from './ModalExtraStyles'
import { ModalExtraProps } from './types'

export const ModalExtra = forwardRef(
  (props: ModalExtraProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return <ModalExtraStyle {...props} ref={ref} />
  },
)
ModalExtra.displayName = 'ModalExtra'
