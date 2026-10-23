import {
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { Portal, useBodyScrollLock, useEscape, useFocusTrap } from '../hooks'
import { CloseButton } from '../icon-button'
import cn from 'classnames'

import styles from './Modal.module.css'

export type ModalDataTestId = {
  root?: string
  title?: string
  subtitle?: string
  closeButton?: string
  body?: string
  overlay?: string
}

export type ModalProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title' | 'children'
> & {
  title?: ReactNode
  subtitle?: ReactNode
  onClose?: () => void
  /** Wraps the card in a portaled scrim; enables Escape, focus trap and scroll lock. */
  withOverlay?: boolean
  bodyFill?: boolean
  /** Opt out of body scroll lock (overlay only). Default true. */
  lockScroll?: boolean
  /** Opt out of Escape-to-close (overlay only). Default true. */
  closeOnEscape?: boolean
  /** Opt out of closing on scrim click (overlay only). Default true. */
  closeOnOverlayClick?: boolean
  children: ReactNode
  dataTestId?: ModalDataTestId
}

const ModalDialog = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      title,
      subtitle,
      onClose,
      withOverlay = false,
      bodyFill = false,
      lockScroll = true,
      closeOnEscape = true,
      closeOnOverlayClick = true,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null)
    const backdropMouseDown = useRef(false)

    useImperativeHandle(ref, () => cardEl as HTMLDivElement, [cardEl])
    useBodyScrollLock(withOverlay && lockScroll)
    useFocusTrap(cardEl, withOverlay)
    // Stays registered with closeOnEscape={false} so Escape doesn't fall through to an underlying overlay.
    useEscape(withOverlay, () => {
      if (closeOnEscape) onClose?.()
    })

    const handleOverlayMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      backdropMouseDown.current = event.target === event.currentTarget
    }

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
      if (
        closeOnOverlayClick &&
        backdropMouseDown.current &&
        event.target === event.currentTarget
      ) {
        onClose?.()
      }
    }

    const card = (
      <div
        role='dialog'
        aria-modal={withOverlay || undefined}
        aria-labelledby={title ? titleId : undefined}
        data-testid={dataTestId?.root}
        {...rest}
        ref={setCardEl}
        className={cn(styles.card, bodyFill && styles.cardBodyFill, className)}
      >
        <div className={styles.headerGroup}>
          <div className={styles.header}>
            <span
              id={titleId}
              className={cn(styles.title, !title && styles.titleHidden)}
              data-testid={dataTestId?.title}
            >
              {title}
            </span>
            {onClose ? (
              <CloseButton
                onClick={onClose}
                dataTestId={{ root: dataTestId?.closeButton }}
              />
            ) : null}
          </div>
          {subtitle != null ? (
            <p className={styles.subtitle} data-testid={dataTestId?.subtitle}>
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className={styles.body} data-testid={dataTestId?.body}>
          {children}
        </div>
      </div>
    )

    if (!withOverlay) return card

    return (
      // Pointer-only: a focusable backdrop would add a tab stop before the dialog; keyboard closes via Escape.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={styles.overlay}
        onMouseDown={handleOverlayMouseDown}
        onClick={handleOverlayClick}
        data-testid={dataTestId?.overlay}
      >
        {card}
      </div>
    )
  },
)

ModalDialog.displayName = 'ModalDialog'

// Hooks live in ModalDialog so they run once the portal has mounted its content.
export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const dialog = <ModalDialog ref={ref} {...props} />
  return props.withOverlay ? <Portal>{dialog}</Portal> : dialog
})

Modal.displayName = 'Modal'
