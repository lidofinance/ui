import { useEffect, useRef } from 'react'

import { lastEscapeAt } from './useEscape'

type Watcher = EventTarget & { destroy: () => void }
type WatcherCtor = new () => Watcher

const ESCAPE_DEDUPE_MS = 100

type Layer = { current: (event: Event) => void }

// One watcher for all layers: the browser groups watchers and fires each one, so per-layer watchers can't tell which layer is on top.
const layers: Layer[] = []
let watcher: Watcher | null = null

const syncWatcher = () => {
  if (!layers.length) {
    watcher?.destroy()
    watcher = null
    return
  }
  if (watcher) return
  const Ctor = (globalThis as { CloseWatcher?: WatcherCtor }).CloseWatcher
  // On desktop a watcher would also eat Escape, which the layers already handle.
  if (!Ctor || !/Android/.test(navigator.userAgent)) return
  let created: Watcher
  try {
    created = new Ctor()
  } catch {
    return
  }
  created.addEventListener('close', (event) => {
    // A fired watcher is spent; rearm before the handler so the next back press still lands.
    created.destroy()
    watcher = null
    syncWatcher()
    if (performance.now() - lastEscapeAt() < ESCAPE_DEDUPE_MS) return
    layers.at(-1)?.current(event)
  })
  watcher = created
}

/** Android back for the newest layer via CloseWatcher; no-op where unsupported or off Android. */
export const useCloseWatcher = (
  onClose: (event: Event) => void,
  { enabled = true }: { enabled?: boolean } = {},
) => {
  const handlerRef = useRef(onClose)
  handlerRef.current = onClose

  useEffect(() => {
    if (!enabled) return
    const layer: Layer = {
      current: (event) => handlerRef.current(event),
    }
    layers.push(layer)
    syncWatcher()
    return () => {
      layers.splice(layers.indexOf(layer), 1)
      syncWatcher()
    }
  }, [enabled])
}
