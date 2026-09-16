import type { HTMLAttributes, ReactNode } from 'react'

import { IconCheck, IconInfo, IconShield, IconWarning } from '../icons'
import cn from 'classnames'

import styles from './MessageBox.module.css'

export type MessageBoxVariant =
  | 'default'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'

const variantIcons = {
  default: IconInfo,
  info: IconShield,
  warning: IconWarning,
  error: IconWarning,
  success: IconCheck,
}

export type MessageBoxProps = HTMLAttributes<HTMLDivElement> & {
  variant?: MessageBoxVariant
  icon?: boolean
  headline?: ReactNode
}

export const MessageBox = ({
  variant = 'default',
  icon = true,
  headline,
  className,
  children,
  ...rest
}: MessageBoxProps) => {
  const Icon = variantIcons[variant]

  return (
    <div className={cn(styles.box, styles[variant], className)} {...rest}>
      {icon ? (
        <span className={styles.icon} aria-hidden='true'>
          <Icon />
        </span>
      ) : null}
      <div className={styles.text}>
        {headline != null ? (
          <div className={styles.headline}>{headline}</div>
        ) : null}
        <div className={styles.description}>{children}</div>
      </div>
    </div>
  )
}
