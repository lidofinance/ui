import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { modalRoot } from '@lidofinance/utils'
import { useMergeRefs, useOutsideClick, useEscape } from '@lidofinance/hooks'
import { withTransition } from '@lidofinance/transition'
import { usePopoverPosition } from './usePopoverPosition'
import { PopoverWrapperStyle, PopoverRootStyle } from './PopoverRootStyles'
import { PopoverRootInnerProps } from './types'
import { DEFAULT_PLACEMENT } from './constants'

function PopoverRoot(
  {
    anchorRef,
    wrapperRef: externalWrapperRef,
    placement = DEFAULT_PLACEMENT,
    backdrop = true,
    transitionStatus,
    duration,
    style: propsStyle,
    onClose,
    ...rest
  }: PopoverRootInnerProps,
  externalRef?: ForwardedRef<HTMLDivElement>,
) {
  useEscape(onClose)
  const { ref: outsidePopoverRef } = useOutsideClick(onClose)

  const {
    popoverRef: positionPopoverRef,
    wrapperRef: positionWrapperRef,
    style,
  } = usePopoverPosition({ placement, anchorRef, style: propsStyle })

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
