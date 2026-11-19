import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { useControllableState } from '../hooks'
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
  defaultExpanded,
  expanded,
  onExpandedChange,
  children,
  className,
  dataTestId,
  ...rest
}: AccordionProps) => {
  const [expandedState, setExpanded] = useControllableState({
    value: expanded,
    defaultValue: defaultExpanded,
    onChange: onExpandedChange,
    name: 'Accordion',
    prop: 'expanded',
  })
  const isExpanded = expandedState ?? false
  const contentId = useId()

  const handleToggle = () => setExpanded(!isExpanded)

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
          <IconChevronDown width={24} height={24} />
        </span>
      </button>
      <div id={contentId} className={styles.contentWrapper}>
        <div>
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
