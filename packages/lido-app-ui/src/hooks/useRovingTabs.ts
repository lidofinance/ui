import { type KeyboardEvent, type RefObject } from 'react'

type RovingItem = { value: string; disabled?: boolean }

const KEY_STEP: Record<string, 1 | -1> = {
  ArrowLeft: -1,
  ArrowRight: 1,
}

/** WAI-ARIA tabs keyboard model with automatic activation: one tab stop, Left/Right arrows and Home/End move focus and call `onChange`. */
export const useRovingTabs = <T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  items: RovingItem[],
  value: string,
  onChange: (value: string) => void,
  onKeyDown?: (event: KeyboardEvent<T>) => void,
) => {
  const enabled = items.filter((item) => !item.disabled)
  const tabStop = enabled.some((item) => item.value === value)
    ? value
    : enabled[0]?.value

  const getTabIndex = (itemValue: string) => (itemValue === tabStop ? 0 : -1)

  const handleKeyDown = (event: KeyboardEvent<T>) => {
    onKeyDown?.(event)
    if (event.defaultPrevented) return
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return

    const tabs = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>(
        '[role=tab]:not(:disabled)',
      ) ?? [],
    )
    const current = tabs.findIndex((tab) => tab.contains(event.target as Node))
    // Indices map DOM tabs to `enabled`; bail if they disagree.
    if (current === -1 || tabs.length !== enabled.length) return

    let next: number
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = tabs.length - 1
    else if (event.key in KEY_STEP)
      next = (current + KEY_STEP[event.key] + tabs.length) % tabs.length
    else return

    event.preventDefault()
    tabs[next].focus()
    if (enabled[next].value !== value) onChange(enabled[next].value)
  }

  return { getTabIndex, onKeyDown: handleKeyDown }
}
