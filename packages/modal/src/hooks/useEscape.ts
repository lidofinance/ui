import { useCallback } from 'react'

type TKeyDownHandle = (event: React.KeyboardEvent<HTMLDivElement>) => void

interface UseEscapeProps {
  onClose?: () => void
  onKeyDown?: TKeyDownHandle
}

export const useEscape = (props: UseEscapeProps): TKeyDownHandle => {
  const { onClose, onKeyDown } = props

  return useCallback(
    (event) => {
      if (!!onClose && event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }

      onKeyDown?.(event)
    },
    [onClose, onKeyDown]
  )
}
