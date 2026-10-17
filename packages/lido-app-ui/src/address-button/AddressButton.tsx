import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import { Address } from '../address'
import styles from './AddressButton.module.css'

export type AddressButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  address: string
  symbols?: number
}

/** Pill button showing an identicon and the trimmed address. */
export const AddressButton = forwardRef<HTMLButtonElement, AddressButtonProps>(
  ({ address, symbols, className, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(styles.button, className)}
      {...rest}
    >
      <Address address={address} symbols={symbols} identicon={28} />
    </button>
  ),
)

AddressButton.displayName = 'AddressButton'
