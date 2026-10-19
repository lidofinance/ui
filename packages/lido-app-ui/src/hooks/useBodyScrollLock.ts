import { useEffect } from 'react'

// Ref-counted so stacked overlays only restore on the last unlock.
let lockCount = 0
let saved = { overflow: '', paddingRight: '' }

const lock = () => {
  if (lockCount === 0) {
    const { body, documentElement } = document
    saved = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    }
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    if (scrollbarWidth > 0) {
      const current = parseFloat(getComputedStyle(body).paddingRight) || 0
      body.style.paddingRight = `${current + scrollbarWidth}px`
    }
    body.style.overflow = 'hidden'
  }
  lockCount += 1
}

const unlock = () => {
  lockCount -= 1
  if (lockCount === 0) {
    document.body.style.overflow = saved.overflow
    document.body.style.paddingRight = saved.paddingRight
  }
}

/** Locks body scroll while `active`, compensating the scrollbar width. */
export const useBodyScrollLock = (active: boolean) => {
  useEffect(() => {
    if (!active) return
    lock()
    return unlock
  }, [active])
}
