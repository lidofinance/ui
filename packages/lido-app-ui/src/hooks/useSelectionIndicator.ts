import { useRef, useState, type DependencyList } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/**
 * Owns the refs: attach `containerRef`, `activeRef` (selected button) and `indicatorRef`;
 * the indicator follows the active button. `animated` is false until after the first
 * measurement, so the indicator doesn't fly in from 0,0.
 */
export const useSelectionIndicator = (
  axis: 'x' | 'both',
  deps: DependencyList,
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  const update = () => {
    const active = activeRef.current
    const container = containerRef.current
    const indicator = indicatorRef.current
    if (!active || !container || !indicator) return

    const activeRect = active.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    // The indicator is absolutely positioned from the padding box, so subtract the border.
    const x =
      activeRect.left -
      containerRect.left -
      container.clientLeft +
      container.scrollLeft

    indicator.style.width = `${activeRect.width}px`
    if (axis === 'x') {
      indicator.style.transform = `translateX(${x}px)`
      return
    }
    const y =
      activeRect.top -
      containerRect.top -
      container.clientTop +
      container.scrollTop
    indicator.style.height = `${activeRect.height}px`
    indicator.style.transform = `translate(${x}px, ${y}px)`
  }

  const updateRef = useRef(update)
  updateRef.current = update

  // Tabs are observed too: a tab resizing (badge, counter, font) shifts the active one.
  useIsomorphicLayoutEffect(() => {
    update()
    const container = containerRef.current
    if (!container || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => updateRef.current())
    observer.observe(container)
    container
      .querySelectorAll('[role="tab"]')
      .forEach((tab) => observer.observe(tab))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  useIsomorphicLayoutEffect(() => {
    setAnimated(true)
  }, [])

  return { containerRef, activeRef, indicatorRef, animated }
}
