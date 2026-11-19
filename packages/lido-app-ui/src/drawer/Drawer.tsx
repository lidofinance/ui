import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react'

import cn from 'classnames'

import type { DismissAttemptDetails, DismissReason } from '../hooks/dismissal'
import { DialogLayer, type DialogLayerRender } from '../hooks/DialogLayer'
import { CloseButton } from '../icon-button'
import { useDismiss } from '../hooks/dismissal'

import styles from './Drawer.module.css'
import { useSwipeDismiss } from './useSwipeDismiss'

export type DrawerLabels = {
  /** Accessible name of the close button. */
  close?: string
}

export type DrawerSide = 'left' | 'right'

export type DrawerDismissReason = DismissReason | 'swipe'

export type DrawerCloseReason = DrawerDismissReason | 'close-button'

export type DrawerDataTestId = {
  root?: string
  overlay?: string
  title?: string
  closeButton?: string
  body?: string
}

export type DrawerProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title' | 'children'
> & {
  open: boolean
  onClose: (reason?: DrawerCloseReason) => void
  /** Built-in texts, for i18n. */
  labels?: DrawerLabels
  /** Dialog heading. Pass `aria-label` when omitted: the dialog has no accessible name otherwise. */
  title?: ReactNode
  /** Edge the panel slides in from; mobile (<=600px) renders a bottom sheet instead. Default `right`. */
  side?: DrawerSide
  /** Panel width in px (or any CSS length); capped to the viewport; ignored on mobile (<=600px, bottom sheet). Default 440. */
  width?: number | string
  /** Makes every other body child inert (including the app root); body-level roots stay live with `data-lido-overlay-keep`. */
  inertOthers?: boolean
  /** Opt out of body scroll lock. Default true. */
  lockScroll?: boolean
  /** Opt out of Escape-to-close; refused presses reach `onDismissAttempt`. Default true. For a locked dialog use `dismissible={false}` (also blocks Android back). */
  closeOnEscape?: boolean
  /** Opt out of closing on scrim click; refused presses reach `onDismissAttempt`. Default true. For a locked dialog use `dismissible={false}` (also blocks Android back). */
  closeOnOverlayClick?: boolean
  /** false blocks Escape, outside press, swipe-down and Android back; close buttons still work. Default true. */
  dismissible?: boolean
  /** Called when a dismissal is refused, e.g. to ask "Discard changes?". */
  onDismissAttempt?: (
    details: DismissAttemptDetails<DrawerDismissReason>,
  ) => void
  /** Element focused on open; defaults to the first tabbable (the close button). */
  initialFocus?: RefObject<HTMLElement | null>
  /** Element focused on close, before the opener; use when the dialog opens without a focused opener, e.g. after an async step or a click in Safari. */
  returnFocusTo?: RefObject<HTMLElement | null>
  children: ReactNode
  dataTestId?: DrawerDataTestId
}

type DrawerPanelProps = Omit<
  DrawerProps,
  | 'open'
  | 'inertOthers'
  | 'lockScroll'
  | 'closeOnEscape'
  | 'closeOnOverlayClick'
  | 'initialFocus'
  | 'returnFocusTo'
> & { layer: DialogLayerRender }

const DrawerPanel = forwardRef<HTMLDivElement, DrawerPanelProps>(
  (
    {
      title,
      onClose,
      labels,
      side = 'right',
      width = 440,
      children,
      className,
      style,
      dataTestId,
      layer,
      dismissible,
      onDismissAttempt,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const [panelEl, setPanelEl] = useState<HTMLDivElement | null>(null)
    const { panelRef } = layer
    const setPanel = useCallback(
      (node: HTMLDivElement | null) => {
        setPanelEl(node)
        panelRef(node)
      },
      [panelRef],
    )

    const [scrolled, setScrolled] = useState(false)

    const dismiss = useDismiss<DrawerDismissReason>(onClose, {
      dismissible,
      onDismissAttempt,
    })
    const swipe = useSwipeDismiss(panelEl, (event) => dismiss('swipe', event))

    useImperativeHandle(ref, () => panelEl as HTMLDivElement, [panelEl])

    const panelStyle = {
      ...style,
      '--local-width': typeof width === 'number' ? `${width}px` : width,
    } as CSSProperties

    return (
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby={title != null ? titleId : undefined}
        data-testid={dataTestId?.root}
        {...rest}
        {...layer.motionProps}
        data-scrolled={scrolled || undefined}
        ref={setPanel}
        style={panelStyle}
        className={cn(styles.panel, styles[side], className)}
      >
        <div className={styles.header} {...swipe}>
          {title != null ? (
            <span
              role='heading'
              aria-level={2}
              id={titleId}
              className={styles.title}
              data-testid={dataTestId?.title}
            >
              {title}
            </span>
          ) : (
            <span className={styles.title} />
          )}
          <CloseButton
            aria-label={labels?.close}
            onClick={() => onClose('close-button')}
            dataTestId={{ root: dataTestId?.closeButton }}
          />
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

DrawerPanel.displayName = 'DrawerPanel'

/** Side panel in a portaled scrim; closes on Escape and scrim click, traps focus and locks body scroll like `Modal` with `withOverlay`. */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      inertOthers,
      lockScroll,
      closeOnEscape,
      closeOnOverlayClick,
      dismissible,
      onDismissAttempt,
      initialFocus,
      returnFocusTo,
      ...panelProps
    },
    ref,
  ) => (
    <DialogLayer
      open={open}
      onClose={panelProps.onClose}
      closeOnEscape={closeOnEscape}
      closeOnOverlayClick={closeOnOverlayClick}
      dismissible={dismissible}
      onDismissAttempt={onDismissAttempt}
      lockScroll={lockScroll}
      inertOthers={inertOthers}
      initialFocus={initialFocus}
      returnFocusTo={returnFocusTo}
      className={styles.overlay}
      dataTestId={panelProps.dataTestId?.overlay}
    >
      {(layer) => (
        <DrawerPanel
          ref={ref}
          layer={layer}
          dismissible={dismissible}
          onDismissAttempt={onDismissAttempt}
          {...panelProps}
        />
      )}
    </DialogLayer>
  ),
)

Drawer.displayName = 'Drawer'
