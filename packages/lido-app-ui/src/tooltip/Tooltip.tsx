import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Tooltip.module.css'

export type TooltipPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type TooltipProps = Omit<HTMLAttributes<HTMLSpanElement>, 'content'> & {
  content?: ReactNode
  position?: TooltipPosition
  width?: number
}

export const Tooltip = ({
  content,
  position = 'top',
  width = 280,
  className,
  children,
  ...rest
}: TooltipProps) => {
  if (!content) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    )
  }

  return (
    <span className={cn(styles.wrapper, className)} {...rest}>
      {children}
      <span
        className={cn(styles.content, styles[`position-${position}`])}
        style={{ '--local-tooltip-width': `${width}px` } as CSSProperties}
        role='tooltip'
      >
        {content}
      </span>
    </span>
  )
}
