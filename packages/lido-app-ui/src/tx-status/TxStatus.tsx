import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import {
  IconCheck,
  IconCross,
  IconExclamation,
  IconLoaderCircle,
} from '../icons'
import cn from 'classnames'

import styles from './TxStatus.module.css'

export type TxStatusVariant = 'loading' | 'success' | 'error' | 'warning'

export type TxStatusDataTestId = {
  root?: string
  title?: string
  amount?: string
  message?: string
  footer?: string
}

export type TxStatusProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  status: TxStatusVariant
  title: ReactNode
  amount?: ReactNode
  message?: ReactNode
  footer?: ReactNode
  dataTestId?: TxStatusDataTestId
}

const graphicByStatus: Record<TxStatusVariant, ReactNode> = {
  loading: <IconLoaderCircle className={styles.spinner} />,
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
  warning: (
    <span className={cn(styles.circle, styles.circleWarning)}>
      <IconExclamation className={styles.circleIcon} />
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
  dataTestId,
  ...rest
}: TxStatusProps) => (
  <div
    className={cn(styles.root, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <div className={styles.graphicGroup}>
      <span className={styles.graphic}>{graphicByStatus[status]}</span>
      <div className={styles.textGroup}>
        <span className={styles.title} data-testid={dataTestId?.title}>
          {title}
        </span>
        {amount ? (
          <div className={styles.amount} data-testid={dataTestId?.amount}>
            {amount}
          </div>
        ) : null}
        {message ? (
          <div className={styles.message} data-testid={dataTestId?.message}>
            {message}
          </div>
        ) : null}
      </div>
    </div>
    {footer ? (
      <div className={styles.footer} data-testid={dataTestId?.footer}>
        {footer}
      </div>
    ) : null}
  </div>
)
