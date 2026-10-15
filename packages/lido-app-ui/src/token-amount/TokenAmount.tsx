import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { TokenIcon, type TokenIconSymbol } from '../icons'
import cn from 'classnames'

import styles from './TokenAmount.module.css'

export type TokenAmountDataTestId = {
  root?: string
  icon?: string
  amount?: string
}

export type TokenAmountProps = Omit<
  ComponentPropsWithoutRef<'span'>,
  'children'
> & {
  symbol: TokenIconSymbol
  amount: ReactNode
  dataTestId?: TokenAmountDataTestId
}

export const TokenAmount = ({
  symbol,
  amount,
  className,
  dataTestId,
  ...rest
}: TokenAmountProps) => (
  <span
    className={cn(styles.root, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <TokenIcon
      token={symbol}
      className={styles.icon}
      data-testid={dataTestId?.icon}
    />
    <span className={styles.amount} data-testid={dataTestId?.amount}>
      {amount}
    </span>
  </span>
)
