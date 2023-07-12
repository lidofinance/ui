import React, { useCallback, useEffect, useRef } from 'react'
import { useInterceptFocus } from '../hooks'
import { FOCUSABLE_ELEMENTS } from './constants'

export const useModalFocus = (): React.RefObject<HTMLDivElement> => {
  const modalRef = useRef<HTMLDivElement>(null)

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

  const [interceptFocus, restoreFocus] = useInterceptFocus()

  useEffect(() => {
    if (!modalRef.current) return

    interceptFocus(modalRef.current)
    return restoreFocus
  }, [interceptFocus, restoreFocus])

  return modalRef
}
