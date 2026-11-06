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

import { useHeaderOffset } from '../hooks'
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

type ModalDialogProps = ModalCardProps & { layer?: DialogLayerRender }

const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
  (
    {
      title,
      subtitle,
      onClose,
      bodyFill = false,
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
    const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null)
    const [headerEl, setHeaderEl] = useState<HTMLDivElement | null>(null)
    const panelRef = layer?.panelRef
    const setCard = useCallback(
      (node: HTMLDivElement | null) => {
        setCardEl(node)
        panelRef?.(node)
      },
      [panelRef],
    )

    useImperativeHandle(ref, () => cardEl as HTMLDivElement, [cardEl])
    // The overlay is the mobile scroll container, so it carries the offset.
    useHeaderOffset(layer?.scrim ?? null, headerEl)

    return (
      <div
        role='dialog'
        aria-modal={layer ? true : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={subtitle != null ? subtitleId : undefined}
        data-testid={dataTestId?.root}
        {...rest}
        {...layer?.motionProps}
        ref={setCard}
        className={cn(styles.card, bodyFill && styles.cardBodyFill, className)}
      >
        <div ref={setHeaderEl} className={styles.headerGroup}>
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
      initialFocus,
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
        lockScroll={lockScroll}
        inertOthers={inertOthers}
        initialFocus={initialFocus}
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
  | 'initialFocus'
>

/** The bare dialog card with no portal or overlay behavior; you own positioning. */
export const ModalCard = forwardRef<HTMLDivElement, ModalCardProps>(
  (props, ref) => <ModalDialog ref={ref} {...props} />,
)

ModalCard.displayName = 'ModalCard'
