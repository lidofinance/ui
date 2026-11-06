import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import cn from 'classnames'

import { Segment, type SegmentDataTestId } from './Segment'
import { useSelectionIndicator } from '../hooks'
import styles from './SegmentedControl.module.css'

export type SegmentedControlDataTestId = {
  root?: string
}

export type SegmentItem = {
  value: string
  label: ReactNode
  disabled?: boolean
  dataTestId?: SegmentDataTestId
}

export type SegmentedControlProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  items: SegmentItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: SegmentedControlDataTestId
}

/** Controlled segmented control (e.g. Supply / Withdraw / Borrow); the pill is measured from the active segment, so labels of any length fit. */
export const SegmentedControl = ({
  items,
  value,
  onChange,
  className,
  dataTestId,
  ...rest
}: SegmentedControlProps) => {
  const { containerRef, activeRef, indicatorRef, animated } =
    useSelectionIndicator('both', [value, items])

  return (
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.segmentedControl, className)}
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
          <Segment
            key={item.value}
            ref={active ? activeRef : undefined}
            active={active}
            disabled={item.disabled}
            dataTestId={item.dataTestId}
            onClick={() => {
              if (item.value !== value) onChange(item.value)
            }}
          >
            {item.label}
          </Segment>
        )
      })}
    </div>
  )
}
