import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { Tag } from '../tag'
import styles from './SegmentCard.module.css'

export type SegmentCardProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'title'
> & {
  active?: boolean
  icon?: ReactNode
  title: ReactNode
  tag?: ReactNode
  description?: ReactNode
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
      {...rest}
    >
      {icon != null ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      <span className={styles.title}>
        <span className={styles.titleText}>{title}</span>
        {tag != null ? (
          <Tag
            variant='neutral'
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
        <span className={styles.description}>{description}</span>
      ) : null}
    </button>
  ),
)

SegmentCard.displayName = 'SegmentCard'
