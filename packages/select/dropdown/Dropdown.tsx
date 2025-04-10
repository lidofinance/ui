import {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import styles from './Dropdown.module.css'
import cn from 'classnames'
import { useCollapse } from 'react-collapsed'
import { SelectSize } from '../Select'

export type DropdownItem = {
  key: string | number
  value?: string | number
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export type DropdownProps = Omit<ComponentPropsWithoutRef<'select'>, 'size'> & {
  size?: SelectSize
  open?: boolean
  items?: DropdownItem[]
  onOpenChange?: (open: boolean) => unknown
}

export const Dropdown = ({
  size = 'l',
  open: _open,
  items,
  className,
  children,
  onOpenChange,
}: DropdownProps) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getCollapseProps, isExpanded, setExpanded } = useCollapse({
    isExpanded: _open,
  })
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    onOpenChange?.(isExpanded)
  }, [isExpanded, onOpenChange])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(event.target as Node) &&
        overlayRef.current != null &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setExpanded])

  const handleClick = useCallback(() => {
    setExpanded((state) => !state)
  }, [setExpanded])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setExpanded((state) => !state)
      }
    },
    [setExpanded],
  )

  const handleItemKeyDown = useCallback(
    (
      event: KeyboardEvent<HTMLDivElement>,
      onClick?: MouseEventHandler<HTMLDivElement>,
    ) => {
      if ((event.key === 'Enter' || event.key === ' ') && onClick) {
        event.preventDefault()
        onClick(event as unknown as React.MouseEvent<HTMLDivElement>)
      }
    },
    [],
  )

  return (
    <div
      ref={dropdownRef}
      className={cn(className, styles.dropdown)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-haspopup='true'
    >
      {children}
      <div
        {...getCollapseProps()}
        ref={overlayRef}
        className={cn(styles.overlay)}
        role='menu'
      >
        {items?.map((item) => (
          <div
            className={cn(styles.item, {
              [styles.sizeL]: size === 'l',
              [styles.sizeXL]: size === 'xl',
            })}
            key={item.key}
            onClick={item.onClick}
            onKeyDown={(e) => handleItemKeyDown(e, item.onClick)}
            role='menuitem'
            tabIndex={0}
          >
            {item.children}
          </div>
        ))}
      </div>
    </div>
  )
}
