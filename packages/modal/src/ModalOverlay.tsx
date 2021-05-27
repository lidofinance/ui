import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import {
  useMergeRefs,
  useInterceptFocus,
  useAutoFocus,
  useEscape,
  useLockScroll,
} from '@lidofinance/hooks'
import { modalRoot } from '@lidofinance/utils'
import { ModalOverlayProps } from './types'
import {
  ModalPortalStyle,
  ModalOverflowStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useModalFocus } from './useModalFocus'
import { useModalClose } from './useModalClose'

function ModalOverlay(
  props: ModalOverlayProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { onClose, onKeyDown, ...rest } = props
  const closable = !!onClose

  useInterceptFocus()
  useEscape(onClose)
  useLockScroll()

  const autoFocusRef = useAutoFocus()
  const controlRef = useModalFocus()
  const { ref: closeRef, handleClick } = useModalClose(onClose)

  const mergedRef = useMergeRefs([
    autoFocusRef,
    controlRef,
    closeRef,
    externalRef,
  ])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <ModalPortalStyle $closable={closable} onClick={handleClick}>
      <ModalOverflowStyle>
        <ModalContentStyle
          tabIndex={-1}
          role='dialog'
          aria-modal='true'
          ref={mergedRef}
          {...rest}
        />
      </ModalOverflowStyle>
    </ModalPortalStyle>,
    modalRoot
  )
}

export default forwardRef(ModalOverlay)
