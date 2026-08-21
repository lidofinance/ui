import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { EnvBannerProps } from './types'

import styles from './EnvBanner.module.css'

const ENV_BANNER_DEFAULT_TEXT =
  'This is a TEST instance for integrations and testing'

const ENV_BANNER_DEFAULT_SHORT_TEXT = 'This is a TEST instance'

export const EnvBanner = forwardRef(
  (
    { children, shortText, className, dataTestId, ...rest }: EnvBannerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const isDefaultText = children === undefined
    const text = isDefaultText ? ENV_BANNER_DEFAULT_TEXT : children
    const short =
      shortText ?? (isDefaultText ? ENV_BANNER_DEFAULT_SHORT_TEXT : undefined)
    const hasShort = short !== undefined

    return (
      <div
        ref={ref}
        role='status'
        className={cn(styles.banner, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <span className={styles.label} data-testid={dataTestId?.label}>
          <span className={cn(hasShort && styles.textWithShort)}>{text}</span>
          {hasShort && <span className={styles.shortText}>{short}</span>}
        </span>
      </div>
    )
  },
)
EnvBanner.displayName = 'EnvBanner'
