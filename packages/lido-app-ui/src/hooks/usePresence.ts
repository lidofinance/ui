import { useCallback, useRef, useState } from 'react'
import type { RefCallback } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export type PresenceStatus = 'entering' | 'entered' | 'exiting' | 'exited'

export type UsePresenceOptions = {
  /** Animate the first mount when `open` starts true (toasts). Default false: initially-open renders settled. */
  appear?: boolean
  /** Keep the node mounted while closed (Accordion); only attributes/status change. */
  keepMounted?: boolean
  /** Also wait for motion on descendants (Modal overlay + card, Toast item + body). Default false. */
  subtree?: boolean
  onEntered?: () => void
  onExited?: () => void
}

export type PresenceMotionProps = {
  'data-state': 'open' | 'closed'
  /** Present only while moving. */
  'data-motion'?: 'enter' | 'exit'
}

export type Presence<T extends HTMLElement> = {
  mounted: boolean
  status: PresenceStatus
  /** Merge with the component's own ref. */
  ref: RefCallback<T>
  /** Spread onto the element the CSS keys on. */
  motionProps: PresenceMotionProps
}

type Phase = 'exited' | 'pre-enter' | 'entering' | 'entered' | 'exiting'

const SAFETY_MS = 50

const toMs = (value: string) => {
  const number = parseFloat(value)
  if (Number.isNaN(number)) return 0
  return value.trim().endsWith('ms') ? number : number * 1000
}

const toList = (value: string) => (value ? value.split(',').map(toMs) : [])

const longest = (durations: string, delays: string) => {
  const d = toList(durations)
  const l = toList(delays)
  if (d.length === 0) return 0
  const count = Math.max(d.length, l.length)
  let max = 0
  for (let i = 0; i < count; i++) {
    max = Math.max(
      max,
      (d[i % d.length] ?? 0) + (l.length ? l[i % l.length] : 0),
    )
  }
  return max
}

const styleMotionMs = (node: HTMLElement) => {
  const style = getComputedStyle(node)
  return Math.max(
    longest(style.transitionDuration || '', style.transitionDelay || ''),
    longest(style.animationDuration || '', style.animationDelay || ''),
  )
}

const remainingMs = (animation: Animation) => {
  const end = animation.effect?.getComputedTiming().endTime
  const current = Number(animation.currentTime ?? 0)
  return typeof end === 'number' ? Math.max(0, end - current) : Infinity
}

/** Runs `done` once the element's own motion finishes (sync when there is none). Returns a canceller. */
const waitForMotion = (
  node: HTMLElement,
  subtree: boolean,
  done: () => void,
) => {
  let settled = false
  let timer: ReturnType<typeof setTimeout> | undefined
  const finish = () => {
    if (settled) return
    settled = true
    clearTimeout(timer)
    done()
  }
  const cancel = () => {
    settled = true
    clearTimeout(timer)
  }

  // Reading computed style flushes pending styles so new transitions exist.
  void getComputedStyle(node).transitionDuration

  if (typeof node.getAnimations === 'function') {
    const running = node
      .getAnimations({ subtree })
      .filter(
        (animation) =>
          animation.playState !== 'finished' &&
          Number.isFinite(remainingMs(animation)),
      )
    if (running.length === 0) {
      finish()
      return cancel
    }
    const remaining = Math.max(...running.map(remainingMs))
    timer = setTimeout(finish, remaining + SAFETY_MS)
    // A cancelled transition (reversal) rejects and is ignored.
    Promise.all(running.map((animation) => animation.finished)).then(
      finish,
      () => {},
    )
    return cancel
  }

  const total = styleMotionMs(node)
  if (total <= 0) {
    finish()
    return cancel
  }
  timer = setTimeout(finish, total + SAFETY_MS)
  return cancel
}

const nextPhase = (phase: Phase, open: boolean): Phase => {
  if (open) {
    if (phase === 'exited') return 'pre-enter'
    if (phase === 'exiting') return 'entering'
    return phase
  }
  if (phase === 'pre-enter') return 'exited'
  if (phase === 'entering' || phase === 'entered') return 'exiting'
  return phase
}

const STATUS: Record<Phase, PresenceStatus> = {
  exited: 'exited',
  'pre-enter': 'entering',
  entering: 'entering',
  entered: 'entered',
  exiting: 'exiting',
}

/** Mount/unmount with CSS enter/exit transitions; unmounts when the element's own motion actually finishes. */
export function usePresence<T extends HTMLElement = HTMLElement>(
  open: boolean,
  options: UsePresenceOptions = {},
): Presence<T> {
  const { appear = false, keepMounted = false, subtree = false } = options
  const [phase, setPhase] = useState<Phase>(
    open ? (appear ? 'pre-enter' : 'entered') : 'exited',
  )
  const [prevOpen, setPrevOpen] = useState(open)
  const nodeRef = useRef<T | null>(null)
  const callbacks = useRef(options)
  callbacks.current = options

  let current = phase
  if (open !== prevOpen) {
    setPrevOpen(open)
    current = nextPhase(phase, open)
    setPhase(current)
  }

  const ref = useCallback<RefCallback<T>>((node) => {
    nodeRef.current = node
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (current !== 'pre-enter') return
    const node = nodeRef.current
    if (!node) {
      setPhase('entered')
      return
    }
    // Flush the closed styles so the next commit transitions from them.
    void node.offsetWidth
    setPhase('entering')
  }, [current])

  useIsomorphicLayoutEffect(() => {
    if (current !== 'entering' && current !== 'exiting') return
    const node = nodeRef.current
    const exiting = current === 'exiting'
    const done = () => {
      setPhase(exiting ? 'exited' : 'entered')
      if (exiting) callbacks.current.onExited?.()
      else callbacks.current.onEntered?.()
    }
    if (!node) {
      if (exiting) done()
      return
    }
    return waitForMotion(node, subtree, done)
  }, [current, subtree])

  const state =
    current === 'entering' || current === 'entered' ? 'open' : 'closed'
  const motion =
    current === 'pre-enter' || current === 'entering'
      ? 'enter'
      : current === 'exiting'
        ? 'exit'
        : undefined

  return {
    mounted: current !== 'exited' || keepMounted,
    status: STATUS[current],
    ref,
    motionProps: { 'data-state': state, 'data-motion': motion },
  }
}
