import {
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import { IconChevronDown, IconChevronUp } from '../icons'
import cn from 'classnames'

import styles from './Accordion.module.css'

export type AccordionProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title: ReactNode
  border?: boolean
  defaultExpanded?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
}

export const Accordion = ({
  title,
  border = true,
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  children,
  className,
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
      {...rest}
    >
      <button
        type='button'
        className={styles.header}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className={styles.title}>{title}</span>
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
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

Accordion.displayName = 'Accordion'
