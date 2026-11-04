import { useState } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/** Keeps a component mounted while it plays an exit animation; call `onExited` (see `useExitEnd`) to unmount. */
export const usePresence = (open: boolean) => {
  const [present, setPresent] = useState(open)
  if (open && !present) setPresent(true)
  return {
    mounted: open || present,
    closing: present && !open,
    onExited: () => setPresent(false),
  }
}

const hasTransition = (element: HTMLElement) =>
  getComputedStyle(element)
    .transitionDuration.split(',')
    .some((value) => parseFloat(value) > 0)

/** True once `element` has mounted and its initial styles were flushed, so a CSS transition plays from them. */
export const useEntered = (element: HTMLElement | null) => {
  const [entered, setEntered] = useState(false)
  useIsomorphicLayoutEffect(() => {
    if (!element) return
    void element.offsetWidth
    setEntered(true)
  }, [element])
  return entered
}

/** Calls `onExited` when `element` finishes its exit transition; at once when it has none (reduced motion, jsdom), with a timeout as a safety net. Reopening cancels it. */
export const useExitEnd = (
  element: HTMLElement | null,
  closing: boolean,
  onExited: () => void,
  fallbackMs = 600,
) => {
  useIsomorphicLayoutEffect(() => {
    if (!closing || !element) return
    if (!hasTransition(element)) {
      onExited()
      return
    }
    const handleEnd = (event: TransitionEvent) => {
      if (event.target === element) onExited()
    }
    element.addEventListener('transitionend', handleEnd)
    const timer = setTimeout(onExited, fallbackMs)
    return () => {
      element.removeEventListener('transitionend', handleEnd)
      clearTimeout(timer)
    }
    // onExited is a stable setter wrapper in effect; re-running on identity would reset the timer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closing, element, fallbackMs])
}
