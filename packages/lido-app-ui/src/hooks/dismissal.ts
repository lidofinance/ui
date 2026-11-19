import { useCallback, useRef } from 'react'

export type DismissReason = 'escape-key' | 'outside-press' | 'back'

export type DismissAttemptDetails<R extends string = DismissReason> = {
  reason: R
  event: Event
}

export type DismissOptions<R extends string = DismissReason> = {
  /** false blocks Escape, outside press, Android back and (non-modal Popover) focus-out; close buttons still work. Default true. */
  dismissible?: boolean
  /** Called when a dismissal is refused, e.g. to ask "Discard changes?". */
  onDismissAttempt?: (details: DismissAttemptDetails<R>) => void
}

/** Returns `dismiss(reason, event, allowed = true)`: calls onClose(reason) or, if refused, onDismissAttempt. Reads options through a ref. */
export const useDismiss = <R extends string = DismissReason>(
  onClose: ((reason: R) => void) | undefined,
  { dismissible = true, onDismissAttempt }: DismissOptions<R>,
) => {
  const latest = useRef({ onClose, dismissible, onDismissAttempt })
  latest.current = { onClose, dismissible, onDismissAttempt }

  return useCallback((reason: R, event: Event, allowed = true) => {
    const current = latest.current
    if (current.dismissible && allowed) current.onClose?.(reason)
    else current.onDismissAttempt?.({ reason, event })
  }, [])
}
