import ReactDOM from 'react-dom'
import { ForwardedRef, forwardRef } from 'react'
import { modalRoot } from '@lidofinance/utils'
import { Transition } from 'react-transition-group'
import { useMergeRefs, useOutsideClick, useEscape } from '@lidofinance/hooks'
import { usePopoverPosition } from './usePopoverPosition'
import { PopoverWrapperStyle, PopoverRootStyle } from './PopoverRootStyles'
import { PopoverRootInnerProps, PopoverRootProps } from './types'
import { DEFAULT_DURATION, DEFAULT_PLACEMENT } from './constants'

const PopoverRootInner = forwardRef(function PopoverRootInner(
  props: PopoverRootInnerProps,
  externalRef?: ForwardedRef<HTMLDivElement>
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

  return (
    <PopoverWrapperStyle $backdrop={backdrop} ref={wrapperRef}>
      <PopoverRootStyle
        {...rest}
        $transition={transitionStatus}
        $duration={duration}
        data-placement={placement}
        style={style}
        ref={popoverRef}
      />
    </PopoverWrapperStyle>
  )
})

function PopoverRoot(
  props: PopoverRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const {
    open,
    duration = DEFAULT_DURATION,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...rest
  } = props

  const transitionProps = {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  }

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <Transition
      in={open}
      timeout={duration}
      mountOnEnter
      unmountOnExit
      appear
      {...transitionProps}
    >
      {(status) => (
        <PopoverRootInner
          duration={duration}
          transitionStatus={status}
          ref={ref}
          {...rest}
        />
      )}
    </Transition>,
    modalRoot
  )
}

export default forwardRef(PopoverRoot)
