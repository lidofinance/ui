import { useEffect, useRef } from 'react'

export const useAutoFocus = <T extends HTMLElement>(): React.RefObject<T> => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const isFocusInside = !!ref.current?.contains(document.activeElement)
    if (isFocusInside) return

    ref.current?.focus()
  }, [ref])

  return ref
}
