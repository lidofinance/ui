import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './tooltip.module.css'
import { InfoIcon, InfoIconProps } from './infoIcon'
import { LidoComponentProps } from 'packages/utils'

export type TooltipProps = LidoComponentProps<
  'div',
  {
    content?: ReactNode
    position?:
      | 'right'
      | 'bottom-right'
      | 'top-right'
      | 'bottom-center'
      | 'card-bottom'
    icon?: {
      size?: InfoIconProps['size']
      color?: InfoIconProps['color']
    }
  }
>

export const Tooltip = ({
  content,
  position = 'right',
  icon,
  className,
  children,
  ...rest
}: TooltipProps) => {
  return (
    <div className={cn(className, styles.tooltip)} {...rest}>
      {children || <InfoIcon size={icon?.size} color={icon?.color} />}

      <div
        className={cn(styles.content, {
          [styles.right]: position === 'right',
          [styles.bottomRight]: position === 'bottom-right',
          [styles.topRight]: position === 'top-right',
          [styles.bottomCenter]: position === 'bottom-center',
          [styles.cardBottom]: position === 'card-bottom',
        })}
      >
        {content}
      </div>
    </div>
  )
}
