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

export const getTabbable = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(TABBABLE)).filter(
    (el) =>
      !el.matches(':disabled') &&
      !el.getAttribute('tabindex')?.trim().startsWith('-') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      !el.closest('[inert]') &&
      isRendered(el, container),
  )
