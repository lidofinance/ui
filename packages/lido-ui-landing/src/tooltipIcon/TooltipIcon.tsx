import { ComponentPropsWithoutRef, ReactNode } from 'react'
import cn from 'classnames'
import { Tooltip, TooltipPosition, TooltipWidth } from '../tooltip'
import { Info } from '../icons'
import styles from './TooltipIcon.module.css'

export type TooltipIconDataTestId = {
  root?: string
  icon?: string
  tooltip?: string
}

export type TooltipIconProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'content'
> & {
  content: ReactNode
  position?: TooltipPosition
  width?: TooltipWidth
  dataTestId?: TooltipIconDataTestId
}

export const TooltipIcon = ({
  content,
  position = 'right',
  className,
  dataTestId,
  width,
  ...rest
}: TooltipIconProps) => {
  return (
    <Tooltip
      content={content}
      position={position}
      width={width}
      className={cn(styles.tooltipIcon, className)}
      dataTestId={{
        root: dataTestId?.tooltip,
      }}
      {...rest}
    >
      <div className={styles.icon} data-testid={dataTestId?.root}>
        <Info data-testid={dataTestId?.icon} />
      </div>
    </Tooltip>
  )
}
