import { useRef, type RefObject } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/** Calls the latest `callback` whenever the element resizes (no-op without ResizeObserver). */
export const useResizeObserver = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
) => {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => callbackRef.current())
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}
