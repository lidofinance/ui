import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { Address } from '../address'
import { Spinner } from '../spinner'
import surfaceStyles from '../utils/surface.module.css'
import styles from './AddressButton.module.css'

export type AddressButtonLabels = {
  /** Text shown while `loading`. */
  loading?: ReactNode
}

const DEFAULT_LABELS: Required<AddressButtonLabels> = { loading: 'Loading' }

export type AddressButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  address: string
  symbols?: number
  loading?: boolean
  /** Built-in texts, for i18n. */
  labels?: AddressButtonLabels
}

/** Pill button showing an identicon and the trimmed address. */
export const AddressButton = forwardRef<HTMLButtonElement, AddressButtonProps>(
  (
    {
      address,
      symbols,
      loading = false,
      labels,
      disabled = false,
      className,
      type = 'button',
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
        surfaceStyles.surface,
        styles.button,
        loading && !disabled && styles.loading,
        className,
      )}
      {...rest}
    >
      {loading ? (
        <>
          <span className={styles.slot} aria-hidden='true'>
            <Spinner size='sm' decorative />
          </span>
          {labels?.loading ?? DEFAULT_LABELS.loading}
        </>
      ) : (
        <Address address={address} symbols={symbols} identicon={28} />
      )}
    </button>
  ),
)

AddressButton.displayName = 'AddressButton'
