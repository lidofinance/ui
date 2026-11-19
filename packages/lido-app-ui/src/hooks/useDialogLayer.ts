import { useEffect, useRef, type MouseEvent } from 'react'

import {
  useDismiss,
  type DismissOptions,
  type DismissReason,
} from './dismissal'
import { useBodyScrollLock } from './useBodyScrollLock'
import { useCloseWatcher } from './useCloseWatcher'
import { useEscape } from './useEscape'
import { useFocusTrap, type FocusTrapOptions } from './useFocusTrap'
import { useHideOthers } from './useHideOthers'
import { useOutsideClick } from './useOutsideClick'

export type DialogLayerOptions = Pick<
  FocusTrapOptions,
  'initialFocus' | 'returnFocus' | 'returnFocusTo'
> & {
  scrim: HTMLElement | null
  active: boolean
  /** Keeps the layer on the outside-press stack, as a no-op, while it animates out. */
  exiting?: boolean
  onClose?: (reason: DismissReason) => void
  closeOnEscape?: boolean
  closeOnOverlayClick?: boolean
  lockScroll?: boolean
  inertOthers?: boolean
} & DismissOptions

/** Scroll lock, inert others, focus trap, Escape and scrim dismiss for a modal layer; put the returned `onScrimClick` on the scrim. */
export const useDialogLayer = (
  panel: HTMLElement | null,
  {
    scrim,
    active,
    exiting = false,
    onClose,
    closeOnEscape = true,
    closeOnOverlayClick = true,
    dismissible,
    onDismissAttempt,
    lockScroll = true,
    inertOthers = false,
    initialFocus,
    returnFocus,
    returnFocusTo,
  }: DialogLayerOptions,
) => {
  const pressedScrim = useRef(false)
  const dismiss = useDismiss(onClose, { dismissible, onDismissAttempt })

  useBodyScrollLock({ enabled: active && lockScroll })
  // Before the trap: cleanups run in order, so inert lifts before focus returns to the opener.
  useHideOthers(panel, active && inertOthers)
  useFocusTrap(panel, {
    enabled: active,
    initialFocus,
    returnFocus,
    returnFocusTo,
  })
  // Stays registered with closeOnEscape={false} so Escape doesn't fall through to an underlying overlay.
  useEscape((event) => dismiss('escape-key', event, closeOnEscape), {
    enabled: active,
  })
  useCloseWatcher((event) => dismiss('back', event), { enabled: active })
  // Joins the outside-click stack even with closeOnOverlayClick={false}, and stays on it while exiting, so presses here never reach an overlay underneath.
  // Decided at pointerdown: the handler only runs while this is the top layer.
  useOutsideClick(
    panel,
    (event) => {
      pressedScrim.current =
        active && !(event.button > 0) && event.target === scrim
    },
    { enabled: active || exiting },
  )

  useEffect(() => {
    if (!active || !panel) return
    const reset = () => {
      pressedScrim.current = false
    }
    panel.addEventListener('pointerdown', reset)
    return () => panel.removeEventListener('pointerdown', reset)
  }, [panel, active])

  const onScrimClick = (event: MouseEvent<HTMLElement>) => {
    if (pressedScrim.current && event.target === event.currentTarget) {
      dismiss('outside-press', event.nativeEvent, closeOnOverlayClick)
    }
    pressedScrim.current = false
  }

  return { onScrimClick }
}
