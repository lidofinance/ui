import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import {
  useMergeRefs,
  useInterceptFocus,
  useAutoFocus,
} from '@lidofinance/hooks'
import { ModalOverlayProps } from './types'
import {
  ModalPortalStyle,
  ModalOverlayStyle,
  ModalContentStyle,
} from './ModalOverlayStyles'
import { useEscape, useModalFocus } from './hooks'
import ModalRoot from './ModalRoot'

function ModalOverlay(
  props: ModalOverlayProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { onClose, onKeyDown, ...rest } = props
  const closable = !!onClose

  useInterceptFocus()
  const autoFocusRef = useAutoFocus()
  const controlRef = useModalFocus()
  const contentRef = useMergeRefs([autoFocusRef, controlRef, externalRef])

  const handleKeyDown = useEscape(props)

  if (!ModalRoot) return null

  return ReactDOM.createPortal(
    <ModalPortalStyle>
      <ModalOverlayStyle
        $closable={closable}
        onClick={onClose}
        aria-hidden='true'
      />
      <ModalContentStyle
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        role='dialog'
        aria-modal='true'
        ref={contentRef}
        {...rest}
      />
    </ModalPortalStyle>,
    ModalRoot
  )
}

export default forwardRef(ModalOverlay)
