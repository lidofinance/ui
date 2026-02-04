import { ForwardedRef, forwardRef, useCallback, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../hooks'
import { TabsProps } from './types.js'
import { TabsIndicatorStyle, TabsListStyle } from './TabsStyles.js'

export const Tabs = forwardRef(
  ({ children, ...rest }: TabsProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const listRef = useRef<HTMLDivElement | null>(null)
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        listRef.current = node
        if (typeof ref === 'function') {
          ref(node)
          return
        }
        if (ref) {
          ;(ref as { current: HTMLDivElement | null }).current = node
        }
      },
      [ref],
    )

    useIsomorphicLayoutEffect(() => {
      if (typeof window === 'undefined') return undefined
      const listNode = listRef.current
      if (!listNode) return undefined
      let rafId = 0

      const updateIndicator = () => {
        const activeTab = listNode.querySelector<HTMLElement>(
          '[role="tab"][aria-selected="true"]',
        )
        if (!activeTab) {
          listNode.style.setProperty('--tabs-indicator-left', '0px')
          listNode.style.setProperty('--tabs-indicator-width', '0px')
          return
        }

        const listRect = listNode.getBoundingClientRect()
        const tabRect = activeTab.getBoundingClientRect()
        const left = tabRect.left - listRect.left + listNode.scrollLeft

        listNode.style.setProperty('--tabs-indicator-left', `${left}px`)
        listNode.style.setProperty(
          '--tabs-indicator-width',
          `${tabRect.width}px`,
        )
      }

      const scheduleUpdate = () => {
        if (rafId) {
          window.cancelAnimationFrame(rafId)
        }
        rafId = window.requestAnimationFrame(updateIndicator)
      }

      updateIndicator()
      scheduleUpdate()
      listNode.addEventListener('scroll', scheduleUpdate, { passive: true })
      window.addEventListener('resize', scheduleUpdate)

      const mutationObserver =
        typeof MutationObserver === 'undefined'
          ? null
          : new MutationObserver(scheduleUpdate)

      mutationObserver?.observe(listNode, {
        attributes: true,
        subtree: true,
        attributeFilter: ['aria-selected'],
      })

      const resizeObserver =
        typeof ResizeObserver === 'undefined'
          ? null
          : new ResizeObserver(scheduleUpdate)

      resizeObserver?.observe(listNode)
      listNode
        .querySelectorAll<HTMLElement>('[role="tab"]')
        .forEach((tab) => resizeObserver?.observe(tab))

      if (typeof document !== 'undefined' && 'fonts' in document) {
        // Ensure metrics are correct after fonts are loaded.
        void (document as Document & { fonts: FontFaceSet }).fonts.ready.then(
          scheduleUpdate,
        )
      }

      return () => {
        if (rafId) {
          window.cancelAnimationFrame(rafId)
        }
        listNode.removeEventListener('scroll', scheduleUpdate)
        window.removeEventListener('resize', scheduleUpdate)
        mutationObserver?.disconnect()
        resizeObserver?.disconnect()
      }
    }, [children])

    return (
      <TabsListStyle role='tablist' ref={setRefs} {...rest}>
        {children}
        <TabsIndicatorStyle aria-hidden />
      </TabsListStyle>
    )
  },
)
Tabs.displayName = 'Tabs'
