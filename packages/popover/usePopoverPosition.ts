import {
  useRef,
  useLayoutEffect,
  useState,
  CSSProperties,
  RefObject,
} from 'react'
import { useWindowSize } from '@lidofinance/hooks'
import { PopoverRootProps } from './types'
import { INITIAL_STYLE, DEFAULT_PLACEMENT } from './constants'
import { calculatePosition } from './calculatePosition'

export const usePopoverPosition = <
  P extends HTMLDivElement,
  W extends HTMLDivElement,
>({
  placement = DEFAULT_PLACEMENT,
  anchorRef,
  style: propsStyle,
}: Pick<PopoverRootProps, 'placement' | 'anchorRef' | 'style'>): {
  popoverRef: RefObject<P>
  wrapperRef: RefObject<W>
  style: CSSProperties
} => {
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
      placement,
    )
    setPopoverStyle(position)
  }, [anchorRef, placement, windowWidth, windowHeight])

  const style = {
    ...propsStyle,
    ...popoverStyle,
  }

  return {
    popoverRef,
    wrapperRef,
    style,
  }
}
