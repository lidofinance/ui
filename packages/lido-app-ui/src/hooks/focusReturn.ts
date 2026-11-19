import { getTabbable } from './tabbable'

export type ReturnTargets = () => (HTMLElement | null | undefined)[]

const layers = new WeakMap<Element, ReturnTargets>()

/** Marks `panel` as a layer that returns focus to `targets`, for dialogs opened from inside it; returns the unregister. */
export const registerReturnLayer = (
  panel: HTMLElement,
  targets: ReturnTargets,
) => {
  layers.set(panel, targets)
  return () => {
    if (layers.get(panel) === targets) layers.delete(panel)
  }
}

const layerOf = (node: Element | null) => {
  for (let el = node; el; el = el.parentElement) {
    const targets = layers.get(el)
    if (targets) return targets
  }
  return undefined
}

const nearestTabbable = (
  from: HTMLElement,
  path: HTMLElement[],
  exclude: HTMLElement | null | undefined,
) => {
  for (const scope of path) {
    if (!scope.isConnected) continue
    const items = getTabbable(scope).filter((el) => !exclude?.contains(el))
    if (!from.isConnected) return items[0]
    return (
      items.find(
        (el) =>
          from.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING,
      ) ?? items[items.length - 1]
    )
  }
  return undefined
}

/** Captures, while `from` is in place, the targets to return focus to: `from`, a tabbable near it, then its layer's targets. */
export const returnChain = (
  from: HTMLElement | null,
  exclude?: HTMLElement | null,
): ReturnTargets => {
  if (!from || from === from.ownerDocument.body) return () => []
  const parent = layerOf(from)
  const path: HTMLElement[] = []
  for (
    let el = from.parentElement;
    el && el !== from.ownerDocument.body;
    el = el.parentElement
  )
    path.push(el)
  let resolving = false
  return () => {
    // Two layers opened from each other would otherwise recurse forever.
    if (resolving) return []
    resolving = true
    try {
      return [from, nearestTabbable(from, path, exclude), ...(parent?.() ?? [])]
    } finally {
      resolving = false
    }
  }
}

/** Focuses the first target that takes focus, unless focus already moved outside `layer` and every registered layer. */
export const restoreFocusTo = (
  targets: (HTMLElement | null | undefined)[],
  layer: HTMLElement | null,
) => {
  const active = document.activeElement
  if (
    active &&
    active !== document.body &&
    !layer?.contains(active) &&
    !layerOf(active)
  )
    return
  for (const el of targets) {
    if (!el?.isConnected || el === document.body || layer?.contains(el))
      continue
    el.focus({ preventScroll: true })
    if (document.activeElement === el) return
  }
}
