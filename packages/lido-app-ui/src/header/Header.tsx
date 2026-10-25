import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './Header.module.css'

export type HeaderDataTestId = {
  root?: string
  content?: string
  actions?: string
}

export type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  /** Right control group. */
  actions?: ReactNode
  /** Sticks to the top of the viewport while scrolling. */
  sticky?: boolean
  dataTestId?: HeaderDataTestId
}

/** App top bar shell (64px, bottom border, page-gutter padding): `children` fill the left, `actions` sit right. Only the last child shrinks, so put Breadcrumbs or HeaderNav last. `sticky` needs no `overflow: hidden/auto` ancestor and sets `scroll-padding-top` on `html` to `--lido-app-ui-header-height`; your own `html` rule wins. */
export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, actions, sticky, className, dataTestId, ...rest }, ref) => (
    <header
      ref={ref}
      className={cn(styles.header, sticky && styles.sticky, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content} data-testid={dataTestId?.content}>
        {children}
      </div>
      {actions != null ? (
        <div className={styles.actions} data-testid={dataTestId?.actions}>
          {actions}
        </div>
      ) : null}
    </header>
  ),
)

Header.displayName = 'Header'
