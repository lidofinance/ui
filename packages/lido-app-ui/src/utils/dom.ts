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
