import ReactDOM from 'react-dom'
import { ForwardedRef, forwardRef } from 'react'
import { modalRoot } from '@lidofinance/utils'
import { useMergeRefs, useOutsideClick, useEscape } from '@lidofinance/hooks'
import { usePopoverPosition } from './usePopoverPosition'

import { PopoverWrapperStyle, PopoverRootStyle } from './PopoverRootStyles'
import { PopoverRootProps } from './types'

function PopoverRoot(
  props: PopoverRootProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { wrapperRef, anchorRef, placement, backdrop = true, ...rest } = props

  useEscape(props.onClose)
  const { ref: outsidePopoverRef } = useOutsideClick(props.onClose)
  const { popoverRef: positionPopoverRef, style } = usePopoverPosition(props)

  const popoverRef = useMergeRefs([
    positionPopoverRef,
    outsidePopoverRef,
    externalRef,
  ])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <PopoverWrapperStyle $backdrop={backdrop} ref={wrapperRef}>
      <PopoverRootStyle {...rest} style={style} ref={popoverRef} />
    </PopoverWrapperStyle>,
    modalRoot
  )
}

export default forwardRef(PopoverRoot)
