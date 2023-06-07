import { ForwardedRef, forwardRef } from 'react'
import { ModalExtraStyle, ModalExtraStyleProps } from './ModalExtraStyles'

export type ModalExtraProps = ModalExtraStyleProps

function ModalExtra(
  props: ModalExtraProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <ModalExtraStyle {...props} ref={ref} />
}

export default forwardRef(ModalExtra)
