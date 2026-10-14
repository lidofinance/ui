import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEventHandler,
} from 'react'

import cn from 'classnames'
import { IconChevronRight } from '../icons'

import styles from './Breadcrumbs.module.css'

// Figma spec caps a single crumb at 40 characters before it gets an ellipsis.
const MAX_LABEL_LENGTH = 40

const truncateLabel = (label: string) =>
  label.length > MAX_LABEL_LENGTH
    ? `${label.slice(0, MAX_LABEL_LENGTH)}...`
    : label

export type BreadcrumbItem = {
  label: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  const listRef = useRef<HTMLOListElement>(null)
  // The left fade only makes sense once the trail is scrolled away from its
  // start — nothing is clipped there yet.
  const [fadeLeft, setFadeLeft] = useState(false)

  const updateFade = useCallback(() => {
    const list = listRef.current
    if (!list) return
    setFadeLeft(list.scrollLeft > 0)
  }, [])

  useLayoutEffect(() => {
    // Narrow containers can't fit the whole trail — start scrolled to the
    // end so the current page is the one that's visible.
    const list = listRef.current
    if (!list) return
    list.scrollLeft = list.scrollWidth
    updateFade()

    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(updateFade)
    observer.observe(list)
    return () => observer.disconnect()
  }, [items, updateFade])

  return (
    <nav aria-label='Breadcrumbs' className={cn(styles.root, className)}>
      <ol
        ref={listRef}
        className={cn(styles.list, fadeLeft && styles.fadeLeft)}
        onScroll={updateFade}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const label = truncateLabel(item.label)
          return (
            <li key={index} className={styles.listItem}>
              {isLast ? (
                <span className={styles.item} aria-current='page'>
                  {label}
                </span>
              ) : (
                <a
                  className={styles.item}
                  href={item.href}
                  onClick={item.onClick}
                >
                  {label}
                </a>
              )}
              {!isLast ? (
                <IconChevronRight
                  className={styles.separator}
                  aria-hidden='true'
                />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
