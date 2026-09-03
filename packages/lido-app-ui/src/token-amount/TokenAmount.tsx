import type { ReactNode } from 'react'

import { TokenIcon, type TokenIconSymbol } from '../icons'
import cn from 'classnames'

import styles from './TokenAmount.module.css'

export type TokenAmountProps = {
  symbol: TokenIconSymbol
  amount: ReactNode
  className?: string
}

export const TokenAmount = ({
  symbol,
  amount,
  className,
}: TokenAmountProps) => (
  <span className={cn(styles.root, className)}>
    <TokenIcon token={symbol} className={styles.icon} />
    <span className={styles.amount}>{amount}</span>
  </span>
)
