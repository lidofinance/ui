import { useCallback, useEffect, useRef } from 'react'
import { FOCUSABLE_ELEMENTS } from '../constants'

export const useModalFocus = (): React.RefObject<HTMLDivElement> => {
  const initialActive = useRef<Element | null>(document.activeElement)
  const modalRef = useRef<HTMLDivElement>(null)

  const focusInitialActive = useCallback(() => {
    if (initialActive.current instanceof HTMLElement) {
      initialActive.current.focus()
    }
  }, [])

  useEffect(() => {
    return focusInitialActive
  }, [focusInitialActive])

  useEffect(() => {
    const isFocusInside = !!modalRef.current?.contains(document.activeElement)
    if (isFocusInside) return

    modalRef.current?.focus()
  }, [modalRef])

  const getFocusableNodes = useCallback(() => {
    const nodes =
      modalRef.current?.querySelectorAll(FOCUSABLE_ELEMENTS.join(',')) ?? []

    return Array.from(nodes).filter(
      (node): node is HTMLElement =>
        node && node instanceof HTMLElement && node.offsetParent !== null
    )
  }, [])

  const handleRetainFocus = useCallback(
    (event: KeyboardEvent) => {
      const focusableNodes = getFocusableNodes()

      if (focusableNodes.length === 0) return

      const currentElement = document.activeElement
      const focusedItemIndex =
        currentElement instanceof HTMLElement &&
        focusableNodes.indexOf(currentElement)

      if (event.shiftKey && focusedItemIndex === 0) {
        focusableNodes[focusableNodes.length - 1].focus()
        event.preventDefault()
      }

      if (
        !event.shiftKey &&
        focusableNodes.length > 0 &&
        focusedItemIndex === focusableNodes.length - 1
      ) {
        focusableNodes[0].focus()
        event.preventDefault()
      }
    },
    [getFocusableNodes]
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Tab') handleRetainFocus(event)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleRetainFocus])

  return modalRef
}
