import { useEffect, type RefObject } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  onOutside: () => void,
  enabled: boolean,
) => {
  useEffect(() => {
    if (!enabled) return

    const handlePointerDown = (event: PointerEvent) => {
      const element = ref.current
      if (!element) return
      if (event.target instanceof Node && element.contains(event.target)) {
        return
      }
      onOutside()
    }

    document.addEventListener('pointerdown', handlePointerDown, true)
    return () =>
      document.removeEventListener('pointerdown', handlePointerDown, true)
  }, [ref, onOutside, enabled])
}
