import {
  forwardRef,
  useId,
  type AnchorHTMLAttributes,
  type LiHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconChevronRight } from '../icons'
import type { AnchorProps } from '../link-provider/Anchor'
import { ActionElement } from '../utils'
import rowStyles from './ActionRow.module.css'

export type ActionRowDataTestId = {
  root?: string
  leading?: string
  content?: string
  end?: string
  trailing?: string
  chevron?: string
  action?: string
}

export type ActionRowProps = Omit<LiHTMLAttributes<HTMLLIElement>, 'onClick'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> &
  Pick<AnchorProps, 'linkProps'> & {
    /** Badge, identicon or logo before the content; inside the hit area, so nothing interactive. */
    leading?: ReactNode
    /** Main area, typically a title with a description; inside the hit area, so nothing interactive. */
    children?: ReactNode
    /** Right-aligned value that shrinks and truncates first; inside the hit area, so nothing interactive. */
    end?: ReactNode
    /** Outside the hit area: the only slot for buttons and other interactive controls. */
    trailing?: ReactNode
    /** Renders the whole row as a link (`<a>` via LinkProvider); absolute http(s) URLs open in a new tab. */
    href?: string
    /** Renders the row as a `<button>`; with `href` it is the link's click handler. */
    onClick?: MouseEventHandler<HTMLElement>
    /** Trailing chevron; defaults to on when the row is a link or button. */
    chevron?: boolean
    dataTestId?: ActionRowDataTestId
  }

/** Slot shell of a `ActionList`: leading, children, end and trailing; a link or button over the row when `href` or `onClick` is set. */
export const ActionRow = forwardRef<HTMLLIElement, ActionRowProps>(
  (
    {
      leading,
      children,
      end,
      trailing,
      href,
      onClick,
      target,
      rel,
      linkProps,
      chevron,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const id = useId()
    const contentId = `${id}-content`
    const endId = `${id}-end`
    const actionable = href !== undefined || onClick !== undefined
    const showChevron = chevron ?? actionable
    const hasContent = children != null
    const hasEnd = end != null
    const labelledBy =
      [hasContent && contentId, hasEnd && endId].filter(Boolean).join(' ') ||
      undefined

    return (
      <li
        ref={ref}
        className={cn(
          rowStyles.row,
          leading != null && rowStyles.withLeading,
          actionable && rowStyles.actionable,
          className,
        )}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {leading != null ? (
          <div className={rowStyles.leading} data-testid={dataTestId?.leading}>
            {leading}
          </div>
        ) : null}
        {hasContent ? (
          <div
            id={contentId}
            className={rowStyles.content}
            data-testid={dataTestId?.content}
          >
            {children}
          </div>
        ) : null}
        {hasEnd ? (
          <div
            id={endId}
            className={rowStyles.end}
            data-testid={dataTestId?.end}
          >
            {end}
          </div>
        ) : null}
        {actionable ? (
          <ActionElement
            href={href}
            onClick={onClick}
            className={rowStyles.action}
            aria-labelledby={labelledBy}
            data-testid={dataTestId?.action}
            {...(href !== undefined ? { target, rel, linkProps } : {})}
          />
        ) : null}
        {trailing != null ? (
          <div
            className={rowStyles.trailing}
            data-testid={dataTestId?.trailing}
          >
            {trailing}
          </div>
        ) : null}
        {showChevron ? (
          <IconChevronRight
            className={rowStyles.chevron}
            aria-hidden='true'
            data-testid={dataTestId?.chevron}
          />
        ) : null}
      </li>
    )
  },
)

ActionRow.displayName = 'ActionRow'
