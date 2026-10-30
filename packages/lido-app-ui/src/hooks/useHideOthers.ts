import { useEffect } from 'react'

const KEEP_ATTR = 'data-lido-overlay-keep'

type Owner = { root: Element | null }

// Stack in activation order; the top owner's root must stay live.
const owners: Owner[] = []
// How many owners inerted each node, so a lower owner closing can't lift an upper one's inert.
const counts = new Map<Element, number>()

const sync = () => {
  counts.forEach((_, node) => node.setAttribute('inert', ''))
  owners[owners.length - 1]?.root?.removeAttribute('inert')
}

// Standalone inputs/iframes/buttons are tabbable (tabIndex >= 0) and must not count as empty hosts.
const isEmptyHost = (node: Element) =>
  node.childNodes.length === 0 && (node as HTMLElement).tabIndex < 0

/** Sets `inert` on the other `document.body` children while `enabled`; roots mounted later (or empty at activation) and ones marked `data-lido-overlay-keep` stay live. */
export const useHideOthers = (element: HTMLElement | null, enabled = true) => {
  useEffect(() => {
    if (!enabled || !element) return
    const root = element.closest('body > *')
    const owner: Owner = { root }
    // Inert nodes we didn't mark belong to the app, which restores them itself.
    const others = Array.from(document.body.children).filter(
      (node) =>
        node !== root &&
        !isEmptyHost(node) &&
        !node.hasAttribute(KEEP_ATTR) &&
        !(node.hasAttribute('inert') && !counts.has(node)),
    )
    others.forEach((node) => counts.set(node, (counts.get(node) ?? 0) + 1))
    owners.push(owner)
    sync()
    return () => {
      owners.splice(owners.indexOf(owner), 1)
      others.forEach((node) => {
        const count = (counts.get(node) ?? 1) - 1
        if (count > 0) {
          counts.set(node, count)
        } else {
          counts.delete(node)
          node.removeAttribute('inert')
        }
      })
      sync()
    }
  }, [element, enabled])
}
