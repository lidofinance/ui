import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from 'react'

import cn from 'classnames'

import {
  Portal,
  useBodyScrollLock,
  useEscape,
  useFocusTrap,
  useHideOthers,
  useOutsideClick,
  usePresence,
} from '../hooks'
import { CloseButton } from '../icon-button'

import styles from './Drawer.module.css'

export type DrawerSide = 'left' | 'right'

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
  onClose: () => void
  /** Dialog heading. Pass `aria-label` when omitted: the dialog has no accessible name otherwise. */
  title?: ReactNode
  /** Edge the panel slides in from. Default `right`. */
  side?: DrawerSide
  /** Panel width in px (or any CSS length); capped to the viewport, full-width on mobile. Default 440. */
  width?: number | string
  /** Makes every other body child inert (including the app root); body-level roots stay live with `data-lido-overlay-keep`. */
  inertOthers?: boolean
  /** Opt out of body scroll lock. Default true. */
  lockScroll?: boolean
  /** Opt out of Escape-to-close. Default true. */
  closeOnEscape?: boolean
  /** Opt out of closing on scrim click. Default true. */
  closeOnOverlayClick?: boolean
  /** Element focused on open; defaults to the first tabbable (the close button). */
  initialFocus?: RefObject<HTMLElement | null>
  children: ReactNode
  dataTestId?: DrawerDataTestId
}

type DrawerDialogProps = DrawerProps & {
  onExited: () => void
}

const DrawerDialog = forwardRef<HTMLDivElement, DrawerDialogProps>(
  (
    {
      open,
      title,
      onClose,
      side = 'right',
      width = 440,
      inertOthers = false,
      lockScroll = true,
      closeOnEscape = true,
      closeOnOverlayClick = true,
      initialFocus,
      children,
      className,
      style,
      dataTestId,
      onExited,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const [panelEl, setPanelEl] = useState<HTMLDivElement | null>(null)
    // Captured during render: a child's autoFocus is applied at commit, after this.
    const [returnFocus] = useState(() =>
      typeof document === 'undefined'
        ? null
        : (document.activeElement as HTMLElement | null),
    )
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const pressedScrim = useRef(false)

    useImperativeHandle(ref, () => panelEl as HTMLDivElement, [panelEl])
    // Released as soon as closing starts, so focus returns to the opener without waiting for the exit animation.
    const closing = !open
    const active = open
    useBodyScrollLock({ enabled: lockScroll && active })
    // Before the trap: cleanups run in order, so inert lifts before focus returns to the opener.
    useHideOthers(panelEl, inertOthers && active)
    useFocusTrap(panelEl, { enabled: active, initialFocus, returnFocus })
    // Stays registered with closeOnEscape={false} so Escape doesn't fall through to an underlying overlay.
    useEscape(
      () => {
        if (closeOnEscape) onClose()
      },
      { enabled: active },
    )
    // Joins the outside-click stack even with closeOnOverlayClick={false}, so presses here never reach an overlay underneath.
    useOutsideClick(
      panelEl,
      (event) => {
        pressedScrim.current =
          !(event.button > 0) && event.target === overlayRef.current
      },
      { enabled: active },
    )
    // Mounted fresh on each open, so it appears; the overlay owns the exit wait for scrim and panel.
    const presence = usePresence<HTMLDivElement>(open, {
      appear: true,
      subtree: true,
    })
    const { status, ref: presenceRef, motionProps } = presence
    const setOverlay = useCallback(
      (node: HTMLDivElement | null) => {
        overlayRef.current = node
        presenceRef(node)
      },
      [presenceRef],
    )
    // Also covers a dialog that mounts already closed and never animates.
    useEffect(() => {
      if (status === 'exited') onExited()
    }, [status, onExited])

    // Sticky header: scroll-padding keeps focused content from landing under it (WCAG 2.4.11).
    useEffect(() => {
      const header = headerRef.current
      if (!panelEl || !header || typeof ResizeObserver === 'undefined') return
      const measure = () =>
        panelEl.style.setProperty(
          '--local-header-height',
          `${header.offsetHeight + 8}px`,
        )
      measure()
      const observer = new ResizeObserver(measure)
      observer.observe(header)
      return () => observer.disconnect()
    }, [panelEl])

    const handlePanelPointerDown = (event: PointerEvent<HTMLDivElement>) => {
      pressedScrim.current = false
      rest.onPointerDown?.(event)
    }

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
      if (
        closeOnOverlayClick &&
        pressedScrim.current &&
        event.target === event.currentTarget
      ) {
        onClose()
      }
      pressedScrim.current = false
    }

    const panelStyle = {
      ...style,
      '--local-width': typeof width === 'number' ? `${width}px` : width,
    } as CSSProperties

    return (
      // Pointer-only: a focusable backdrop would add a tab stop before the dialog; keyboard closes via Escape.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        ref={setOverlay}
        className={styles.overlay}
        {...motionProps}
        // Not React 18 typed; the dying dialog must leave the a11y tree and tab order.
        {...(closing ? ({ inert: '' } as object) : null)}
        onClick={handleOverlayClick}
        data-testid={dataTestId?.overlay}
      >
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby={title != null ? titleId : undefined}
          data-testid={dataTestId?.root}
          {...rest}
          {...motionProps}
          onPointerDown={handlePanelPointerDown}
          ref={setPanelEl}
          style={panelStyle}
          className={cn(styles.panel, styles[side], className)}
        >
          <div ref={headerRef} className={styles.header}>
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
              onClick={onClose}
              dataTestId={{ root: dataTestId?.closeButton }}
            />
          </div>
          <div className={styles.body} data-testid={dataTestId?.body}>
            {children}
          </div>
        </div>
      </div>
    )
  },
)

DrawerDialog.displayName = 'DrawerDialog'

// Hooks live in DrawerDialog so they run once the portal has mounted its content.
/** Side panel in a portaled scrim; closes on Escape and scrim click, traps focus and locks body scroll like `Modal` with `withOverlay`. */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, ...props }, ref) => {
    const [present, setPresent] = useState(open)
    if (open && !present) setPresent(true)
    const handleExited = useCallback(() => setPresent(false), [])
    if (!open && !present) return null
    return (
      <Portal>
        <DrawerDialog
          ref={ref}
          open={open}
          onExited={handleExited}
          {...props}
        />
      </Portal>
    )
  },
)

Drawer.displayName = 'Drawer'
