import {
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import { IconChevronDown, IconChevronUp } from '../icons'
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
        <span className={styles.chevron} aria-hidden='true'>
          {isExpanded ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </button>
      <div
        id={contentId}
        className={cn(styles.contentWrapper, {
          [styles.expanded]: isExpanded,
        })}
      >
        <div className={styles.content}>
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
