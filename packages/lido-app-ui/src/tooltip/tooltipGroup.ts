const WARM_WINDOW = 400
let current: (() => void) | undefined
let closedAt = -Infinity

export const isTooltipWarm = () =>
  !!current || Date.now() - closedAt < WARM_WINDOW

/** Makes `close` the open tooltip, closing the previous one; returns the release to call on close. */
export const claimTooltip = (close: () => void) => {
  if (current !== close) current?.()
  current = close
  return () => {
    if (current !== close) return
    current = undefined
    closedAt = Date.now()
  }
}

export const resetTooltipGroup = () => {
  current = undefined
  closedAt = -Infinity
}
