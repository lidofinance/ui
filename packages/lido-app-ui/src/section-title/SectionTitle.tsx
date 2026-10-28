import type { ElementType, HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { InfoTooltip } from '../info-tooltip'
import styles from './SectionTitle.module.css'

export type SectionTitleDataTestId = {
  root?: string
  title?: string
  subtitle?: string
  action?: string
}

export type SectionTitleSize = 'default' | 'large'

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode
  subtitle?: ReactNode
  /** Renders an info glyph next to the title; hovering it shows this content. */
  tooltip?: ReactNode
  /** Rendered on the right, typically a `Button`. */
  action?: ReactNode
  /** `large` is the page-heading style. */
  size?: SectionTitleSize
  /** Title element; defaults to `h2` for `large`, `p` otherwise. */
  titleAs?: ElementType
  dataTestId?: SectionTitleDataTestId
}

export const SectionTitle = ({
  title,
  subtitle,
  tooltip,
  action,
  size = 'default',
  titleAs,
  className,
  dataTestId,
  ...rest
}: SectionTitleProps) => {
  const Title = titleAs ?? (size === 'large' ? 'h2' : 'p')

  return (
    <div
      className={cn(styles.root, styles[size], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.left}>
        <div className={styles.titleRow}>
          <Title className={styles.title} data-testid={dataTestId?.title}>
            {title}
          </Title>
          {tooltip != null ? <InfoTooltip content={tooltip} /> : null}
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
}
