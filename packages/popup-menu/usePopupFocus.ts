import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
  useCallback,
  useRef,
} from 'react'
import { useInterceptFocus } from '../hooks'
import { FOCUSABLE_ELEMENTS } from './constants'
import { PopupMenuProps } from './PopupMenu'

export const usePopupFocus = <T extends HTMLDivElement>({
  onMouseMove,
  onKeyDown,
}: PopupMenuProps): {
  ref: RefObject<T>
  handleMouseMove: MouseEventHandler<T>
  handleKeyDown: KeyboardEventHandler<T>
  handleEnter: () => void
  handleExit: () => void
} => {
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
    (event: KeyboardEvent<T>, offset = 1) => {
      const focusableNodes = getFocusableNodes()

      if (focusableNodes.length === 0) return

      const currentElement = document.activeElement
      const focusedItemIndex =
        currentElement instanceof HTMLElement
          ? focusableNodes.indexOf(currentElement)
          : -1

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

  const handleMouseMove: MouseEventHandler<T> = useCallback(
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

  const handleKeyDown: KeyboardEventHandler<T> = useCallback(
    (event) => {
      onKeyDown?.(event)
      const code = event.code ?? event.key

      if (code === 'Tab') event.preventDefault()
      if (code === 'ArrowDown') handleFocusTo(event, +1)
      if (code === 'ArrowUp') handleFocusTo(event, -1)
    },
    [handleFocusTo, onKeyDown]
  )

  const [interceptFocus, restoreFocus] = useInterceptFocus()

  const handleEnter = useCallback(() => {
    if (ref.current) interceptFocus(ref.current)
  }, [interceptFocus])

  const handleExit = useCallback(() => {
    restoreFocus()
  }, [restoreFocus])

  return {
    ref,
    handleMouseMove,
    handleKeyDown,
    handleEnter,
    handleExit,
  }
}
