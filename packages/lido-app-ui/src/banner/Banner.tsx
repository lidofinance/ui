import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Banner.module.css'

export type BannerDataTestId = {
  root?: string
  icon?: string
  title?: string
  description?: string
  action?: string
}

export type BannerProps = ComponentPropsWithoutRef<'div'> & {
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  dataTestId?: BannerDataTestId
}

/** Compact card row: icon, title and description, with an optional `action` slot on the right (usually a `Button`). */
export const Banner = ({
  icon,
  title,
  description,
  action,
  className,
  dataTestId,
  ...rest
}: BannerProps) => (
  <div
    className={cn(styles.banner, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <div className={styles.content}>
      {icon ? (
        <span className={styles.icon} data-testid={dataTestId?.icon}>
          {icon}
        </span>
      ) : null}
      <div className={styles.text}>
        <p className={styles.title} data-testid={dataTestId?.title}>
          {title}
        </p>
        {description ? (
          <p
            className={styles.description}
            data-testid={dataTestId?.description}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
    {action ? (
      <div className={styles.action} data-testid={dataTestId?.action}>
        {action}
      </div>
    ) : null}
  </div>
)

Banner.displayName = 'Banner'
