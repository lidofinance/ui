import { useEffect, useRef } from 'react'

import { createLayerStack } from './overlayStack'

const listenEscapeLayer = createLayerStack('keydown')

let lastEscape = -Infinity

/** Timestamp of the last Escape a layer handled; lets a CloseWatcher skip the same key press. */
export const lastEscapeAt = () => lastEscape

/** Calls `handler` on Escape while `enabled`; with nested overlays only the newest one handles it. */
export const useEscape = (
  handler: (event: KeyboardEvent) => void,
  { enabled = true }: { enabled?: boolean } = {},
) => {
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    if (!enabled) return

    return listenEscapeLayer((event) => {
      if (
        event.key !== 'Escape' ||
        event.defaultPrevented ||
        event.isComposing ||
        event.keyCode === 229
      )
        return
      event.preventDefault()
      lastEscape = performance.now()
      handlerRef.current(event)
    })
  }, [enabled])
}
