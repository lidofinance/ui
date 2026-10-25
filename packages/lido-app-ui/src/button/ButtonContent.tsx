import type { ReactNode } from 'react'

import { CounterLabel, CounterSlot } from '../counter/CounterSlot'
import { IconLoaderCircle } from '../icons'
import styles from './Button.module.css'
import type { ButtonOwnProps } from './types'

export const joinAriaLabel = (
  ariaLabel: string | undefined,
  counterLabel: string | undefined,
) => (ariaLabel && counterLabel ? `${ariaLabel}, ${counterLabel}` : ariaLabel)

type ButtonContentProps = Pick<
  ButtonOwnProps,
  'iconLeft' | 'iconRight' | 'counter' | 'counterLabel' | 'dataTestId'
> & {
  loading?: boolean
  children?: ReactNode
}

export const ButtonContent = ({
  loading = false,
  iconLeft,
  iconRight,
  counter,
  counterLabel,
  dataTestId,
  children,
}: ButtonContentProps) => (
  <>
    {loading ? (
      <IconLoaderCircle className={styles.spinner} aria-hidden='true' />
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
  </>
)
