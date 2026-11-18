import { forwardRef } from 'react'

import cn from 'classnames'

import { ActionElement, joinAriaLabel } from '../utils'
// Before CounterSlot so Button.module.css is emitted before the counter's CSS
import styles from './Button.module.css'
import { CounterLabel, CounterSlot } from '../counter/CounterSlot'
import { Spinner } from '../spinner'
import type {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  ButtonDataTestId,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './types'

export type {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  ButtonDataTestId,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
}

/** Fully rounded call to action; `size` is big (52px) or small (36px), `loading` swaps the icon slot for a spinner and disables it. With `href` it renders a link that routes through `LinkProvider`. */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'big',
      fullWidth = false,
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      counter,
      counterLabel,
      dataTestId,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => (
    <ActionElement
      ref={ref}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        loading && !disabled && styles.loading,
        className,
      )}
      data-testid={dataTestId?.root}
      aria-label={joinAriaLabel(ariaLabel, counterLabel)}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <Spinner className={styles.spinner} decorative />
      ) : (
        iconLeft != null && (
          <span
            className={styles.icon}
            aria-hidden='true'
            data-testid={dataTestId?.iconLeft}
          >
            {iconLeft}
          </span>
        )
      )}
      <span className={styles.content} data-testid={dataTestId?.content}>
        {children}
      </span>
      {!loading && iconRight != null ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.iconRight}
        >
          {iconRight}
        </span>
      ) : null}
      <CounterSlot dataTestId={dataTestId?.counter}>{counter}</CounterSlot>
      <CounterLabel>{counterLabel}</CounterLabel>
    </ActionElement>
  ),
)

Button.displayName = 'Button'
