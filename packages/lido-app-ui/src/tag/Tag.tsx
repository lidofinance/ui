import {
  forwardRef,
  useId,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
} from 'react'

import cn from 'classnames'

import { IconCross } from '../icons'
import { ActionElement, type ActionElementProps } from '../utils'
import styles from './Tag.module.css'

export type TagVariant =
  | 'default'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'active'
  | 'action'

export type TagDataTestId = {
  root?: string
  icon?: string
  closeButton?: string
}

export type TagIconPosition = 'left' | 'right'

export type TagProps = Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> & {
  variant?: TagVariant
  /** Shows the variant-coloured active border. */
  active?: boolean
  icon?: ReactNode
  iconPosition?: TagIconPosition
  /** Renders a trailing close button when set. */
  onClose?: () => void
  /** Renders a link (`<a>` via LinkProvider) instead of a span. */
  href?: string
  /** Click handler; a span with it becomes a keyboard-operable `role="button"`, except with `onClose` where it stays passive. */
  onClick?: MouseEventHandler<HTMLElement>
  /** Disables the button or link form; on its own always renders a native disabled button, whatever `as` is. Ignored with `onClose`. */
  disabled?: boolean
  /** `button` renders a native `<button>` only together with `onClick`; the default `span` (`role="button"` with `onClick`) avoids nesting a button inside another button or link. `href` and `disabled` always render the native form. */
  as?: 'span' | 'button'
  dataTestId?: TagDataTestId
}

/** Compact pill for filters, labels and removable selections; text only by default, with room for a leading icon and a trailing close button. */
export const Tag = forwardRef<HTMLElement, TagProps>(
  (
    {
      variant = 'default',
      active = false,
      icon,
      iconPosition = 'left',
      onClose,
      href,
      onClick,
      disabled,
      as = 'span',
      className,
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const labelId = useId()
    const iconElement =
      icon != null ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          {icon}
        </span>
      ) : null

    const isAction =
      !onClose &&
      (href != null || disabled || (as === 'button' && onClick != null))
    const isSpanAction = !onClose && !isAction && onClick != null
    const classes = cn(
      styles.tag,
      styles[variant],
      (isAction || isSpanAction) && styles.interactive,
      active && styles.isActive,
      className,
    )

    const content = (
      <>
        {iconPosition === 'left' ? iconElement : null}
        {onClose ? <span id={labelId}>{children}</span> : children}
        {iconPosition === 'right' ? iconElement : null}
        {onClose ? (
          <button
            type='button'
            className={styles.closeButton}
            aria-label='Remove'
            aria-describedby={labelId}
            onClick={(event) => {
              event.stopPropagation()
              onClose()
            }}
            data-testid={dataTestId?.closeButton}
          >
            <IconCross aria-hidden='true' className={styles.crossIcon} />
          </button>
        ) : null}
      </>
    )

    if (isAction) {
      return (
        <ActionElement
          ref={ref as Ref<HTMLAnchorElement | HTMLButtonElement>}
          className={classes}
          data-testid={dataTestId?.root}
          {...({ href, onClick, disabled, ...rest } as ActionElementProps)}
        >
          {content}
        </ActionElement>
      )
    }

    if (isSpanAction) {
      const { onKeyDown, tabIndex = 0, ...spanRest } = rest
      return (
        <span
          ref={ref as Ref<HTMLSpanElement>}
          role='button'
          tabIndex={tabIndex}
          className={classes}
          data-testid={dataTestId?.root}
          onClick={onClick}
          onKeyDown={(event: KeyboardEvent<HTMLSpanElement>) => {
            onKeyDown?.(event)
            if (event.defaultPrevented || event.target !== event.currentTarget)
              return
            if (event.key !== 'Enter' && event.key !== ' ') return
            event.preventDefault()
            event.currentTarget.click()
          }}
          {...spanRest}
        >
          {content}
        </span>
      )
    }

    return (
      // removable tags keep a passive onClick; the close button is the control
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <span
        ref={ref as Ref<HTMLSpanElement>}
        className={classes}
        data-testid={dataTestId?.root}
        onClick={onClick}
        {...rest}
      >
        {content}
      </span>
    )
  },
)

Tag.displayName = 'Tag'
