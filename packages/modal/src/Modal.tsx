import React, { ForwardedRef, forwardRef } from 'react'

import {
  ModalStyle,
  ModalBaseStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalTitleIconStyle,
  ModalCloseStyle,
  ModalContentStyle,
} from './ModalStyles'
import { ModalProps } from './types'
import ModalOverlay from './ModalOverlay'

function Modal(props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    children,
    title,
    titleIcon,
    center = false,
    extra,
    open,
    ...rest
  } = props
  const { onClose } = props

  const closable = !!onClose
  const untitled = !title

  let modalHeader
  if (titleIcon) {
    modalHeader = (
      <ModalHeaderStyle $short={untitled} $withTitleIcon={true}>
        <ModalTitleStyle $center={center} $withTitleIcon={true}>
          <ModalTitleIconStyle>{titleIcon}</ModalTitleIconStyle>
          {title}
        </ModalTitleStyle>
        {closable && <ModalCloseStyle onClick={onClose} />}
      </ModalHeaderStyle>
    )
  } else {
    modalHeader = (
      <ModalHeaderStyle $short={untitled} $withTitleIcon={false}>
        <ModalTitleStyle $center={center} $withTitleIcon={false}>
          {title}
        </ModalTitleStyle>
        {closable && <ModalCloseStyle onClick={onClose} />}
      </ModalHeaderStyle>
    )
  }

  return (
    <ModalOverlay in={open} {...rest} ref={ref}>
      <ModalStyle $center={center}>
        <ModalBaseStyle>
          {modalHeader}
          <ModalContentStyle>{children}</ModalContentStyle>
        </ModalBaseStyle>
        {extra}
      </ModalStyle>
    </ModalOverlay>
  )
}

export default forwardRef(Modal)
