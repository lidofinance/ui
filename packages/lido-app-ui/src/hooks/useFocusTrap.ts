import { useEffect, useRef, type RefObject } from 'react'

import { createLayerStack } from './overlayStack'

const listenTrapLayer = createLayerStack('keydown')

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

const getTabbable = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(TABBABLE)).filter(
    (el) =>
      !el.matches(':disabled') &&
      !el.getAttribute('tabindex')?.trim().startsWith('-') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      !el.closest('[inert]') &&
      isRendered(el, container),
  )

const isGroupedRadio = (el: Element | null): el is HTMLInputElement =>
  el instanceof HTMLInputElement && el.type === 'radio' && el.name !== ''

// A named radio group is one tab stop; the browser may enter or leave it at any of its radios.
const sameStop = (a: Element | null, b: HTMLElement) =>
  a === b ||
  (isGroupedRadio(a) &&
    isGroupedRadio(b) &&
    a.name === b.name &&
    a.form === b.form)

// Browsers enter a radio group at its checked radio.
const entryPoint = (items: HTMLElement[], el: HTMLElement) =>
  items.find((o) => sameStop(o, el) && (o as HTMLInputElement).checked) ?? el

export type FocusTrapOptions = {
  /** Default true. */
  enabled?: boolean
  /** Element to focus on activate; defaults to focus already inside, then first tabbable, then the container. */
  initialFocus?: RefObject<HTMLElement | null>
  /** Element to restore focus to; defaults to the active element at activation. */
  returnFocus?: HTMLElement | null
  /** Return focus to the previously focused element on deactivate. Default true. */
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

    const previous =
      optionsRef.current.returnFocus ??
      (document.activeElement as HTMLElement | null)

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
      const first = items[0]
      const last = items[items.length - 1]
      const current = document.activeElement
      if (!container.contains(current)) {
        event.preventDefault()
        entryPoint(items, event.shiftKey ? last : first).focus()
      } else if (
        event.shiftKey &&
        (current === container || sameStop(current, first))
      ) {
        event.preventDefault()
        entryPoint(items, last).focus()
      } else if (!event.shiftKey && sameStop(current, last)) {
        event.preventDefault()
        entryPoint(items, first).focus()
      }
    }

    const stopListening = listenTrapLayer(onKeyDown)
    return () => {
      stopListening()
      if (
        (optionsRef.current.restoreFocus ?? true) &&
        previous &&
        document.contains(previous)
      ) {
        previous.focus({ preventScroll: true })
      }
    }
  }, [element, enabled])
}
