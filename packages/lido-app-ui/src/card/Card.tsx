import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Card.module.css'

export type CardProps = HTMLAttributes<HTMLDivElement>

export const Card = ({ className, children, ...rest }: CardProps) => (
  <div className={cn(styles.card, className)} {...rest}>
    {children}
  </div>
)
