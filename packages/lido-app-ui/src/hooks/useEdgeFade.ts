import { useCallback, useEffect } from 'react'
import type { RefObject } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import { useResizeObserver } from './useResizeObserver'

const isRtl = (el: HTMLElement) => getComputedStyle(el).direction === 'rtl'

/** Scrolls a horizontal strip to its inline end (the right in LTR, the left in RTL). */
export const scrollToInlineEnd = (el: HTMLElement) => {
  el.scrollLeft = isRtl(el) ? -el.scrollWidth : el.scrollWidth
}

// RTL reports scrollLeft from 0 down to -(scrollWidth - clientWidth).
const syncFade = (el: HTMLElement) => {
  const offset = Math.abs(el.scrollLeft)
  el.toggleAttribute('data-fade-start', offset > 0)
  el.toggleAttribute(
    'data-fade-end',
    offset < el.scrollWidth - el.clientWidth - 1,
  )
}

/** Keeps `data-fade-*` in sync, maps vertical wheel to horizontal scroll, reveals keyboard-focused items. */
export const useEdgeFade = (ref: RefObject<HTMLElement>) => {
  const sync = useCallback(() => {
    if (ref.current) syncFade(ref.current)
  }, [ref])

  useIsomorphicLayoutEffect(sync, [sync])
  useResizeObserver(ref, sync)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      if (el.scrollWidth <= el.clientWidth) return
      const before = el.scrollLeft
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY
      el.scrollLeft += isRtl(el) ? -delta : delta
      if (el.scrollLeft !== before) e.preventDefault()
    }
    // keyboard only: scrolling on mouse focus would retarget the click away from the link
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (target === el || !target.matches(':focus-visible')) return
      target.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('scroll', sync, { passive: true })
    el.addEventListener('focusin', onFocusIn)
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('scroll', sync)
      el.removeEventListener('focusin', onFocusIn)
    }
  }, [ref, sync])

  return { sync }
}
