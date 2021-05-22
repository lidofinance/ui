import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import {
  useMergeRefs,
  useInterceptFocus,
  useAutoFocus,
  useEscape,
} from '@lidofinance/hooks'
import { modalRoot } from '@lidofinance/utils'
import { ModalOverlayProps } from './types'
import {
  ModalPortalStyle,
  ModalOverlayStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useModalFocus } from './useModalFocus'

function ModalOverlay(
  props: ModalOverlayProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { onClose, onKeyDown, ...rest } = props
  const closable = !!onClose

  useInterceptFocus()
  useEscape(props.onClose)

  const autoFocusRef = useAutoFocus()
  const controlRef = useModalFocus()
  const contentRef = useMergeRefs([autoFocusRef, controlRef, externalRef])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <ModalPortalStyle>
      <ModalOverlayStyle
        $closable={closable}
        onClick={onClose}
        aria-hidden='true'
      />
      <ModalContentStyle
        tabIndex={-1}
        role='dialog'
        aria-modal='true'
        ref={contentRef}
        {...rest}
      />
    </ModalPortalStyle>,
    modalRoot
  )
}

export default forwardRef(ModalOverlay)
