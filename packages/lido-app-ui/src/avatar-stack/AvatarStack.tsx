import {
  Children,
  Fragment,
  forwardRef,
  isValidElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './AvatarStack.module.css'

export type AvatarStackDataTestId = {
  root?: string
  item?: string
}

export type AvatarStackProps = HTMLAttributes<HTMLDivElement> & {
  /** Circle diameter in px; neighbours overlap by a quarter of it. */
  size?: number
  dataTestId?: AvatarStackDataTestId
}

type Slot = { key: string; node: ReactNode }

// Children.toArray flattens arrays but keeps fragments as one child; keys are prefixed so explicit keys in different fragments stay unique.
const flatten = (children: ReactNode, prefix = ''): Slot[] =>
  Children.toArray(children).flatMap((child, index) => {
    const key = `${prefix}${isValidElement(child) && child.key != null ? child.key : index}`
    return isValidElement<{ children?: ReactNode }>(child) &&
      child.type === Fragment
      ? flatten(child.props.children, `${key}/`)
      : [{ key, node: child }]
  })

/** Overlapping row of circular logos, the first on top, each zooming on hover; every child is clipped to a circle and fills it. Names come from each child's `alt` / `aria-label`. For a tooltip, wrap a focusable child (`<Tooltip><a aria-label>…</a></Tooltip>`) so keyboard users reach it. */
export const AvatarStack = forwardRef<HTMLDivElement, AvatarStackProps>(
  ({ size = 32, className, style, children, dataTestId, ...rest }, ref) => {
    const slots = flatten(children)
    return (
      <div
        ref={ref}
        className={cn(styles.root, className)}
        style={{ ...style, '--local-size': `${size}px` } as CSSProperties}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {slots.map(({ key, node }, index) => (
          <span
            key={key}
            className={styles.slot}
            style={{ '--local-z': slots.length - index } as CSSProperties}
            data-testid={dataTestId?.item}
          >
            {node}
          </span>
        ))}
      </div>
    )
  },
)

AvatarStack.displayName = 'AvatarStack'
