import type { AnchorHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './SmallCard.module.css'

export type SmallCardProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'title'
> & {
  /** Fixed-height (120px) media slot above the header — an image or illustration. */
  image?: ReactNode
  logo?: ReactNode
  /** Trailing glyph next to the title — an external-link arrow, a badge, etc. */
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  /** Arbitrary content below the description — wraps in a row, e.g. a list of `Tag`s. */
  footer?: ReactNode
}

export const SmallCard = ({
  image,
  logo,
  icon,
  title,
  description,
  footer,
  className,
  ...rest
}: SmallCardProps) => (
  <a className={cn(styles.card, className)} {...rest}>
    <div className={styles.content}>
      {image != null ? <div className={styles.image}>{image}</div> : null}
      <div className={styles.header}>
        {logo != null ? <span className={styles.logo}>{logo}</span> : null}
        <span className={styles.title}>{title}</span>
        {icon != null ? (
          <span className={styles.icon} aria-hidden='true'>
            {icon}
          </span>
        ) : null}
      </div>
      {description != null ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
    {footer != null ? <div className={styles.footer}>{footer}</div> : null}
  </a>
)
