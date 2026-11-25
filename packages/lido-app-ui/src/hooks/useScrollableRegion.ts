import { useEffect, useState, type RefObject } from 'react'

import { getTabbable } from './tabbable'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const needsFocus = (el: HTMLElement) =>
  (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) &&
  getTabbable(el).length === 0

/** `tabIndex={0}` while the element overflows and holds nothing tabbable, so keyboard users can scroll it (not every browser makes scrollers focusable). */
export const useScrollableRegion = (ref: RefObject<HTMLElement>) => {
  const [focusable, setFocusable] = useState(false)

  // Content can change without a resize, so re-check after every render.
  useIsomorphicLayoutEffect(() => {
    if (ref.current) setFocusable(needsFocus(ref.current))
  })

  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => setFocusable(needsFocus(el)))
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    return () => observer.disconnect()
  }, [ref])

  return focusable ? 0 : undefined
}
