import {
  forwardRef,
  useId,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconArrowRight, IconChevronDown, IconChevronUp } from '../icons'
import type { AnchorProps } from '../link-provider/Anchor'
import { ActionElement, type ActionElementProps } from '../utils'
import styles from './PositionCard.module.css'

export type PositionCardVariant =
  | 'disconnected'
  | 'no-position'
  | 'has-position'

export type PositionCardDataTestId = {
  root?: string
  action?: string
  label?: string
  value?: string
  secondaryValue?: string
  aside?: string
}

type PositionCardOwnProps = {
  /** `disconnected`: one-line pitch (`value` + muted `secondaryValue`); `no-position`: `value` is muted; `has-position`: the balance. */
  variant?: PositionCardVariant
  /** Small caption above the value, e.g. "Staked position". */
  label?: ReactNode
  /** Main line: the balance, "No position", or the pitch when disconnected. */
  value: ReactNode
  /** Muted text after the value: the fiat balance, or the pitch's tail when disconnected. */
  secondaryValue?: ReactNode
  /** Right-aligned text, e.g. the APR. */
  aside?: ReactNode
  /** Expandable card: shows a chevron next to `label` (up when true), sets `aria-expanded` and reveals `footer` only while true; leave undefined for a card that doesn't expand. */
  expanded?: boolean
  /** Rows under the main area, typically `PositionCardStatus` pending claims; hidden while `expanded` is false. */
  footer?: ReactNode
  /** Root element attributes; the rest of the props go to the clickable main area. */
  rootProps?: HTMLAttributes<HTMLDivElement>
  dataTestId?: PositionCardDataTestId
}

export type PositionCardProps = PositionCardOwnProps &
  (
    | (Omit<AnchorProps, 'href'> & { href: string })
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  )

/** Widget balance card: a pitch while disconnected, then the staked position with an aside (APR). With `expanded` the card toggles its `footer` of `PositionCardStatus` pending claims. The main area is a link with `href`, a button with `onClick`, otherwise static. */
export const PositionCard = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  PositionCardProps
>(
  (
    {
      variant = 'has-position',
      label,
      value,
      secondaryValue,
      aside,
      expanded,
      footer,
      rootProps,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const isDisconnected = variant === 'disconnected'
    const interactive =
      rest.href !== undefined || 'onClick' in rest || expanded !== undefined
    const Chevron = expanded ? IconChevronUp : IconChevronDown
    const footerId = useId()
    const showFooter = footer != null && expanded !== false

    const content = (
      <>
        <span className={styles.details}>
          {label != null ? (
            <span className={styles.labelRow}>
              <span className={styles.label} data-testid={dataTestId?.label}>
                {label}
              </span>
              {expanded !== undefined ? (
                <Chevron className={styles.chevron} aria-hidden='true' />
              ) : null}
            </span>
          ) : null}
          <span className={styles.valueRow}>
            <span className={styles.value} data-testid={dataTestId?.value}>
              {value}
            </span>
            {secondaryValue != null ? (
              <span
                className={styles.secondaryValue}
                data-testid={dataTestId?.secondaryValue}
              >
                {secondaryValue}
              </span>
            ) : null}
          </span>
        </span>
        {aside != null ? (
          <span className={styles.aside} data-testid={dataTestId?.aside}>
            {aside}
          </span>
        ) : null}
      </>
    )

    const mainClassName = cn(
      styles.main,
      interactive && styles.interactive,
      className,
    )

    return (
      <div
        {...rootProps}
        className={cn(
          styles.root,
          {
            [styles.disconnected]: isDisconnected,
            [styles.noPosition]: variant === 'no-position',
          },
          rootProps?.className,
        )}
        data-testid={dataTestId?.root}
      >
        {interactive ? (
          <ActionElement
            ref={ref}
            className={mainClassName}
            aria-expanded={expanded}
            aria-controls={
              expanded !== undefined && showFooter ? footerId : undefined
            }
            data-testid={dataTestId?.action}
            {...(rest as ActionElementProps)}
          >
            {content}
          </ActionElement>
        ) : (
          <div
            className={mainClassName}
            data-testid={dataTestId?.action}
            {...(rest as HTMLAttributes<HTMLDivElement>)}
          >
            {content}
          </div>
        )}
        {showFooter ? (
          <div id={footerId} className={styles.footer}>
            {footer}
          </div>
        ) : null}
      </div>
    )
  },
)

PositionCard.displayName = 'PositionCard'

export type PositionCardStatusDataTestId = {
  root?: string
  action?: string
}

type PositionCardStatusOwnProps = {
  /** Status text, e.g. "14.2142 ETH withdrawal ready." */
  children: ReactNode
  /** Accent call to action after the text, e.g. "Claim". */
  action?: ReactNode
  dataTestId?: PositionCardStatusDataTestId
}

export type PositionCardStatusProps = PositionCardStatusOwnProps &
  (
    | (Omit<AnchorProps, 'children'> & { href: string })
    | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
        href?: undefined
      })
  )

/** Clickable row for `PositionCard`'s `footer`: divider, status text, accent action and a trailing arrow. A link with `href`, otherwise a button. */
export const PositionCardStatus = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  PositionCardStatusProps
>(({ children, action, className, dataTestId, ...rest }, ref) => (
  <div className={styles.status}>
    <ActionElement
      ref={ref}
      className={cn(styles.statusAction, className)}
      data-testid={dataTestId?.root}
      {...(rest as ActionElementProps)}
    >
      <span className={styles.statusText}>
        <span className={styles.statusMessage}>{children}</span>
        {action != null ? (
          <span className={styles.statusCta} data-testid={dataTestId?.action}>
            {action}
          </span>
        ) : null}
      </span>
      <IconArrowRight className={styles.statusArrow} aria-hidden='true' />
    </ActionElement>
  </div>
))

PositionCardStatus.displayName = 'PositionCardStatus'
