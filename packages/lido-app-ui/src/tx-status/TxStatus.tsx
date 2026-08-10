import type { ReactNode } from 'react'

import { IconCheck, IconCross } from '../icons'
import { IconSpinner } from '../icons/IconSpinner'
import cn from 'classnames'

import styles from './TxStatus.module.css'

export type TxStatusVariant = 'loading' | 'success' | 'error'

export type TxStatusProps = {
  status: TxStatusVariant
  title: ReactNode
  amount?: ReactNode
  message?: ReactNode
  footer?: ReactNode
  className?: string
}

const graphicByStatus: Record<TxStatusVariant, ReactNode> = {
  loading: <IconSpinner className={styles.spinner} />,
  success: (
    <span className={cn(styles.circle, styles.circleSuccess)}>
      <IconCheck className={styles.circleIcon} />
    </span>
  ),
  error: (
    <span className={cn(styles.circle, styles.circleError)}>
      <IconCross className={styles.circleIcon} />
    </span>
  ),
}

export const TxStatus = ({
  status,
  title,
  amount,
  message,
  footer,
  className,
}: TxStatusProps) => (
  <div className={cn(styles.root, className)}>
    <div className={styles.statusBlock}>
      <div className={styles.graphicGroup}>
        <span className={styles.graphic}>{graphicByStatus[status]}</span>
        <div className={styles.textGroup}>
          <span className={styles.title}>{title}</span>
          {amount ? <div className={styles.amount}>{amount}</div> : null}
        </div>
      </div>
      {message ? <div className={styles.message}>{message}</div> : null}
    </div>
    {footer ? <div className={styles.footer}>{footer}</div> : null}
  </div>
)
