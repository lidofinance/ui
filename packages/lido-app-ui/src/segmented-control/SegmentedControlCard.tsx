import type { ReactNode } from 'react'

import cn from 'classnames'

import { SegmentCard } from './SegmentCard'
import styles from './SegmentedControlCard.module.css'

export type SegmentCardItem = {
  value: string
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  tag?: ReactNode
  disabled?: boolean
}

export type SegmentedControlCardProps = {
  items: SegmentCardItem[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const SegmentedControlCard = ({
  items,
  value,
  onChange,
  className,
}: SegmentedControlCardProps) => (
  <div role='tablist' className={cn(styles.segmentedControlCard, className)}>
    {items.map((item) => {
      const active = item.value === value
      return (
        <SegmentCard
          key={item.value}
          active={active}
          disabled={item.disabled}
          icon={item.icon}
          title={item.title}
          tag={item.tag}
          description={item.description}
          onClick={() => {
            if (item.value !== value) onChange(item.value)
          }}
        />
      )
    })}
  </div>
)
