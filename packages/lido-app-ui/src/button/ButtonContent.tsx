import type { ReactNode } from 'react'

import { CounterLabel, CounterSlot } from '../counter/CounterSlot'
import { Spinner } from '../spinner'
import styles from './Button.module.css'
import type { ButtonOwnProps } from './types'

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
  </>
)
