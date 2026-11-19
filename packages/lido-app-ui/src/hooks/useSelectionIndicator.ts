import { useRef, type DependencyList } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const UNSET = Symbol('unset')

const isAnimating = (el: HTMLElement) => (el.getAnimations?.().length ?? 0) > 0

/**
 * Owns the refs: attach `containerRef`, `activeRef` (selected button) and `indicatorRef`.
 * Slides only when `value` changes after mount; mount and `deps` changes snap.
 */
export const useSelectionIndicator = (
  axis: 'x' | 'both',
  value: unknown,
  deps: DependencyList,
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const previousValue = useRef<unknown>(UNSET)
  const lastKey = useRef('')
  const hidden = useRef(false)

  const update = (animate: boolean) => {
    const active = activeRef.current
    const container = containerRef.current
    const indicator = indicatorRef.current
    if (!container || !indicator) return
    // No matching item: hide rather than leave the bar on the last selection.
    if (!active) {
      indicator.style.visibility = 'hidden'
      hidden.current = true
      return
    }
    indicator.style.visibility = ''
    // Reappearing after being hidden: don't slide from the stale position.
    if (hidden.current) {
      hidden.current = false
      animate = false
    }

    const activeRect = active.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    // The indicator is absolutely positioned from the padding box, so subtract the border.
    const x =
      activeRect.left -
      containerRect.left -
      container.clientLeft +
      container.scrollLeft
    const y =
      activeRect.top -
      containerRect.top -
      container.clientTop +
      container.scrollTop

    const width = `${activeRect.width}px`
    const height = axis === 'x' ? '' : `${activeRect.height}px`
    const transform =
      axis === 'x' ? `translateX(${x}px)` : `translate(${x}px, ${y}px)`
    const key = `${width}|${height}|${transform}`
    if (key === lastKey.current) return
    lastKey.current = key

    const { style } = indicator
    if (!animate) style.transition = 'none'
    style.width = width
    style.height = height
    style.transform = transform
    if (!animate) {
      // Flush the styles while transitions are off so the snap isn't animated.
      void indicator.offsetWidth
      style.transition = ''
    }
  }

  const updateRef = useRef(update)
  updateRef.current = update

  // `deps` may change on every render (inline arrays), so a value change must still slide.
  useIsomorphicLayoutEffect(() => {
    const animate =
      previousValue.current !== UNSET && previousValue.current !== value
    previousValue.current = value
    update(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, ...deps])

  // Tabs are observed too: a tab resizing (badge, counter, font) shifts the active one.
  // A running slide is retargeted, anything else (font load, layout) snaps.
  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current
    if (!container || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => {
      const indicator = indicatorRef.current
      updateRef.current(!!indicator && isAnimating(indicator))
    })
    observer.observe(container)
    container
      .querySelectorAll('[role="tab"]')
      .forEach((tab) => observer.observe(tab))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { containerRef, activeRef, indicatorRef }
}
