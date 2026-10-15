import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Card.module.css'

export type CardDataTestId = {
  root?: string
}

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  dataTestId?: CardDataTestId
}

export const Card = ({
  className,
  children,
  dataTestId,
  ...rest
}: CardProps) => (
  <div
    className={cn(styles.card, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </div>
)
