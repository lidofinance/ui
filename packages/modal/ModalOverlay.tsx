import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useMergeRefs, useEscape, useLockScroll } from '../hooks/index.js'
import { withTransition } from '../transition/index.js'
import { modalRoot } from '../utils/index.js'
import { ModalOverlayInnerProps } from './types.js'
import {
  ModalPortalStyle,
  ModalOverflowStyle,
  ModalContentStyle,
} from './ModalOverlayStyles.js'
import { useModalFocus } from './useModalFocus.js'
import { useModalClose } from './useModalClose.js'

export const ModalOverlay = withTransition(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        onClose,
        onBack,
        duration,
        transitionStatus,
        ...rest
      }: ModalOverlayInnerProps,
      externalRef?: ForwardedRef<HTMLDivElement>,
    ) => {
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
        modalRoot,
      )
    },
  ),
)
ModalOverlay.displayName = 'ModalOverlay'
