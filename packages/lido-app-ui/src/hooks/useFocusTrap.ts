import { useEffect, useRef, type RefObject } from 'react'

import { createLayerStack } from './overlayStack'
import { restoreFocusTo, returnChain } from './focusReturn'
import { getTabbable } from './tabbable'

const listenTrapLayer = createLayerStack('keydown')

const isGroupedRadio = (el: Element | null): el is HTMLInputElement =>
  el instanceof HTMLInputElement && el.type === 'radio' && el.name !== ''

// A named radio group is one tab stop; the browser may enter or leave it at any of its radios.
const sameStop = (a: Element | null, b: HTMLElement) =>
  a === b ||
  (isGroupedRadio(a) &&
    isGroupedRadio(b) &&
    a.name === b.name &&
    a.form === b.form)

const isChecked = (el: Element) => isGroupedRadio(el) && el.checked

// Browsers enter a radio group at its checked radio.
const entryPoint = (items: HTMLElement[], el: HTMLElement) =>
  items.find((o) => sameStop(o, el) && (o as HTMLInputElement).checked) ?? el

// One tab stop per radio group: unchecked radios are skipped when a sibling is checked.
const getStops = (items: HTMLElement[]) =>
  items.filter(
    (el) =>
      !isGroupedRadio(el) ||
      el.checked ||
      !items.some((o) => o !== el && sameStop(o, el) && isChecked(o)),
  )

export type FocusTrapOptions = {
  /** Default true. */
  enabled?: boolean
  /** Element to focus on activate; defaults to focus already inside, then first tabbable, then the container. */
  initialFocus?: RefObject<HTMLElement | null>
  /** Focused first on deactivate when it can take focus; then the opener, a tabbable near it, then its parent layer's opener. */
  returnFocusTo?: RefObject<HTMLElement | null>
  /** Opener to return focus to; defaults to the active element at activation. */
  returnFocus?: HTMLElement | null
  /** Return focus on deactivate. Default true. */
  restoreFocus?: boolean
}

/** Keeps Tab / Shift+Tab inside `element` while `enabled`; with nested traps only the newest one handles Tab. */
export const useFocusTrap = (
  element: HTMLElement | null,
  options: FocusTrapOptions = {},
) => {
  const { enabled = true } = options
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const container = element
    if (!enabled || !container) return

    const chain = returnChain(
      optionsRef.current.returnFocus ??
        (document.activeElement as HTMLElement | null),
      container,
    )

    const explicit = optionsRef.current.initialFocus?.current
    if (explicit) {
      explicit.focus({ preventScroll: true })
      explicit.scrollIntoView?.({ block: 'nearest' })
    } else if (!container.contains(document.activeElement)) {
      const items = getTabbable(container)
      const target = items[0] ? entryPoint(items, items[0]) : container
      if (target === container && !container.hasAttribute('tabindex')) {
        container.setAttribute('tabindex', '-1')
      }
      target.focus({ preventScroll: true })
      target.scrollIntoView?.({ block: 'nearest' })
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = getTabbable(container)
      if (items.length === 0) {
        event.preventDefault()
        container.focus()
        return
      }
      const stops = getStops(items)
      const first = stops[0]
      const last = stops[stops.length - 1]
      const current = document.activeElement
      const currentIndex = items.indexOf(current as HTMLElement)
      const atEnd =
        sameStop(current, last) ||
        (currentIndex >= 0 && currentIndex >= items.indexOf(last))
      const atStart =
        current === container ||
        sameStop(current, first) ||
        (currentIndex >= 0 && currentIndex <= items.indexOf(first))
      if (!container.contains(current)) {
        event.preventDefault()
        entryPoint(items, event.shiftKey ? last : first).focus()
      } else if (event.shiftKey && atStart) {
        event.preventDefault()
        entryPoint(items, last).focus()
      } else if (!event.shiftKey && atEnd) {
        event.preventDefault()
        entryPoint(items, first).focus()
      }
    }

    const stopListening = listenTrapLayer(onKeyDown)
    return () => {
      stopListening()
      if (optionsRef.current.restoreFocus ?? true)
        restoreFocusTo(
          [optionsRef.current.returnFocusTo?.current, ...chain()],
          container,
        )
    }
  }, [element, enabled])
}
