import { useState } from 'react'

const activeElement = () =>
  typeof document === 'undefined'
    ? null
    : (document.activeElement as HTMLElement | null)

/** The element focused when `open` last turned true, to return focus to on close. */
export const useOpenerElement = (open: boolean) => {
  // Captured during render: a child's autoFocus is applied at commit, after this.
  const [state, setState] = useState(() => ({ open, opener: activeElement() }))
  if (open !== state.open) {
    const next = { open, opener: open ? activeElement() : state.opener }
    setState(next)
    return next.opener
  }
  return state.opener
}
