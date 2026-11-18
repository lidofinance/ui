const TABBABLE =
  'a[href],area[href],button,input:not([type="hidden"]),select,textarea,summary,iframe,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])'

// jsdom has no checkVisibility, and `display` isn't inherited, so walk up to the container.
const isRendered = (el: HTMLElement, container: HTMLElement) => {
  if (getComputedStyle(el).visibility === 'hidden') return false
  for (
    let node: HTMLElement | null = el;
    node && node !== container;
    node = node.parentElement
  ) {
    if (getComputedStyle(node).display === 'none') return false
  }
  return true
}

// Content of a closed <details> is hidden; only its own summary stays reachable.
const inClosedDetails = (el: HTMLElement, container: HTMLElement) => {
  for (
    let node = el.parentElement;
    node && node !== container;
    node = node.parentElement
  ) {
    if (
      node instanceof HTMLDetailsElement &&
      !node.open &&
      !(el.tagName === 'SUMMARY' && el.parentElement === node)
    )
      return true
  }
  return false
}

export const getTabbable = (container: HTMLElement) => {
  const items = Array.from(
    container.querySelectorAll<HTMLElement>(TABBABLE),
  ).filter(
    (el) =>
      !el.matches(':disabled') &&
      !el.getAttribute('tabindex')?.trim().startsWith('-') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      !el.closest('[inert]') &&
      !inClosedDetails(el, container) &&
      isRendered(el, container),
  )
  const positive = items
    .filter((el) => el.tabIndex > 0)
    .sort((a, b) => a.tabIndex - b.tabIndex)
  return [...positive, ...items.filter((el) => !(el.tabIndex > 0))]
}
