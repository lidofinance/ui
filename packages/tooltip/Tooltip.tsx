import {
  ForwardedRef,
  forwardRef,
  Children,
  useRef,
  cloneElement,
  useState,
  ReactNode,
  ReactElement,
  RefAttributes,
  MouseEvent,
} from 'react'
import { TooltipPopoverStyle, TooltipPopoverStyleProps } from './TooltipStyles'
import { useMergeRefs } from '@lidofinance/hooks'
import { isElement } from 'react-is'

const BODY_PERSISTENT_TIMEOUT = 150

export type TooltipProps = Omit<
  TooltipPopoverStyleProps,
  'anchorRef' | 'title' | 'open' | 'backdrop' | 'children'
> & {
  title: ReactNode
  children: ReactElement & RefAttributes<HTMLElement>
}

function Tooltip(
  { title, children, ...rest }: TooltipProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
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
}

export default forwardRef(Tooltip)
