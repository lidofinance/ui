import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children?: ReactNode
  /** Defaults to `document.body`. */
  container?: Element | null
}

const THEME_ATTR = 'data-lido-theme'

/**
 * Renders `null` until mounted so SSR and first client render match.
 * Without `container`, mirrors the nearest `data-lido-theme` scope onto the portal root so tokens still resolve.
 */
export const Portal = ({ children, container }: PortalProps) => {
  const markerRef = useRef<HTMLSpanElement>(null)
  const [target, setTarget] = useState<Element | null>(null)

  useEffect(() => {
    if (container) {
      setTarget(container)
      return
    }
    const scope = markerRef.current?.closest(`[${THEME_ATTR}]`)
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
  }, [container])

  return (
    <>
      <span ref={markerRef} hidden />
      {target ? createPortal(children, target) : null}
    </>
  )
}
