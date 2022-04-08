import React, { ForwardedRef, forwardRef } from 'react'

import {
  ModalStyle,
  ModalBaseStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalTitleIconStyle,
  ModalTitleTextStyle,
  ModalCloseStyle,
  ModalContentStyle,
  ModalBackStyle,
  ModalSubtitleStyle,
} from './ModalStyles'
import { ModalProps } from './types'
import ModalOverlay from './ModalOverlay'

function Modal(props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    children,
    title,
    titleIcon,
    subtitle,
    center = false,
    extra,
    open,
    ...rest
  } = props
  const { onClose, onBack } = props

  const withTitleIcon = !!titleIcon
  const withSubtitle = !!subtitle
  const withCloseButton = !!onClose
  const withBackButton = !!onBack

  const modalHeader = (
    <ModalHeaderStyle $short={!title}>
      {withBackButton && <ModalBackStyle onClick={onBack} />}
      <ModalTitleStyle
        $center={center}
        $withTitleIcon={withTitleIcon}
        $withCloseButton={withCloseButton}
        $withBackButton={withBackButton}
      >
        {withTitleIcon && (
          <ModalTitleIconStyle $center={center}>
            {titleIcon}
          </ModalTitleIconStyle>
        )}
        <ModalTitleTextStyle>{title}</ModalTitleTextStyle>
      </ModalTitleStyle>
      {withCloseButton && <ModalCloseStyle onClick={onClose} />}
    </ModalHeaderStyle>
  )

  return (
    <ModalOverlay in={open} {...rest} ref={ref}>
      <ModalStyle $center={center}>
        <ModalBaseStyle>
          {modalHeader}
          {withSubtitle && <ModalSubtitleStyle>{subtitle}</ModalSubtitleStyle>}
          <ModalContentStyle>{children}</ModalContentStyle>
        </ModalBaseStyle>
        {extra}
      </ModalStyle>
    </ModalOverlay>
  )
}

export default forwardRef(Modal)
