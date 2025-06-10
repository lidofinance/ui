import { ComponentPropsWithoutRef, ReactNode } from 'react'
import cn from 'classnames'
import { Tooltip, TooltipPosition } from '../tooltip'
import { Info } from '../icons'
import styles from './TooltipIcon.module.css'

export type TooltipIconSize = 'S' | 'M'
export type TooltipIconVariant = 'default' | 'primary'

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

  size?: TooltipIconSize
  variant?: TooltipIconVariant
  dataTestId?: TooltipIconDataTestId
}

export const TooltipIcon = ({
  content,
  position = 'right',
  size = 'M',
  variant = 'default',
  className,
  dataTestId,
  ...rest
}: TooltipIconProps) => {
  return (
    <Tooltip
      content={content}
      position={position}
      className={cn(styles.tooltipIcon, className)}
      dataTestId={{
        root: dataTestId?.tooltip,
      }}
      {...rest}
    >
      <div
        className={cn(styles.icon, styles[`size${size}`], styles[variant])}
        data-testid={dataTestId?.root}
      >
        <Info data-testid={dataTestId?.icon} />
      </div>
    </Tooltip>
  )
}
