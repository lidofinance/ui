import React, { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { modalRoot } from '../utils'
import { useMergeRefs, useOutsideClick, useEscape } from '../hooks'
import { withTransition } from '../transition'
import { usePopoverPosition } from './usePopoverPosition'
import { PopoverWrapperStyle, PopoverRootStyle } from './PopoverRootStyles'
import { PopoverRootInnerProps } from './types'
import { DEFAULT_PLACEMENT } from './constants'

function PopoverRoot(
  props: PopoverRootInnerProps,
  externalRef?: ForwardedRef<HTMLDivElement>,
) {
  const {
    anchorRef,
    wrapperRef: externalWrapperRef,
    placement = DEFAULT_PLACEMENT,
    backdrop = true,
    transitionStatus,
    duration,
    ...rest
  } = props

  const { onClose } = props
  useEscape(onClose)
  const { ref: outsidePopoverRef } = useOutsideClick(onClose)

  const {
    popoverRef: positionPopoverRef,
    wrapperRef: positionWrapperRef,
    style,
  } = usePopoverPosition(props)

  const popoverRef = useMergeRefs([
    positionPopoverRef,
    outsidePopoverRef,
    externalRef,
  ])

  const wrapperRef = useMergeRefs([positionWrapperRef, externalWrapperRef])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <PopoverWrapperStyle $backdrop={backdrop} ref={wrapperRef}>
      <PopoverRootStyle
        {...rest}
        $transition={transitionStatus}
        $duration={duration}
        data-placement={placement}
        style={style}
        ref={popoverRef}
      />
    </PopoverWrapperStyle>,
    modalRoot,
  )
}

export default withTransition(forwardRef(PopoverRoot))
