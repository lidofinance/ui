import { useEffect, useRef } from 'react'

import { createLayerStack } from './overlayStack'

const listenOutsideLayer = createLayerStack('pointerdown', { capture: true })

/** Calls `onOutside` on pointerdown outside `element` while `enabled`; with nested overlays only the newest one handles outside clicks. */
export const useOutsideClick = (
  element: HTMLElement | null,
  onOutside: () => void,
  enabled: boolean,
) => {
  const handlerRef = useRef(onOutside)
  handlerRef.current = onOutside

  useEffect(() => {
    if (!enabled || !element) return

    return listenOutsideLayer((event) => {
      if (event.target instanceof Node && element.contains(event.target)) return
      handlerRef.current()
    })
  }, [element, enabled])
}
