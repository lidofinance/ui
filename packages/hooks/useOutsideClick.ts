import { RefObject, useCallback, useEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLDivElement>(
  callback?: () => void,
): {
  ref: RefObject<T>
} => {
  const ref = useRef<T>(null)

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const popover = ref.current
      const { target } = event

      if (!(target instanceof Element)) return

      const isOutside = popover?.contains(target) === false
      if (isOutside) callback?.()
    },
    [callback],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [handleOutsideClick])

  return { ref }
}
