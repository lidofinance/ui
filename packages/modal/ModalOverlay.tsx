import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useMergeRefs, useEscape, useLockScroll } from '@lidofinance/hooks'
import {
  TransitionInnerProps,
  TransitionWrapperProps,
  withTransition,
} from '@lidofinance/transition'
import { modalRoot } from '@lidofinance/utils'
import {
  ModalPortalStyle,
  ModalOverflowStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useModalFocus } from './useModalFocus'
import { useModalClose } from './useModalClose'
import { HTMLProps } from 'react'

// Can't use ComponentProps<typeof ModalContentStyle> here, because
// ModalContentStyle defines Some transition properties itself
export type ModalOverlayOwnProps = Omit<HTMLProps<HTMLDivElement>, 'ref'> & {
  as?: keyof HTMLProps<HTMLDivElement>
  forwardedAs?: keyof HTMLProps<HTMLDivElement>
  onClose?: () => void
  onBack?: () => void
}
export type ModalOverlayProps = ModalOverlayOwnProps & TransitionWrapperProps
export type ModalOverlayInnerProps = ModalOverlayOwnProps & TransitionInnerProps

function ModalOverlay(
  {
    onClose,
    onBack,
    duration,
    transitionStatus,
    ...rest
  }: ModalOverlayInnerProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const closable = !!onClose

  useEscape(onClose)
  useLockScroll()

  const controlRef = useModalFocus()
  const { ref: closeRef, handleClick } = useModalClose(onClose)

  const mergedRef = useMergeRefs([controlRef, closeRef, externalRef])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
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
    </ModalPortalStyle>,
    modalRoot
  )
}

export default withTransition(forwardRef(ModalOverlay))
