import { ForwardedRef, RefObject, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { modalRoot } from '../utils'
import { useMergeRefs, useOutsideClick, useEscape } from '../hooks'
import {
  TransitionInnerProps,
  TransitionWrapperProps,
  withTransition,
} from '../transition'
import { usePopoverPosition } from './usePopoverPosition'
import {
  PopoverWrapperStyle,
  PopoverRootStyle,
  PopoverRootStyleProps,
} from './PopoverRootStyles'
import { DEFAULT_PLACEMENT, PopoverPlacements } from './constants'

export type PopoverRootOwnProps = Omit<
  PopoverRootStyleProps,
  '$duration' | '$transition'
> & {
  wrapperRef?: RefObject<HTMLDivElement>
  anchorRef: RefObject<HTMLElement | null>
  placement?: PopoverPlacements
  backdrop?: boolean
  onClose?: () => void
}

export type PopoverRootInnerProps = PopoverRootOwnProps & TransitionInnerProps
export type PopoverRootProps = PopoverRootOwnProps & TransitionWrapperProps

function PopoverRoot(
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
    modalRoot
  )
}

export default withTransition(forwardRef(PopoverRoot))
