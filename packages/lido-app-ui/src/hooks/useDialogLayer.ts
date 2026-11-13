import { useEffect, useRef, type MouseEvent } from 'react'

import { useBodyScrollLock } from './useBodyScrollLock'
import { useEscape } from './useEscape'
import { useFocusTrap, type FocusTrapOptions } from './useFocusTrap'
import { useHideOthers } from './useHideOthers'
import { useOutsideClick } from './useOutsideClick'

export type DialogLayerOptions = Pick<
  FocusTrapOptions,
  'initialFocus' | 'returnFocus'
> & {
  scrim: HTMLElement | null
  active: boolean
  onClose?: () => void
  closeOnEscape?: boolean
  closeOnOverlayClick?: boolean
  lockScroll?: boolean
  inertOthers?: boolean
}

/** Scroll lock, inert others, focus trap, Escape and scrim dismiss for a modal layer; put the returned `onScrimClick` on the scrim. */
export const useDialogLayer = (
  panel: HTMLElement | null,
  {
    scrim,
    active,
    onClose,
    closeOnEscape = true,
    closeOnOverlayClick = true,
    lockScroll = true,
    inertOthers = false,
    initialFocus,
    returnFocus,
  }: DialogLayerOptions,
) => {
  const pressedScrim = useRef(false)

  useBodyScrollLock({ enabled: active && lockScroll })
  // Before the trap: cleanups run in order, so inert lifts before focus returns to the opener.
  useHideOthers(panel, active && inertOthers)
  useFocusTrap(panel, { enabled: active, initialFocus, returnFocus })
  // Stays registered with closeOnEscape={false} so Escape doesn't fall through to an underlying overlay.
  useEscape(
    () => {
      if (closeOnEscape) onClose?.()
    },
    { enabled: active },
  )
  // Joins the outside-click stack even with closeOnOverlayClick={false}, so presses here never reach an overlay underneath.
  // Decided at pointerdown: the handler only runs while this is the top layer.
  useOutsideClick(
    panel,
    (event) => {
      pressedScrim.current = !(event.button > 0) && event.target === scrim
    },
    { enabled: active },
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
    if (
      closeOnOverlayClick &&
      pressedScrim.current &&
      event.target === event.currentTarget
    ) {
      onClose?.()
    }
    pressedScrim.current = false
  }

  return { onScrimClick }
}
