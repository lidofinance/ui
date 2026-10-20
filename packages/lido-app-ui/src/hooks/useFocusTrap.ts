import { useEffect, useRef, type RefObject } from 'react'

import { createLayerStack } from './overlayStack'

const listenTrapLayer = createLayerStack('keydown')

const TABBABLE =
  'a[href],button,input:not([type="hidden"]),select,textarea,[tabindex]:not([tabindex="-1"]),[contenteditable="true"]'

const isRendered = (el: HTMLElement) => {
  const style = getComputedStyle(el)
  return style.visibility !== 'hidden' && style.display !== 'none'
}

const getTabbable = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(TABBABLE)).filter(
    (el) =>
      !el.matches(':disabled') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      isRendered(el),
  )

export type FocusTrapOptions = {
  /** Element to focus on activate; defaults to first tabbable, then the container. */
  initialFocus?: RefObject<HTMLElement | null>
  /** Return focus to the previously focused element on deactivate. Default true. */
  restoreFocus?: boolean
}

/** Keeps Tab / Shift+Tab inside `element` while `active`; with nested traps only the newest one handles Tab. */
export const useFocusTrap = (
  element: HTMLElement | null,
  active: boolean,
  options: FocusTrapOptions = {},
) => {
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const container = element
    if (!active || !container) return

    const previous = document.activeElement as HTMLElement | null

    const target =
      optionsRef.current.initialFocus?.current ??
      getTabbable(container)[0] ??
      container
    if (target === container && !container.hasAttribute('tabindex')) {
      container.setAttribute('tabindex', '-1')
    }
    target.focus({ preventScroll: true })

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
        ;(event.shiftKey ? last : first).focus()
      } else if (
        event.shiftKey &&
        (current === first || current === container)
      ) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && current === last) {
        event.preventDefault()
        first.focus()
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
  }, [element, active])
}
