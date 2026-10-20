import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { CounterSlot } from '../counter/CounterSlot'
import { IconLoaderCircle } from '../icons'
import styles from './IconButton.module.css'

export type IconButtonVariant = 'outline' | 'ghost'

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
  /** Corner slot, aria-hidden: put the count into `aria-label`. */
  counter?: ReactNode
  dataTestId?: IconButtonDataTestId
}

export const IconButton = ({
  className,
  type = 'button',
  variant = 'outline',
  loading = false,
  disabled = false,
  icon,
  counter,
  dataTestId,
  ...rest
}: IconButtonProps) => (
  <button
    type={type}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    className={cn(
      styles.button,
      styles[variant],
      loading && styles.loading,
      className,
    )}
    data-testid={dataTestId?.root}
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
)
