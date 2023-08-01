import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { useMergeRefs, useEscape, useLockScroll } from '../hooks'
import {
  TransitionInnerProps,
  TransitionWrapperProps,
  withTransition,
} from '../transition'
import { modalRoot } from '../utils'
import { useModalFocus } from './useModalFocus'
import { useModalClose } from './useModalClose'
import cn from 'classnames'
import styles from './ModalOverlay.module.css'

export type ModalOverlayOwnProps = ComponentPropsWithoutRef<'div'> & {
  onClose?: () => void
  onBack?: () => void
}

export type ModalOverlayProps = ModalOverlayOwnProps & TransitionWrapperProps
export type ModalOverlayInnerProps = ModalOverlayOwnProps & TransitionInnerProps

export const ModalOverlay = withTransition(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        onClose,
        onBack,
        duration,
        transitionStatus,
        className,
        style,
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
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className={cn(styles.portal, className, {
            [styles.closable]: closable,
          })}
          style={{
            transition: `opacity ${duration}ms ease`,
            opacity: ['exiting', 'exited'].includes(transitionStatus) ? 0 : 1,
            ...style,
          }}
          onClick={handleClick}
        >
          <div className={styles.overflow}>
            <div
              className={styles.content}
              style={{
                transition: `transform ${duration}ms ease-out`,
                transform: ['exiting', 'exited'].includes(transitionStatus)
                  ? 'translateY(6px)'
                  : 'translateY(0)',
              }}
              tabIndex={-1}
              role='dialog'
              aria-modal='true'
              ref={mergedRef}
              {...rest}
            />
          </div>
        </div>,
        modalRoot,
      )
    },
  ),
)
ModalOverlay.displayName = 'ModalOverlay'
