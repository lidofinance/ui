import { forwardRef, useCallback, useRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import { useEdgeFade, useIsomorphicLayoutEffect } from '../hooks'
import styles from './HeaderNav.module.css'

export type HeaderNavDataTestId = { root?: string }

export type HeaderNavProps = ComponentPropsWithoutRef<'nav'> & {
  dataTestId?: HeaderNavDataTestId
}

const ACTIVE = "[aria-current]:not([aria-current='false'], [aria-current=''])"

const scrollIntoCenter = (nav: HTMLElement, active: HTMLElement | null) => {
  if (!active) return
  const navRect = nav.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  nav.scrollLeft +=
    activeRect.left - navRect.left - (nav.clientWidth - activeRect.width) / 2
}

/** `<nav>` for header links (`aria-label` defaults to `Main`); scrolls with an edge fade when narrow and centers the link with a truthy `aria-current`. */
export const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>(
  (
    {
      'aria-label': ariaLabel = 'Main',
      className,
      onScroll,
      onFocus,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const navRef = useRef<HTMLElement | null>(null)

    const setRef = useCallback(
      (node: HTMLElement | null) => {
        navRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    const { sync, onFocus: revealFocused } = useEdgeFade(navRef)

    useIsomorphicLayoutEffect(() => {
      const nav = navRef.current
      if (!nav) return
      let active = nav.querySelector<HTMLElement>(ACTIVE)
      scrollIntoCenter(nav, active)
      sync()
      if (typeof MutationObserver === 'undefined') return
      const mutations = new MutationObserver(() => {
        const next = nav.querySelector<HTMLElement>(ACTIVE)
        if (next !== active) {
          active = next
          scrollIntoCenter(nav, next)
        }
        sync()
      })
      mutations.observe(nav, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-current'],
      })
      return () => mutations.disconnect()
    }, [sync])

    return (
      <nav
        ref={setRef}
        aria-label={ariaLabel}
        className={cn(styles.nav, className)}
        onScroll={(e) => {
          sync()
          onScroll?.(e)
        }}
        onFocus={(e) => {
          revealFocused(e)
          onFocus?.(e)
        }}
        data-testid={dataTestId?.root}
        {...rest}
      />
    )
  },
)

HeaderNav.displayName = 'HeaderNav'
