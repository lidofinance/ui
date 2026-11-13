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

import { useHeaderOffset } from '../hooks'
import { DialogLayer, type DialogLayerRender } from '../hooks/DialogLayer'
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

type DrawerPanelProps = Omit<
  DrawerProps,
  | 'open'
  | 'inertOthers'
  | 'lockScroll'
  | 'closeOnEscape'
  | 'closeOnOverlayClick'
  | 'initialFocus'
> & { layer: DialogLayerRender }

const DrawerPanel = forwardRef<HTMLDivElement, DrawerPanelProps>(
  (
    {
      title,
      onClose,
      side = 'right',
      width = 440,
      children,
      className,
      style,
      dataTestId,
      layer,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const [panelEl, setPanelEl] = useState<HTMLDivElement | null>(null)
    const [headerEl, setHeaderEl] = useState<HTMLDivElement | null>(null)
    const { panelRef } = layer
    const setPanel = useCallback(
      (node: HTMLDivElement | null) => {
        setPanelEl(node)
        panelRef(node)
      },
      [panelRef],
    )

    useImperativeHandle(ref, () => panelEl as HTMLDivElement, [panelEl])
    useHeaderOffset(panelEl, headerEl)

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
        ref={setPanel}
        style={panelStyle}
        className={cn(styles.panel, styles[side], className)}
      >
        <div ref={setHeaderEl} className={styles.header}>
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
      initialFocus,
      ...panelProps
    },
    ref,
  ) => (
    <DialogLayer
      open={open}
      onClose={panelProps.onClose}
      closeOnEscape={closeOnEscape}
      closeOnOverlayClick={closeOnOverlayClick}
      lockScroll={lockScroll}
      inertOthers={inertOthers}
      initialFocus={initialFocus}
      className={styles.overlay}
      dataTestId={panelProps.dataTestId?.overlay}
    >
      {(layer) => <DrawerPanel ref={ref} layer={layer} {...panelProps} />}
    </DialogLayer>
  ),
)

Drawer.displayName = 'Drawer'
