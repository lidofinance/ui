import { ForwardedRef, forwardRef } from 'react'

import {
  ModalStyle,
  ModalBaseStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalCloseStyle,
  ModalContentStyle,
} from './ModalStyles'
import { ModalProps } from './types'
import ModalOverlay from './ModalOverlay'

function Modal(props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { children, title, center = false, extra, ...rest } = props
  const { onClose } = props

  const closable = !!onClose
  const untitled = !title

  return (
    <ModalOverlay {...rest} ref={ref}>
      <ModalStyle $center={center}>
        <ModalBaseStyle>
          <ModalHeaderStyle $short={untitled}>
            <ModalTitleStyle $center={center}>{title}</ModalTitleStyle>
            {closable && <ModalCloseStyle onClick={onClose} />}
          </ModalHeaderStyle>
          <ModalContentStyle>{children}</ModalContentStyle>
        </ModalBaseStyle>
        {extra}
      </ModalStyle>
    </ModalOverlay>
  )
}

export default forwardRef(Modal)
