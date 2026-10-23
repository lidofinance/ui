import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import { Address } from '../address'
import { IconLoaderCircle } from '../icons'
import surfaceStyles from '../utils/surface.module.css'
import styles from './AddressButton.module.css'

export type AddressButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  address: string
  symbols?: number
  loading?: boolean
}

/** Pill button showing an identicon and the trimmed address. */
export const AddressButton = forwardRef<HTMLButtonElement, AddressButtonProps>(
  (
    {
      address,
      symbols,
      loading = false,
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
            <IconLoaderCircle className={styles.spinner} />
          </span>
          Loading
        </>
      ) : (
        <Address address={address} symbols={symbols} identicon={28} />
      )}
    </button>
  ),
)

AddressButton.displayName = 'AddressButton'
