import {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  MouseEventHandler,
  useEffect,
} from 'react'
import styles from './Dropdown.module.css'
import cn from 'classnames'
import { useCollapse } from 'react-collapsed'
import { SelectSize } from '../Select'
import { IconConfig, renderIcon } from '../utils'
import { useOutsideClick } from '../../hooks'

export interface DropdownItem {
  key: string | number
  value?: string | number
  label: string
  icon?: IconConfig
  onClick?: MouseEventHandler<HTMLDivElement>
}

export type DropdownProps = Omit<ComponentPropsWithoutRef<'div'>, 'size'> & {
  size?: SelectSize
  open?: boolean
  items?: DropdownItem[]
  onOpenChange?: (open: boolean) => unknown
  disabled?: boolean
}

export const Dropdown = ({
  size = 'l',
  open: _open,
  items = [],
  className,
  children,
  onOpenChange,
  disabled,
}: DropdownProps) => {
  const { getCollapseProps, isExpanded, setExpanded } = useCollapse({
    isExpanded: _open,
    // Different animation duration for opening and closing
    duration: 150,
  })

  const { ref: outsideClickRef } = useOutsideClick(() => {
    if (isExpanded) {
      setExpanded(false)
    }
  })

  useEffect(() => {
    onOpenChange?.(isExpanded)
  }, [isExpanded, onOpenChange])

  const handleToggle = () => {
    if (isExpanded) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <div
      ref={outsideClickRef}
      className={cn(className, styles.dropdown)}
      onClick={handleToggle}
      onKeyDown={handleKey}
      role='button'
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-haspopup='true'
    >
      {children}
      <div
        className={cn(styles.overlay, styles[`overlay--size-${size}`], {
          [styles.isOpen]: isExpanded,
          [styles.isWithScroll]: items.length > 5,
          [styles.isDisabled]: disabled,
        })}
        role='menu'
      >
        <div {...getCollapseProps()} className={styles.overlayInner}>
          {items.map((item) => (
            <div
              key={item.value ?? item.label}
              className={cn(styles.item, styles[`item--size-${size}`], {
                [styles.withIcon]: !!item.icon,
              })}
              onClick={item.onClick as MouseEventHandler<HTMLDivElement>}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  // Cast keyboard event to mouse event for onClick handler
                  item.onClick?.(
                    e as unknown as React.MouseEvent<HTMLDivElement>,
                  )
                }
              }}
              role='menuitem'
              tabIndex={0}
            >
              {item.icon && renderIcon(item.icon, size, styles)}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
