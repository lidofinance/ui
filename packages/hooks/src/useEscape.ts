import { useCallback, useEffect } from 'react'

export const useEscape = (callback?: () => void): void => {
  const handleKeyDown = useCallback(
    // TODO: fix any
    // eslint-disable-next-line
    (event: any) => {
      if (event.key === 'Escape') {
        callback?.()
      }
    },
    [callback]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
