import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

import cn from 'classnames'

import { Tab } from './Tab'
import styles from './Tabs.module.css'

export type TabItem = {
  value: string
  label: ReactNode
  disabled?: boolean
}

export type TabsProps = {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const Tabs = ({ items, value, onChange, className }: TabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)
  const selectionRef = useRef<HTMLDivElement>(null)
  // Skip the transition on the first measurement so the bar doesn't fly in from 0,0.
  const [animated, setAnimated] = useState(false)

  useLayoutEffect(() => {
    const updateSelection = () => {
      const button = activeButtonRef.current
      const container = containerRef.current
      const selection = selectionRef.current
      if (!button || !container || !selection) return

      const buttonRect = button.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const x = buttonRect.left - containerRect.left

      selection.style.width = `${buttonRect.width}px`
      selection.style.transform = `translateX(${x}px)`
    }

    updateSelection()
    setAnimated(true)

    window.addEventListener('resize', updateSelection)
    return () => {
      window.removeEventListener('resize', updateSelection)
    }
  }, [value, items])

  return (
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.tabs, className)}
    >
      <div
        ref={selectionRef}
        aria-hidden='true'
        className={cn(styles.selection, animated && styles.animated)}
      />
      {items.map((item) => {
        const active = item.value === value
        return (
          <Tab
            key={item.value}
            ref={active ? activeButtonRef : undefined}
            active={active}
            disabled={item.disabled}
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
