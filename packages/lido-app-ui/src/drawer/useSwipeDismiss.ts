import { useRef, type PointerEvent as ReactPointerEvent } from 'react'

import { downQuery } from '../utils/breakpoints'

const INTERACTIVE = 'button, a, input, select, textarea, [role="button"]'
const MIN_DISTANCE = 64
const DISTANCE_RATIO = 0.25
const FLICK_VELOCITY = 0.5
const FLICK_MIN_DISTANCE = 16
const VELOCITY_WINDOW_MS = 100

type Drag = {
  pointerId: number
  startY: number
  dy: number
  samples: { y: number; t: number }[]
}

/** Swipe-down gesture for the mobile bottom sheet; handlers go on the drag zone (the header). */
export const useSwipeDismiss = (
  panel: HTMLElement | null,
  onSwipe: (event: Event) => void,
) => {
  const drag = useRef<Drag | null>(null)

  const reset = () => {
    drag.current = null
    panel?.style.removeProperty('transition')
    panel?.style.removeProperty('transform')
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLElement>) => {
    if (!panel || drag.current || e.button !== 0) return
    if (!window.matchMedia?.(downQuery('sm')).matches) return
    if ((e.target as Element).closest(INTERACTIVE)) return
    e.currentTarget.setPointerCapture?.(e.pointerId)
    drag.current = {
      pointerId: e.pointerId,
      startY: e.clientY,
      dy: 0,
      samples: [{ y: e.clientY, t: performance.now() }],
    }
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    const d = drag.current
    if (!d || !panel || d.pointerId !== e.pointerId) return
    d.dy = Math.max(0, e.clientY - d.startY)
    d.samples.push({ y: e.clientY, t: performance.now() })
    while (
      d.samples.length > 2 &&
      performance.now() - d.samples[0].t > VELOCITY_WINDOW_MS
    ) {
      d.samples.shift()
    }
    if (d.dy < 4) return
    panel.style.transition = 'none'
    panel.style.transform = `translateY(${d.dy}px)`
  }

  const onPointerUp = (e: ReactPointerEvent<HTMLElement>) => {
    const d = drag.current
    if (!d || !panel || d.pointerId !== e.pointerId) return
    reset()
    const first = d.samples[0]
    const elapsed = performance.now() - first.t
    const velocity = elapsed > 0 ? (e.clientY - first.y) / elapsed : 0
    const far =
      d.dy >
      Math.max(
        MIN_DISTANCE,
        panel.getBoundingClientRect().height * DISTANCE_RATIO,
      )
    const flick = velocity > FLICK_VELOCITY && d.dy > FLICK_MIN_DISTANCE
    if (far || flick) onSwipe(e.nativeEvent)
  }

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: reset,
    onLostPointerCapture: reset,
  }
}
