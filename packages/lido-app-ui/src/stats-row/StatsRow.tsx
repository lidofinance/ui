import type { HTMLAttributes } from 'react'

import cn from 'classnames'
import { StatItem, type StatItemProps } from '../stat-item'

import styles from './StatsRow.module.css'

export type StatsRowProps = HTMLAttributes<HTMLDivElement> & {
  items?: StatItemProps[]
}

export const StatsRow = ({
  items,
  className,
  children,
  ...rest
}: StatsRowProps) => (
  <div className={cn(styles.row, className)} {...rest}>
    {items != null
      ? items.map((item, index) => <StatItem key={index} {...item} />)
      : children}
  </div>
)
