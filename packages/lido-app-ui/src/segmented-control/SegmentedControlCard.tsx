import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { SegmentCard, type SegmentCardDataTestId } from './SegmentCard'
import { useRovingTabs, useSelectionIndicator } from '../hooks'
import styles from './SegmentedControlCard.module.css'

export type SegmentedControlCardDataTestId = {
  root?: string
}

export type SegmentCardItem = {
  value: string
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  /** Strings and numbers get a neutral Tag; elements (incl. i18n like `<Trans>`) render as-is, so wrap them in `<Tag variant='neutral'>` to keep the pill. Must be non-interactive: the card is a `<button role="tab">`. */
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
  /** Control width below which all cards stack (number = px); defaults to fitting each card at 212px. */
  stackAt?: number | string
  dataTestId?: SegmentedControlCardDataTestId
}

/** Card variant of `SegmentedControl`: each option is a card with an icon, title, tag and description instead of a compact pill. */
export const SegmentedControlCard = ({
  items,
  value,
  onChange,
  stackAt,
  className,
  style,
  dataTestId,
  onKeyDown,
  ...rest
}: SegmentedControlCardProps) => {
  const { containerRef, activeRef, indicatorRef, animated } =
    useSelectionIndicator('both', [value, items])
  const roving = useRovingTabs(containerRef, items, value, onChange, onKeyDown)

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus -- focus lives on the roving tabs
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.segmentedControlCard, className)}
      style={
        {
          ...style,
          '--local-count': items.length,
          ...(stackAt != null && {
            '--local-stack-at-outer':
              typeof stackAt === 'number' ? `${stackAt}px` : stackAt,
          }),
        } as CSSProperties
      }
      data-testid={dataTestId?.root}
      {...rest}
      onKeyDown={roving.onKeyDown}
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
            tabIndex={roving.getTabIndex(item.value)}
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
