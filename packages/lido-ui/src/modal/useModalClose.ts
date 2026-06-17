import { MouseEvent, RefObject, useCallback, useRef } from 'react'

export const useModalClose = <T extends HTMLDivElement>(
  callback?: () => void,
): {
  ref: RefObject<T>
  handleClick: (event: MouseEvent<T>) => void
} => {
  const ref = useRef<T>(null)

  const handleClick = useCallback(
    (event: MouseEvent<T>) => {
      const contentElement = ref.current

      if (!contentElement) return
      if (!(event.target instanceof Node)) return

      if (contentElement.contains(event.target)) return

      callback?.()
    },
    [callback],
  )

  return {
    ref,
    handleClick,
  }
}
