import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'
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

export type TooltipWidth = number | 'auto' | 'max-content'

export type TooltipDataTestId = {
  root?: string
  content?: string
}

export type TooltipProps = Omit<ComponentPropsWithoutRef<'div'>, 'content'> & {
  content?: ReactNode
  position?: TooltipPosition
  width?: TooltipWidth
  dataTestId?: TooltipDataTestId
}

export const Tooltip = ({
  content,
  position = 'right',
  width = 352,
  className,
  children,
  dataTestId,
  ...rest
}: TooltipProps) => {
  if (!content) {
    return (
      <div className={className} data-testid={dataTestId?.root}>
        {children}
      </div>
    )
  }

  const showTriangle = ['top', 'right', 'bottom', 'left'].includes(position)

  return (
    <div
      className={cn(styles.tooltip, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
      <div
        className={cn(styles.contentWrapper, styles[`position--${position}`])}
      >
        <div
          className={styles.content}
          style={
            { '--lido-ui-local-tooltip-width': `${width}px` } as CSSProperties
          }
          data-testid={dataTestId?.content}
        >
          <div className={styles.text}>{content}</div>
          {showTriangle && <div className={styles.triangle} />}
        </div>
      </div>
    </div>
  )
}
