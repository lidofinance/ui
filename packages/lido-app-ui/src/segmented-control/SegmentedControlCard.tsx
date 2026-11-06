import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { SegmentCard, type SegmentCardDataTestId } from './SegmentCard'
import { useSelectionIndicator } from '../hooks'
import styles from './SegmentedControlCard.module.css'

export type SegmentedControlCardDataTestId = {
  root?: string
}

export type SegmentCardItem = {
  value: string
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  tag?: ReactNode
  disabled?: boolean
  dataTestId?: SegmentCardDataTestId
}

export type SegmentedControlCardProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  items: SegmentCardItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: SegmentedControlCardDataTestId
}

/** Card variant of `SegmentedControl`: each option is a card with an icon, title, tag and description instead of a compact pill. */
export const SegmentedControlCard = ({
  items,
  value,
  onChange,
  className,
  style,
  dataTestId,
  ...rest
}: SegmentedControlCardProps) => {
  const { containerRef, activeRef, indicatorRef, animated } =
    useSelectionIndicator('both', [value, items])

  return (
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.segmentedControlCard, className)}
      style={{ ...style, '--local-count': items.length } as CSSProperties}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div
        ref={indicatorRef}
        aria-hidden='true'
        className={cn(styles.selection, animated && styles.animated)}
      />
      {items.map((item) => {
        const active = item.value === value
        return (
          <SegmentCard
            key={item.value}
            ref={active ? activeRef : undefined}
            active={active}
            disabled={item.disabled}
            icon={item.icon}
            title={item.title}
            tag={item.tag}
            description={item.description}
            dataTestId={item.dataTestId}
            onClick={() => {
              if (item.value !== value) onChange(item.value)
            }}
          />
        )
      })}
    </div>
  )
}
