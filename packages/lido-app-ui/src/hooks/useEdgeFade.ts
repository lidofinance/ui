import { useCallback, useEffect } from 'react'
import type { FocusEvent, RefObject } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const syncFade = (el: HTMLElement) => {
  el.toggleAttribute('data-fade-start', el.scrollLeft > 0)
  el.toggleAttribute(
    'data-fade-end',
    el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
  )
}

/** Keeps `data-fade-*` in sync, maps vertical wheel to horizontal scroll, reveals keyboard-focused items. */
export const useEdgeFade = (ref: RefObject<HTMLElement>) => {
  const sync = useCallback(() => {
    if (ref.current) syncFade(ref.current)
  }, [ref])

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    syncFade(el)
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => syncFade(el))
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      if (el.scrollWidth <= el.clientWidth) return
      const before = el.scrollLeft
      el.scrollLeft += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY
      if (el.scrollLeft !== before) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [ref])

  // keyboard only: scrolling on mouse focus would retarget the click away from the link
  const onFocus = useCallback((e: FocusEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    if (target === e.currentTarget || !target.matches(':focus-visible')) return
    target.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
  }, [])

  return { sync, onFocus }
}
