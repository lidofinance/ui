import React, { useRef, useLayoutEffect, useState, CSSProperties } from 'react'
import { useWindowSize } from '../hooks'
import { PopoverRootProps } from './types'
import { INITIAL_STYLE, DEFAULT_PLACEMENT } from './constants'
import { calculatePosition } from './calculatePosition'

export const usePopoverPosition = <
  P extends HTMLDivElement,
  W extends HTMLDivElement
>(
  props: PopoverRootProps
): {
  popoverRef: React.RefObject<P>
  wrapperRef: React.RefObject<W>
  style: CSSProperties
} => {
  const { placement = DEFAULT_PLACEMENT, anchorRef } = props

  const popoverRef = useRef<P>(null)
  const wrapperRef = useRef<W>(null)

  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>(INITIAL_STYLE)
  const [windowWidth, windowHeight] = useWindowSize()

  useLayoutEffect(() => {
    if (!anchorRef.current || !popoverRef.current || !wrapperRef.current) return

    const anchorRect = anchorRef.current.getBoundingClientRect()
    const popoverRect = popoverRef.current.getBoundingClientRect()
    const wrapperRect = wrapperRef.current.getBoundingClientRect()

    const position = calculatePosition(
      anchorRect,
      popoverRect,
      wrapperRect,
      placement
    )
    setPopoverStyle(position)
  }, [anchorRef, placement, windowWidth, windowHeight])

  const style = {
    ...props.style,
    ...popoverStyle,
  }

  return {
    popoverRef,
    wrapperRef,
    style,
  }
}
