import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip } from '../tooltip'
import styles from './SectionTitle.module.css'

export type SectionTitleDataTestId = {
  root?: string
  title?: string
  subtitle?: string
  action?: string
}

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode
  subtitle?: ReactNode
  /** Renders an info glyph next to the title; hovering it shows this content. */
  tooltip?: ReactNode
  /** Rendered on the right, typically a `Button`. */
  action?: ReactNode
  dataTestId?: SectionTitleDataTestId
}

export const SectionTitle = ({
  title,
  subtitle,
  tooltip,
  action,
  className,
  dataTestId,
  ...rest
}: SectionTitleProps) => (
  <div
    className={cn(styles.root, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <div className={styles.left}>
      <div className={styles.titleRow}>
        <p className={styles.title} data-testid={dataTestId?.title}>
          {title}
        </p>
        {tooltip != null ? (
          <Tooltip content={tooltip}>
            <IconInfo className={styles.icon} aria-hidden='true' />
          </Tooltip>
        ) : null}
      </div>
      {subtitle != null ? (
        <p className={styles.subtitle} data-testid={dataTestId?.subtitle}>
          {subtitle}
        </p>
      ) : null}
    </div>
    {action != null ? (
      <div className={styles.action} data-testid={dataTestId?.action}>
        {action}
      </div>
    ) : null}
  </div>
)
