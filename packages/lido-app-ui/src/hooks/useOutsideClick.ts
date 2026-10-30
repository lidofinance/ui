import { useEffect, useRef } from 'react'

import { createLayerStack } from './overlayStack'

const listenOutsideLayer = createLayerStack('pointerdown', { capture: true })

/** Calls `onOutside` on pointerdown outside `element` while `enabled`, or on a completed tap for touch so scrolling doesn't dismiss; with nested overlays only the newest one handles outside clicks. */
export const useOutsideClick = (
  element: HTMLElement | null,
  onOutside: (event: PointerEvent) => void,
  { enabled = true }: { enabled?: boolean } = {},
) => {
  const handlerRef = useRef(onOutside)
  handlerRef.current = onOutside

  useEffect(() => {
    if (!enabled || !element) return

    let cancelPending: (() => void) | null = null
    const clearPending = () => {
      cancelPending?.()
      cancelPending = null
    }

    const stop = listenOutsideLayer((event) => {
      if (event.target instanceof Node && element.contains(event.target)) return
      clearPending()
      if (event.pointerType !== 'touch') {
        handlerRef.current(event)
        return
      }
      // A scroll gesture ends in pointercancel; only a tap reaches pointerup.
      const onUp = () => {
        clearPending()
        handlerRef.current(event)
      }
      document.addEventListener('pointerup', onUp, true)
      document.addEventListener('pointercancel', clearPending, true)
      cancelPending = () => {
        document.removeEventListener('pointerup', onUp, true)
        document.removeEventListener('pointercancel', clearPending, true)
      }
    })
    return () => {
      clearPending()
      stop()
    }
  }, [element, enabled])
}
