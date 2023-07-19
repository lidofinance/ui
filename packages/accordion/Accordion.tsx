import { ForwardedRef, forwardRef } from 'react'
import { useExpanded } from './useExpanded'
import { NewLidoComponentProps } from '../utils'
import { ArrowBottom } from '../icons'
import styles from './Accordion.module.css'
import cn from 'classnames'

export type AccordionProps = NewLidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: React.ReactNode
  }
>

export const Accordion = forwardRef(
  (props: AccordionProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const { defaultExpanded, summary, children, className, ...rest } = props
    const { toggleProps, collapseProps, isExpanded } = useExpanded(props)

    return (
      <div className={cn(styles.accordion, className)} {...rest} ref={ref}>
        <div {...toggleProps} className={styles.summary}>
          <div className={styles.title}>{summary}</div>
          <ArrowBottom
            className={cn(styles.arrow, { [styles.arrowExpanded]: isExpanded })}
          />
        </div>
        <div {...collapseProps}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    )
  },
)
Accordion.displayName = 'Accordion'
