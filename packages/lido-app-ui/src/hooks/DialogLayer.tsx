import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { registerReturnLayer, returnChain } from './focusReturn'
import { Portal } from './Portal'
import { useDialogLayer, type DialogLayerOptions } from './useDialogLayer'
import { useExitLatch } from './useExitLatch'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import { useOpenerElement } from './useOpenerElement'
import { usePresence, type PresenceMotionProps } from './usePresence'

export type DialogLayerRender = {
  /** Put on the panel element; focus trap and outside-press detection key on it. */
  panelRef: (node: HTMLElement | null) => void
  /** Spread on the panel so it animates with the scrim. */
  motionProps: PresenceMotionProps
  scrim: HTMLElement | null
}

type DialogLayerProps = Pick<
  DialogLayerOptions,
  | 'onClose'
  | 'closeOnEscape'
  | 'closeOnOverlayClick'
  | 'dismissible'
  | 'onDismissAttempt'
  | 'lockScroll'
  | 'inertOthers'
  | 'initialFocus'
  | 'returnFocusTo'
> & {
  open: boolean
  /** Scrim class. */
  className?: string
  dataTestId?: string
  children: (layer: DialogLayerRender) => ReactNode
}

const preventDefault = (event: MouseEvent) => event.preventDefault()

type DialogLayerContentProps = DialogLayerProps & { onExited: () => void }

const DialogLayerContent = ({
  open,
  className,
  dataTestId,
  children,
  onExited,
  ...options
}: DialogLayerContentProps) => {
  const returnFocus = useOpenerElement(open)
  const [scrim, setScrim] = useState<HTMLDivElement | null>(null)
  const [panel, setPanel] = useState<HTMLElement | null>(null)
  const { returnFocusTo } = options
  useEffect(() => {
    if (!panel) return
    const chain = returnChain(returnFocus)
    return registerReturnLayer(panel, () => [
      returnFocusTo?.current,
      ...chain(),
    ])
  }, [panel, returnFocus, returnFocusTo])
  // Mounted fresh on each open, so it appears; the scrim owns the exit wait for itself and the panel.
  const {
    status,
    ref: presenceRef,
    motionProps,
  } = usePresence<HTMLDivElement>(open, { appear: true, subtree: true })
  const scrimRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrim(node)
      presenceRef(node)
    },
    [presenceRef],
  )
  // Also covers a dialog that mounts already closed and never animates.
  useEffect(() => {
    if (status === 'exited') onExited()
  }, [status, onExited])

  const { onScrimClick } = useDialogLayer(panel, {
    scrim,
    // Released as soon as closing starts, so focus returns to the opener without waiting for the exit animation.
    active: open,
    exiting: !open,
    returnFocus,
    ...options,
  })

  // Inert on the panel, not the scrim: an inert scrim is click-through, so a fast second press would reach the page.
  useIsomorphicLayoutEffect(() => {
    if (open || !panel) return
    panel.setAttribute('inert', '')
    return () => panel.removeAttribute('inert')
  }, [open, panel])

  return (
    // Pointer-only: a focusable backdrop would add a tab stop before the dialog; keyboard closes via Escape.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={scrimRef}
      className={className}
      {...motionProps}
      onMouseDown={open ? undefined : preventDefault}
      onClick={onScrimClick}
      data-testid={dataTestId}
    >
      {children({ panelRef: setPanel, motionProps, scrim })}
    </div>
  )
}

/** Portaled scrim with exit latch, presence and `useDialogLayer` for Modal and Drawer; `children` renders the panel. */
export const DialogLayer = ({ open, ...props }: DialogLayerProps) => {
  const { present, onExited } = useExitLatch(open)
  if (!open && !present) return null
  return (
    <Portal>
      <DialogLayerContent open={open} onExited={onExited} {...props} />
    </Portal>
  )
}
