import {
  useEffect,
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type TransitionEvent,
} from 'react'

import { IconChevronDown } from '../icons'
import cn from 'classnames'

import styles from './Accordion.module.css'

export type AccordionDataTestId = {
  root?: string
  header?: string
  title?: string
  content?: string
}

export type AccordionProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title: ReactNode
  /** Bottom divider; turn it off on the last item of a list. */
  border?: boolean
  defaultExpanded?: boolean
  /** Controlled mode, pair with `onExpandedChange`. */
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  dataTestId?: AccordionDataTestId
}

/** Collapsible section, uncontrolled by default; pass `expanded` + `onExpandedChange` to drive it from your own state. */
export const Accordion = ({
  title,
  border = true,
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  children,
  className,
  dataTestId,
  ...rest
}: AccordionProps) => {
  const [uncontrolledExpanded, setUncontrolledExpanded] =
    useState(defaultExpanded)
  const isExpanded = expanded ?? uncontrolledExpanded
  const contentId = useId()
  const [settled, setSettled] = useState(isExpanded)

  // Clip only while animating so focus rings and shadows of the content stay visible.
  useEffect(() => {
    if (!isExpanded) {
      setSettled(false)
      return
    }
    const timer = setTimeout(() => setSettled(true), 300)
    return () => clearTimeout(timer)
  }, [isExpanded])

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      isExpanded &&
      event.target === event.currentTarget &&
      event.propertyName === 'grid-template-rows'
    )
      setSettled(true)
  }

  const handleToggle = () => {
    const next = !isExpanded
    if (expanded == null) setUncontrolledExpanded(next)
    onExpandedChange?.(next)
  }

  return (
    <div
      className={cn(styles.accordion, className, {
        [styles.borderless]: !border,
      })}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <button
        type='button'
        className={styles.header}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={handleToggle}
        data-testid={dataTestId?.header}
      >
        <span className={styles.title} data-testid={dataTestId?.title}>
          {title}
        </span>
        <span
          className={cn(styles.chevron, isExpanded && styles.chevronOpen)}
          aria-hidden='true'
        >
          <IconChevronDown />
        </span>
      </button>
      <div
        id={contentId}
        className={cn(styles.contentWrapper, {
          [styles.expanded]: isExpanded,
        })}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={cn(styles.content, {
            [styles.settled]: isExpanded && settled,
          })}
        >
          <div
            className={styles.contentInner}
            data-testid={dataTestId?.content}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Accordion.displayName = 'Accordion'
