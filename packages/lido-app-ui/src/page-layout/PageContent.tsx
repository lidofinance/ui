import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './PageContent.module.css'

export type PageContentVariant = 'default' | 'narrow'

export type PageContentProps = HTMLAttributes<HTMLDivElement> & {
  variant?: PageContentVariant
}

export const PageContent = ({
  variant = 'default',
  className,
  ...rest
}: PageContentProps) => (
  <div className={cn(styles.root, styles[variant], className)} {...rest} />
)
