import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Footer.module.css'

export type FooterProps = ComponentPropsWithoutRef<'footer'> & {
  /** Right slot, e.g. version tag. */
  aside?: ReactNode
}

export const Footer = ({
  children,
  aside,
  className,
  ...rest
}: FooterProps) => (
  <footer className={cn(styles.footer, className)} {...rest}>
    <div className={styles.content}>{children}</div>
    {aside != null ? <div className={styles.aside}>{aside}</div> : null}
  </footer>
)
