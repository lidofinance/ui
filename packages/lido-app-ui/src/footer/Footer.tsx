import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './Footer.module.css'

export type FooterDataTestId = {
  root?: string
  content?: string
  aside?: string
}

export type FooterProps = ComponentPropsWithoutRef<'footer'> & {
  /** Left row of links or text; wraps. */
  children?: ReactNode
  /** Right slot, e.g. version tag. */
  aside?: ReactNode
  dataTestId?: FooterDataTestId
}

/** App footer shell with page background, top border and page gutters. */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ children, aside, className, dataTestId, ...rest }, ref) => (
    <footer
      ref={ref}
      className={cn(styles.footer, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content} data-testid={dataTestId?.content}>
        {children}
      </div>
      {aside != null ? (
        <div className={styles.aside} data-testid={dataTestId?.aside}>
          {aside}
        </div>
      ) : null}
    </footer>
  ),
)

Footer.displayName = 'Footer'
