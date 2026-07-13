import {
  ForwardedRef,
  forwardRef,
  Children,
  useRef,
  cloneElement,
  useState,
  MouseEvent,
} from 'react'
import { isElement } from 'react-is'
import { TooltipPopoverStyle } from './TooltipStyles.js'
import { useMergeRefs } from '../hooks/index.js'
import { TooltipProps } from './types.js'

const BODY_PERSISTENT_TIMEOUT = 150

export const Tooltip = forwardRef(
  (
    { title, children, ...rest }: TooltipProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const [state, setState] = useState(false)
    const keepTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
          onMouseEnter(event: MouseEvent<HTMLElement>) {
            handleMouseEnter()
            child.props.onMouseEnter?.(event)
          },
          onMouseLeave(event: MouseEvent<HTMLElement>) {
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
  },
)
Tooltip.displayName = 'Tooltip'
