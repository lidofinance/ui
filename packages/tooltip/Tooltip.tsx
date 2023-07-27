import React, {
  ForwardedRef,
  forwardRef,
  Children,
  useRef,
  cloneElement,
  useState,
  ReactNode,
  ReactElement,
  RefAttributes,
} from 'react'
import { useMergeRefs } from '../hooks'
import { Popover, PopoverProps } from '../popover'
import cn from 'classnames'
import styles from './Tooltip.module.css'

const BODY_PERSISTENT_TIMEOUT = 150

export type TooltipProps = Omit<
  PopoverProps,
  'anchorRef' | 'title' | 'open' | 'backdrop' | 'children'
> & {
  title: ReactNode
  children: ReactElement & RefAttributes<HTMLElement>
}

export const Tooltip = forwardRef(
  (
    { title, children, className, ...rest }: TooltipProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const [state, setState] = useState(false)
    const keepTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const child = Children.only(children)
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
        <Popover
          className={cn(styles.tooltip, className)}
          {...rest}
          open={state}
          backdrop={false}
          anchorRef={anchorRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref}
        >
          {title}
        </Popover>
      </>
    )
  },
)
Tooltip.displayName = 'Tooltip'
