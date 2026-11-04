import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import { StatItem, type StatItemProps } from './StatItem'
import styles from './StatsRow.module.css'

export type StatsRowDataTestId = {
  root?: string
}

export type StatsRowProps = HTMLAttributes<HTMLDivElement> & {
  /** `StatItem` props, one per cell; `children` render after them. */
  items?: StatItemProps[]
  dataTestId?: StatsRowDataTestId
}

/** Four-up dashboard block of `StatItem`s: four columns, two below 900px, one below 400px. */
export const StatsRow = forwardRef<HTMLDivElement, StatsRowProps>(
  ({ items, className, children, dataTestId, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(styles.row, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {items?.map((item, index) => <StatItem key={index} {...item} />)}
      {children}
    </div>
  ),
)

StatsRow.displayName = 'StatsRow'
