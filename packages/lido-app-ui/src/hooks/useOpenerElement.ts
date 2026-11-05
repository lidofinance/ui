import { useState } from 'react'

/** The element focused when the component first renders, to return focus to on close. */
export const useOpenerElement = () => {
  // Captured during render: a child's autoFocus is applied at commit, after this.
  const [opener] = useState(() =>
    typeof document === 'undefined'
      ? null
      : (document.activeElement as HTMLElement | null),
  )
  return opener
}
