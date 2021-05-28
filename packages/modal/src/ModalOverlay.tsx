import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useMergeRefs, useEscape, useLockScroll } from '@lidofinance/hooks'
import { modalRoot } from '@lidofinance/utils'
import { Transition } from 'react-transition-group'
import { ModalOverlayInnerProps, ModalOverlayProps } from './types'
import {
  ModalPortalStyle,
  ModalOverflowStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useModalFocus } from './useModalFocus'
import { useModalClose } from './useModalClose'
import { DEFAULT_DURATION } from './constants'

const ModalOverlayInner = forwardRef(function ModalOverlayInner(
  props: ModalOverlayInnerProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { onClose, duration, transitionStatus, ...rest } = props
  const closable = !!onClose

  useEscape(onClose)
  useLockScroll()

  const controlRef = useModalFocus()
  const { ref: closeRef, handleClick } = useModalClose(onClose)

  const mergedRef = useMergeRefs([controlRef, closeRef, externalRef])

  return (
    <ModalPortalStyle
      $closable={closable}
      $duration={duration}
      $transition={transitionStatus}
      onClick={handleClick}
    >
      <ModalOverflowStyle>
        <ModalContentStyle
          tabIndex={-1}
          role='dialog'
          aria-modal='true'
          ref={mergedRef}
          $transition={transitionStatus}
          $duration={duration}
          {...rest}
        />
      </ModalOverflowStyle>
    </ModalPortalStyle>
  )
})

function ModalOverlay(
  props: ModalOverlayProps,
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
        <ModalOverlayInner
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

export default forwardRef(ModalOverlay)
