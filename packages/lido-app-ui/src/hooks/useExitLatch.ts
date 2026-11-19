import { useCallback, useState } from 'react'

/** Keeps `present` true after `open` turns false until `onExited` fires, so the exit animation can finish. */
export const useExitLatch = (open: boolean) => {
  const [present, setPresent] = useState(open)
  if (open && !present) setPresent(true)
  const onExited = useCallback(() => setPresent(false), [])
  return { present, onExited }
}
