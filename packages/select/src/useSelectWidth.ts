import React, { useCallback, useState, useEffect } from 'react'

export const useSelectWidth = <T extends HTMLElement>(
  opened: boolean,
  anchorRef: React.RefObject<T | null>
): number | undefined => {
  const [width, setWidth] = useState<number>()

  const updateWidth = useCallback(() => {
    if (!anchorRef.current) return
    const rect = anchorRef.current.getBoundingClientRect()

    setWidth(rect.width)
  }, [anchorRef])

  useEffect(() => {
    if (!opened || !anchorRef.current) return

    const observer = new ResizeObserver(updateWidth)
    observer.observe(anchorRef.current)

    return (): void => observer.disconnect()
  }, [opened, anchorRef, updateWidth])

  return width
}
