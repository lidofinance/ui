import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip, type TooltipProps } from '../tooltip'
import styles from './InfoTooltip.module.css'

export type InfoTooltipSize = 16 | 20
export type InfoTooltipTone = 'secondary' | 'tertiary'

export type InfoTooltipProps = Omit<TooltipProps, 'children'> & {
  size?: InfoTooltipSize
  tone?: InfoTooltipTone
}

export const InfoTooltip = ({
  size = 16,
  tone = 'secondary',
  className,
  'aria-label': ariaLabel,
  ...rest
}: InfoTooltipProps) => (
  <Tooltip
    tabIndex={0}
    role='img'
    aria-label={ariaLabel ?? 'More info'}
    className={cn(styles.root, styles[`size${size}`], styles[tone], className)}
    {...rest}
  >
    <IconInfo className={styles.icon} aria-hidden='true' />
  </Tooltip>
)

InfoTooltip.displayName = 'InfoTooltip'
