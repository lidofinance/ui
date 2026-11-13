import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconArrowRight } from '../icons'
import { InfoTooltip } from '../info-tooltip'
import { TextLink } from '../text-link'
import styles from './StatCard.module.css'

/** With `href` renders an anchor; with only `onClick` renders a button. */
export type StatCardLink =
  | { label: ReactNode; href: string; onClick?: () => void }
  | { label: ReactNode; href?: undefined; onClick: () => void }

export type StatCardSize = 'default' | 'hero'

export type StatCardDataTestId = {
  root?: string
  title?: string
  link?: string
  value?: string
  valueSuffix?: string
  secondary?: string
  tag?: string
  description?: string
  footer?: string
}

export type StatCardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'children'
> & {
  title?: ReactNode
  /** Tooltip content, shown as an info icon after the title. */
  info?: ReactNode
  /** Header action with a trailing arrow. */
  link?: StatCardLink
  value: ReactNode
  /** Unit or total next to the value, e.g. `stETH` or `/150`. */
  valueSuffix?: ReactNode
  /** Small line after the suffix, e.g. a fiat amount. */
  secondary?: ReactNode
  /** Slot after the value, usually a delta `Tag`. */
  tag?: ReactNode
  description?: ReactNode
  /** Slot below a divider, e.g. `StatCardMeta`. */
  footer?: ReactNode
  /** Chart drawn behind the content along the bottom edge; clips the card. */
  sparkline?: ReactNode
  /** `hero` enlarges the value for the top-of-page metric. */
  size?: StatCardSize
  dataTestId?: StatCardDataTestId
}

/** Surface card for a headline metric: title with info, header link, value with suffix, secondary and tag, description, footer and an optional background sparkline. Needs a definite-width parent (it fills it). */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      title,
      info,
      link,
      value,
      valueSuffix,
      secondary,
      tag,
      description,
      footer,
      sparkline,
      size = 'default',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.card, sparkline && styles.hasSparkline, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {sparkline ? <div className={styles.sparkline}>{sparkline}</div> : null}
        <div className={styles.content}>
          {title != null || info != null || link != null ? (
            <div className={styles.header}>
              <span className={styles.titleGroup}>
                {title != null ? (
                  <span
                    className={styles.title}
                    data-testid={dataTestId?.title}
                  >
                    {title}
                  </span>
                ) : null}
                {info ? <InfoTooltip content={info} /> : null}
              </span>
              {link?.href ? (
                <TextLink
                  href={link.href}
                  onClick={link.onClick}
                  icon={<IconArrowRight />}
                  className={styles.link}
                  dataTestId={{ root: dataTestId?.link }}
                >
                  {link.label}
                </TextLink>
              ) : link ? (
                <button
                  type='button'
                  className={cn(styles.link, styles.linkButton)}
                  onClick={link.onClick}
                  data-testid={dataTestId?.link}
                >
                  {link.label}
                  <IconArrowRight
                    className={styles.linkIcon}
                    aria-hidden='true'
                  />
                </button>
              ) : null}
            </div>
          ) : null}
          <div className={cn(styles.valueRow, size === 'hero' && styles.hero)}>
            <span className={styles.value} data-testid={dataTestId?.value}>
              {value}
            </span>
            {valueSuffix != null ? (
              <span
                className={styles.valueSuffix}
                data-testid={dataTestId?.valueSuffix}
              >
                {valueSuffix}
              </span>
            ) : null}
            {secondary != null ? (
              <span
                className={styles.secondary}
                data-testid={dataTestId?.secondary}
              >
                {secondary}
              </span>
            ) : null}
            {tag != null ? (
              <span className={styles.tag} data-testid={dataTestId?.tag}>
                {tag}
              </span>
            ) : null}
          </div>
          {description != null ? (
            <div
              className={styles.description}
              data-testid={dataTestId?.description}
            >
              {description}
            </div>
          ) : null}
          {footer != null ? (
            <div className={styles.footer} data-testid={dataTestId?.footer}>
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    )
  },
)

StatCard.displayName = 'StatCard'

export type StatCardMetaItem = { label: ReactNode; value: ReactNode }

export type StatCardMetaProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  items: StatCardMetaItem[]
  dataTestId?: { root?: string }
}

/** Wrapping `label: value` pairs for the `StatCard` footer. */
export const StatCardMeta = forwardRef<HTMLDivElement, StatCardMetaProps>(
  ({ items, className, dataTestId, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(styles.meta, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {items.map((item, index) => (
        <span className={styles.metaItem} key={index}>
          <span className={styles.metaLabel}>{item.label}:</span>{' '}
          <span className={styles.metaValue}>{item.value}</span>
        </span>
      ))}
    </div>
  ),
)

StatCardMeta.displayName = 'StatCardMeta'
