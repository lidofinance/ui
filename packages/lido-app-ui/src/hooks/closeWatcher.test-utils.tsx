import { act } from '@testing-library/react'
import { vi } from 'vitest'

export class FakeWatcher extends EventTarget {
  static all: FakeWatcher[] = []
  destroyed = false
  constructor() {
    super()
    FakeWatcher.all.push(this)
  }
  destroy() {
    this.destroyed = true
  }
}

export const liveWatchers = () => FakeWatcher.all.filter((w) => !w.destroyed)

let microtasks: (() => void)[] = []

/** Runs the microtasks queued since the last flush; sync tests never yield to the real queue. */
export const flushMicrotasks = () => {
  const pending = microtasks
  microtasks = []
  pending.forEach((task) => task())
}

/** Fires `close` on the newest live watcher, like an Android back gesture. */
export const back = () => {
  act(() => {
    liveWatchers().at(-1)!.dispatchEvent(new Event('close'))
  })
  flushMicrotasks()
}

let clock = 1e9

// Frozen clock, advanced per install: an Escape from an earlier test must not fall inside the watcher's dedupe window.
export const installCloseWatcher = (
  userAgent = 'Mozilla/5.0 (Linux; Android 14)',
) => {
  FakeWatcher.all = []
  vi.stubGlobal('CloseWatcher', FakeWatcher)
  microtasks = []
  vi.stubGlobal('queueMicrotask', (task: () => void) => microtasks.push(task))
  clock += 1000
  vi.spyOn(performance, 'now').mockImplementation(() => clock)
  vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent)
}

export const uninstallCloseWatcher = () => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
}
