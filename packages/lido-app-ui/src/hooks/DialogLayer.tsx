import { useCallback, useEffect, useState, type ReactNode } from 'react'

import { Portal } from './Portal'
import { useDialogLayer, type DialogLayerOptions } from './useDialogLayer'
import { useExitLatch } from './useExitLatch'
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
  | 'lockScroll'
  | 'inertOthers'
  | 'initialFocus'
> & {
  open: boolean
  /** Scrim class. */
  className?: string
  dataTestId?: string
  children: (layer: DialogLayerRender) => ReactNode
}

type DialogLayerContentProps = DialogLayerProps & { onExited: () => void }

const DialogLayerContent = ({
  open,
  className,
  dataTestId,
  children,
  onExited,
  ...options
}: DialogLayerContentProps) => {
  const returnFocus = useOpenerElement()
  const [scrim, setScrim] = useState<HTMLDivElement | null>(null)
  const [panel, setPanel] = useState<HTMLElement | null>(null)
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
    returnFocus,
    ...options,
  })

  return (
    // Pointer-only: a focusable backdrop would add a tab stop before the dialog; keyboard closes via Escape.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={scrimRef}
      className={className}
      {...motionProps}
      // Not React 18 typed; the dying dialog must leave the a11y tree and tab order.
      {...(open ? null : ({ inert: '' } as object))}
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
