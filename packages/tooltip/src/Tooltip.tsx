import {
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

const KEEP_TIMEOUT_DEFAULT = 150

function Tooltip(props: TooltipProps, ref?: ForwardedRef<HTMLDivElement>) {
  const {
    title,
    keepWhileHovering,
    keepTimeout = KEEP_TIMEOUT_DEFAULT,
    children,
    ...rest
  } = props

  const [state, setState] = useState(false)
  const keepTimeoutRef = useRef(-1)

  const child = Children.only(children)
  if (!isElement(child)) throw new Error('Child must be a React element')

  const anchorRef = useRef<HTMLElement>(null)
  const mergedRef = useMergeRefs([child.ref, anchorRef])

  const handleMouseEnterKeeping = () => {
    if (keepTimeoutRef.current !== -1) {
      clearTimeout(keepTimeoutRef.current)
      keepTimeoutRef.current = -1
    }
  }

  const handleMouseEnterLeaveKeeping = () => {
    keepTimeoutRef.current = setTimeout(() => {
      setState(false)
      keepTimeoutRef.current !== -1
    }, keepTimeout)
  }

  return (
    <>
      {cloneElement(child, {
        ref: mergedRef,
        onMouseEnter(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          if (keepWhileHovering) {
            handleMouseEnterKeeping()
          }
          setState(true)
          child.props.onMouseEnter?.(event)
        },
        onMouseLeave(event: React.MouseEvent<HTMLElement, MouseEvent>) {
          if (keepWhileHovering) {
            handleMouseEnterLeaveKeeping()
          } else {
            setState(false)
          }
          child.props.onMouseLeave?.(event)
        },
      })}
      <TooltipPopoverStyle
        {...rest}
        open={state}
        backdrop={false}
        anchorRef={anchorRef}
        onMouseEnter={() => {
          if (keepWhileHovering) {
            handleMouseEnterKeeping()
          }
        }}
        onMouseLeave={() => {
          if (keepWhileHovering) {
            handleMouseEnterLeaveKeeping()
          }
        }}
        ref={ref}
      >
        {title}
      </TooltipPopoverStyle>
    </>
  )
}

export default forwardRef(Tooltip)
