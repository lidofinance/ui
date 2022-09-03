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

function Tooltip(props: TooltipProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { children, title, ...rest } = props
  const [state, setState] = useState(false)

  const child = Children.only(children)
  if (!isElement(child)) throw new Error('Child must be a React element')

  const anchorRef = useRef<HTMLElement>(null)
  const mergedRef = useMergeRefs([child.ref, anchorRef])

  return (
    <>
      {cloneElement(child, {
        ref: mergedRef,
        onMouseEnter(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          setState(true)
          child.props.onMouseEnter?.(event)
        },
        onMouseLeave(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          setState(false)
          child.props.onMouseLeave?.(event)
        },
      })}
      <TooltipPopoverStyle
        {...rest}
        open={state}
        backdrop={false}
        anchorRef={anchorRef}
        ref={ref}
      >
        {title}
      </TooltipPopoverStyle>
    </>
  )
}

export default forwardRef(Tooltip)
