import { useEffect } from 'react'

const KEEP_ATTR = 'data-lido-overlay-keep'

/** Sets `inert` on the other `document.body` children while `enabled`; roots mounted later (or empty at activation) and ones marked `data-lido-overlay-keep` stay live. */
export const useHideOthers = (element: HTMLElement | null, enabled = true) => {
  useEffect(() => {
    if (!enabled || !element) return
    const root = element.closest('body > *')
    // Already-inert nodes belong to an outer overlay, which restores them itself.
    const others = Array.from(document.body.children).filter(
      (node) =>
        node !== root &&
        node.childNodes.length > 0 &&
        !node.hasAttribute('inert') &&
        !node.hasAttribute(KEEP_ATTR),
    )
    others.forEach((node) => node.setAttribute('inert', ''))
    return () => others.forEach((node) => node.removeAttribute('inert'))
  }, [element, enabled])
}
