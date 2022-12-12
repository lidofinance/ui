import React, { useCallback, useRef } from 'react'

export const useModalClose = <T extends HTMLDivElement>(
  callback?: () => void
): {
  ref: React.RefObject<T>
  handleClick: (event: React.MouseEvent<T, MouseEvent>) => void
} => {
  const ref = useRef<T>(null)

  const handleClick = useCallback(
    (event: React.MouseEvent<T, MouseEvent>) => {
      const contentElement = ref.current

      if (!contentElement) return
      if (!(event.target instanceof Node)) return

      if (contentElement.contains(event.target)) return

      callback?.()
    },
    [callback]
  )

  return {
    ref,
    handleClick,
  }
}
