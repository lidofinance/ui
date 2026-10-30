import { useEffect, useReducer, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children?: ReactNode
  /** Defaults to `document.body`. */
  container?: Element | null
}

const THEME_ATTR = 'data-lido-theme'

/** SSR-safe portal into `container` or `document.body`; without `container` a marker span (dropped once resolved) finds the nearest `data-lido-theme` scope to mirror onto the portal root. */
export const Portal = ({ children, container }: PortalProps) => {
  const markerRef = useRef<HTMLSpanElement>(null)
  const [target, setTarget] = useState<Element | null>(null)
  const [tick, retry] = useReducer((n: number) => n + 1, 0)

  useEffect(() => {
    if (container) {
      setTarget(container)
      return
    }
    // Marker is gone after a container -> undefined switch; clear target so it re-renders, then retry.
    if (!markerRef.current) {
      setTarget(null)
      retry()
      return
    }
    const scope = markerRef.current.closest(`[${THEME_ATTR}]`)
    if (!scope || scope === document.documentElement) {
      setTarget(document.body)
      return
    }

    const root = document.createElement('div')
    root.style.display = 'contents'
    const sync = () =>
      root.setAttribute(THEME_ATTR, scope.getAttribute(THEME_ATTR) ?? '')
    sync()
    document.body.appendChild(root)
    const observer = new MutationObserver(sync)
    observer.observe(scope, { attributes: true, attributeFilter: [THEME_ATTR] })
    setTarget(root)
    return () => {
      observer.disconnect()
      root.remove()
    }
  }, [container, tick])

  if (target) return createPortal(children, target)
  return container ? null : <span ref={markerRef} hidden />
}
