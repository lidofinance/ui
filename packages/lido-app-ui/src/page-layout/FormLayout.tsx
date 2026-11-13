import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './FormLayout.module.css'

export type FormLayoutProps = HTMLAttributes<HTMLDivElement> & {
  /** Sticky 328px column with the summary and CTA; stacks under the form when the layout is narrower than 720px. */
  aside?: ReactNode
  /** Props for the `<aside>`, e.g. `aria-label` to name the landmark. */
  asideProps?: HTMLAttributes<HTMLElement>
}

/** Surface split into a form (`children`) and an optional `aside` (omit it and the form fills the width) that sticks 24px below a sticky `Header` (`--lido-app-ui-sticky-top`, overridable on `html`) or from the top without one; switches to stacked by its own width, not the viewport. */
export const FormLayout = forwardRef<HTMLDivElement, FormLayoutProps>(
  ({ aside, asideProps, children, className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.root, className)} {...rest}>
      <div className={styles.layout}>
        <div className={styles.main}>{children}</div>
        {aside ? (
          <aside
            {...asideProps}
            className={cn(styles.aside, asideProps?.className)}
          >
            <div className={styles.asideContent}>{aside}</div>
          </aside>
        ) : null}
      </div>
    </div>
  ),
)

FormLayout.displayName = 'FormLayout'
