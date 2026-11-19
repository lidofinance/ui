import { type ComponentPropsWithoutRef, type ReactNode, useId } from 'react'

import cn from 'classnames'

import { Tab, type TabDataTestId } from './Tab'
import {
  useEdgeFade,
  useIsomorphicLayoutEffect,
  useRovingTabs,
  useSelectionIndicator,
} from '../hooks'
import { scrollIntoCenter } from '../utils/dom'
import { getTabId } from './tabIds'
import styles from './Tabs.module.css'

export type TabsDataTestId = {
  root?: string
}

export type TabItem = {
  value: string
  label: ReactNode
  disabled?: boolean
  dataTestId?: TabDataTestId
  /** Id of the panel this tab controls; sets aria-controls. Keep that panel mounted (e.g. `hidden`) while set. */
  panelId?: string
}

export type TabsProps = Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> & {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: TabsDataTestId
}

/** Row of text tabs with an underline on the active item; controlled via `value`. Scrolls with an edge fade when it does not fit. Pass `id` to link panels via `getTabPanelProps`. */
export const Tabs = ({
  items,
  value,
  onChange,
  className,
  dataTestId,
  onKeyDown,
  id,
  ...rest
}: TabsProps) => {
  const autoId = useId()
  const tabsId = id ?? autoId
  const { containerRef, activeRef, indicatorRef } = useSelectionIndicator(
    'x',
    value,
    [items],
  )
  const roving = useRovingTabs(containerRef, items, value, onChange, onKeyDown)

  const { sync } = useEdgeFade(containerRef)

  useIsomorphicLayoutEffect(sync, [items, sync])

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current)
      scrollIntoCenter(containerRef.current, activeRef.current)
  }, [value])

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus -- focus lives on the roving tabs
    <div
      ref={containerRef}
      id={id}
      role='tablist'
      className={cn(styles.tabs, className)}
      data-testid={dataTestId?.root}
      {...rest}
      onKeyDown={roving.onKeyDown}
    >
      <div ref={indicatorRef} aria-hidden='true' className={styles.selection} />
      {items.map((item) => {
        const active = item.value === value
        return (
          <Tab
            key={item.value}
            ref={active ? activeRef : undefined}
            id={getTabId(tabsId, item.value)}
            aria-controls={item.panelId}
            active={active}
            disabled={item.disabled}
            tabIndex={roving.getTabIndex(item.value)}
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
