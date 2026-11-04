import {
  forwardRef,
  useEffect,
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type TransitionEvent,
} from 'react'

import cn from 'classnames'

import { IconPlus } from '../icons'
import styles from './Disclosure.module.css'

const EXIT_FALLBACK_MS = 300

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Keeps content mounted through the exit transition; `shown` lags `isOpen` by two frames so the enter transition runs. */
const useCollapse = (isOpen: boolean) => {
  const [mounted, setMounted] = useState(isOpen)
  const [shown, setShown] = useState(isOpen)
  const [settled, setSettled] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      let inner = 0
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(true))
      })
      return () => {
        cancelAnimationFrame(outer)
        cancelAnimationFrame(inner)
      }
    }
    setShown(false)
    if (prefersReducedMotion()) {
      setMounted(false)
      return
    }
    const timer = setTimeout(() => setMounted(false), EXIT_FALLBACK_MS)
    return () => clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) setMounted(true)
  }, [isOpen])

  // Clip only while animating so focus rings and shadows of the content stay visible.
  const expanded = isOpen && shown
  useEffect(() => {
    if (!expanded) {
      setSettled(false)
      return
    }
    const timer = setTimeout(() => setSettled(true), EXIT_FALLBACK_MS)
    return () => clearTimeout(timer)
  }, [expanded])

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== 'grid-template-rows'
    )
      return
    if (isOpen) setSettled(true)
    else setMounted(false)
  }

  return {
    rendered: isOpen || mounted,
    expanded,
    settled: isOpen && settled,
    handleTransitionEnd,
  }
}

export type DisclosureDataTestId = {
  root?: string
  header?: string
  content?: string
}

export type DisclosureProps = ComponentPropsWithoutRef<'div'> & {
  label: ReactNode
  defaultOpen?: boolean
  /** Makes the component controlled; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  dataTestId?: DisclosureDataTestId
}

/** Text toggle with a rotating plus icon that reveals optional form sections. */
export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      label,
      defaultOpen = false,
      open,
      onOpenChange,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
    const isOpen = open ?? uncontrolledOpen
    const contentId = useId()
    const { rendered, expanded, settled, handleTransitionEnd } =
      useCollapse(isOpen)

    const handleToggle = () => {
      const next = !isOpen
      if (open === undefined) setUncontrolledOpen(next)
      onOpenChange?.(next)
    }

    return (
      <div
        ref={ref}
        className={cn(styles.disclosure, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <button
          type='button'
          className={styles.header}
          aria-expanded={isOpen}
          aria-controls={isOpen ? contentId : undefined}
          data-testid={dataTestId?.header}
          onClick={handleToggle}
        >
          <span>{label}</span>
          <IconPlus
            className={cn(styles.icon, isOpen && styles.iconOpen)}
            aria-hidden='true'
          />
        </button>
        {rendered ? (
          <div
            className={cn(styles.contentWrapper, expanded && styles.expanded)}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className={cn(styles.clip, settled && styles.settled)}>
              <div
                id={contentId}
                className={styles.content}
                data-testid={dataTestId?.content}
              >
                {children}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  },
)

Disclosure.displayName = 'Disclosure'
