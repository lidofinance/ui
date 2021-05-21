import { useCallback, useEffect, useRef } from 'react'

export const useInterceptFocus = (): void => {
  const initialActiveElement = useRef<Element | null>(document.activeElement)

  const focusInitialActive = useCallback(() => {
    if (initialActiveElement.current instanceof HTMLElement) {
      initialActiveElement.current.focus()
    }
  }, [])

  useEffect(() => {
    return focusInitialActive
  }, [focusInitialActive])
}
