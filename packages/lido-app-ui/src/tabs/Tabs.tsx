import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import cn from 'classnames'

import { Tab, type TabDataTestId } from './Tab'
import { useSelectionIndicator } from '../hooks'
import styles from './Tabs.module.css'

export type TabsDataTestId = {
  root?: string
}

export type TabItem = {
  value: string
  label: ReactNode
  disabled?: boolean
  dataTestId?: TabDataTestId
}

export type TabsProps = Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> & {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: TabsDataTestId
}

/** Row of text tabs with an underline on the active item; controlled via `value`. */
export const Tabs = ({
  items,
  value,
  onChange,
  className,
  dataTestId,
  ...rest
}: TabsProps) => {
  const { containerRef, activeRef, indicatorRef, animated } =
    useSelectionIndicator('x', [value, items])

  return (
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.tabs, className)}
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
          <Tab
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
          </Tab>
        )
      })}
    </div>
  )
}
