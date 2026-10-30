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

export type MessageBoxDataTestId = {
  root?: string
  icon?: string
  headline?: string
  description?: string
}

export type MessageBoxProps = HTMLAttributes<HTMLDivElement> & {
  /** `default` neutral, `info` blue, `warning` orange, `error` red, `success` green. */
  variant?: MessageBoxVariant
  /** Toggles the leading glyph, which is picked from the variant. */
  icon?: boolean
  headline?: ReactNode
  dataTestId?: MessageBoxDataTestId
}

/** Inline note in a form or card, e.g. to explain a delay, a fee or a risk. */
export const MessageBox = ({
  variant = 'default',
  icon = true,
  headline,
  className,
  children,
  dataTestId,
  ...rest
}: MessageBoxProps) => {
  const Icon = variantIcons[variant]

  return (
    <div
      className={cn(styles.box, styles[variant], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {icon ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          <Icon />
        </span>
      ) : null}
      <div className={styles.text}>
        {headline != null ? (
          <div className={styles.headline} data-testid={dataTestId?.headline}>
            {headline}
          </div>
        ) : null}
        <div
          className={styles.description}
          data-testid={dataTestId?.description}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
