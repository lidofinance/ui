import { forwardRef, useRef } from 'react'
import type { HTMLAttributes, PointerEvent, ReactNode } from 'react'

import cn from 'classnames'

import { useEdgeFade, useIsomorphicLayoutEffect } from '../hooks'
import { IconChevronRight } from '../icons'
import { ActionElement, type ActionElementProps } from '../utils'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbItemDataTestId = { root?: string }

export type BreadcrumbItem = ActionElementProps & {
  label: ReactNode
  children?: never
  /** Test id of the item's label element, for link, plain and current items alike. */
  dataTestId?: BreadcrumbItemDataTestId
}

export type BreadcrumbsDataTestId = { root?: string; list?: string }

export type BreadcrumbsProps = HTMLAttributes<HTMLElement> & {
  /** `href` renders a link, only `onClick` a button, anything else (and `disabled`) plain text; the last item is the current page. */
  items: BreadcrumbItem[]
  dataTestId?: BreadcrumbsDataTestId
}

const ANCHOR_ONLY = [
  'href',
  'onClick',
  'disabled',
  'external',
  'linkProps',
  'type',
  'target',
  'rel',
  'download',
] as const

const spanAttrs = (props: Omit<BreadcrumbItem, 'label'>) => {
  const attrs: Record<string, unknown> = { ...props }
  for (const key of ANCHOR_ONLY) delete attrs[key]
  return attrs as HTMLAttributes<HTMLSpanElement>
}

const syncTitle = (e: PointerEvent<HTMLElement>) => {
  const el = (e.target as Element).closest('[data-label]')
  if (!el) return
  if (el.scrollWidth > el.clientWidth)
    el.setAttribute('title', el.textContent ?? '')
  else el.removeAttribute('title')
}

/** Trail of ancestors ending in the current page (`aria-current="page"`); scrolls horizontally with an edge fade when it overflows. */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, className, dataTestId, ...rest }, ref) => {
    const listRef = useRef<HTMLOListElement>(null)

    const { sync, onFocus } = useEdgeFade(listRef)
    const trailRef = useRef<string>()

    useIsomorphicLayoutEffect(() => {
      const list = listRef.current
      if (!list) return
      const trail = Array.from(list.children, (li) => li.textContent).join(
        '\u0000',
      )
      if (trail !== trailRef.current) {
        trailRef.current = trail
        list.scrollLeft = list.scrollWidth
      }
      sync()
    })

    return (
      <nav
        ref={ref}
        aria-label='Breadcrumb'
        className={cn(styles.nav, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <ol
          ref={listRef}
          className={styles.list}
          data-testid={dataTestId?.list}
          onScroll={sync}
          onFocus={onFocus}
          onPointerOver={syncTitle}
        >
          {items.map(
            ({ label, dataTestId: itemTestId, ...itemProps }, index) => {
              const current = index === items.length - 1
              const labelAttrs =
                itemProps.title === undefined ? { 'data-label': '' } : {}
              const interactive =
                !current &&
                (itemProps.href !== undefined ||
                  itemProps.onClick !== undefined) &&
                !itemProps.disabled
              return (
                <li key={index} className={styles.item}>
                  {interactive ? (
                    <ActionElement
                      data-testid={itemTestId?.root}
                      {...itemProps}
                      {...labelAttrs}
                      className={cn(
                        styles.label,
                        styles.link,
                        itemProps.className,
                      )}
                    >
                      {label}
                    </ActionElement>
                  ) : (
                    <span
                      data-testid={itemTestId?.root}
                      {...spanAttrs(itemProps)}
                      {...labelAttrs}
                      {...(current && { 'aria-current': 'page' as const })}
                      className={cn(
                        styles.label,
                        current && styles.current,
                        itemProps.className,
                      )}
                    >
                      {label}
                    </span>
                  )}
                  {!current && (
                    <IconChevronRight
                      className={styles.separator}
                      aria-hidden='true'
                    />
                  )}
                </li>
              )
            },
          )}
        </ol>
      </nav>
    )
  },
)

Breadcrumbs.displayName = 'Breadcrumbs'
