import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Banner.module.css'

export type BannerProps = ComponentPropsWithoutRef<'div'> & {
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

export const Banner = ({
  icon,
  title,
  description,
  action,
  className,
  ...rest
}: BannerProps) => (
  <div className={cn(styles.banner, className)} {...rest}>
    <div className={styles.content}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </div>
    {action ? <div className={styles.action}>{action}</div> : null}
  </div>
)

Banner.displayName = 'Banner'
