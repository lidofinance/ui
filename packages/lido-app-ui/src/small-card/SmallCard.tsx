import type { AnchorHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconArrowNarrowUpRight } from '../icons'
import styles from './SmallCard.module.css'

export type SmallCardProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'title'
> & {
  logo?: ReactNode
  title: ReactNode
  description?: ReactNode
  tag?: ReactNode
}

export const SmallCard = ({
  logo,
  title,
  description,
  tag,
  className,
  ...rest
}: SmallCardProps) => (
  <a className={cn(styles.card, className)} {...rest}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.identity}>
          {logo != null ? <span className={styles.logo}>{logo}</span> : null}
          <span className={styles.title}>{title}</span>
        </div>
        <IconArrowNarrowUpRight className={styles.arrow} aria-hidden='true' />
      </div>
      {description != null ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
    {tag != null ? <div className={styles.tagSlot}>{tag}</div> : null}
  </a>
)
