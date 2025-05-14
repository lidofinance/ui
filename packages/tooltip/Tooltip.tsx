import { ComponentPropsWithoutRef, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Tooltip.module.css'

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'

export type TooltipDataTestId = {
  root?: string
  content?: string
}

export type TooltipProps = Omit<ComponentPropsWithoutRef<'div'>, 'content'> & {
  content?: ReactNode
  position?: TooltipPosition
  dataTestId?: TooltipDataTestId
}

export const Tooltip = ({
  content,
  position = 'right',
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
        <div className={styles.content} data-testid={dataTestId?.content}>
          <div className={styles.text}>{content}</div>
          <div className={styles.triangle} />
        </div>
      </div>
    </div>
  )
}
