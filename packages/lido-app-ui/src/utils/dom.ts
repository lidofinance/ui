import type { MouseEvent } from 'react'

/** Scrolls only `container` horizontally so `item` is centered. */
export const scrollIntoCenter = (
  container: HTMLElement,
  item: HTMLElement | null,
) => {
  if (!item) return
  const containerRect = container.getBoundingClientRect()
  const itemRect = item.getBoundingClientRect()
  container.scrollLeft +=
    itemRect.left -
    containerRect.left -
    (container.clientWidth - itemRect.width) / 2
}

/** Appends `id` to `aria-describedby`; returns cleanup, or undefined if already present. */
export const addDescribedBy = (el: HTMLElement, id: string) => {
  const ids = (el.getAttribute('aria-describedby') ?? '')
    .split(' ')
    .filter(Boolean)
  if (ids.includes(id)) return undefined
  el.setAttribute('aria-describedby', [...ids, id].join(' '))
  return () => {
    const rest = (el.getAttribute('aria-describedby') ?? '')
      .split(' ')
      .filter((x) => x && x !== id)
    if (rest.length) el.setAttribute('aria-describedby', rest.join(' '))
    else el.removeAttribute('aria-describedby')
  }
}

/** Blocks the text selection a double-click would start on a toggle control. */
export const preventMultiClickSelect = (event: MouseEvent) => {
  if (event.detail > 1) event.preventDefault()
}
