import { useEffect } from 'react'

const SCROLLBAR_VAR = '--lido-app-ui-scrollbar-width'

// Ref-counted so stacked overlays only restore on the last unlock.
let lockCount = 0
let saved = {
  scroller: null as HTMLElement | null,
  overflow: '',
  paddingRight: '',
}

const lock = () => {
  if (lockCount === 0) {
    const { body, documentElement: html } = document
    // Locking <html> when body is the scroller would detach body's overflow propagation and break sticky headers.
    const scroller = ['auto', 'scroll'].includes(
      getComputedStyle(html).overflowY,
    )
      ? html
      : body
    saved = {
      scroller,
      overflow: scroller.style.overflow,
      paddingRight: body.style.paddingRight,
    }
    const before = body.getBoundingClientRect().width
    // body's rect updates synchronously after the lock, html.clientWidth doesn't.
    scroller.style.overflow = 'hidden'
    const gained = body.getBoundingClientRect().width - before
    if (gained > 0) {
      const current = parseFloat(getComputedStyle(body).paddingRight) || 0
      body.style.paddingRight = `${current + gained}px`
      html.style.setProperty(SCROLLBAR_VAR, `${gained}px`)
    }
  }
  lockCount += 1
}

const unlock = () => {
  lockCount -= 1
  if (lockCount === 0) {
    const { body, documentElement: html } = document
    if (saved.scroller) saved.scroller.style.overflow = saved.overflow
    body.style.paddingRight = saved.paddingRight
    html.style.removeProperty(SCROLLBAR_VAR)
  }
}

/** Locks page scroll while `enabled`, compensating the scrollbar width and exposing it as `--lido-app-ui-scrollbar-width`. */
export const useBodyScrollLock = ({
  enabled = true,
}: { enabled?: boolean } = {}) => {
  useEffect(() => {
    if (!enabled) return
    lock()
    return unlock
  }, [enabled])
}
