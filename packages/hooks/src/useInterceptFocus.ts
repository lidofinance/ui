import { useCallback, useRef } from 'react'

export const useInterceptFocus = (): [
  (node: HTMLElement) => void,
  () => void
] => {
  const savedElement = useRef<Element | null>(null)

  const restoreFocus = useCallback(() => {
    if (!(savedElement.current instanceof HTMLElement)) return
    savedElement.current.focus()
  }, [])

  const interceptFocus = useCallback((node: HTMLElement) => {
    savedElement.current = document.activeElement

    const isFocusInside = node.contains(document.activeElement)
    if (isFocusInside) return

    node.focus()
  }, [])

  return [interceptFocus, restoreFocus]
}
