import { ForwardedRef, forwardRef } from 'react'
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
} from './ModalStyles.js'
import { ModalProps } from './types.js'
import { ModalOverlay } from './ModalOverlay.js'

export const Modal = forwardRef(
  (
    {
      children,
      title,
      titleIcon,
      subtitle,
      center = false,
      extra,
      open,
      onClose,
      onBack,
      windowSize = 'sm',
      windowProps,
      ...rest
    }: ModalProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
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
      <ModalOverlay
        ref={ref}
        in={open}
        onClose={onClose}
        onBack={onBack}
        {...rest}
      >
        <ModalStyle $center={center} $size={windowSize} {...windowProps}>
          <ModalBaseStyle>
            {modalHeader}
            {withSubtitle && (
              <ModalSubtitleStyle>{subtitle}</ModalSubtitleStyle>
            )}
            <ModalContentStyle>{children}</ModalContentStyle>
          </ModalBaseStyle>
          {extra}
        </ModalStyle>
      </ModalOverlay>
    )
  },
)
Modal.displayName = 'Modal'
