import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import cn from 'classnames'
import styles from './Section.module.css'

export type SectionProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title?: ReactNode
  headerDecorator?: ReactNode
}

export const Section = forwardRef(
  (
    { title, headerDecorator, className, children, ...rest }: SectionProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <section className={cn(styles.section, className)} {...rest} ref={ref}>
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {headerDecorator && (
              <div className={styles.headerDecorator}>{headerDecorator}</div>
            )}
          </div>
        )}
        {children}
      </section>
    )
  },
)
Section.displayName = 'Section'
