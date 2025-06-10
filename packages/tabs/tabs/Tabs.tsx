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
          selectionRef.current.style.width = `${buttonRect.width}px`
          selectionRef.current.style.height = `${buttonRect.height}px`
          selectionRef.current.style.left = `${buttonRect.left - tabsRect.left}px`
          selectionRef.current.style.top = `${buttonRect.top - tabsRect.top}px`
        }
      }
    }

    updateSelectionPosition()

    window.addEventListener('resize', updateSelectionPosition)
    return () => {
      window.removeEventListener('resize', updateSelectionPosition)
    }
  }, [activeKey, type, items])

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
      className={cn(styles.tabs, styles[`size--${size}`], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div ref={selectionRef} className={styles.selection}></div>
      {items?.map((item) => (
        <button
          ref={item.key === activeKey ? activeButtonRef : undefined}
          data-id={item.key === activeKey ? 'active' : undefined}
          className={cn(styles.tab, {
            [styles.active]: item.key === activeKey,
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
      ))}
    </div>
  )
}
