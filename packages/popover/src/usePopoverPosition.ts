import { useRef, useLayoutEffect, useState, CSSProperties } from 'react'
import { useWindowSize } from '@lidofinance/hooks'
import { PopoverProps } from './types'
import { INITIAL_STYLE } from './constants'
import { calculatePosition } from './calculatePosition'

export const usePopoverPosition = <T extends HTMLDivElement>(
  props: PopoverProps
): {
  popoverRef: React.RefObject<T>
  style: CSSProperties
} => {
  const { placement = 'bottomLeft', anchorRef } = props

  const popoverRef = useRef<T>(null)
  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>(INITIAL_STYLE)
  const [windowWidth, windowHeight] = useWindowSize()

  useLayoutEffect(() => {
    if (!anchorRef.current || !popoverRef.current) return

    const anchorRect = anchorRef.current.getBoundingClientRect()
    const popoverRect = popoverRef.current.getBoundingClientRect()

    const position = calculatePosition(anchorRect, popoverRect, placement)
    setPopoverStyle(position)
  }, [anchorRef, placement, windowWidth, windowHeight])

  const style = {
    ...props.style,
    ...popoverStyle,
  }

  return { popoverRef, style }
}
