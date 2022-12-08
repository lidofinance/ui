import React, {
  ForwardedRef,
  forwardRef,
  Children,
  useRef,
  cloneElement,
  useState,
} from 'react'
import { TooltipPopoverStyle } from './TooltipStyles'
import { useMergeRefs } from '@lidofinance/hooks'
import { isElement } from 'react-is'
import { TooltipProps } from './types'

const BODY_PERSISTENT_TIMEOUT = 150

function Tooltip(props: TooltipProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { title, children, ...rest } = props

  const [state, setState] = useState(false)
  const keepTimeoutRef = useRef<number | null>(null)

  const child = Children.only(children)
  if (!isElement(child)) throw new Error('Child must be a React element')

  const anchorRef = useRef<HTMLElement>(null)
  const mergedRef = useMergeRefs([child.ref, anchorRef])

  const handleMouseEnter = () => {
    if (keepTimeoutRef.current) {
      clearTimeout(keepTimeoutRef.current)
      keepTimeoutRef.current = null
    }
    setState(true)
  }

  const handleMouseLeave = () => {
    keepTimeoutRef.current = setTimeout(() => {
      setState(false)
      keepTimeoutRef.current = null
    }, BODY_PERSISTENT_TIMEOUT)
  }

  return (
    <>
      {cloneElement(child, {
        ref: mergedRef,
        onMouseEnter(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          handleMouseEnter()
          child.props.onMouseEnter?.(event)
        },
        onMouseLeave(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          handleMouseLeave()
          child.props.onMouseLeave?.(event)
        },
      })}
      <TooltipPopoverStyle
        {...rest}
        open={state}
        backdrop={false}
        anchorRef={anchorRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        {title}
      </TooltipPopoverStyle>
    </>
  )
}

export default forwardRef(Tooltip)
