import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { CounterSlot } from '../counter/CounterSlot'
import { IconLoaderCircle } from '../icons'
import surfaceStyles from '../utils/surface.module.css'
import styles from './IconButton.module.css'

export type IconButtonVariant = 'outline' | 'ghost' | 'surface'

export type IconButtonDataTestId = {
  root?: string
  icon?: string
  counter?: string
}

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label'
> & {
  'aria-label': string
  icon: ReactNode
  variant?: IconButtonVariant
  loading?: boolean
  /**
   * Corner slot, aria-hidden. A number or string renders a default `Counter`
   * (`0` shows a "0" pill; use `counter={count || null}` to hide it), or pass a
   * `<Counter variant=...>` element. Announce the count with `counterLabel`.
   */
  counter?: ReactNode
  /** Spoken with the name, e.g. "3 unread". */
  counterLabel?: string
  dataTestId?: IconButtonDataTestId
}

/** 36px fully rounded icon-only button; `loading` swaps the icon for a spinner and disables it. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      type = 'button',
      variant = 'outline',
      loading = false,
      disabled = false,
      icon,
      counter,
      counterLabel,
      'aria-label': ariaLabel,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        styles.button,
        styles[variant],
        variant === 'surface' && surfaceStyles.surface,
        loading && !disabled && styles.loading,
        className,
      )}
      data-testid={dataTestId?.root}
      aria-label={counterLabel ? `${ariaLabel}, ${counterLabel}` : ariaLabel}
      {...rest}
    >
      {loading ? (
        <IconLoaderCircle className={styles.spinner} aria-hidden='true' />
      ) : (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          {icon}
        </span>
      )}
      <CounterSlot dataTestId={dataTestId?.counter}>{counter}</CounterSlot>
    </button>
  ),
)

IconButton.displayName = 'IconButton'
