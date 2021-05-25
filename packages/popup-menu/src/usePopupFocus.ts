import { useCallback, useRef } from 'react'
import { FOCUSABLE_ELEMENTS } from './constants'
import { PopupMenuProps } from './types'

export const usePopupFocus = <T extends HTMLDivElement>(
  props: PopupMenuProps
): {
  ref: React.RefObject<T>
  handleMouseMove: React.MouseEventHandler<T>
  handleKeyDown: React.KeyboardEventHandler<T>
} => {
  const { onMouseMove, onKeyDown } = props
  const ref = useRef<T>(null)

  const getFocusableNodes = useCallback(() => {
    const nodes =
      ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS.join(',')) ?? []

    return Array.from(nodes).filter(
      (node): node is HTMLElement =>
        node && node instanceof HTMLElement && node.offsetParent !== null
    )
  }, [])

  const handleFocusTo = useCallback(
    (event: React.KeyboardEvent<T>, offset = 1) => {
      const focusableNodes = getFocusableNodes()

      if (focusableNodes.length === 0) return

      const currentElement = document.activeElement
      const focusedItemIndex =
        currentElement instanceof HTMLElement &&
        focusableNodes.indexOf(currentElement)

      const activeItemIndex = focusableNodes.findIndex(
        (node) => node.getAttribute('aria-selected') === 'true'
      )

      const currentIndex =
        focusedItemIndex === -1 ? activeItemIndex : focusedItemIndex

      let nextIndex = currentIndex + offset
      if (nextIndex < 0) nextIndex = focusableNodes.length - 1
      if (nextIndex >= focusableNodes.length) nextIndex = 0

      focusableNodes[nextIndex].focus()
      event.preventDefault()
    },
    [getFocusableNodes]
  )

  const handleMouseMove: React.MouseEventHandler<T> = useCallback(
    (event) => {
      onMouseMove?.(event)

      const { target } = event
      if (!(target instanceof HTMLElement)) return

      const focusableNodes = getFocusableNodes()
      const overed = target.closest(FOCUSABLE_ELEMENTS.join(','))

      if (!(overed instanceof HTMLElement)) return

      const isNotFocusable = !focusableNodes.includes(overed)
      const isActive = overed === document.activeElement

      if (isActive || isNotFocusable) return

      overed.focus()
    },
    [getFocusableNodes, onMouseMove]
  )

  const handleKeyDown: React.KeyboardEventHandler<T> = useCallback(
    (event) => {
      onKeyDown?.(event)
      const code = event.code ?? event.key

      if (code === 'Tab') event.preventDefault()
      if (code === 'ArrowDown') handleFocusTo(event, +1)
      if (code === 'ArrowUp') handleFocusTo(event, -1)
    },
    [handleFocusTo, onKeyDown]
  )

  return {
    ref,
    handleMouseMove,
    handleKeyDown,
  }
}
