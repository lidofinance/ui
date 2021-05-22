import { useCallback, useState, useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useSelectWidth = <T extends HTMLLabelElement>(
  opened: boolean
): {
  selectRef: React.RefObject<T>
  width?: number
} => {
  const selectRef = useRef<T>(null)
  const [width, setWidth] = useState<number>()

  const updateWidth = useCallback(() => {
    if (!selectRef.current) return
    const rect = selectRef.current.getBoundingClientRect()

    setWidth(rect.width)
  }, [])

  useEffect(() => {
    if (!opened || !selectRef.current) return

    const observer = new ResizeObserver(updateWidth)
    observer.observe(selectRef.current)

    return (): void => observer.disconnect()
  }, [opened, updateWidth])

  return { width, selectRef }
}
