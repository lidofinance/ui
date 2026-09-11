import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip } from '../tooltip'
import styles from './SectionTitle.module.css'

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode
  subtitle?: ReactNode
  /** Renders an info glyph next to the title; hovering it shows this content. */
  tooltip?: ReactNode
  /** Rendered on the right, typically a `Button`. */
  action?: ReactNode
}

export const SectionTitle = ({
  title,
  subtitle,
  tooltip,
  action,
  className,
  ...rest
}: SectionTitleProps) => (
  <div className={cn(styles.root, className)} {...rest}>
    <div className={styles.left}>
      <div className={styles.titleRow}>
        <p className={styles.title}>{title}</p>
        {tooltip != null ? (
          <Tooltip content={tooltip}>
            <IconInfo className={styles.icon} aria-hidden='true' />
          </Tooltip>
        ) : null}
      </div>
      {subtitle != null ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
    {action != null ? <div className={styles.action}>{action}</div> : null}
  </div>
)
