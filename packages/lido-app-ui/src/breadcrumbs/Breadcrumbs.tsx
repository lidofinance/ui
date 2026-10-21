import { useEffect, useLayoutEffect, useRef } from 'react'
import type { HTMLAttributes, PointerEvent, ReactNode } from 'react'

import cn from 'classnames'

import { IconChevronRight } from '../icons'
import { ActionElement, type ActionElementProps } from '../utils'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbItem = ActionElementProps & {
  label: ReactNode
  children?: never
}

export type BreadcrumbsProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[]
}

const syncFade = (list: HTMLElement) => {
  list.toggleAttribute('data-fade-start', list.scrollLeft > 0)
  list.toggleAttribute(
    'data-fade-end',
    list.scrollLeft < list.scrollWidth - list.clientWidth - 1,
  )
}

const syncTitle = (e: PointerEvent<HTMLElement>) => {
  const el = (e.target as Element).closest('[data-label]')
  if (!el) return
  if (el.scrollWidth > el.clientWidth)
    el.setAttribute('title', el.textContent ?? '')
  else el.removeAttribute('title')
}

export const Breadcrumbs = ({
  items,
  className,
  ...rest
}: BreadcrumbsProps) => {
  const listRef = useRef<HTMLOListElement>(null)

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    list.scrollLeft = list.scrollWidth
    syncFade(list)
  }, [items])

  useEffect(() => {
    const list = listRef.current
    if (!list || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => syncFade(list))
    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label='Breadcrumb'
      className={cn(styles.nav, className)}
      {...rest}
    >
      <ol
        ref={listRef}
        className={styles.list}
        onScroll={(e) => syncFade(e.currentTarget)}
        onPointerOver={syncTitle}
      >
        {items.map(({ label, ...itemProps }, index) => {
          const labelAttrs =
            itemProps.title === undefined ? { 'data-label': '' } : {}
          if (index === items.length - 1) {
            return (
              <li key={index} className={styles.item}>
                <span
                  aria-current='page'
                  className={cn(styles.label, styles.current)}
                  {...labelAttrs}
                >
                  {label}
                </span>
              </li>
            )
          }
          const interactive =
            itemProps.href !== undefined || itemProps.onClick !== undefined
          return (
            <li key={index} className={styles.item}>
              {interactive ? (
                <ActionElement
                  {...itemProps}
                  {...labelAttrs}
                  className={cn(styles.label, styles.link, itemProps.className)}
                >
                  {label}
                </ActionElement>
              ) : (
                <span className={styles.label} {...labelAttrs}>
                  {label}
                </span>
              )}
              <IconChevronRight
                className={styles.separator}
                aria-hidden='true'
              />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
