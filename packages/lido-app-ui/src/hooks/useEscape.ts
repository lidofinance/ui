import { useEffect, useRef } from 'react'

import { createLayerStack } from './overlayStack'

const listenEscapeLayer = createLayerStack('keydown')

/** Calls `handler` on Escape while `active`; with nested overlays only the newest one handles it. */
export const useEscape = (
  active: boolean,
  handler: (event: KeyboardEvent) => void,
) => {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    if (!active) return

    return listenEscapeLayer((event) => {
      if (event.key !== 'Escape' || event.defaultPrevented) return
      event.preventDefault()
      handlerRef.current(event)
    })
  }, [active])
}
