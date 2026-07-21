import {
  ReactNode,
  ComponentPropsWithoutRef,
  useEffect,
  forwardRef,
  KeyboardEvent,
} from 'react'
import styles from './Accordion.module.css'
import cn from 'classnames'
import { useCollapse } from 'react-collapsed'
import { DownChevron } from '../icons'

export type AccordionDataTestId = {
  root?: string
  header?: string
  content?: string
  icon?: string
}

export type AccordionProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title?: ReactNode
  defaultExpanded?: boolean
  expanded?: boolean
  dataTestId?: AccordionDataTestId
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      title,
      expanded: _expanded,
      defaultExpanded,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
      useCollapse({
        defaultExpanded,
      })

    useEffect(() => {
      if (_expanded != null) {
        setExpanded(_expanded)
      }
    }, [_expanded, setExpanded])

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setExpanded(!isExpanded)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(className, styles.accordion)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div
          className={cn(styles.header, { [styles.opened]: isExpanded })}
          data-testid={dataTestId?.header}
          role='button'
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={handleKeyDown}
          {...getToggleProps()}
        >
          <span className={styles.title}>{title}</span>

          <DownChevron
            className={cn(styles.chevronIcon, {
              [styles.opened]: isExpanded,
            })}
            aria-hidden='true'
            data-testid={dataTestId?.icon}
          />
        </div>

        <div
          className={cn(styles.content, {
            [styles.opened]: isExpanded,
          })}
          data-testid={dataTestId?.content}
          {...getCollapseProps()}
        >
          {children}
        </div>
      </div>
    )
  },
)

Accordion.displayName = 'Accordion'
