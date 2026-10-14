import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { Tag } from '../tag'
import styles from './SegmentCard.module.css'

export type SegmentCardDataTestId = {
  root?: string
  icon?: string
  title?: string
  tag?: string
  description?: string
}

export type SegmentCardProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'title'
> & {
  active?: boolean
  icon?: ReactNode
  title: ReactNode
  tag?: ReactNode
  description?: ReactNode
  dataTestId?: SegmentCardDataTestId
}

export const SegmentCard = forwardRef<HTMLButtonElement, SegmentCardProps>(
  (
    {
      active = false,
      disabled = false,
      icon,
      title,
      tag,
      description,
      className,
      type = 'button',
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      disabled={disabled}
      className={cn(styles.card, active && styles.active, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <span className={styles.content}>
        {icon != null ? (
          <span
            className={styles.icon}
            aria-hidden='true'
            data-testid={dataTestId?.icon}
          >
            {icon}
          </span>
        ) : null}
        <span className={styles.title} data-testid={dataTestId?.title}>
          <span className={styles.titleText}>{title}</span>
          {tag != null ? (
            <Tag
              variant='neutral'
              dataTestId={{ root: dataTestId?.tag }}
              style={
                disabled
                  ? ({
                      '--local-text': 'var(--lido-app-ui-color-text-disabled)',
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {tag}
            </Tag>
          ) : null}
        </span>
        {description != null ? (
          <span
            className={styles.description}
            data-testid={dataTestId?.description}
          >
            {description}
          </span>
        ) : null}
      </span>
    </button>
  ),
)

SegmentCard.displayName = 'SegmentCard'
