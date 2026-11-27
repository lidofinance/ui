import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type RefObject,
} from 'react'

import type { DismissAttemptDetails, DismissReason } from '../hooks/dismissal'
import { DialogLayer, type DialogLayerRender } from '../hooks/DialogLayer'
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

export type ModalCloseReason = DismissReason | 'close-button'

export type ModalLabels = {
  /** Accessible name of the close button. */
  close?: string
}

export type ModalSize = 'default' | 'large'

export type ModalScroll = 'body' | 'overlay'

export type ModalProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title' | 'children'
> & {
  title?: ReactNode
  subtitle?: ReactNode
  onClose?: (reason?: ModalCloseReason) => void
  /** Built-in texts, for i18n. */
  labels?: ModalLabels
  /** Controlled visibility; omitted means open, so mounting still opens it. */
  open?: boolean
  /** Wraps the card in a portaled scrim; enables Escape, focus trap, scroll lock. Without it, use `ModalCard` for the bare card. */
  withOverlay?: boolean
  /** With `withOverlay`, makes every other body child inert (including the app root); body-level roots (toasts, live regions) stay live with `data-lido-overlay-keep`. */
  inertOthers?: boolean
  /** Stretches the body; only matters full-screen on mobile. */
  bodyFill?: boolean
  /** Card width: `default` 500px, `large` 680px; full-width on mobile either way. */
  size?: ModalSize
  /** Desktop overflow: `body` caps the card at the viewport and scrolls the body under a pinned header; `overlay` grows the card and scrolls the whole overlay. Mobile always scrolls the body. */
  scroll?: ModalScroll
  /** Opt out of body scroll lock (overlay only). Default true. */
  lockScroll?: boolean
  /** Opt out of Escape-to-close (overlay only); refused presses reach `onDismissAttempt`. Default true. For a locked dialog use `dismissible={false}` (also blocks Android back). */
  closeOnEscape?: boolean
  /** Opt out of closing on scrim click (overlay only); refused presses reach `onDismissAttempt`. Default true. For a locked dialog use `dismissible={false}` (also blocks Android back). */
  closeOnOverlayClick?: boolean
  /** false blocks Escape, outside press and Android back; close buttons still work (overlay only). Default true. */
  dismissible?: boolean
  /** Called when a dismissal is refused, e.g. to ask "Discard changes?" (overlay only). */
  onDismissAttempt?: (details: DismissAttemptDetails) => void
  /** Element focused on open; defaults to the first tabbable (Close when `onClose` is set). An `autoFocus` child also keeps focus. */
  initialFocus?: RefObject<HTMLElement | null>
  /** Element focused on close, before the opener; use when the dialog opens without a focused opener, e.g. after an async step or a click in Safari. */
  returnFocusTo?: RefObject<HTMLElement | null>
  children: ReactNode
  dataTestId?: ModalDataTestId
}

type ModalDialogProps = ModalCardProps & { layer?: DialogLayerRender }

const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
  (
    {
      title,
      subtitle,
      onClose,
      labels,
      bodyFill = false,
      size = 'default',
      scroll = 'body',
      children,
      className,
      dataTestId,
      layer,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const subtitleId = useId()
    const [scrolled, setScrolled] = useState(false)
    const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null)
    const panelRef = layer?.panelRef
    const setCard = useCallback(
      (node: HTMLDivElement | null) => {
        setCardEl(node)
        panelRef?.(node)
      },
      [panelRef],
    )

    useImperativeHandle(ref, () => cardEl as HTMLDivElement, [cardEl])

    return (
      <div
        role='dialog'
        aria-modal={layer ? true : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={subtitle != null ? subtitleId : undefined}
        data-testid={dataTestId?.root}
        {...rest}
        {...layer?.motionProps}
        data-scrolled={scrolled || undefined}
        ref={setCard}
        className={cn(
          styles.card,
          size === 'large' && styles.large,
          bodyFill && styles.cardBodyFill,
          scroll === 'overlay' && styles.cardScrollOverlay,
          className,
        )}
      >
        <div className={styles.headerGroup}>
          <div className={styles.header}>
            <span
              role='heading'
              aria-level={2}
              id={titleId}
              className={styles.title}
              data-testid={dataTestId?.title}
            >
              {title}
            </span>
            {onClose ? (
              <CloseButton
                aria-label={labels?.close}
                onClick={() => onClose('close-button')}
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
        <div
          className={styles.body}
          data-testid={dataTestId?.body}
          onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 0)}
        >
          {children}
        </div>
      </div>
    )
  },
)

ModalDialog.displayName = 'ModalDialog'

/** Dialog card for supply, borrow and repay flows; with `withOverlay` it is portaled and closes on Escape and scrim click, traps focus and locks body scroll. `ModalCard` is the bare card. */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = true,
      withOverlay = false,
      inertOthers,
      lockScroll,
      closeOnEscape,
      closeOnOverlayClick,
      dismissible,
      onDismissAttempt,
      initialFocus,
      returnFocusTo,
      ...cardProps
    },
    ref,
  ) => {
    if (!withOverlay) {
      return open ? <ModalDialog ref={ref} {...cardProps} /> : null
    }
    return (
      <DialogLayer
        open={open}
        onClose={cardProps.onClose}
        closeOnEscape={closeOnEscape}
        closeOnOverlayClick={closeOnOverlayClick}
        dismissible={dismissible}
        onDismissAttempt={onDismissAttempt}
        lockScroll={lockScroll}
        inertOthers={inertOthers}
        initialFocus={initialFocus}
        returnFocusTo={returnFocusTo}
        className={styles.overlay}
        dataTestId={cardProps.dataTestId?.overlay}
      >
        {(layer) => <ModalDialog ref={ref} layer={layer} {...cardProps} />}
      </DialogLayer>
    )
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
  | 'dismissible'
  | 'onDismissAttempt'
  | 'initialFocus'
  | 'returnFocusTo'
>

/** The bare dialog card with no portal or overlay behavior; you own positioning. */
export const ModalCard = forwardRef<HTMLDivElement, ModalCardProps>(
  (props, ref) => <ModalDialog ref={ref} {...props} />,
)

ModalCard.displayName = 'ModalCard'
