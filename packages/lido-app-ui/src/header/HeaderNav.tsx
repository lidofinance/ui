import { forwardRef, useCallback, useEffect, useRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import styles from './HeaderNav.module.css'

export type HeaderNavProps = ComponentPropsWithoutRef<'nav'>

const syncFade = (nav: HTMLElement) => {
  nav.toggleAttribute('data-fade-start', nav.scrollLeft > 0)
  nav.toggleAttribute(
    'data-fade-end',
    nav.scrollLeft < nav.scrollWidth - nav.clientWidth - 1,
  )
}

const scrollActiveIntoView = (nav: HTMLElement) => {
  const active = nav.querySelector<HTMLElement>("[aria-current='page']")
  if (!active) return
  const navRect = nav.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  nav.scrollLeft +=
    activeRect.left - navRect.left - (nav.clientWidth - activeRect.width) / 2
}

export const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>(
  ({ 'aria-label': ariaLabel = 'Main', className, onScroll, ...rest }, ref) => {
    const navRef = useRef<HTMLElement | null>(null)

    const setRef = useCallback(
      (node: HTMLElement | null) => {
        navRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    useEffect(() => {
      const nav = navRef.current
      if (!nav) return
      const sync = () => {
        scrollActiveIntoView(nav)
        syncFade(nav)
      }
      sync()
      const mutations =
        typeof MutationObserver === 'undefined'
          ? null
          : new MutationObserver(sync)
      mutations?.observe(nav, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-current'],
      })
      const resizes =
        typeof ResizeObserver === 'undefined'
          ? null
          : new ResizeObserver(() => syncFade(nav))
      resizes?.observe(nav)
      return () => {
        mutations?.disconnect()
        resizes?.disconnect()
      }
    }, [])

    return (
      <nav
        ref={setRef}
        aria-label={ariaLabel}
        className={cn(styles.nav, className)}
        onScroll={(e) => {
          syncFade(e.currentTarget)
          onScroll?.(e)
        }}
        {...rest}
      />
    )
  },
)

HeaderNav.displayName = 'HeaderNav'
