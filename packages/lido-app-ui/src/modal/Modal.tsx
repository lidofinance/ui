import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from 'react'

import {
  Portal,
  useBodyScrollLock,
  useEscape,
  useFocusTrap,
  useHideOthers,
  useOutsideClick,
} from '../hooks'
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
  /** Controlled visibility; omitted means open, so mounting still opens it. */
  open?: boolean
  /** Wraps the card in a portaled scrim; enables Escape, focus trap, scroll lock. */
  withOverlay?: boolean
  /** With `withOverlay`, makes every other body child inert (including the app root); body-level roots (toasts, live regions) stay live with `data-lido-overlay-keep`. */
  inertOthers?: boolean
  /** Stretches the body; only matters full-screen on mobile. */
  bodyFill?: boolean
  /** Opt out of body scroll lock (overlay only). Default true. */
  lockScroll?: boolean
  /** Opt out of Escape-to-close (overlay only). Default true. */
  closeOnEscape?: boolean
  /** Opt out of closing on scrim click (overlay only). Default true. */
  closeOnOverlayClick?: boolean
  /** Element focused on open; defaults to the first tabbable (Close when `onClose` is set). An `autoFocus` child also keeps focus. */
  initialFocus?: RefObject<HTMLElement | null>
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
      inertOthers = false,
      bodyFill = false,
      lockScroll = true,
      closeOnEscape = true,
      closeOnOverlayClick = true,
      initialFocus,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const subtitleId = useId()
    const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null)
    // Captured during render: a child's autoFocus is applied at commit, after this.
    const [returnFocus] = useState(() =>
      typeof document === 'undefined'
        ? null
        : (document.activeElement as HTMLElement | null),
    )
    const overlayRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const pressedScrim = useRef(false)

    useImperativeHandle(ref, () => cardEl as HTMLDivElement, [cardEl])
    useBodyScrollLock({ enabled: withOverlay && lockScroll })
    // Before the trap: cleanups run in order, so inert lifts before focus returns to the opener.
    useHideOthers(cardEl, withOverlay && inertOthers)
    useFocusTrap(cardEl, { enabled: withOverlay, initialFocus, returnFocus })
    // Stays registered with closeOnEscape={false} so Escape doesn't fall through to an underlying overlay.
    useEscape(
      () => {
        if (closeOnEscape) onClose?.()
      },
      { enabled: withOverlay },
    )

    // Sticky header on mobile: scroll-padding keeps focused fields from landing under it (WCAG 2.4.11).
    useEffect(() => {
      const overlay = overlayRef.current
      const header = headerRef.current
      if (!withOverlay || !overlay || !header) return
      if (typeof ResizeObserver === 'undefined') return
      const measure = () =>
        overlay.style.setProperty(
          '--local-header-height',
          `${header.offsetHeight + 8}px`,
        )
      measure()
      const observer = new ResizeObserver(measure)
      observer.observe(header)
      return () => observer.disconnect()
    }, [withOverlay, cardEl])

    // Joins the outside-click stack even with closeOnOverlayClick={false}, so presses here never reach an overlay underneath.
    // Decided at pointerdown: the handler only runs while this is the top layer.
    useOutsideClick(
      cardEl,
      (event) => {
        pressedScrim.current =
          !(event.button > 0) && event.target === overlayRef.current
      },
      { enabled: withOverlay },
    )

    const handleCardPointerDown = (event: PointerEvent<HTMLDivElement>) => {
      pressedScrim.current = false
      rest.onPointerDown?.(event)
    }

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
      if (
        closeOnOverlayClick &&
        pressedScrim.current &&
        event.target === event.currentTarget
      ) {
        onClose?.()
      }
      pressedScrim.current = false
    }

    const card = (
      <div
        role='dialog'
        aria-modal={withOverlay || undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={subtitle != null ? subtitleId : undefined}
        data-testid={dataTestId?.root}
        {...rest}
        onPointerDown={handleCardPointerDown}
        ref={setCardEl}
        className={cn(styles.card, bodyFill && styles.cardBodyFill, className)}
      >
        <div ref={headerRef} className={styles.headerGroup}>
          <div className={styles.header}>
            <span
              role='heading'
              aria-level={2}
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
            <p
              id={subtitleId}
              className={styles.subtitle}
              data-testid={dataTestId?.subtitle}
            >
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
        ref={overlayRef}
        className={styles.overlay}
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
/** Dialog card for supply, borrow and repay flows; with `withOverlay` it is portaled and closes on Escape and scrim click, traps focus and locks body scroll. `ModalCard` is the bare card. */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open = true, ...props }, ref) => {
    if (!open) return null
    const dialog = <ModalDialog ref={ref} {...props} />
    return props.withOverlay ? <Portal>{dialog}</Portal> : dialog
  },
)

Modal.displayName = 'Modal'

export type ModalCardProps = Omit<
  ModalProps,
  | 'open'
  | 'withOverlay'
  | 'inertOthers'
  | 'lockScroll'
  | 'closeOnEscape'
  | 'closeOnOverlayClick'
  | 'initialFocus'
>

/** The bare dialog card with no portal or overlay behavior; you own positioning. */
export const ModalCard = forwardRef<HTMLDivElement, ModalCardProps>(
  (props, ref) => <ModalDialog ref={ref} {...props} withOverlay={false} />,
)

ModalCard.displayName = 'ModalCard'
