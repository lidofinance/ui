import { useEffect } from 'react'

/** Publishes the sticky header's height as `--local-header-height` on `target`, so scroll-padding keeps focused content from landing under it (WCAG 2.4.11). */
export const useHeaderOffset = (
  target: HTMLElement | null,
  header: HTMLElement | null,
) => {
  useEffect(() => {
    if (!target || !header || typeof ResizeObserver === 'undefined') return
    const measure = () =>
      target.style.setProperty(
        '--local-header-height',
        `${header.offsetHeight + 8}px`,
      )
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(header)
    return () => observer.disconnect()
  }, [target, header])
}
