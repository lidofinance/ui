import { ForwardedRef, forwardRef } from 'react'
import { useExpanded } from './useExpanded'
import { NewLidoComponentProps } from 'packages/utils'
import { ArrowBottom } from '../icons'
import styles from './Accordion.module.css'

export type AccordionProps = NewLidoComponentProps<
  'div',
  {
    defaultExpanded?: boolean
    summary: React.ReactNode
  }
>

export const Accordion = forwardRef(
  (props: AccordionProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const { defaultExpanded, summary, children, ...rest } = props
    const { toggleProps, collapseProps, isExpanded } = useExpanded(props)

    return (
      <div {...rest} ref={ref} className={styles.accordion}>
        <div {...toggleProps} className={styles.summary}>
          <div className={styles.title}>{summary}</div>
          <ArrowBottom
            className={`${styles.arrow} ${
              isExpanded ? styles.arrowExpanded : ''
            }`}
          />
        </div>
        <div {...collapseProps}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    )
  }
)
Accordion.displayName = 'Accordion'
