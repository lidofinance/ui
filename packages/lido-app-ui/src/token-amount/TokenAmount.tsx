import type { ReactNode } from 'react'

import { TokenIcon, type TokenIconSymbol } from '../icons'
import cn from 'classnames'

import styles from './TokenAmount.module.css'

export type TokenAmountDataTestId = {
  root?: string
  icon?: string
  amount?: string
}

export type TokenAmountProps = {
  symbol: TokenIconSymbol
  amount: ReactNode
  className?: string
  dataTestId?: TokenAmountDataTestId
}

export const TokenAmount = ({
  symbol,
  amount,
  className,
  dataTestId,
}: TokenAmountProps) => (
  <span className={cn(styles.root, className)} data-testid={dataTestId?.root}>
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
