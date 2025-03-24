import {
  ComponentPropsWithoutRef,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import styles from './Tabs.module.css'
import cn from 'classnames'

export type TabBaseItem = {
  key: string
  disabled?: boolean
  children?: ReactNode
  dataTestId?: TabsDataTestId
}

export type TabCircleItem = TabBaseItem & {
  rightDecorator?: never
}

export type TabOvalItem = TabBaseItem & {
  rightDecorator?: ReactNode
}

export type TabsDirection = 'vertical' | 'horizontal'

export type TabsSize = 'm' | 'l' | 'xl'

export type TabsShape = 'oval' | 'circle'

export type TabsDataTestId = {
  tab?: string
  tabTitle?: string
  rightDecorator?: string
  root?: string
}

export type TabsBaseProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  size?: TabsSize
  shape?: TabsShape
  direction?: TabsDirection
  defaultKey?: string
  activeKey?: string
  onKeyChange?: (key: string, scrollIntoView: boolean) => unknown
  dataTestId?: TabsDataTestId
}

export type TabsOvalProps = TabsBaseProps & {
  shape?: 'oval'
  items?: TabOvalItem[]
}

export type TabsCircleProps = TabsBaseProps & {
  shape?: 'circle'
  items?: TabCircleItem[]
}

export type TabsProps = TabsOvalProps | TabsCircleProps

export const Tabs = ({
  size = 'm',
  shape = 'oval',
  direction = 'horizontal',
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

  const handleClick = (key: string) => (event: MouseEvent) => {
    event.preventDefault()
    onKeyChange?.(key, true)
    if (_activeKey != null) {
      return
    }
    setActiveKey(key)
  }

  return (
    <div
      className={cn(styles.tabs, className, {
        [styles.vertical]: direction === 'vertical',
      })}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {items?.map((item) => (
        <button
          data-id={item.key === activeKey ? 'active' : undefined}
          className={cn(styles.tab, {
            [styles.active]: item.key === activeKey,
            [styles[`size--${size.toUpperCase()}`]]: size,
            [styles[`shape--${shape}`]]: shape,
          })}
          key={item.key}
          disabled={item.disabled}
          onClick={handleClick(item.key)}
          data-testid={item.dataTestId?.tab}
        >
          <span data-testid={item.dataTestId?.tabTitle}>{item.children}</span>
          {item.rightDecorator != null && (
            <span
              className={styles.rightDecorator}
              data-testid={item.dataTestId?.rightDecorator}
            >
              {item.rightDecorator}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
