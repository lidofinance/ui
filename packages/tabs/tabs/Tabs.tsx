import {
  ComponentPropsWithoutRef,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Tabs.module.css'
import cn from 'classnames'

export type TabBaseItem = {
  key: string
  children?: ReactNode
  dataTestId?: TabsDataTestId
  disabled?: boolean
}

export type TabsDataTestId = {
  tab?: string
  tabTitle?: string
  root?: string
}

export type TabsProps = Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> & {
  defaultKey?: string
  activeKey?: string
  onKeyChange?: (key: string, scrollIntoView: boolean) => unknown
  dataTestId?: TabsDataTestId
  type: 'icon' | 'text'
  size?: 's' | 'm' | 'l'
  items?: TabBaseItem[]
}

export const Tabs = ({
  type = 'text',
  size = 'l',
  defaultKey,
  activeKey: _activeKey,
  items,
  onKeyChange,
  className,
  dataTestId,
  ...rest
}: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string | number | undefined>(
    undefined,
  )
  const activeButtonRef = useRef<HTMLButtonElement | null>(null)
  const selectionRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setActiveKey(defaultKey)
  }, [defaultKey])

  useEffect(() => {
    if (_activeKey != null) {
      setActiveKey(_activeKey)
    } else {
      const firstItem = items?.[0]
      if (firstItem == null) {
        return
      }
      setActiveKey(firstItem.key)
    }
  }, [_activeKey, items])

  useEffect(() => {
    const updateSelectionPosition = () => {
      if (activeButtonRef.current && selectionRef.current) {
        const buttonRect = activeButtonRef.current.getBoundingClientRect()
        const tabsRect =
          activeButtonRef.current.parentElement?.getBoundingClientRect()

        if (tabsRect) {
          const x = buttonRect.left - tabsRect.left
          const y = buttonRect.top - tabsRect.top

          // Use transform for movement to leverage GPU acceleration and CSS transitions
          selectionRef.current.style.width = `${buttonRect.width}px`
          selectionRef.current.style.height = `${buttonRect.height}px`
          selectionRef.current.style.transform = `translate(${x}px, ${y}px)`
        }
      }
    }

    // Initial position update
    updateSelectionPosition()

    // Recalculate on resize
    window.addEventListener('resize', updateSelectionPosition)
    return () => {
      window.removeEventListener('resize', updateSelectionPosition)
    }
  }, [activeKey, type, items, size])

  // Scroll active tab into view only within the nearest scrollable container (cross-browser)
  useEffect(() => {
    const button = activeButtonRef.current
    if (!button) return

    // Find the element that actually scrolls (nearest ancestor with overflow and scrollable content)
    const isScrollable = (el: HTMLElement | null) => {
      if (!el) return false
      const style = window.getComputedStyle(el)
      const ox = style.overflowX
      const oy = style.overflowY
      const canX =
        (ox === 'auto' || ox === 'scroll' || ox === 'overlay') &&
        el.scrollWidth > el.clientWidth
      const canY =
        (oy === 'auto' || oy === 'scroll' || oy === 'overlay') &&
        el.scrollHeight > el.clientHeight
      return canX || canY
    }

    const getScrollableAncestor = (
      start: HTMLElement | null,
    ): HTMLElement | null => {
      let el = start?.parentElement ?? null
      while (el) {
        if (isScrollable(el)) return el
        el = el.parentElement
      }
      return null
    }

    // Prefer internal containerRef if it is scrollable; otherwise use nearest scrollable ancestor
    let container: HTMLElement | null = containerRef.current
    if (!isScrollable(container)) {
      container = getScrollableAncestor(button) || container
    }

    if (!container) return

    const buttonRect = button.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    let deltaX = 0
    let deltaY = 0

    // Horizontal adjustment (keep within container without scrolling the page)
    if (buttonRect.left < containerRect.left) {
      deltaX = buttonRect.left - containerRect.left
    } else if (buttonRect.right > containerRect.right) {
      deltaX = buttonRect.right - containerRect.right
    }

    // Vertical adjustment (in case the container is vertical/has vertical overflow)
    if (buttonRect.top < containerRect.top) {
      deltaY = buttonRect.top - containerRect.top
    } else if (buttonRect.bottom > containerRect.bottom) {
      deltaY = buttonRect.bottom - containerRect.bottom
    }

    if (deltaX !== 0 || deltaY !== 0) {
      const targetLeft = container.scrollLeft + deltaX
      const targetTop = container.scrollTop + deltaY
      try {
        // Prefer smooth scroll when supported on elements
        container.scrollTo({
          left: targetLeft,
          top: targetTop,
          behavior: 'smooth',
        } as ScrollToOptions)
      } catch {
        // Fallback for older browsers
        container.scrollLeft = targetLeft
        container.scrollTop = targetTop
      }
    }
  }, [activeKey])

  const handleClick =
    (key: string, itemDisabled?: boolean) => (event: MouseEvent) => {
      event.preventDefault()
      if (itemDisabled) {
        return
      }
      onKeyChange?.(key, true)
      if (_activeKey != null) {
        return
      }
      setActiveKey(key)
    }

  return (
    <div
      ref={containerRef}
      className={cn(styles.tabs, styles[`size--${size}`], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div ref={selectionRef} className={styles.selection}></div>
      {items?.map((item) => {
        const isActive = String(item.key) === String(activeKey)
        return (
          <button
            ref={isActive ? activeButtonRef : undefined}
            data-id={isActive ? 'active' : undefined}
            className={cn(styles.tab, {
              [styles.active]: isActive,
              [styles.disabled]: item.disabled,
              [styles[`shape--${type}`]]: type,
            })}
            key={item.key}
            onClick={handleClick(item.key, item.disabled)}
            disabled={item.disabled}
            data-testid={item.dataTestId?.tab}
          >
            <span data-testid={item.dataTestId?.tabTitle}>{item.children}</span>
          </button>
        )
      })}
    </div>
  )
}
