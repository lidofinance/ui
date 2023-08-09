import {
  useRef,
  useLayoutEffect,
  useState,
  CSSProperties,
  RefObject,
} from 'react'
import { useWindowSize } from '../hooks'
import { PopoverRootProps } from './PopoverRoot'
import { INITIAL_STYLE, DEFAULT_PLACEMENT } from './constants'
import { calculatePosition } from './calculatePosition'

export const usePopoverPosition = <
  P extends HTMLDivElement,
  W extends HTMLDivElement,
>({
  placement = DEFAULT_PLACEMENT,
  anchorRef,
  style,
}: Pick<PopoverRootProps, 'placement' | 'anchorRef' | 'style'>): {
  popoverRef: RefObject<P>
  wrapperRef: RefObject<W>
  customStyle: CSSProperties
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

  const customStyle = {
    ...style,
    ...popoverStyle,
  }

  return {
    popoverRef,
    wrapperRef,
    customStyle,
  }
}
